import React from 'react';

const Review = ({ review }) => {
    return (
        <div>
            <div><p>{review.description}</p></div>
            <div className='flex items-center mt-3'>
                <div className="avatar">
                    <div className="rounded-full ring ring-primary ring-offset-base-100 mr-3">
                        <img src={review.img} alt='' />
                    </div>
                </div>
                <div>
                    <h3>Winson Herry</h3>
                    <p>california</p>
                </div>
            </div>
        </div>
    );
};

export default Review;