import React from 'react';
import TopHeader from './TopHeader';
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