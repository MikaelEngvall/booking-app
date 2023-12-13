import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Booking from "./Booking";
import CancelBooking from "./CancelBooking";
import About from "./About";

const AppRoutes = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/booking-list" element={<Booking />} />
          <Route path="/cancel-booking" element={<CancelBooking />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
};

export default AppRoutes;
