// BookingForm.js
import React from "react";

const BookingForm = ({ onSubmit, isEmailValid, onEmailChange }) => {
    return (
        <div className="d-flex justify-content-center">
            <div className="card" style={{ maxWidth: "400px" }}>
                <h3 className="card-header">Booking</h3>
                <div className="card-body">
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Email:
                        </label>
                        <input
                            type="email"
                            className={`form-control ${isEmailValid ? "" : "is-invalid"}`}
                            id="email"
                            placeholder="Enter email"
                            name="email"
                            onChange={(e) => onEmailChange(e.target.value)}
                        />
                        {!isEmailValid && (
                            <div className="invalid-feedback">Invalid email format</div>
                        )}
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={onSubmit}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookingForm;
