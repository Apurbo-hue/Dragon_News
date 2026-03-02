import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex justify-center items-center gap-3 py-3 px-3 bg-base-200'>
            <p className='text-base-100 bg-secondary px-3 py-2'>Latest</p>

            <Marquee className='font-bold' pauseOnHover={true}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque ad eligendi, quis voluptatum neque ullam debitis accusantium quisquam libero optio. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet dolores magnam deleniti molestias fuga a odio itaque eaque provident quisquam.
            </Marquee>

        </div>
    );
};

export default LatestNews;