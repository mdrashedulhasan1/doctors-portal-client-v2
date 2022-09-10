import { format } from 'date-fns';
import React from 'react';

const AvailableAppointment = ({date}) => {
    return (
        <div>
           <h1 className='text-center text-4xl text-cyan-500'>Available Appointments on: {format(date, 'PP')}</h1> 
        </div>
    );
};

export default AvailableAppointment;