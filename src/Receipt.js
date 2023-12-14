// Receipt.js
import React from "react";

const Receipt = ({ booking, email, onReset }) => {
    return (
        <div className="card mb-4 col-md-9">
            <div className="card-header">
                <h3 className="card-title">Booking Successful!</h3>
            </div>
            <div className="card-body">
                <p className="card-text">Booking ID: {booking.id}</p>
                <p className="card-text">Email: {email}</p>
                <p className="card-text">Date: {new Date(booking.dateTime).toLocaleDateString()}</p>
                <p className="card-text">Time: {new Date(booking.dateTime).toLocaleTimeString()}</p>
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={onReset}
                >
                    Book Another Time
                </button>
            </div>
        </div>
    );
};

export default Receipt;
