import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';


function Testimonios() {
    const [index, setIndex] = useState(0);
    const items = [
        {
            image: '/imagenes/testipedro.jpg',
            text: 'Lorem  consectetur adipiscing elit. ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.'
            
        },
        {
            image: '/imagenes/testipino.jpg',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero  consectetur adipiscing elit. et velit interdum, ac aliquet odio mattis.'
        },
        {
            image: '/imagenes/testijuan.jpg',
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
                            <Link to='/Rescatados'><button>QUIERO ADOPTAR</button></Link>
                        </div>
                        <img src={items[index].image} alt="...error en cargar foto de testimonio de adoptante" />
                    </section>
                </CSSTransition>
            </aside>
    );
}

export default Testimonios;