import React, { useState, useEffect } from 'react';
import Testimonios from "../Testimonios/Testimonios.jsx";

const Razas = () => {
    const [breeds, setBreeds] = useState([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(`https://api.thedogapi.com/v1/breeds?page=${page}&limit=3`);
                const data = await response.json();
                setBreeds(prevBreeds => [...prevBreeds, ...data]);
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, [page]);

    const handleScroll = () => {
        const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
        if (scrollTop + clientHeight >= scrollHeight && !isLoading) {
            setPage(prevPage => prevPage + 1);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className='razas-container'>
            <Testimonios />
            <h2>RAZAS</h2>
            {breeds.map(breed => (
                <article className='card-dog' key={breed.id}>
                    <img src={breed.image.url} alt={breed.name} />
                    <div>
                        <p><strong>NOMBRE: </strong>{breed.name}</p>
                        <p><strong>TAMAÑO: </strong>{breed.bred_for}</p>
                        <p><strong>ORIGEN: </strong>{breed.origin}</p>
                        <p><strong>TEMPERAMENTO: </strong>{breed.temperament}</p>
                        <p><strong>VIDA PROMEDIO: </strong>{breed.life_span}</p>
                    </div>
                </article>
            ))}
            {isLoading && <p>Cargando...</p>}
        </section>
    );
};

export default Razas;
