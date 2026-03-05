import React from 'react';
import SocailLogin from '../SocailLogin';
import SocialLinks from '../Pages/SocialLinks';
import QZone from '../Pages/QZone';

const RightAside = () => {
    return (
        <div className='grid grid-1 space-y-5'>
            <SocailLogin></SocailLogin>
            <SocialLinks></SocialLinks>
            <QZone></QZone>
        </div>
    );
};

export default RightAside;