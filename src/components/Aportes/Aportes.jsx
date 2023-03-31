import gift from "../../imagenes/Gift.svg";
import gift2 from '../../imagenes/Gift2.svg';
import gift3 from '../../imagenes/Gift3.svg';



const Aportes = () => {
    return (
        <main className="aportes-container">
            <section className="aporte">
                    <div><img alt="gif" src={gift}/></div>
                    <h2>DONACIONES</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. </p>
                    <button>QUIERO DONAR</button>
            </section>
            <section className="aporte">
                    <div><img alt="gif" src={gift2}/></div>
                    <h2>ADOPCIONES</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. </p>
                    <button>QUIERO ADOPTAR</button>
            </section>
            <section className="aporte">
                    <div><img alt="gif" src={gift3}/></div>
                    <h2>TRANSITAR</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. </p>
                    <button>QUIERO TRANSITAR</button>
            </section>
        </main>
    )
}

export default Aportes