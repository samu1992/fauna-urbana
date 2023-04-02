import gift from "../../imagenes/Gift.svg";
import gift2 from '../../imagenes/Gift2.svg';
import gift3 from '../../imagenes/Gift3.svg';
import { Link } from "react-router-dom";



const Aportes = () => {
    return (
        <main className="aportes-container">
            <section className="aporte">
                    <div><img alt="gif" src={gift}/></div>
                    <h2>DONACIONES</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. </p>
                    <button><Link to='/Donaciones'>QUIERO DONAR</Link></button>
            </section>
            <section className="aporte">
                    <div><img alt="gif" src={gift2}/></div>
                    <h2>ADOPCIONES</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. </p>
                    <button><Link to='/Rescatados'>QUIERO ADOPTAR</Link></button>
            </section>
            <section className="aporte">
                    <div><img alt="gif" src={gift3}/></div>
                    <h2>TRANSITAR</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. </p>
                    <button><Link>QUIERO TRANSITAR</Link></button>
            </section>
        </main>
    )
}

export default Aportes