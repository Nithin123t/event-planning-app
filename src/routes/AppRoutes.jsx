import {Routes, Route} from 'react-router-dom';
import Home from "../pages/Home";
import CreateEvent from "../pages/CreateEvent";
import CalendarPage from "../pages/EventCalendar";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProtectedRoute from "../components/ProtectedRoute";
import EventList from "../pages/EventList";
import EditEvent from "../pages/EditEvent";
import EventCalendar from '../pages/EventCalendar';

export default function AppRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/create" element={<CreateEvent/>}/>
            <Route path="/calendar" element={<EventCalendar/>}/>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/events" element={<EventList />} />
            <Route path="/edit/:id" element={<EditEvent />} />


            <Route
        path="/create"
        element={
          <ProtectedRoute allowedRoles={["owner"]}>
            <CreateEvent />
          </ProtectedRoute>
        }
      />

        </Routes>
    )
}