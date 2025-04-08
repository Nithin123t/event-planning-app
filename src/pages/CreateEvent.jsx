import React, { useState } from "react";
import { useEvent } from "../events/EventContext";
import { useAuth } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";

export default function CreateEvent() {
  const { addEvent } = useEvent();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    location: "",
    description: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullEvent = {
      ...formData,
      id: Date.now().toString(),
      createdBy: user.email
    };
    addEvent(fullEvent);
    alert("Event created successfully!");
    setFormData({ title: "", date: "", location: "", description: "" });
  };
  

  return (
    <div className="container">
      <h2>Create New Event</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Event Title"
          required
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        /><br />
        <input
          type="date"
          required
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        /><br />
        <input
          type="text"
          placeholder="Location"
          required
          value={formData.location}
          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
        /><br />
        <textarea
          placeholder="Description"
          required
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        /><br />
        <button className="btn" type="submit">Create Event</button>
      </form>
    </div>
  );
}
