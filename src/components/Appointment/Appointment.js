import React, { useState } from 'react';
import Footer from '../Shared/Footer';
import AppointmentBanner from './AppointmentBanner';
import AvailableAppointment from './AvailableAppointment';
import BookingAppointment from './BookingAppointment';

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div className='px-12'>
            <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
            <AvailableAppointment date={date} setDate={setDate}></AvailableAppointment>
            <BookingAppointment></BookingAppointment>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;