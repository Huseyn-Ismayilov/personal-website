import React from 'react';
import TopHeader from './TopHeader/TopHeader';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <TopHeader />
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default Layout;