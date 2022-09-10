import React, { useEffect, useState } from 'react';
import BookingService from './BookingService';

const BookingAppointment = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('./services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                services.map(service => <BookingService key={service._id} service={service}></BookingService>)
            }
        </div>
    );
};

export default BookingAppointment;