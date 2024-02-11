import React from 'react';
import { Outlet } from 'react-router-dom';
// Layout
import TopHeader from './TopHeader/TopHeader';
import NavBar from './NavBar/NavBar';
import Footer from './Footer/Footer';
// Modal
import Contact from "../components/Contact";
// Context
import { ModalProvider } from '../context/ModalContext';
// import { motion } from 'framer-motion';


const Layout = () => {
    return (
        <>
            <ModalProvider>
                <TopHeader />
                <main>
                    <Outlet />
                </main>
                <NavBar />
                <Footer />
                <Contact />
            </ModalProvider>
        </>
    );
};

export default Layout;