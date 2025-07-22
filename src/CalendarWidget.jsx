import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calendar-style.css'

function CalendarWidget() {
    const [selectedDate, setSelectedDate] = useState(new Date());

    return(
        <div className='calendar-widget'>
            <Calendar
            onChange={setSelectedDate}
            value={selectedDate}
            />
            <p className='calendar-date'>
                Selected Date: {selectedDate.toLocaleDateString()}
            </p>
        </div>
    );
}

export default CalendarWidget;