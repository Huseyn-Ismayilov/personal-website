import React from 'react';
import { Outlet } from 'react-router-dom';
import TopHeader from './TopHeader/TopHeader';
import NavBar from './NavBar/NavBar';
import Footer from './Footer/Footer';
import Contact from "../components/Contact";
import { ModalProvider } from '../context/ModalContext';


const Layout = () => {
    return (
        <>
            <ModalProvider>
                <TopHeader />
                <main>
                    <Outlet />
                </main>
                <NavBar />
                <Contact />
                <Footer />
            </ModalProvider>
        </>
    );
};

export default Layout;