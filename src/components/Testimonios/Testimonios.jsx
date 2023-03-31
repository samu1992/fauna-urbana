import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import pedro from '../../imagenes/testipedro.jpg';
import areta from '../../imagenes/testipino.jpg';
import juan from '../../imagenes/testijuan.jpg';


function Testimonios() {
    const [index, setIndex] = useState(0);
    const items = [
        {
            image: pedro,
            text: '“Pedro está súper bien, muy contento, aprendió millones de cosas. Es muy dulce, compañero, estamos felices. La foto con el cono fue post-castración la semana pasada. La verdad que se lo bancó bárbaro, durmió mucho y el veterinario dijo que esta impecable de salud, asi que todo super bien. Besos a todos por allá!!” LUCÍA, ADOPTANTE DE PEDRO'
            
        },
        {
            image: areta,
            text: '“Areta es La Luz de mis ojos!!! La amo!!! La castré el mes pasado, ya que el veterinario me aconsejó que espere el primer celo, para que se termine de desarrollar, el collar isabelino es de la castración. En La fiestas conoció el campo! En el verano fuimos al mar! Es re sociable con los chicos, ahí está en La foto con una amiga y su hijo, es sociable con todo el mundo, perros, gatos, personas… jajjaj Hasta fuimos al programa de Guido Kazka. Muchas gracias y un beso a todos!!!” MARIA, ADOPTANTE DE ARETA'
        },
        {
            image: juan,
            text: '“¡Hola! Juan vive muy feliz con su nueva familia. Le encanta salir a la plaza y socializar con otros perritos. También jugar con su pelota y todos los chiches que tiene. Es el mimado de la casa y estamos muy muy muy felices de haberlo adoptado. Se adaptó muy rápidamente a su nuevo hogar cuando llegó, y se porta muy bien cuando se queda solo ¡Es un bombón! Les agradecemos toda la info. Vamos a castrarlo, pero el veterinario nos sugirió que esperemos a que crezca un poquito más para que tenga un óptimo crecimiento. Aún no levanta la patita para hacer pis. Nos vemos pronto en alguna de sus muchas lindas. GRACIELA, ADOPTANTE DE JUAN'
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((index + 1) % items.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [index, items.length]);

    return (
        <main className='container'>
            <h2><span>Adoptantes Felices </span> <a href="."><i class="fa-solid fa-heart"></i></a></h2>
            <aside className='container_testimonios'>
                <CSSTransition
                    in={true}
                    timeout={1500}
                    classNames="fade"
                    unmountOnExit
                >
                    <section className='container_testimonios--contenido'>
                        <img src={items[index].image} alt="...error en cargar foto de testimonio de adoptante" />
                        <p>{items[index].text}</p>
                    </section>
                </CSSTransition>
            </aside>
        </main>
    );
}

export default Testimonios;