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
            text: 'Lorem  consectetur adipiscing elit. ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.'
            
        },
        {
            image: areta,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero  consectetur adipiscing elit. et velit interdum, ac aliquet odio mattis.'
        },
        {
            image: juan,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.'
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((index + 1) % items.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [index, items.length]);

    return (
            <aside className='container_testimonios'>
                <CSSTransition
                    in={true}
                    timeout={1500}
                    classNames="fade"
                    unmountOnExit
                >
                    <section className='container_testimonios--contenido'>
                        <div>
                            <h2>Conoce a nuestros felices adoptantes</h2>
                            <p>{items[index].text}</p>
                            <button>QUIERO ADOPTAR</button>
                        </div>
                        <img src={items[index].image} alt="...error en cargar foto de testimonio de adoptante" />
                    </section>
                </CSSTransition>
            </aside>
    );
}

export default Testimonios;