import { Link, NavLink } from "react-router-dom";
import Logo from "../../components/Logo";

const Navbar = () => {
  const navOptions = (
    <div className="">
      <li className="py-5">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li className="py-5">
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          About Me
        </NavLink>
      </li>
      <li className="py-5">
        <NavLink
          to="/services"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Services
        </NavLink>
      </li>
      <li className="py-5">
        <NavLink
          to="/skills"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Skills
        </NavLink>
      </li>
      <li className="py-5">
        <NavLink
          to="/projects"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Projects
        </NavLink>
      </li>
      <li className="py-5">
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Contact Me
        </NavLink>
      </li>
    </div>
  );

  return (
    <div>
      <div className="navbar-start">
        <div className="dropdown md:hidden">
          <div className="flex justify-between items-center">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
             <Logo></Logo>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 bg-base-100 rounded-box w-52"
          >
            {navOptions}
          </ul>
        </div>
        <div>
          <ul className="hidden md:block">{navOptions}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
