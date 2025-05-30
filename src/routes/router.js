import {createBrowserRouter} from 'react-router-dom'
import Layout from "../pages/layout/Layout"
import About from '../pages/about/About'
import NotFound from '../pages/NotFound'
import PortfolioContainer from '../pages/project/PortfolioContainer';
import StudyContainer from '../pages/study/StudyContainer';
import Projects from '../pages/project/Projects';
import Powpow from '../pages/project/Powpow';
import Cooing from '../pages/project/Cooing';
import Portfolio2025 from '../pages/project/Portfolio2025';
import NewPost from '../pages/study/NewPost';
import StudyListPage from '../pages/study/StudyListPage';
import StudyDetail from '../pages/study/StudyDetail';
import UpdatePost from '../pages/study/UpdatePost';

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
                path: '/project',
                element: <PortfolioContainer />,
                children: [
                    { 
                        index: true, 
                        element: <Projects /> 
                    }, 
                    { 
                        path: "powpow", 
                        element: <Powpow /> 
                    }, 
                    { 
                        path: "cooing", 
                        element: <Cooing /> 
                    }, 
                    { 
                        path: "portfolio2025", 
                        element: <Portfolio2025 /> 
                    }, 
                ]
            },
            {
                path: '/study',
                element: <StudyContainer />,
                children: [
                    {
                        index: true,
                        element: <StudyListPage />
                    },
                    {
                        path: "upload",
                        element: <NewPost />
                    },
                    {
                        path: ':id',
                        element: <StudyDetail />
                    },
                    {
                        path: "edit/:id",
                        element: <UpdatePost />
                    }
                ]
            },
        ]
    },
    {
        path: '*',
        element: <NotFound />
    }
])

export default router