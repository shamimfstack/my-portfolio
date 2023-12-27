import { NavLink } from "react-router-dom";
import Logo from "../../components/Logo";

const Navbar = () => {
  const navOptions = (
    <div className="flex flex-col justify-center items-center">
      <li className="">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-700 text-bold" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li className="">
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-700 text-bold" : ""
          }
        >
          About Me
        </NavLink>
      </li>
      <li className="">
        <NavLink
          to="/services"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-700 text-bold" : ""
          }
        >
          Services
        </NavLink>
      </li>
      <li className="">
        <NavLink
          to="/skills"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-700 text-bold" : ""
          }
        >
          Skills
        </NavLink>
      </li>
      <li className="">
        <NavLink
          to="/projects"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-700 text-bold" : ""
          }
        >
          Projects
        </NavLink>
      </li>
      <li className="">
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-700 text-bold" : ""
          }
        >
          Contact
        </NavLink>
      </li>
    </div>
  );

  return (
    <div>
      <div className="">
        <nav className="dropdown md:hidden flex">
          <div className="flex justify-between items-center">
          <Logo></Logo>
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
            
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-12 z-[1] p-2 bg-base-100 rounded-box w-52"
          >
            {navOptions}
          </ul>
        </nav>
        <div>
          <ul className="hidden md:block">{navOptions}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
