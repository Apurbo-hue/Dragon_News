import React, { useContext, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';

const Register = () => {
    const { createUser, setUser } = useContext(AuthContext)
    
    const [nameError,setNameError]=useState("")
    

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        if (name.length < 5) {
            setNameError("Name should be more than 5 characters");
            return;
        }
        else {
            setNameError("")
        }

        console.log(name, email, photo, password)


        createUser(email, password)
            .then((userCredential) =>{
                const user = userCredential.user;
                setUser(user)
                // console.log(user);
            })
            .catch((error) => {
                const errorMessage = error.messaage;
                alert(errorMessage)
        })
        
    }
    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h2 className='font-semibold text-2xl text-center pt-8 pb-2'>Register your account</h2>
                <form onSubmit={handleRegister} className="card-body">
                    <fieldset className="fieldset">
                        {/* Name */}
                        <label className="label">Name</label>
                        <input name='name' type="text" className="input" placeholder="Name" required />
                        {/* name error text */}
                        {nameError && <h1 className='text-red-500'>{nameError}</h1>}
                        
                        {/* Phote URL */}
                        <label className="label">Photo URL</label>
                        <input name='photo'  type="text" className="input" placeholder="Photo URL"  required/>

                        {/* email */}
                        <label className="label">Email</label>
                        <input name='email' type="email" className="input" placeholder="Email"  required/>

                        {/* password */}
                        <label className="label">Password</label>
                        <input name='password' type="password" className="input" placeholder="Password"  required/>

                        <button type='submit' className="btn btn-neutral mt-4">Register</button>
                        <p className='text-center pt-4'>Already have an account? <Link to="/auth/login" className='text-secondary'>Login</Link></p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Register;