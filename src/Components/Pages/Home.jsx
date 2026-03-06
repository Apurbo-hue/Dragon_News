import React from 'react';
import CategoryNews from './CategoryNews';
import { Navigate } from 'react-router';

const Home = () => {
    return <Navigate to="/categories/0"></Navigate>;
};

export default Home;