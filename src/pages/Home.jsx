import React from "react";
import { useEvent } from "../events/EventContext";
import "./Home.css";

export default function Home() {
  const { events } = useEvent();

  return (
    <div className="container">

      <h3>📅 Upcoming Events</h3>
      <div className="event-list">
        {events.length === 0 ? (
          <p>No upcoming events yet.</p>
        ) : (
          events.map((event, index) => (
            <div key={index} className="card">
              <h4>{event.title}</h4>
              <p><strong>Date:</strong> {event.date}</p>
              <p><strong>Location:</strong> {event.location}</p>
              <p><strong>Description:</strong> {event.description}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
