import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import './index.css'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import AboutMe from './components/AboutMe'
import RootLayout from './pages/Root';
import HomePage from './pages/Home';

// const AboutMePage = lazy(() => import('./pages/AboutMe'))

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <HomePage /> // todo
            },
            {
                path: 'aboutme',
                element: <AboutMe />
            }
        ]
    }
])

function App() {
    return <RouterProvider router={router} />;
}

export default App

/**`
 * Router ...
 * 
 * npm install react-router-dom
 * 
 */