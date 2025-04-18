import { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  const [flag, setFlag] = useState(false);
  return (
    <>
      <nav className="p-2 dark:bg-blue-300 text-white ">
        <div className="m-2 flex justify-between items-center">
          <h1 className="text-sm sm:text-lg md:text-xl text-bold hover:text-gray-500 cursor-pointer">
            React Projects
          </h1>
          <ul className="nav-list hidden md:block md:flex gap-4">
            <li>
              <NavLink
                className="semibold hover:text-blue-500 transition-colors hover:underline active:text-blue-600 active:underline"
                to="/"
              >
                Form Validation
              </NavLink>
            </li>
            <li>
              <NavLink
                className="semibold hover:text-blue-500 transition-colors hover:underline active:text-blue-600 active:underline"
                to="/addtocart"
              >
                Add to Cart
              </NavLink>
            </li>
            <li>
              <NavLink
                className="semibold hover:text-blue-500 transition-colors hover:underline active:text-blue-600 active:underline"
                to="/todo"
              >
                Todo List
              </NavLink>
            </li>
            <li>
              <NavLink
                className="semibold hover:text-blue-500 transition-colors hover:underline active:text-blue-600 active:underline"
                to="/weather"
              >
                Weather
              </NavLink>
            </li>
          </ul>
          <div className="logo w-8">
            <a href="">
              <FaGithub className="text-black text-xl"/>
            </a>
          </div>
          <button className="md:hidden block" onClick={() => setFlag(!flag)}>
            {flag ? <GiCancel /> : <GiHamburgerMenu />}
          </button>
          {/* <div className='search-bar'>
                <input type="text" placeholder='Search...' />
                <button>Search</button>
            </div> */}
        </div>
      </nav>
      {flag ? (
        <section className="md:hidden bg-blue-200 text-white px-3 pt-2 pb-4 space-y-2">
          <NavLink
            to="/"
            className="semibold hover:text-blue-500 transition-colors hover:underline active:text-blue-600 active:underline block"
          >
            Home
          </NavLink>
          <NavLink
            to="/addtocart"
            className="semibold hover:text-blue-500 transition-colors hover:underline active:text-blue-600 active:underline block"
          >
            About
          </NavLink>
          <NavLink
            to="/todo"
            className="semibold hover:text-blue-500 transition-colors hover:underline active:text-blue-600 active:underline block"
          >
            Services
          </NavLink>
          <NavLink
            to="/weather"
            className="semibold hover:text-blue-500 transition-colors hover:underline active:text-blue-600 active:underline block"
          >
            Contact
          </NavLink>
        </section>
      ) : (
        ""
      )}
    </>
  );
};

export default Navbar;
