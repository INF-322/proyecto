import { React } from 'react';

export default function Proceso() {
    return (
    <div className='postulaciones-outside'>
    <div className='postulaciones-container'>
        <t1 className='postulacion-title'>Iniciar proceso - Física General 1</t1>
        <table>
        <tr>
            <td>Cantidad de ayudantes:</td>
            <input type="text" class="input-wide" />
        </tr>
        <tr>
            <td>Horas de cátedra:</td>
            <input type="text" class="input-narrow" />
        </tr>
        <tr>
            <td>Horas de laboratorio:</td>
            <input type="text" class="input-medium" />
        </tr>
        <tr>
            <td>Horas de contacto:</td>
            <input type="text" class="input-medium" />
        </tr>
        <tr>
            <td>Extra:</td>
            <input type="text" class="input-medium" />
        </tr>
        <tr>
            <td>Ayudantes de corrección:</td>
            <input type="text" class="input-medium" />
        </tr>
        </table>

        <button className='postulaciones-button' href='/'>Continuar</button>
    </div>
    </div>
    )
}
