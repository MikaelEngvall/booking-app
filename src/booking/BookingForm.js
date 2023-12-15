import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseURL } from "../util/constants";
import { useNavigate, useParams } from "react-router-dom";


const BookingForm = ({ onBookingSubmit }) => {  // Added the call back prop to update the timeslot once booked successfully
  const [email, setEmail] = useState("");
  const [reciept, setReciept] = useState([]);

  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
  }, []);

  const saveBooking = async () => {
    console.log(params.id);
    console.log("This is the email:", email);
    try {
      const response = await axios.post(`${baseURL}/api/v1/booking/book`, {
        id: params.id,
        email: email
      });
      if (response.status === 201) {
        setReciept(response.data);
        console.log(reciept.data);
        onBookingSubmit(); // Invoke the callback on successful booking
      }
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("emailValidation");
    if (emailValidation) {
      saveBooking();
      console.log("saved booking")
      navigate('/booking-list');
    } else {
      console.log('invalid email')
    }
  };

  const emailValidation = () => {
    console.log('Lets validate!')
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div>
      <div className="card">
        <h3>Booking</h3>
        <div className="mb-3 mt-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <form onSubmit={submitHandler}>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        <div className="card mx-5 my-3">Booking Details</div>
        <div>ID: {params.id}</div>
      </div>
    </div>
  );
};

export default BookingForm;
