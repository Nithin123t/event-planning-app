import { Link } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav>
      <Link to="/" className="logo">EventMate</Link>

      <div className="navbar-user">
        <Link to="/">Home</Link>
        <Link to="/calendar">Calendar</Link>
        <Link to="/create" className="btn">+ Create</Link>
        <Link to="/events">Events</Link>


        {user ? (
          <>
            <span>{user.email} ({user.role})</span>
            <button onClick={logout} className="btn">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}
