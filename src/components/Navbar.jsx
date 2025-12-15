
import {useState} from 'react'
import "../css/Navbar.css";
import logojose from "../assets/logo1-jose.png"

const Navbar = () => {
     const [open, setOpen] = useState(false);
  return (
    <div className='navbar'>
    <h2 className="logo">
      <img className='logo-jose' src={logojose} alt="" />
    </h2>

        <nav className={`nav-links ${open ? "open" : ""}`}>
          <a href="https://valdez-jose.github.io/mi-primerproyecto-react/" target="_blank">Sobre mi</a>
          <a href="https://valdez-jose.github.io/mi-trabajo2/" target="_blank">Proyecto 1</a>
          <a href="https://valdez-jose.github.io/proyecto-web/" target="_blank">Proyecto 2</a>
          <a href=" https://valdez-jose.github.io/vivero-el-paso/" target="_blank">Proyecto 3</a>
          <a href="https://github.com/valdez-jose" target="_blank">Github</a>
          
        </nav>

      <div className="hamburger" onClick={() => setOpen(!open)}>
        <span></span><span></span><span></span><span></span>
      </div>
    </div>
  )
}

export default Navbar
