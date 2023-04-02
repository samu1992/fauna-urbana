import ListaDesordenada from "../ListaDesordenada/ListaDesordenada.jsx";
/* import Cachorros from '../../imagenes/cachorros.jpg';
import Pagos from '../../imagenes/pagos.png'; */

const Castracion = () => {
    return (
        <main className='container_castracion'>
            <div className='container_castracion--title'><h1 >CASTRAR</h1></div>
            <hr />
            <aside className='container_castracion--contenido'>
                <p><span>Castrar es la única opción real para evitar que sigan naciendo animales destinados a sufrir.
                    Nuevos nacimientos significan nuevos abandonos.</span></p>
                <img alt='...error en cargar la foto de cachorros' src='/imagenes/cachorros.jpg' />
                <p>Existe un gran número de animales de compañía que son abandonados por sus dueños cada año.
                    Miles de ellos deambulan por las calles padeciendo hambre, enfermedades, accidentes y siendo víctimas
                    de maltrato. Entonces, <span>¿para qué traer más perros y gatos al mundo cuando hay miles sufriendo en las calles?</span></p>
                <p>La única solución ética y eficaz es la ESTERILIZACION de perros y gatos para controlar su reproducción.</p><br />
                <p><span>LA CASTRACIÓN ES LA ÚNICA Y MEJOR MANERA DE MANTENER CONTROLADA LA POBLACIÓN ANIMAL, ADEMÁS DE AYUDAR A EVITAR PROBLEMAS DE
                    SALUD A TU MASCOTA</span></p>
                <p>Es responsabilidad del Estado realizar campañas de castración gratuitas, masivas, sistemáticas y extensivas en el tiempo pero
                    también es necesaria la participación responsable de cada ciudadano.</p>
            </aside>
            <ListaDesordenada title='Ventajas de la esterilización en hembras:'
                listItems={["Eliminación del celo, con lo que dejan de manchar en casa y de atraer a los machos, desapareciendo además la ansiedad del animal y los maullidos y quejidos de las gatas que provoca este periodo.",
                    "Elimina los embarazos psicológicos que se presentan en algunas hembras después del celo.",
                    "Evita las infecciones uterinas (piómetras) y los quistes ováricos, además de reducir la incidencia de tumores de mama."]} />
                    <ListaDesordenada title='Ventajas de la esterilización en machos:' listItems={["Elimina el deseo sexual del animal, por lo que dejará de montar a otros animales o personas y no se mostrará ansioso y frustrado cuando detecten a una hembra en celo, evitando también en muchos casos las ganas de escapar y deambular fuera de casa, mejorando en definitiva la calidad de vida de nuestro animal.",
                "Se reduce o elimina la agresividad hacia otros machos y, especialmente en el caso de los gatos, el marcar con orina la casa.",
                "Influye positivamente en las afecciones de próstata y otras enfermedades (algunas afecciones de la piel, etc.)"]}/>
                <ListaDesordenada title='Ventajas para Usted' listItems={["Evitara crías no deseadas, mordeduras, peleas, fugas, maullidos nocturnos, rociado de orina, problemas con los vecinos.",
                "Sus animales serán más sanos, vivirán más años y serán más guardianes."]}/>
                <ListaDesordenada title='Ventajas para la sociedad' listItems={["Menos cantidad de animales en la vía pública.","Menos animales abandonados por lo tanto menos maltrato y sufrimiento."]}/>
                <img alt='...error en cargar imagen con datos bancarior' src='/imagenes/pagos.png'/>
                <button>APADRINA UNA CASTRACIÓN</button>
        </main>
    )
}

export default Castracion