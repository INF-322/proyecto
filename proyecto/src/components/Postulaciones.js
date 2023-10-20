import { React } from 'react';
import { useParams } from "react-router-dom";
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';

export default function Postulaciones() {

    function submit() {
        // select all input checked and replace by an "OK" message

        let inputs = document.querySelectorAll('input[type="checkbox"]:checked')

        for (let i = 0; i < inputs.length; i++) {
            inputs[i].parentNode.innerHTML = 'Seleccionado'
        }
    }

    let { id } = useParams(); 

    const data = {
        "postulantes":[
            {
                "name": "Pedro Juan Perez Gonzalez",
                "nota": "55",
                "summary": "ver"
            },
            {
                "name": "Tomás Soto",
                "nota": "99",
                "summary": "ver"
            },
            {
                "name": "Federico Sansano",
                "nota": "67",
                "summary": "ver"
            },
            {
                "name": "María Fernández",
                "nota": "74",
                "summary": "ver"
            },
            {
                "name": "Pablo Pascal",
                "nota": "85",
                "summary": "ver"
            }
        ]
    };

    const datos = data.postulantes;

    return (
        <div>
            <Navbar />
        <div className='postulaciones-outside'>
        <div className='postulaciones-container'>
            <t1 className='postulacion-title'>Postulaciones - Física General 1 - Cátedra</t1>
            <table className='postulantes-table'>
                <thead className='w-full'>
                    <tr className='tabla-titles'>
                    <th id='title-name' className="text-left">Nombre</th>
                    <th id='title-grade'>Nota de aprobación</th>
                    <th id='title-summary'>Resumen Académico</th>
                    <th id='title-check'>Seleccionado</th>
                    </tr>
                </thead>
                <tbody className='w-full'>
                    {datos.map(postulantes => (
                        <tr key={postulantes.name} className='table-row'>
                        <td id='postulante-name'>
                            <a>{postulantes.name}</a>
                        </td>
                        <td id='postulante-nota'>
                            <a className="text-right w-full">{postulantes.nota}</a>
                        </td>
                        <td id='postulante-summary' >
                            <a >{postulantes.summary}</a>
                        </td>
                        <td id='postulante-check'>
                            <input type='checkbox' className='h-10 w-10'></input>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
            <button className='postulaciones-button' onClick={submit}>Guardar</button>
        </div>
        </div>
        <Footer />
                        </div>
    )
}