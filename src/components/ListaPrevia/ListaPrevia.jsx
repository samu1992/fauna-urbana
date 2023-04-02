import React from 'react';
import dog from '../../imagenes/dog.png';
import { Link } from 'react-router-dom';

const ListaPrevia = () => {
return (
    <aside className='lista-container'>
        <section className='image'><img alt='no se pudo cargar la imagen' src={dog}/></section>
        <section>
            <h2>Pasos para ser hogar de transito</h2>
            <ul>
                <li>Vivir en Capital Federal o conurbano bonaerense (Buenos Aires)</li>
                <li>Vivir en Capital Federal o conurbano bonaerense (Buenos Aires)</li>
                <li>Vivir en Capital Federal o conurbano bonaerense (Buenos Aires)</li>
                <Link to='/Requisitos'><button>MAS INFO</button></Link>
            </ul>
        </section>
    </aside>
)
}

export default ListaPrevia