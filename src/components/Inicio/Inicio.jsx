import Aportes from "../Aportes/Aportes.jsx";
import Portada from "../Portada/Portada.jsx";
import Testimonios from "../Testimonios/Testimonios.jsx";
import Lema from "../Lema/Lema.jsx";

const Inicio = () => {
    return (
        <div>
            <Portada />
            <Lema/>
            <Aportes />
            <Testimonios />
        </div>
    )
}

export default Inicio