import { useState , useEffect } from "react";
import Card from 'react-bootstrap/Card';
import {data} from "./data.js";
import { Link } from "react-router-dom";


const Rescatados = () => {
    const [jsonData, setJsonData] = useState([]);

    const getDatos = new Promise((resolve, reject) => {
        resolve(data.length > 0 ? data : reject("No hay datos"));
    })

    useEffect(() => {
        getDatos
        .then((res)=> setJsonData(res))
        .catch((error)=> console.error(error))
        console.log(jsonData)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    //Enlace no habilitado para el boton adoptar
    return (
        <div className="container_rescatados">
            {jsonData.map((item) => {
                return (
                    <div>
                        <Link to='/Contacto'>
                        <Card className="container_rescatados--card" key={item.id}>
                            <Card.Img alt="error en cargar foto de perro en adopcion" className="img" variant="top" src={item.foto} />
                            <Card.Body>
                                <Card.Title id="title"><strong>{item.nombre}</strong></Card.Title>
                                <Card.Title id="title"><strong>Edad:</strong> {item.edad}</Card.Title>
                                <Card.Title id="title"><strong>Rescatado en:</strong> {item.rescatado}</Card.Title>
                                <button>Adoptar</button>
                            </Card.Body>
                        </Card>
                        </Link>
                    </div>
                )
            })}
        </div>
    )

};

export default Rescatados