import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import './index.css'
import RootLayout from './pages/Root';
import HomePage from './pages/Home';
import AboutMePage from './pages/AboutMe';

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
                element: <AboutMePage />
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