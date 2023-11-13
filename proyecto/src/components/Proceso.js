/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { fakerES_MX as faker } from '@faker-js/faker';
import { Icon } from '@iconify/react';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';

export default function Proceso() {
  function submit() {
    const asignatura = document.querySelector('select[name="asignatura"]').value;
    const n_ayudantes = document.querySelector('input[name="n_ayudantes"]').value;
    const h_catedra = document.querySelector('input[name="h_catedra"]').value;
    const h_lab = document.querySelector('input[name="h_lab"]').value;
    const h_contacto = document.querySelector('input[name="h_contacto"]').value;
    const tipo = document.querySelector('input[name="tipo"]').value;

    const nPostulantes = faker.string.numeric(1);

    const data = {
      sigla: asignatura,
      cupos: n_ayudantes,
      tipo,
      h_catedra,
      h_lab,
      h_contacto,
      postulantes: nPostulantes,
    };

    const nuevosPostulantes = {};

    for (let i = 0; i < nPostulantes; i += 1) {
      nuevosPostulantes[i] = {
        id: i,
        name: faker.person.fullName(),
        nota: faker.string.numeric(2),
        summary: 'ver',
      };
    }

    const ramos = JSON.parse(localStorage.getItem('ramos'));
    data.nombre = ramos.find((ramo) => ramo.sigla === asignatura).nombre;

    let procesos = JSON.parse(localStorage.getItem('procesos'));

    if (procesos == null) {
      procesos = [];
    }

    const lastId = procesos.length > 0 ? procesos[procesos.length - 1].id : 0;

    data.id = lastId + 1;

    procesos = [...procesos, data];

    localStorage.setItem('procesos', JSON.stringify(procesos));

    let postulantes = JSON.parse(localStorage.getItem('postulantes'));

    if (postulantes == null) {
      postulantes = [];
    }

    postulantes[lastId + 1] = nuevosPostulantes;

    localStorage.setItem('postulantes', JSON.stringify(postulantes));

    window.location.href = '/';
  }

  return (
    <div className="bg-[#F7F7F8] min-h-screen flex flex-col">
      <Navbar />
      <div className="flex items-center justify-center p-5">
        <div className="p-6 rounded-xl grow bg-white flex flex-col max-w-[1440px] gap-6">
          <div className="flex items-center ">
            <a href="/" className="flex items-center">
              <Icon icon="mdi:arrow-left" className="w-6 h-6" />
              <div className="text-xl text-opacity-80 px-5 font-medium text-center">
                Nuevo proceso
              </div>
            </a>
          </div>
          <form className="grid grid-cols-12 divide-x">
            <div className="col-span-8 flex flex-col gap-6  px-4">
              <div className="grid grid-cols-12 gap-3 w-full  justify-center items-center">
                <div className="text-left font-medium col-span-6 ">
                  Asignatura
                </div>
                <select name="asignatura" className="rounded px-3 col-span-6 w-48 grow border bg-white border-[#7e7e7e] h-[40px]">
                  <option value="FIS-110">FIS-110</option>
                  <option value="FIS-120">FIS-120</option>
                  <option value="FIS-130">FIS-130</option>
                  <option value="FIS-140">FIS-140</option>
                </select>
              </div>
              <div className="grid grid-cols-12 gap-3 w-full  justify-center items-center">
                <div className="text-left font-medium col-span-6 ">
                  Tipo:
                </div>
                <input type="text" name="tipo" className="rounded px-3 col-span-6 grow border border-[#7e7e7e] h-[40px]" />
              </div>
              <div className="grid grid-cols-12 gap-3 w-full  justify-center items-center">
                <div className="text-left font-medium col-span-6 ">
                  Cantidad de ayudantes
                </div>
                <input type="text" name="n_ayudantes" className="rounded px-3 col-span-6 w-14 grow border border-[#7e7e7e] h-[40px]" />
              </div>
            </div>
            <div className="col-span-4 flex flex-col gap-6 px-4">

              <div className="grid grid-cols-12 gap-3 w-full  justify-center items-center">
                <div className="text-left font-medium col-span-6 ">
                  Horas de catedra
                </div>
                <input type="text" name="h_catedra" className="rounded px-3 col-span-6 w-14 grow border border-[#7e7e7e] h-[40px]" />
              </div>
              <div className="grid grid-cols-12 gap-3 w-full  justify-center items-center">
                <div className="text-left font-medium col-span-6 ">
                  Horas de laboratorio
                </div>
                <input type="text" name="h_lab" className="rounded px-3 col-span-6 w-14 grow border border-[#7e7e7e] h-[40px]" />
              </div>
              <div className="grid grid-cols-12 gap-3 w-full  justify-center items-center">
                <div className="text-left font-medium col-span-6 ">
                  Horas de contacto
                </div>
                <input type="text" name="h_contacto" className="rounded px-3 col-span-6 w-14 grow border border-[#7e7e7e] h-[40px]" />
              </div>
            </div>
          </form>
          <button className="rounded-xl bg-[#623280] text-white py-3" type="submit" onClick={submit}>Crear proceso</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
