import React, { useEffect, useState } from 'react';
import AppointmentTest from './AppointmentTest';
import BookingService from './BookingService';

const BookingAppointment = ({date}) => {
    const [services, setServices] = useState([]);
    const [test, setTest] = useState(null);
    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <section>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <BookingService key={service._id} setTest={setTest} service={service}></BookingService>)
                }
            </div>
            <div>
                {
                    test && <AppointmentTest key={test._id} date={date} test={test} setTest={setTest}></AppointmentTest>
                }
            </div>
        </section>
    );
};

export default BookingAppointment;