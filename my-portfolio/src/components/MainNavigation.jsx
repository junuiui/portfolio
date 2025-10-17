import { NavLink } from "react-router-dom";

import { hoverStyle } from "../styles/style";

function MainNavigation() {
    return (
        <header className="bg-gray-100 shadow">

            <nav className="flex justify-between items-center px-6 py-3">

                {/* Name (left) */}
                <div className="text-xl font-bold">
                    Junui Hong
                </div>

                <div>
                    
                </div>

                {/* Links (right) */}
                <ul className="flex space-x-6">
                    <li>
                        <NavLink
                            to="/"
                            end
                            className={hoverStyle}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/aboutme"
                            className={hoverStyle}
                        >
                            About Me
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;
