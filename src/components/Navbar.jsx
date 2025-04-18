import { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  const [flag, setFlag] = useState(false);
  const navItems = [
    {
      id: 1,
      item: "Todo List",
      links: "/"
    },
    {
      id: 2,
      item: "Add to Cart",
      links: "/addtocart"
    },
    {
      id: 3,
      item: "Form Validation",
      links: "/todo"
    },
    {
      id: 4,
      item: "Weather",
      links: "/weather"
    }
  ]
  return (
    <>
      <nav className="w-full h-auto relative p-2 dark:bg-blue-300 text-white ">
        <div className="m-2 sticky z-50 flex justify-between items-center">
          <h1 className="text-sm sm:text-lg md:text-xl font-bold hover:text-gray-500 cursor-pointer">
            React Projects
          </h1>
          <ul className="nav-list hidden md:flex gap-4">
            {navItems.map((ele)=>{
              return <li key={ele.id}>
              <NavLink
                className="font-normal hover:text-blue-500 transition-colors hover:underline active:text-blue-600 active:underline"
                to={ele.links}
              >
                {ele.item}
              </NavLink>
            </li>
            })}
            
          </ul>
          <div className="logo w-8">
            <NavLink to="https://github.com/abhi1994j/React-Project-App">
              <FaGithub className="text-black text-xl hover:text-gray-600"/>
            </NavLink>
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
      {flag && (
        <section className="md:hidden bg-blue-200 text-white px-3 pt-2 pb-4 space-y-2">
           {navItems.map((ele)=>{
              return <NavLink
              to={ele.links}
              className="font-normal hover:text-blue-500 transition-colors hover:underline active:text-blue-600 active:underline block"
            >
              {ele.item}
            </NavLink>
            })}
        </section>
      )}
    </>
  );
};

export default Navbar;
