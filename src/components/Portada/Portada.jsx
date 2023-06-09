import React from 'react';
import { Link } from 'react-router-dom';

const Portada = () => {
    return (
        <main className='container_portada'>
            <section className='img-container-logo'>
                <img className='logo' alt='img' src='/imagenes/logo2.svg' />
                <Link to='/QuienesSomos'><button>SABER MAS</button></Link>
            </section>
        </main>
    );
}

export default Portada