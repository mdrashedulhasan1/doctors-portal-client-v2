import React from 'react';
import appointment from '../../assets/images/appointment.png'
const Contact = () => {
    return (
        <div style={{background: `url(${appointment})`, backgroundSize:'cover'}} className='p-12 mt-5'>
            <div>
                <h3 className='text-2xl text-center text-purple-400'>Contact Us</h3>
                <h2 className='text-4xl text-center text-secondary'>Stay Connected With Us</h2>
            </div>
            <div className='text-center mt-5'>
                <div><input type="email" placeholder="email address" className="w-1/2 input input-bordered" /></div>
                <div><input type="text" placeholder="subject" className="my-2 w-1/2 input input-bordered" /></div>
                <div><textarea className="textarea textarea-bordered w-1/2" placeholder="your massage"></textarea></div>
                <button className="btn btn-primary">Get Started</button>
            </div>
        </div>
    );
};

export default Contact;