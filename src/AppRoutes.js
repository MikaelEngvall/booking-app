import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import BookingList from "./booking/BookingList";
import CancelBooking from "./CancelBooking";
import About from "./About";
import BookingForm from "./booking/BookingForm";

const AppRoutes = () => {
  const [bookingUpdateTrigger, setBookingUpdateTrigger] = useState(0);

  const handleBookingSubmit = () => {
    // Update the trigger to re-fetch bookings in BookingList component
    setBookingUpdateTrigger((prev) => prev + 1);
  };
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/booking-list" element={<BookingList updateTrigger={bookingUpdateTrigger} />} />
          <Route path="/bookingform/:id" element={<BookingForm onBookingSubmit={handleBookingSubmit} />} />
          <Route path="/booking-cancel" element={<CancelBooking />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
};

export default AppRoutes;
