export default function EventCard({ event }) {
    return (
      <div className="bg-white shadow-md p-4 rounded-lg">
        <img src={event.image} alt={event.title} className="h-40 w-full object-cover rounded" />
        <h3 className="text-xl font-semibold mt-2">{event.title}</h3>
        <p className="text-gray-600">{event.date} | {event.time}</p>
        <p className="text-gray-700">{event.location}</p>
        <div className="mt-2 flex gap-2">
          <button className="bg-green-500 text-white px-2 py-1 rounded">Going</button>
          <button className="bg-yellow-500 text-white px-2 py-1 rounded">Maybe</button>
          <button className="bg-red-500 text-white px-2 py-1 rounded">Not Going</button>
        </div>
      </div>
    );
  }
  