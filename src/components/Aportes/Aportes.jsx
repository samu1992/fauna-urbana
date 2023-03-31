import gift from "../../imagenes/Gift.svg";

const Aportes = () => {
    return (
        <main className="aportes-container">
            <section className="adopcion">
                    <div><img alt="gif" src={gift}/></div>
                    <h2>ADOPCIONES</h2>
                    <p>Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. </p>
                    <button>QUIERO ADOPTAR</button>
            </section>
        </main>
    )
}

export default Aportes