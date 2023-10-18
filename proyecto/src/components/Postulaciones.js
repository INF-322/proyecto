import { React } from 'react';

export default function Postulaciones() {
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
        <div className='postulaciones-outside'>
        <div className='postulaciones-container'>
            <t1 className='postulacion-title'>Postulaciones - Física General 1 - Cátedra</t1>
            <table className='postulantes-table'>
                <thead>
                    <tr className='tabla-titles'>
                    <th id='title-name'>Nombre</th>
                    <th id='title-grade'>Nota de aprobación</th>
                    <th id='title-summary'>Resumen Académico</th>
                    <th id='title-check'>Seleccionado</th>
                    </tr>
                </thead>
                <tbody>
                    {datos.map(postulantes => (
                    <tr key={postulantes.name} className='table-row'>
                        <td id='postulante-name'>
                            <a href>{postulantes.name}</a>
                        </td>
                        <td id='postulante-nota'>
                            <a>{postulantes.nota}</a>
                        </td>
                        <td id='postulante-summary' >
                            <a href='/'>{postulantes.summary}</a>
                        </td>
                        <td id='postulante-check'>
                            <input type='checkbox'></input>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
            <button className='postulaciones-button' href='/'>Editar Proceso</button>
        </div>
        </div>
    )
}
