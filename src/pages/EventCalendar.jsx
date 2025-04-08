import React, { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import "./EventCalendar.css";
import { useEvent } from "../events/EventContext";

// Static list of Indian national holidays for demonstration
const nationalHolidays = [
  // Public/National Holidays
  { title: "New Year's Day", date: "2025-01-01" },
  { title: "Republic Day", date: "2025-01-26" },
  { title: "Maha Shivratri", date: "2025-02-26" },
  { title: "Holi", date: "2025-03-14" },
  { title: "Good Friday", date: "2025-04-18" },
  { title: "Ram Navami", date: "2025-04-06" },
  { title: "Mahavir Jayanti", date: "2025-04-10" },
  { title: "Eid al-Fitr", date: "2025-03-31" },
  { title: "Buddha Purnima", date: "2025-05-12" },
  { title: "Independence Day", date: "2025-08-15" },
  { title: "Raksha Bandhan", date: "2025-08-09" },
  { title: "Janmashtami", date: "2025-08-16" },
  { title: "Ganesh Chaturthi", date: "2025-08-28" },
  { title: "Gandhi Jayanti", date: "2025-10-02" },
  { title: "Dussehra", date: "2025-10-02" },
  { title: "Karva Chauth", date: "2025-10-20" },
  { title: "Diwali", date: "2025-10-21" },
  { title: "Govardhan Puja", date: "2025-10-22" },
  { title: "Bhai Dooj", date: "2025-10-23" },
  { title: "Chhath Puja", date: "2025-10-29" },
  { title: "Eid al-Adha (Bakrid)", date: "2025-06-06" },
  { title: "Muharram", date: "2025-07-06" },
  { title: "Guru Nanak Jayanti", date: "2025-11-05" },
  { title: "Christmas", date: "2025-12-25" }
];


export default function EventCalendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { events } = useEvent();

  const formatDate = (date) => date.toISOString().split("T")[0];

  const tileContent = ({ date, view }) => {
    if (view === "month") {
      const dayEvents = events.filter(
        (event) => formatDate(new Date(event.date)) === formatDate(date)
      );

      const dayHolidays = nationalHolidays.filter(
        (holiday) => holiday.date === formatDate(date)
      );

      return (
        <div className="tile-events">
          {dayHolidays.map((holiday, index) => (
            <div key={`holiday-${index}`} className="event-holiday">
              🎉 {holiday.title}
            </div>
          ))}
          {dayEvents.map((event, index) => (
            <div key={`event-${index}`} className="event-dot">
              {event.title}
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="calendar-container">
      <Calendar
        onChange={setSelectedDate}
        value={selectedDate}
        tileContent={tileContent}
      />
    </div>
  );
}
