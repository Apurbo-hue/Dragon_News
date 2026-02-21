import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header/Header';

const HomeLayouts = () => {
    return (
        <div>
            <Header></Header>
            <main>
                <section className="left_nav"></section>
                <section className="main">
                    <Outlet></Outlet>
                </section>
                <section className="right_nav"></section>
            </main>
        </div>
    );
};

export default HomeLayouts;