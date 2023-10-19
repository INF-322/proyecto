function Index() {
  const data = {
    "procesos":[
        {
            "sigla": "INF-110",
            "nombre": "Fisica General 1", 
            "tipo": "Laboratorio",
            "postulantes": 5,
            "cupos": 5,
        },
        {
            "sigla": "INF-110",
            "nombre": "Fisica General 1", 
            "tipo": "Catedra",
            "postulantes": 3,
            "cupos": 3,
        },
        {
            "sigla": "INF-120",
            "nombre": "Fisica General 2", 
            "tipo": "Laboratorio",
            "postulantes": 8,
            "cupos": 6,
        },
        {
            "sigla": "INF-120",
            "nombre": "Fisica General 2", 
            "tipo": "Catedra",
            "postulantes": 5,
            "cupos": 5,
        },
    ]
};

const datos = data.procesos;

    return (
      <div className="flex items-center justify-center p-5">
      <div className="px-4 py-6 rounded-2xl grow bg-white flex flex-col max-w-[1440px] gap-6">
        <div className=" text-5xl font-medium text-center">Procesos activos</div>
        <div className="flex flex-col gap-5 px-3">
          <div class="flex h-16 px-5 items-center border-b-[3px] border-[#623280]">
            <div className="text-[#422257] text-2xl font-bold w-[150px]">Sigla</div>
            <div className="text-[#422257] text-2xl font-bold grow  w-[150px]">Nombre</div>
            <div className="text-[#422257] text-2xl font-bold w-[250px]">Tipo</div>
            <div className="text-[#422257] text-2xl text-right font-bold w-[150px]">Postulantes</div>
            <div className="text-[#422257] text-2xl text-right font-bold w-[150px]">Cupos</div>
          </div>
          {datos.map(proceso => (
          <div class="flex px-5 items-center h-[70px]">
            <div className="text-2xl font-medium gap-3 items-center w-[150px] flex">
              <div>{ proceso.sigla }</div>
            </div>
            <div className="text-2xl gap-3 grow items-center flex">
              <div> { proceso.nombre} </div>
            </div>
            <div className="text-2xl gap-3 items-center  flex  w-[250px]">
              <div> { proceso.tipo}</div>
            </div>
            <div className="text-2xl gap-3 items-center justify-end flex w-[150px]">
              <div> {proceso.postulantes}</div>
            </div>
            <div className="text-2xl gap-3 items-center justify-end flex w-[150px]">
              <div>{proceso.cupos}</div>
            </div>
          </div>
          ))}
        </div>
      </div>
      </div>
    );
  }
  
  export default Index;
  