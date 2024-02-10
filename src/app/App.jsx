import {
    createBrowserRouter,
    RouterProvider,
    useLocation,
} from "react-router-dom";

// Layout
import Root from '../layout/Layout.jsx'

// Pages
import Home from '../pages/Home'
import About from '../pages/About'
import Blogs from '../pages/Blogs'
import Portfolio from '../pages/Porfolio'


const router = createBrowserRouter([
    
    {
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/About',
                element: <About />
            },
            {
                path: '/portfolio',
                element: <Portfolio />
            },
            {
                path: '/blogs',
                element: <Blogs />
            },
        ]
    } 
]);


export default function App() {
    return (
        <RouterProvider router={router}></RouterProvider>
    )
}

