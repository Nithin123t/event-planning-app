import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEvent } from "../events/EventContext";
import { useAuth } from "../auth/AuthContext";

export default function EditEvent() {
  const { id } = useParams();
  const { events, updateEvent } = useEvent();
  const { user } = useAuth();
  const navigate = useNavigate();

  const event = events.find((e) => e.id === parseInt(id));

  const [formData, setFormData] = useState({
    title: "",
    date: "",
    location: "",
    description: "",
  });

  useEffect(() => {
    if (event) {
      setFormData(event);
    }
  }, [event]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user || user.email !== event.createdBy) {
      alert("Unauthorized to edit this event.");
      return;
    }

    updateEvent(formData);
    alert("Event updated!");
    navigate("/events");
  };

  if (!event) return <p>Event not found.</p>;

  return (
    <div className="container">
      <h2>Edit Event</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={formData.title}
          required
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        /><br />
        <input
          type="date"
          value={formData.date}
          required
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        /><br />
        <input
          type="text"
          value={formData.location}
          required
          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
        /><br />
        <textarea
          value={formData.description}
          required
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        /><br />
        <button className="btn">Update Event</button>
      </form>
    </div>
  );
}
