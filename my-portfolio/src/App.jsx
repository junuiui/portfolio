import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import './index.css'
import RootLayout from './pages/Root';
import HomePage from './pages/Home';
import AboutMePage from './pages/AboutMe';
import ContactPage from './pages/Contact';

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
            },
            {
                path: 'contact',
                element: <ContactPage />
            }
        ]
    }
])

function App() {
    return <RouterProvider router={router} />;
}

export default App