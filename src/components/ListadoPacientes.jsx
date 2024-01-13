import React from "react";
import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-center text-3xl">Listado Pacientes</h2>
          <p className="mt-5 mb-10 text-xl text-center">
            Adiminstra tus {""}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>

          {/*LISTADO: Itera dentro del componente paciente 
          para que muestre todos los pacientes guardados 
          se lo pasamos por medio de props*/}
          {pacientes.map((paciente) => (
            <Paciente
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-center text-3xl">No hay pacientes</h2>
          <p className="mt-5 mb-10 text-xl text-center">
            Agregalos {""}
            <span className="text-indigo-600 font-bold">Y se mostran aqui</span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListadoPacientes;
