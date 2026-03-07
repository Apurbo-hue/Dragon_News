import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import userIcon from '../../src/assets/user.png'
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut().then(() => {
                    console.log("sign out successfully");
                }).catch((error) => {
                    console.log("somethingg wrong",error)
                })
    }
    
    // const { name, email } = user;
    return (
        <div className='grid grid-cols-1  sm:grid-cols-3 max-sm:gap-5 justify-between items-center w-11/12 mx-auto'>
            <div className='max-sm:hidden'>
                <h2>{user&&user.email}</h2>
            </div>
            <div className='nav flex justify-center gap-3 text-accent'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </div>
            <div className='login-btn flex justify-center sm:justify-end gap-2'>
                <img className='w-12 rounded-full' src={user?user.photoURL: userIcon} alt="" />
               
                {user?<button onClick={handleLogOut} className='btn btn-primary px-10 py-2'>Logout</button>: <Link to="/auth/login" className='btn btn-primary px-10 py-2'>Login</Link>}
               
            </div>
        </div>
    );
};

export default Navbar;