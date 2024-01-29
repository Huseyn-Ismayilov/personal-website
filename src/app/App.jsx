import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

// Layout
import Root from '../layout/Layout.jsx'

// Pages
import Home from '../pages/Home'
import About from '../pages/About.jsx'


const router = createBrowserRouter([
    {
        element: <Root />,
        // errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/About',
                element: <About />
            }
        ]
    }
]);


export default function App() {
    return (
        <RouterProvider router={router} ></RouterProvider>
    )
}

