import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const SocialLinks = () => {
    return (

        <div>
            <div>
                <h1 className='font-bold'>Find Us On</h1>
            </div>
            <div>

                <div className="join join-vertical *:justify-start  w-full">
                    <button className="btn  join-item bg-base-100 w-full p-6 "><FaFacebook></FaFacebook>Facebook</button>
                    <button className="btn join-item bg-base-100 w-full p-6 "><FaXTwitter></FaXTwitter> Twitter</button>
                    <button className="btn join-item bg-base-100 w-full p-6 "><FaInstagram></FaInstagram> Instagram</button>
                </div>
            </div>
        </div>

    );
};

export default SocialLinks;