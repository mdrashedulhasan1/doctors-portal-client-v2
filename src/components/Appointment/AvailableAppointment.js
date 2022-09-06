import { format } from 'date-fns';
import React from 'react';

const AvailableAppointment = ({date}) => {
    return (
        <div>
            <h2 className='text-3xl text-center text-primary'>Available Appointments on: {format(date, 'PP')}</h2>
        </div>
    );
};

export default AvailableAppointment;