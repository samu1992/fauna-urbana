import { Link } from "react-router-dom";
import logo from '../../imagenes/logofinal.svg';

const Footer = () => {
  return (
    <footer className="container_footer">
        <section className="footer-redes">
            <picture><img alt="error en cargar el logo" src={logo}/></picture>
            <h5>Seguinos en nuestras redes</h5>
            <div>
                <a href="."><i className=" fab fa-instagram"></i></a>
                <a href="."><i className=" fab fa-facebook"></i></a>
                <a href="."><i className=" fab fa-twitter"></i></a>
            </div>
        </section>
        <section className="footer-menu">
          <h3>MENU</h3>
            <Link to='/QuienesSomos'>¿QUIÉNES SOMOS?</Link>
            <Link to='/Rescatados'>Adopcion</Link>
            <Link to='/Requisitos'>Requisitos Adopcion</Link>
            <Link to='/Donaciones'>Donaciones</Link>
            <Link to='/Contacto'>Contacto</Link>
        </section>
        <section className="footer-contacto">
          <h3>TAMBIEN PODES CONTACTARNOS</h3>
                <p><i className="fa fa-phone"></i>  +54 1131987501</p>
                <p><i className="fa fa-location-dot"></i>  location</p>
                <p><i className="fa fa-envelope"></i>  fauna@gmail.com</p>
        </section>
    </footer>
  )
}
export default Footer
