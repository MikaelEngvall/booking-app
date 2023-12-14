import React from "react";
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
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/booking-list" element={<BookingList />} />
          <Route path='/bookingform/:id' element={<BookingForm />} />  
          <Route path="/booking-cancel" element={<CancelBooking />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
};

export default AppRoutes;
