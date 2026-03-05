import React from 'react';
import swimmingImg from './../../assets/swimming.png'
import playGroundImg from './../../assets/playground.png'
import classImg from './../../assets/class.png'
import bgImg from './../../assets/bg.png'

const QZone = () => {
    return (

        <div>
            <div className='bg-base-200 my-4 p-4'>
                <h2 className='text-start font-bold'>Q-Zone</h2>
                <img className='mx-auto' src={swimmingImg} alt="" />
                <img className='mx-auto' src={playGroundImg} alt="" />
                <img className='mx-auto' src={classImg} alt="" />
            </div>
            <img className='mx-auto' src={bgImg} alt="" />
        </div>



    );
};

export default QZone;