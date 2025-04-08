import React, { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "../auth/AuthContext";

const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const { user } = useAuth();
  const [events, setEvents] = useState([]);

  // Load events for logged-in user from localStorage
  useEffect(() => {
    if (user) {
      const stored = localStorage.getItem(`events_${user.email}`);
      setEvents(stored ? JSON.parse(stored) : []);
    } else {
      setEvents([]); // clear when logged out
    }
  }, [user]);

  // Save to localStorage on every change
  useEffect(() => {
    if (user) {
      localStorage.setItem(`events_${user.email}`, JSON.stringify(events));
    }
  }, [events, user]);

  const addEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  const deleteEvent = (id) => {
    setEvents(events.filter((event) => event.id !== id));
  };

  const updateEvent = (updatedEvent) => {
    setEvents(events.map((event) => (event.id === updatedEvent.id ? updatedEvent : event)));
  };

  return (
    <EventContext.Provider value={{ events, addEvent, deleteEvent, updateEvent }}>
      {children}
    </EventContext.Provider>
  );
};

export const useEvent = () => useContext(EventContext);
