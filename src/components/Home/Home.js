import React from 'react';
import { Footer } from 'react-day-picker';
import Banner from './Banner';
import Contact from './Contact';
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
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;