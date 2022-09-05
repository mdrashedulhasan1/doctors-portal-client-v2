import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';
const Info = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            <InfoCard img={clock} cardTitle="Opening Hours" bgClass="bg-red-500"></InfoCard>
            <InfoCard img={marker} cardTitle="Our Location" bgClass="bg-amber-400"></InfoCard>
            <InfoCard img={phone} cardTitle="Contact Us" bgClass="bg-emerald-500"></InfoCard>
        </div>
    );
};

export default Info;