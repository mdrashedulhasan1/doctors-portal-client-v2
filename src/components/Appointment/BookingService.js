import React from 'react';

const BookingService = ({service}) => {
    const {name, slots} = service;
    return (
        <div className='mt-12'>
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{slots.length>0? <span>{slots[0]}</span>:<span>Try another date</span>}</p>
                    <p>{slots.length} spaces available</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary">Booking Appointment</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingService;