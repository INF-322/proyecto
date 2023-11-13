/* eslint-disable jsx-a11y/control-has-associated-label */

import { React } from 'react';
import { useParams } from 'react-router-dom';
import { fakerES_MX as faker } from '@faker-js/faker';
import { Icon } from '@iconify/react';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';

export default function Postulaciones() {
  let p = {};
  let { id } = useParams();
  let postulantes = JSON.parse(localStorage.getItem('postulantes'));
  function selectAll() {
    const value = document.querySelector('input[type="checkbox"]:not(.student)').checked;

    const inputs = document.querySelectorAll('input[type="checkbox"]:not(:disabled).student');

    for (let i = 0; i < inputs.length; i += 1) {
      inputs[i].checked = value;
    }
  }

  function submit() {
    const inputs = document.querySelectorAll('input[type="checkbox"].student:checked');
    postulantes = JSON.parse(localStorage.getItem('postulantes'));

    for (let i = 0; i < inputs.length; i += 1) {
      const postulanteId = inputs[i].getAttribute('data-id');
      inputs[i].parentNode.innerHTML = '<input class="h-5 w-5" disabled checked type="checkbox"></input>';

      if (postulantes[id][postulanteId]) {
        postulantes[id][postulanteId].seleccionado = true;
      }
    }

    localStorage.setItem('postulantes', JSON.stringify(postulantes));
  }

  id = Number(id);

  const procesos = JSON.parse(localStorage.getItem('procesos'));

  const proceso = procesos.find((pe) => pe.id === Number(id));

  if (postulantes == null) {
    postulantes = {};
  }

  if (!postulantes[id]) {
    postulantes[id] = {};

    for (let i = 0; i < proceso.postulantes; i += 1) {
      postulantes[id][i] = {
        id: i,
        name: faker.person.fullName(),
        nota: faker.string.numeric(2),
        seleccionado: false,
      };
    }

    localStorage.setItem('postulantes', JSON.stringify(postulantes));
  }

  p = Object.values(postulantes[id]);

  return (
    <div className="bg-[#F7F7F8] min-h-screen flex flex-col">
      <Navbar />
      <div className="flex items-center justify-center p-5">
        <div className="p-6 rounded-xl grow bg-white flex flex-col max-w-[1440px] gap-6">
          <div className="flex items-baseline ">
            <a href="/" className="flex items-center">
              <Icon icon="mdi:arrow-left" className="w-6 h-6" />
              <div className="text-xl text-opacity-80 px-5 font-medium text-center">
                Postulaciones -
                {' '}
                {proceso.nombre}
              </div>
            </a>
          </div>

          <div className="flex flex-col gap-5 px-0">
            <div className="flex h-16 px-5 items-center border-b-[3px] border-[#623280]">
              <div className="text-[#422257] w-10 flex items-center justify-start">
                <input type="checkbox" className="rounded h-5 w-5" onChange={selectAll} />
              </div>
              <div className="text-[#422257] font-bold grow ">Nombre</div>
              <div className="text-[#422257] font-bold text-right pr-10 w-[250px]">Nota de aprobacion</div>
              <div className="text-[#422257] font-bold text-center w-[200px]">Resumen academico</div>
            </div>
            {p.map((postulante) => (
              <div className="flex px-5 items-center">
                <div className=" item-center text-right w-10 flex justify-start">
                  <input
                    type="checkbox"
                    data-id={`${postulante.id}`}
                    className="bg-[#422257] rounded h-5 w-5 student"
                    disabled={postulante.seleccionado}
                    defaultChecked={postulante.seleccionado}
                  />
                </div>
                <div className=" items-center grow">
                  { postulante.name }
                </div>
                <div className="items-center text-right pr-10 w-[250px]">
                  { postulante.nota }
                </div>
                <div className="text-opacity-50 text-black justify-center w-[200px] flex gap-1 items-center ">
                  <span>
                    ver
                  </span>
                  <Icon icon="mdi:open-in-new" />
                </div>
              </div>
            ))}
          </div>
          <button onClick={submit} type="button" className="flex py-3 mt-10 justify-center rounded-xl bg-[#623280] text-white">
            Aprobar seleccionados
          </button>
        </div>
      </div>
      <Footer />
    </div>

  );
}
