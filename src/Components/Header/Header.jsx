import React from 'react';
import logo from '../../assets/logo.png'
import { format } from "date-fns";


const Header = () => {
    return (
        <div>

            <div className='flex flex-col items-center justify-center gap-3'>
                <img className='w-87.5' src={logo} alt="" />
                <p>Journalism Without Fear or Favour</p>
                <p>{format(new Date(), "EEEE, LLLL dd, yyy") }</p>
            </div>
        </div>
    );
};

export default Header;