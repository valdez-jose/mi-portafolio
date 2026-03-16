
import { useState } from 'react';
import "../css/Navbar.css";
import logojose from "../assets/logo1-jose.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Array de objetos para los links (más escalable)
  const navLinks = [
    { name: "Galeria-san-luis", url: " https://valdez-jose.github.io/galeria-sanluis/" },
    { name: "Sobre mi", url: "https://valdez-jose.github.io/mi-primerproyecto-react/" },
    { name: "Proyecto 1", url: "https://valdez-jose.github.io/mi-trabajo2/" },
    { name: "Proyecto 2", url: "https://valdez-jose.github.io/proyecto-web/" },
    { name: "Proyecto 3", url: "https://valdez-jose.github.io/vivero-el-paso/" },
    { name: "Github", url: "https://github.com/valdez-jose" },
  ];

  return (
    <header className='navbar'>
      {/* Contenedor Izquierdo: Logo */}
      <div className="logo-container">
        <h2 className="logo">
          <img className='logo-jose' src={logojose} alt="Logo Jose" />
        </h2>
      </div>

      {/* Contenedor Central: Links */}
      <nav className={`nav-links ${open ? "open" : ""}`}>
        {navLinks.map((link, index) => (
          <a 
            key={index} 
            href={link.url} 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={() => setOpen(false)} // Cierra el menú al hacer click en móvil
          >
            {link.name}
          </a>
        ))}
      </nav>

      {/* Contenedor Derecho: Hamburguesa */}
      <div className="hamburger-container">
        <div className="hamburger" onClick={() => setOpen(!open)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}

export default Navbar;