import {createBrowserRouter} from 'react-router-dom'
import Layout from "../pages/layout/Layout"
import About from '../pages/about/AboutContainer'
import NotFound from '../pages/NotFound'
// import Home from '../pages/home/Home'
import PortfolioContainer from '../pages/portfolio/PortfolioContainer';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <About />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/portfolio',
                element: <PortfolioContainer />
            },
        ]
    },
    {
        path: '*',
        element: <NotFound />
    }
])

export default router