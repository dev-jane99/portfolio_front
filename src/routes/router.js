import {createBrowserRouter} from 'react-router-dom'
import Layout from "../pages/layout/Layout"
import About from '../pages/about/About'
import NotFound from '../pages/NotFound'
import Home from '../pages/home/Home'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
        ]
    },
    {
        path: '*',
        element: <NotFound />
    }
])

export default router