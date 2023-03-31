import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../imagenes/logofinal.svg';
import logo2 from '../../imagenes/logo2.svg';


const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="container_nav">
            <Link to="/"><div className="container_nav--logo"><img alt='logo de fauna' src={logo}/></div></Link>
            <aside className="container_nav--li">
                <li><Link to='/QuienesSomos' className='container_nav--link'>Quienes Somos</Link></li>
                <li><Link to='/Rescatados' className='container_nav--link desplegar'>Adopcion</Link></li>
                <div className='menu_desplegable'><Link to='/Requisitos' className='requisitos'>Requisitos Adopcion</Link></div>
                <li><Link to='./Donaciones' className='container_nav--link'>Donaciones</Link></li>
                <li><Link to='./Castracion' className='container_nav--link castracion'>Salva Vidas</Link></li>
                <div className='menu_desplegable' id='castracion'><Link to='/Castracion' className='requisitos'>Castracion</Link></div>
                <li><Link to='./Contacto' className='container_nav--link'>Contacto</Link></li>
            </aside>
            <Link to='#' className='fa fa-bars bars' onClick={() => setMenuOpen(!menuOpen)}/>
            <nav className={`navbar--responsive ${menuOpen ? 'navbar--open' : 'navbar--closed'}`}>
            <Link to="/"><div className='logo-responsive'><img alt='logo de fauna' src={logo2}/></div></Link>
                <Link to='/QuienesSomos'>Quienes Somos</Link>
                <Link to='/Rescatados'>Adopcion</Link>
                <Link to='/Requisitos'>Requisitos Adopcion</Link>
                <Link to='/Donaciones'>Donaciones</Link>
                <Link to='/Contacto'>Contacto</Link>
            </nav>
        </nav>
    )
}


export default NavBar