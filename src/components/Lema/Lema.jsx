import React from 'react';
import logo3 from '../../imagenes/logo3.svg'

const Lema = () => {
  return (
    <article className='lema-container'>
        <p>No podemos salvar a todos los animales, pero podemos hacer una gran diferencia para aquellos que rescatamos.</p>
        <h3>Ayúdanos a ayudarlos.</h3>
        <picture><img src={logo3} alt='logo de fauna urbana'/></picture>
    </article>
  )
}

export default Lema