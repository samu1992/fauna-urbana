import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const Footer = () => {
  return (
    <main className="container_footer">
      <section>
        <h3 id='title'>LEGAL</h3>
        <ul>
          <li>Nuestros Datos</li>
          <li>Terminos y Condiciones</li>
          <li>Politica de Cookies</li>
          <li>Politica de Privacidad</li>
          <li>Seleccionar Pais</li>
          <li id='container_footer__6'>Reclamos</li>
        </ul>
      </section>
      <section>
        <h3 id='title'>FU</h3>
        <p>FAUNA URBANA (FU)<br /> es una asociación civil<br />
          sin fines de lucro<br />
          abocada a difundir,<br />
          proteger y promover<br />
          los derechos de los<br />
          animales.</p>
      </section>
      <section className='container_footer--form'>
        <h3 id='title'>MAILING</h3>
        <Form>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Recibí las novedades en tu mail!</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Button variant="primary" type="submit">
            SUSCRIBIRME!
          </Button>
        </Form>
      </section>
      <section>
        <h3 id='title'>MENU</h3>
        <ul>
          <li>Inicio</li>
          <li>Contacto</li>
          <li>Donaciones</li>
          <li>Quienes Somos</li>
        </ul>
      </section>
      <section className='container_footer--networks'>
        <h3 id='title'>SEGUINOS EN:</h3>
        <div className='container_footer__networks--links'>
          <a id='networks' target='_blank' rel="noreferrer"  href="https://www.instagram.com/faunaurbanaba/"><i className=" fab fa-instagram"></i></a>
          <a id='networks' href="."><i className="fab fa-facebook"></i></a>
          <a id='networks' href="."><i className="fab fa-twitter"></i></a>
        </div>
      </section>
    </main>
  )
}
export default Footer
