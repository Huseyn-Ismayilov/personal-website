import React from 'react';
import TopHeader from './TopHeader/TopHeader';
import NavBar from './NavBar/NavBar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <TopHeader />
            <main>
                <Outlet />
            </main>
            <NavBar />
        </>
    );
};

export default Layout;