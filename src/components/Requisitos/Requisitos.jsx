import ListaDesordenada from "../ListaDesordenada/ListaDesordenada.jsx"


const Requisitos = () => {
    return (
        <main className="container_requisitos">
            <div className='container--titulo'><h1>REQUISITOS <span>ADOPCION</span></h1><hr /></div>
            <aside className='container_requisitos--contenido'>
                <div className='imagen'></div>
                <p><span>Adoptar es un acto de responsabilidad y compromiso por lo que es importante que estes capacitado para hacerlo.
                    Un perro puede vivir entre 14 y 18 años y durante todo ese tiempo dependerá de vos.</span></p>
                <p>Algunas cuestiones para tener en cuenta son el espacio disponible de tu casa, el tiempo que tengas para brindarle
                    compañía, actividad física y cuidado. También los costos asociados a su alimentación, atención veterinaria y estadía
                    durante tus vacaciones. Para asegurarte una convivencia feliz tu elección debe estar orientada
                    al estilo de vida que llevas y el tiempo real que le podes dedicar.</p>
                <section className='container_requisitos--tips'>
                    <p><span>Aquí te damos algunos tips pero recordá que lo más importante es adoptar con conciencia y con el corazón.</span></p><br />
                    <p><span>Un cachorro: </span>(45 días-12 meses) es precioso pero, requiere de mucho tiempo y esfuerzo.
                        Come 4 veces al día, puede llorar por las noches y en las ausencias de los dueños. Mastica objetos, hace pis
                        y caca en cualquier lado, requiere educación y paciencia, es un bebe durante un año. No hay garantías con respecto
                        al tamaño definitivo. En caso de haber niños chicos en el hogar, hay que marcar la diferencia entre
                        mascota y juguete. Sin embargo es muy satisfactorio ir viendo el crecimiento y desarrollo de un
                        cachorrito hasta convertirse en adulto.</p>
                    <p><span>Un joven: </span> (1 año-5 años) es juguetón pero más adulto. Son más hábiles para centrarse
                        en la educación. Generalmente ya está con la vacunación completa, lo que no hay riesgo de contraer
                        alguna enfermedad. Están esterilizados. Ya se puede sacarlo a pasear y bañarlo. Come dos veces al día.
                        Ya tiene el tamaño definitivo, no cambiara de aspecto.</p>
                    <p><span>Un adulto: </span>(5 años-9años) no genera problemas por quedarse algunas horas solo.
                        Es probable que duerma toda lo noche. Se habitúa fácilmente a su nueva familia. Aceptan su sitio dentro
                        de la jerarquía del hogar, se adaptan a órdenes básicas, si es que no las tienen adquiridas de antes. Se
                        muestran gratificantes y toman mucho cariño a su nueva familia y casa.</p>
                    <p><span>Un abuelo: </span> (10 años-día de su muerte) nos dejan muchísimo tiempo para nosotros. No
                        requieren tanto trabajo. Son muy calmos y sedentarios. Aunque el tiempo de compañía es seguramente menor,
                        también se merecen un hogar. Podemos darle durante los años que le quedan una vida digna y agradable.
                        Estarán súper agradecidos, esperaron su hogar mucho tiempo.</p>
                </section>
                <section className='container_requisitos--finales'>
                    <p><span>Si te sentís capacitado para adoptar un cachorro, un joven o un adulto, te invitamos a que te acerques
                        a nuestro refugio y conozcas a nuestros perritos.</span></p>
                    <ListaDesordenada title='Nuestros Requisitos'
                        listItems={["Los animales se entregan luego de una charla telefónica orientada a corroborar que se cumplen con las normas básicas de tenencia responsable.",
                            "Los adoptantes deberán firmar un contrato de adopción donde consten sus datos personales y donde se comprometen a brindar los cuidados necesarios.",
                            "Los animales mayores a 7 meses serán dados en adopción ya castrados. El adoptante de uncachorro de menor edad asumirá la responsabilidad y el compromiso de castrarlo entre los 7 meses y el año de edad. La castración es un requisito prioritario para concretar la adopción como parte de la tenencia responsable de un animal de compañia.",
                            "Nos reservamos el derecho de dar o no un animal en adopción de acuerdo a si se cumplen o no los requerimientos que nuestra ONG considera.",
                            "Las adopciones se limitan geográficamente a Capital Federal y Gran Buenos Aires, Argentina (sujeto a consideración)",
                            "Los datos suministrados por el solicitante son confidenciales y de acceso restringido, para el uso exclusivo de los procesos de adopción de la Asociación Civil Proyecto 4 Patasy no serán transferidos a terceros bajo ninguna circunstancia."]} />
                </section>
            </aside>
        </main>
    )
}

export default Requisitos