import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';
import Navbar from '../Components/Navbar';
import LeftAside from '../Components/homeLayout/LeftAside';
import RightAside from '../Components/homeLayout/RightAside';

const HomeLayouts = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section className='w-11/12 mx-auto py-3'>
                    <LatestNews></LatestNews>
                </section>
                <nav>
                    <Navbar></Navbar>
                </nav>
            </header>

            <main className='w-11/12 mx-auto text-center grid grid-cols-12'>
                <aside className="left_nav col-span-3">
                    <LeftAside></LeftAside>
                </aside>

                <aside className="main col-span-6">
                    <Outlet></Outlet>
                </aside>

                <aside className="right_nav col-span-3">
                    <RightAside></RightAside>
                </aside>
            </main>

        </div>
    );
};

export default HomeLayouts;