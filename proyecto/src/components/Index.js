import React from 'react';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';

function Index() {
  const ramos = [
    {
      sigla: 'FIS-110',
      nombre: 'Fisica General 1',
    },
    {
      sigla: 'FIS-120',
      nombre: 'Fisica General 2',
    },
    {
      sigla: 'FIS-130',
      nombre: 'Fisica General 3',
    },
    {
      sigla: 'FIS-140',
      nombre: 'Fisica General 4',
    },
  ];

  localStorage.setItem('ramos', JSON.stringify(ramos));

  let procesos = JSON.parse(localStorage.getItem('procesos'));

  if (procesos == null) {
    procesos = [
      {
        id: 1,
        sigla: 'FIS-110',
        nombre: 'Fisica General 1',
        tipo: 'Laboratorio',
        postulantes: 5,
        cupos: 5,
      },
      {
        id: 2,
        sigla: 'FIS-110',
        nombre: 'Fisica General 1',
        tipo: 'Catedra',
        postulantes: 3,
        cupos: 3,
      },
      {
        id: 3,

        sigla: 'FIS-120',
        nombre: 'Fisica General 2',
        tipo: 'Laboratorio',
        postulantes: 8,
        cupos: 6,
      },
      {
        id: 4,
        sigla: 'FIS-120',
        nombre: 'Fisica General 2',
        tipo: 'Catedra',
        postulantes: 5,
        cupos: 5,
      },
    ];

    localStorage.setItem('procesos', JSON.stringify(procesos));
  }

  const datos = procesos;

  return (
    <div className="bg-[#F7F7F8] min-h-screen flex flex-col">
      <Navbar />
      <div className="flex items-center justify-center p-5">
        <div className="p-6 rounded-xl grow bg-white flex flex-col max-w-[1440px] gap-6">
          <div className="flex items-baseline ">
            <div className="text-xl text-opacity-80 px-5 font-medium text-center">
              Procesos activos
            </div>
            <a className="ml-auto bg-[#623280] px-4 py-2 text-white rounded" href="iniciar-proceso">
              Iniciar proceso
            </a>
          </div>

          <div className="flex flex-col gap-5 px-0">
            <div className="flex h-16 px-5 items-center border-b-[3px] border-[#623280]">
              <div className="text-[#422257] font-bold w-[150px]">Sigla</div>
              <div className="text-[#422257] font-bold grow w-[150px]">Nombre</div>
              <div className="text-[#422257] font-bold w-[250px]">Tipo</div>
              <div className="text-[#422257] text-right font-bold w-[150px]">Postulantes</div>
              <div className="text-[#422257] text-right font-bold w-[150px]">Cupos</div>
              <div className="text-[#422257] text-right font-bold w-[100px]" />
            </div>
            {datos.map((proceso) => (
              <a className="py-2 hover:bg-gray-200 transition-all" href={`postulaciones/${proceso.id}`}>
                <div className="flex px-4 items-center">
                  <div className="font-medium gap-3 items-center w-[150px] flex">
                    <div>{ proceso.sigla }</div>
                  </div>
                  <div className="gap-1 grow items-center flex">
                    <div>
                      {' '}
                      { proceso.nombre}
                      {' '}
                    </div>
                  </div>
                  <div className="gap-3 items-center  flex  w-[250px]">
                    <div>
                      {' '}
                      { proceso.tipo}
                    </div>
                  </div>
                  <div className="gap-3 items-center justify-end flex w-[150px]">
                    <div>
                      {' '}
                      {proceso.postulantes}
                    </div>
                  </div>
                  <div className="gap-3 items-center justify-end flex w-[150px]">
                    <div>{proceso.cupos}</div>
                  </div>

                  <div className="gap-3 items-center justify-end flex w-[100px]">
                    <div className="italic">detalles</div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Index;
