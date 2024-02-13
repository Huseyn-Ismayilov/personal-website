import React from 'react';
import {
    Routes,
    Route,
} from "react-router-dom";

// Pages
import Home from '../pages/Home';
import About from '../pages/About';
import Portfolio from '../pages/Porfolio'
import ScrollToTop from '../utils/ScrollToTop'

// RootLayout
import Root from '../layout/Layout';

export default function App() {
    return (
        <>
            <ScrollToTop />
            <Routes>
                <Route
                    path="/"
                    element={<Root />}
                >
                    <Route index element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                </Route>
            </Routes>
        </>

    )
}
