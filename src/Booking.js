import React, { useEffect, useState } from "react";
import axios from "axios";
import TimeSlots from "./TimeSlots";
import BookingForm from "./BookingForm";
import Receipt from "./Receipt";

const Booking = () => {
  const baseURL = "http://localhost:8080";
  const startDate = "2023-12-12";
  const endDate = "2023-12-12";

  const [bookings, setBookings] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isBookingSubmitted, setIsBookingSubmitted] = useState(false);
  const [showReceipt, setShowReceipt] = useState(false);

  const getBookings = async () => {
    try {
      const response = await axios.get(
        `${baseURL}/api/v1/booking/from/${startDate}/to/${endDate}`
      );
      if (response.status === 200) {
        setBookings(response.data);
      }
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  };

  const bookingClickHandler = (booking) => {
    setSelectedBooking(booking);
    setIsBookingSubmitted(false); // Reset the booking submission status
    setShowReceipt(false); // Hide receipt after selecting a new time slot
  };

  const submitHandler = () => {
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);

    if (
      isValid &&
      selectedBooking &&
      !selectedBooking.booked &&
      !isBookingSubmitted
    ) {
      // Update the booking status to "Booked" for the selected time slot
      const updatedBookings = bookings.map((booking) =>
        booking.id === selectedBooking.id
          ? { ...booking, booked: true }
          : booking
      );
      setBookings(updatedBookings);

      setIsEmailValid(true);
      setIsBookingSubmitted(true);
      setShowReceipt(true); // Show receipt after successful booking
    } else {
      setIsEmailValid(false);
      setShowReceipt(false); // Hide receipt if the submission fails
    }
  };

  const resetBooking = () => {
    setShowReceipt(false);
    setIsBookingSubmitted(false);
    setEmail("");
    setSelectedBooking(null);
  };

  useEffect(() => {
    getBookings();
  }, []);

  return (
    <div>
      <div className="row">
        <TimeSlots
          bookings={bookings}
          onBookingClick={bookingClickHandler}
          isBookingSubmitted={isBookingSubmitted}
        />

        <div className="col-md-6">
          {selectedBooking && !selectedBooking.booked && (
            <BookingForm
              onSubmit={submitHandler}
              isEmailValid={isEmailValid}
              onEmailChange={(value) => setEmail(value)}
            />
          )}
        </div>

        {showReceipt && selectedBooking && (
          <div className="col-md-6">
            <Receipt
              booking={selectedBooking}
              email={email}
              onReset={resetBooking}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Booking;
