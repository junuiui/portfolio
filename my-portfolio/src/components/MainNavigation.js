import { NavLink } from "react-router-dom";

// import classes from 

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/aboutme"
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
