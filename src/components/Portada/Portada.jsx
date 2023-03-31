import logo from '../../imagenes/logo2.svg';
const Portada = () => {
    return (
        <main className='container_portada'>
            <section className='img-container-logo'>
                <img className='logo' alt='img' src={logo} />
                <button>SABER MAS</button>
            </section>
        </main>
    );
}

export default Portada