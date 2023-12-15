import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseURL } from "../util/constants";
import { useNavigate, useParams } from "react-router-dom";
import regex from "../util/regex";

const BookingForm = ({ onBookingSubmit }) => {

  const { emailValidation } = regex();

  const [email, setEmail] = useState("");
  const [reciept, setReciept] = useState([]);
  const [booking, setBooking] = useState();
  const [done, setDone] = useState(false);

  const navigate = useNavigate();
  const params = useParams();

  const saveBooking = async () => {
    console.log(params.id);
    console.log("This is the email:", email);
    try {
      const response = await axios.post(`${baseURL}/api/v1/booking/book`, {
        id: params.id,
        email: email,
      });
      if (response.status === 201) {
        setReciept(response.data);
        console.log(reciept.data);
        onBookingSubmit();
      }
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("emailValidation");
    if (emailValidation(email)) {
      saveBooking();
      console.log("saved booking");
      navigate("/booking-list");
    } else {
      console.log("invalid email");
    }
  };

  // const emailValidation = () => {
  //   console.log("Lets validate!");
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   return emailRegex.test(email);
  // };

  const getBooking = async () => {
    try {
      const response = await axios.get(
        `${baseURL}/api/v1/booking/details/${params.id}`
      );
      if (response.status === 200) {
        setBooking(response.data);
        console.log(booking);
        setDone(!done);
      }
    } catch (error) {
      console.error("Error fetching time slot:", error);
    }
  };

  const detailsHandler = () => {
    getBooking();
  };

  useEffect(() => {
  }, []);

  return (
    <div>
      <button className="btn btn-info" onClick={detailsHandler}>
        Details
      </button>
      <div className="card container my-2 bg-light" style={{ width: "500px" }}>
        <div className="container mx-2">
          <h4 className="pt-4">Booking</h4>
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
            <button type="submit" className="btn btn-success my-3">
              Book
            </button>
          </form>
          <div className="container card my-3 pt-2">
            <h5>Booking Details</h5>
            ID: {params.id}
            <p></p>
            <div>
              Date:{" "}
              <strong>{done ? booking.date : "Click Details to see"}</strong>
            </div>
            <p></p>
            <div>
              Time:{" "}
              <strong>{done ? booking.time : "Click Details to see"}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;