import React from 'react';
import quote from '../../assets/icons/quote.svg';
const Testimonials = () => {
    return (
        <div className='flex justify-between mt-24'>
            <div>
                <h3 className='text-2xl text-primary'>Testimonials</h3>
                <h2 className='text-4xl text-secondary'>What our patients says!</h2>
            </div>
            <div className='w-24 lg:w-36'>
                <img src={quote} alt="" />
            </div>
        </div>
    );
};

export default Testimonials;