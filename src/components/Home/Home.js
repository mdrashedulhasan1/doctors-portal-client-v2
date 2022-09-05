import React from 'react';
import Banner from './Banner';
import ExceptionalDental from './ExceptionalDental';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Reviews from './Reviews';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <ExceptionalDental></ExceptionalDental>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;