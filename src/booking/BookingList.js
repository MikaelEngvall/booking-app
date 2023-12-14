import React, { useEffect, useState } from "react";
import TimeSlot from "./TimeSlot";
import { baseURL } from "../util/constants";
import axios from "axios";

const BookingList = () => {
  const [bookings, setBookings] = useState([]);

  const formatDate = (date) => {
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    day = day < 10 ? "0" + day : day;
    month = day < 10 ? "0" + month : month;

    return `${year}-${month}-${day}`;
  };

  const today = new Date();
  const startDate = formatDate(today);
  const endDate = formatDate(today);

  console.log(startDate);
  console.log(endDate);

  const getBookings = async () => {
    try {
      const response = await axios.get(
        `${baseURL}/api/v1/booking/from/${startDate}/to/${endDate}`
      );
      if (response.status === 200) {
        setBookings(response.data);
      }
    } catch (error) {
      console.error("Error fetching booking list:", error);
    }
  };

  useEffect(() => {
    getBookings();
  }, [bookings]);


  return (
    <div>
      {bookings && bookings.length !== 0 && (
        <h2 className="mb-4">Booking List</h2>
      )}
      <div className="row">
        {bookings.map((booking) => (
          <TimeSlot key={booking.id} booking={booking} />
        ))}
      </div>
    </div>
  );
};

export default BookingList;
