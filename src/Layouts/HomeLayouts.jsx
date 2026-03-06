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
            <header className='my-8'>
                <Header></Header>
                <section className='w-11/12 mx-auto py-3'>
                    <LatestNews></LatestNews>
                </section>
                <nav>
                    <Navbar></Navbar>
                </nav>
            </header>

            <main className='my-12 w-11/12 mx-auto text-center grid grid-cols-12 gap-10'>
                <aside className="left_nav col-span-3 sticky top-0 h-fit">
                    <LeftAside></LeftAside>
                </aside>

                <aside className="main col-span-6">
                    <Outlet></Outlet>
                </aside>

                <aside className="right_nav col-span-3 sticky top-0 h-fit ">
                    <RightAside></RightAside>
                </aside>
            </main>

        </div>
    );
};

export default HomeLayouts;