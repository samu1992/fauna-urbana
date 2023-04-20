import { useState } from 'react';
import { Link } from 'react-router-dom';



const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="container_nav">
            <Link to="/"><div className="container_nav--logo"><img alt='logo de fauna' src='/imagenes/logofinal.svg'/></div></Link>
            <aside className="container_nav--li">
                <li><Link to='/Razas' className='container_nav--link'>razas de perros</Link></li>
                <li><Link to='/QuienesSomos' className='container_nav--link'>¿QUIÉNES SOMOS?</Link></li>
                <li><Link to='/Rescatados' className='container_nav--link'>Quiero Adoptar!</Link></li>
                <li><Link to='./Castracion' className='container_nav--link castracion'>Salva Vidas</Link></li>
                <div className='menu_desplegable' id='castracion'>
                    <Link to='/Castracion' className='requisitos'>Castracion</Link>
                    <Link to='./Donaciones' className='requisitos'>Donaciones</Link>
                    <Link to='/Requisitos' className='requisitos'>Requisitos</Link>
                </div>
                <li><Link to='./Contacto' className='container_nav--link'>Contacto</Link></li>
            </aside>
            <Link to='#' id='bars' className='fa fa-bars bars' onClick={() => setMenuOpen(!menuOpen)}/>
            <nav className={`navbar--responsive ${menuOpen ? 'navbar--open' : 'navbar--closed'}`}>
            <Link to="/"><div className='logo-responsive'><img alt='logo de fauna' src='/imagenes/logo2.svg'/></div></Link>
                <Link to='/QuienesSomos'>¿Quienes Somos?</Link>
                <Link to='/Rescatados'>Quiero Adoptar!</Link>
                <Link to='/Requisitos'>Requisitos Adopcion</Link>
                <Link to='/Donaciones'>Donaciones</Link>
                <Link to='/Contacto'>Contacto</Link>
                <Link to='/Razas'>razas de perros</Link>
            </nav>
        </nav>
    )
}


export default NavBar