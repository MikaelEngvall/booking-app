import React, { useState } from "react";
import { baseURL } from "./util/constants";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CancelBooking = () => {
    const [id, setId] = useState("");
    const [email, setEmail] = useState("");

    const navigate = useNavigate();

    const mergeBooking = async () => {
        console.log("mergeBooking started")
        try {
            const response = await axios.put(`${baseURL}/api/v1/booking/cancel`, {
                id: id,
                email: email
            });
            console.log("id:", id);
            console.log("email:", email);
            if (response.status === 204) {
                console.log("Booking cancelled");
                navigate("/booking-list");
            }
        } catch (error) {
            console.error("Error updating time slot:", error);
        }
    };

    const cancelBooking = async (event) => {
        event.preventDefault();
        mergeBooking();
    };

    return (
        <div>
            <div className="card container my-2 bg-light" style={{ width: "500px" }}>
                <div className="container mx-2">
                    <h4 className="pt-4">Cancel Booking</h4>
                    <label htmlFor="id" className="form-label">
                        Booking ID:
                    </label>
                    <form onSubmit={cancelBooking}>
                        <input
                            type="text"
                            className="form-control"
                            id="id"
                            placeholder="Booking ID"
                            name="id"
                            value={id}
                            onChange={(event) => setId(event.target.value)}
                        />
                    </form>
                    <label htmlFor="email" className="form-label">
                        Email:
                    </label>
                    <form onSubmit={cancelBooking}>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Enter email"
                            name="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                        <button type="submit" className="btn btn-danger my-3">
                            Cancel Book
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CancelBooking;