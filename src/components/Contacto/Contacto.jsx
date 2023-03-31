
const Contacto = () => {
    return (
        <main className="container_contacto">
            <section className="container_contacto--title">
                <h1><span>Contacto</span></h1>
                <p>Para contactarse con nosotros complete el siguiente formulario y seleccione el área a donde quiere dirigirse. Muchas gracias.</p>
            </section>
            <aside className='container_contacto--formulario'>
                <form>
                    <label>Nombre y Apellido</label>
                    <input type="text" name="nombre" size='40' />
                    <label>Ciudad</label>
                    <input type='text' name='ciudad' size='40' />
                    <label>E-mail</label>
                    <input type='email' size='40' />
                    <label>Telefono</label>
                    <input type='text' size='40' />
                    <label>Area de Contacto</label>
                    <select>
                        <option value="1">General</option>
                        <option value="2">Donaciones</option>
                        <option value="3">Adopciones</option>
                        <option value="4">Voluntarios</option>
                    </select><br/>
                    <p>Mensaje</p>
                    <textarea></textarea><br/>
                    <button>ENVIAR</button>
                </form>
            </aside>
        </main>
    )
}

export default Contacto