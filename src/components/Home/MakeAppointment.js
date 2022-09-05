import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png'
const MakeAppointment = () => {
    return (
        <div style={{background: `url(${appointment})`}} className='flex px-12'>
            <div className='flex-1 hidden lg:block'> 
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h3 className='mt-5 text-xl text-primary'>Appointment</h3>
                <h2 className='my-2 text-2xl text-secondary'>Make an Appointment Today</h2>
                <p className='my-3 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, eos, quos omnis quidem laudantium numquam ad sit itaque corrupti iste voluptatum rem alias nostrum incidunt aliquid labore repellendus ea ipsam quaerat quas necessitatibus dignissimos ullam accusantium. Nulla nemo delectus voluptas!</p>
                <button className="btn btn-primary">Get Started</button>
            </div>
        </div>
    );
};

export default MakeAppointment;