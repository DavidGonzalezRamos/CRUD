import React from "react";
import { useEffect } from "react";

const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
  //Hacemos destructuring para pasarle cada dato
  const { nombre, propietario, email, fecha, sintomas, id } = paciente;
  const handleEliminar = () => {
    const respuesta = confirm("Deseas elimar el paciente??");
    if (respuesta) {
      eliminarPaciente(id);
    }
  };

  return (
    <div className="bg-gray-300 shadow-md mx-5 my-10 px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: {""}
        <span className="font-normal normal-case">{nombre}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: {""}
        <span className="font-normal normal-case">{propietario}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: {""}
        <span className="font-normal normal-case">{email}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha de Alta: {""}
        <span className="font-normal normal-case">{fecha}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas: {""}
        <span className="font-normal normal-case">{sintomas}</span>
      </p>

      <div className="flex justify-between mt-8">
        <button
          type="button"
          className="bg-cyan-600 hover:bg-cyan-700 py-2 px-10 rounded-lg font-bold uppercase"
          onClick={() => setPaciente(paciente)}
        >
          Editar
        </button>

        <button
          type="button"
          className="bg-red-600 hover:bg-red-700 py-2 px-10 rounded-lg font-bold uppercase"
          onClick={handleEliminar}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Paciente;
