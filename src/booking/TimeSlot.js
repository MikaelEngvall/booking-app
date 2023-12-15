import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TimeSlot = ({ onBookingSubmit, booking }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/bookingform/" + booking.id);
    // booking.dateTime;
  };

  return (
    <>
      <div className="card mb-4 col-md-3">
        <div className="card-body">
          <p className="card-text">DateTime: {booking.dateTime}</p>
        </div>
        <div className="d-grid card-footer">
          <button
            type="button"
            className={`btn btn-${booking.booked ? "danger" : "success"}`}
            onClick={handleClick}
            disabled={booking.booked}
          >
            {booking.booked ? "Booked" : "Available"}
          </button>
        </div>
      </div>
    </>
  );
};

export default TimeSlot;