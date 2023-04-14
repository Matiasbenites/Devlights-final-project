import React, { useState } from "react";
import Logo from "../../assets/logo.svg";
import { clearLocalStorageUser } from "../../redux/states/user";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Nav = () => {
  let [open, setOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  
  const cerrarSesion = () => {
    clearLocalStorageUser();
    location.reload();
  };

  const userState = useSelector((store)=> store.user);

  let Links = userState.name ? [
    { name: "MASCOTAS CERCANAS", link: "/posts" },
    { name: "CUIDADOS", link: "/cuidados" },
    { name: "DONACIONES", link: "/donaciones" },
    { name: "PUBLICAR AVISO", link: "/upload"}
  ] : [
    { name: "MASCOTAS CERCANAS", link: "/posts" },
    { name: "CUIDADOS", link: "/cuidados" },
    { name: "DONACIONES", link: "/donaciones" },
  ];

  return (
  <>
    <nav className="px-2 sm:px-4 py-2.5">
      <div className="max-w-7xl mx-auto my-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
            <img src={Logo} className="h-[70px]" alt="Mascostas Logo" />
        </Link>

        <div className="flex items-center md:order-2 relative">
          {/* User profile */}
          <button onClick={() => setUserOpen(!userOpen)} type="button" className="block mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:bg-white" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
            <span className="sr-only">Open user menu</span>
            <i className="fa-solid fa-circle-user fa-2xl"></i>
          </button>
          {/* <!-- Dropdown User menu --> */}
          <div id="user-dropdown" className={`${userOpen ? '' : 'hidden'} z-50 text-base list-none bg-gray-50 divide-y divide-gray-200 rounded-lg shadow absolute top-0 right-0 mt-10`}>
            {userState.name == "" 
            ?
            <ul className="py-2 truncate" aria-labelledby="user-menu-button">
              <li>
                <Link to="/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Iniciar Sesión</Link>
              </li>
              <li>
                <Link to="/register" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Registrarse</Link>
              </li>
            </ul>
            :
            <>
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 truncate">{userState.name}</span>
              </div>
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <Link to="/userPosts" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 truncate">Mis Publicaciones</Link>
                </li>
                <li>
                  <a onClick={cerrarSesion} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">Cerrar sesión</a>
                </li>
              </ul>
            </>
            } 
            
          </div>

          {/* Button Menu Mobile */}
          <div onClick={() => setOpen(!open)} data-collapse-toggle="mobile-menu-2"  className="cursor-pointer inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none" aria-controls="mobile-menu-2" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="black" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
          </div>
        </div>

        {/* Menu links */}
        <div className={`${open ? '' : 'hidden'} items-center justify-between w-full md:flex md:w-auto md:order-1 bg-gray-700 sm:bg-transparent rounded-md text-white sm:text-black`} id="mobile-menu-2">
          <ul className="flex flex-col p-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
            {Links.map((link) => (
              <li key={link.name} className="md:ml-3 text-sm md:my-0 my-3">
                <Link
                  to={link.link}
                  className="hover:border-b-4 border-b-yellow-200 p-[2px] duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  </>
  );
};

export default Nav;



