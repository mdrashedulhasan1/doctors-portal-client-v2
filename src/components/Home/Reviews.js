import React from 'react';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import Review from './Review';
const Reviews = () => {
    const reviews = [
        {
            _id:1,
            img:people1,
            name:'Winson Herry',
            location:'california',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ea nihil deleniti.',
        },
        {
            _id:2,
            img:people2,
            name:'Winson Herry',
            location:'california',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ea nihil deleniti.',
        },
        {
            _id:3,
            img:people3,
            name:'Winson Herry',
            location:'california',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ea nihil deleniti.',
        },
    ]
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                reviews.map(review => <Review key={review._id} review={review}></Review>)
            }
        </div>
    );
};

export default Reviews;