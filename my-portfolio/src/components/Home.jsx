import Typewriter from 'typewriter-effect';
import devPic from '../../public/devPic.png'

// Icons
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-green-950">
            {/* profile Image  */ }
            <img
                src={ devPic }
                alt="My profile"
                className="w-48 h-48 rounded-full shadow-lg mb-6"
            />

            {/* name */ }
            <Typewriter
                options={ {
                    strings: ["Hi, I am Junui Hong", "Software Developer/Engineer", "New Grad from Simon Fraser University"],
                    autoStart: true,
                    loop: true,
                    cursor: '\u200B',
                    delay: 50,
                    deleteSpeed: 5,
                    wrapperClassName: "text-2xl md:text-2xl font-bold text-gray-800 dark:text-white tracking-wide",
                    cursorClassName: "text-2xl md:text-2xl font-bold text-gray-800 dark:text-white",
                } }
            />
            {/* social links */ }
            <div className="flex gap-6 mt-8">
                <a href="https://github.com/junuiui" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="w-8 h-8 text-white hover:scale-200 transition-transform" />
                </a>
                <a href="https://linkedin.com/in/junui-hong-338487280/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="w-8 h-8 text-white hover:scale-200 transition-transform" />
                </a>
                <a href="https://instagram.com/junuiui" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="w-8 h-8 text-white hover:scale-200 transition-transform" />
                </a>
            </div>
        </div>
    );
}

