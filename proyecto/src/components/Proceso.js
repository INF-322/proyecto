import { React } from 'react';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';

export default function Proceso() {

    function submit () {
        let asignatura = document.querySelector('select[name="asignatura"]').value
        let n_ayudantes = document.querySelector('input[name="n_ayudantes"]').value
        let h_catedra = document.querySelector('input[name="h_catedra"]').value
        let h_lab = document.querySelector('input[name="h_lab"]').value
        let h_contacto = document.querySelector('input[name="h_contacto"]').value
        let tipo = document.querySelector('input[name="tipo"]').value

        let data = {
            "sigla": asignatura,
            "cupos": n_ayudantes,
            "tipo": tipo,
            "h_catedra": h_catedra,
            "h_lab": h_lab,
            "h_contacto": h_contacto,
            "postulantes": 0,
        }

        const ramos = JSON.parse(localStorage.getItem('ramos'))

        data.nombre = ramos.find(ramo => ramo.sigla === asignatura).nombre

        let procesos = JSON.parse(localStorage.getItem('procesos'))

        if (procesos == null) {
            procesos = []
        }

        procesos = [...procesos, data]

        localStorage.setItem('procesos', JSON.stringify(procesos))

        window.location.href = '/'
    }

    return (
        <div className='bg-[#F7F7F8]'>
            <Navbar />
                <div className="flex items-center justify-center p-5">  
                    <div className="px-4 py-6 rounded-2xl grow bg-white flex flex-col max-w-[1440px] gap-6">
                        <form className='flex flex-col gap-6' >
                            <div className=" text-5xl font-medium text-center">Iniciar proceso</div>
                            <div className="grid grid-cols-12 gap-3 w-full  justify-center items-center"> 
                                <div className="text-right text-2xl font-medium col-span-6 ">
                                    Asignatura
                                </div>
                                <select name="asignatura" className='rounded-[3px] col-span-6 w-48 grow border bg-white px-4 border-[#7e7e7e] h-[40px]'>
                                    <option value="FIS-110">FIS-110</option>
                                    <option value="FIS-120">FIS-120</option>
                                    <option value="FIS-130">FIS-130</option>
                                    <option value="FIS-140">FIS-140</option>
                                </select>
                            </div>
                            <div className="grid grid-cols-12 gap-3 w-full  justify-center items-center"> 
                                <div className="text-right text-2xl font-medium col-span-6 ">
                                    Cantidad de ayudantes:
                                </div>
                                <input type="text" name="n_ayudantes" className='rounded-[3px] col-span-6 w-14 grow border border-[#7e7e7e] h-[40px]' />
                            </div>
                            <div className="grid grid-cols-12 gap-3 w-full  justify-center items-center"> 
                                <div className="text-right text-2xl font-medium col-span-6 ">
                                    Horas de catedra:
                                </div>
                                <input type="text" name="h_catedra" className='rounded-[3px] col-span-6 w-14 grow border border-[#7e7e7e] h-[40px]' />
                            </div>
                            <div className="grid grid-cols-12 gap-3 w-full  justify-center items-center"> 
                                <div className="text-right text-2xl font-medium col-span-6 ">
                                    Horas de laboratorio:
                                </div>
                                <input type="text"  name="h_lab" className='rounded-[3px] col-span-6 w-14 grow border border-[#7e7e7e] h-[40px]' />
                            </div>
                            <div className="grid grid-cols-12 gap-3 w-full  justify-center items-center"> 
                                <div className="text-right text-2xl font-medium col-span-6 ">
                                    Horas de contacto:
                                </div>
                                <input type="text"  name="h_contacto" className='rounded-[3px] col-span-6 w-14 grow border border-[#7e7e7e] h-[40px]' />
                            </div>
                            <div className="grid grid-cols-12 gap-3 w-full  justify-center items-center"> 
                                <div className="text-right text-2xl font-medium col-span-6 ">
                                    Tipo:
                                </div>
                                <input type="text" name="tipo" className='rounded-[3px] col-span-6 w-96 grow border border-[#7e7e7e] h-[40px]' />
                            </div>
                        </form>
                        <button className='postulaciones-button' onClick={submit} >Crear proceso</button>
                    </div>
                </div>
            <Footer/>
        </div>
    )
}