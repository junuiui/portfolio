import { useState } from 'react'

import './index.css'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import AboutMe from './components/AboutMe'

function App() {
    return (
        <div>
            <Header />
            <section id="home">
                <Home />
            </section>
            <section id="about" className="mt-20">
                <AboutMe />
            </section>
        </div>
    );
}

export default App
