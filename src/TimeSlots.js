// TimeSlots.js
import React from "react";

const TimeSlots = ({ bookings, onBookingClick, isBookingSubmitted }) => {
    return (
        <>
            {bookings && bookings.length !== 0 && (
                <h2 className="mb-4">Booking List</h2>
            )}

            {bookings.map((booking) => (
                <div key={booking.id} className="card mb-4 col-md-3">
                    <div className="card-body">
                        <p className="card-text">DateTime: {booking.dateTime}</p>
                    </div>
                    <div className="d-grid card-footer">
                        <button
                            type="button"
                            className={`btn btn-${booking.booked ? "danger" : "success"}`}
                            onClick={() => onBookingClick(booking)}
                            disabled={booking.booked || isBookingSubmitted}
                        >
                            {booking.booked ? "Booked" : "Available"}
                        </button>
                    </div>
                </div>
            ))}
        </>
    );
};

export default TimeSlots;
