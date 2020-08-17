import React, { Fragment, useState } from 'react'
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";

export default function DatePickerAndTime () {
    const [startDate, setStartDate] = useState(
        new Date()
      );
      console.log(startDate);
      return (
        <DatePicker
          selected={startDate}
          onChange={date => setStartDate(date)}
          showTimeInput
          timeInputLabel="Time:"
          dateFormat="MMMM d, yyyy h:mm aa"
        />
      );
}
