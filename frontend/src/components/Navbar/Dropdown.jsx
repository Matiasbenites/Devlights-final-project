import { Fragment, useState } from "react";
import { clearLocalStorageUser } from "../../redux/states.js/user";

// Menú dropdown para accesibilidad en Navbar

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  

  const cerrarSesion = ()=>{
    clearLocalStorageUser()
    location.reload()
  }

  return (
    <div >
      <div Class="menu_lat"
      className=" w-6 h-6 inline-flex pl-30 w-full hover:bg-yellow-200 items-center">
      <img src={Barra} href='#'/> 
        <button
          type="button"
          
          id="options-menu"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={() => setIsOpen(!isOpen)}

        >
         
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M6.293 6.293a1 1 0 0 1 1.414 0L10 8.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div 
          className=" origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            <a // Reemplazar por Link component luego
              href="#" // Añadir dirección de página luego
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 no-underline"
            >
              Cuenta
            </a>
            <a
              onClick={cerrarSesion}
              className="block px-4 py-2 cursor-pointer text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 no-underline"
            >
              Cerrar Sesión
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
