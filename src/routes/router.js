import {createBrowserRouter} from 'react-router-dom'
import Layout from "../pages/layout/Layout"
import About from '../pages/about/About'
import NotFound from '../pages/NotFound'
import PortfolioContainer from '../pages/portfolio/PortfolioContainer';
import StudyContainer from '../pages/study/StudyContainer';
import Projects from '../pages/portfolio/Projects';
import Powpow from '../pages/portfolio/Powpow';

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
                element: <PortfolioContainer />,
                children: [
                    { 
                        index: true, 
                        element: <Projects /> 
                    }, 
                    { 
                        path: "/powpow", 
                        element: <Powpow /> 
                    }, 
                ]
            },
            {
                path: '/study',
                element: <StudyContainer />
            },
        ]
    },
    {
        path: '*',
        element: <NotFound />
    }
])

export default router