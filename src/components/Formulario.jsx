import { useState, useEffect } from "react";
import Error from "./Error";

//De parametros agregamos los props desde la app.jsx con destructuring
const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);

  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);

    return random + fecha;
  };

  //Funcion para saber que va hacer cuando se envie el formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    //Validacion
    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      //console.log("campo vacio");
      setError(true);
      return;
    }

    setError(false);

    //objeto de paciente
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
    };

    //Actualizar paciente
    if (paciente.id) {
      //Editando registro
      objetoPaciente.id = paciente.id;
      const pacientesActualizados = pacientes.map((pacienteState) =>
        pacienteState.id === paciente.id ? objetoPaciente : pacienteState
      );
      setPacientes(pacientesActualizados);
      setPaciente({});
    } else {
      //Nuevo registro
      objetoPaciente.id = generarId();
      //Le pasamos lo que se vaya agregando a pacientes sin modificar el arreglo original
      //por eso ...pacientes que eso siginifica que hace una copia del arreglo ya que es un metodo inmutable
      setPacientes([...pacientes, objetoPaciente]);
    }

    //Reiniciar formulario
    setNombre("");
    setPropietario("");
    setEmail("");
    setFecha("");
    setSintomas("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

      <p className="text-xl mt-5 text-center mb-10">
        Añade pacientes {""}
        <span className="font-bold text-indigo-700">Administralos</span>
      </p>

      {/* Formulario*/}
      <form
        onSubmit={handleSubmit}
        className="bg-gray-300 shadow-md rounded-lg py-10 px-5 mb-10"
      >
        {error && (
          <Error>
            <p>Uno o mas campos vacios</p>
          </Error>
        )}

        <div className="mb-5">
          <label
            htmlFor="mascota"
            className="block uppercase text-gray-700 font-bold"
          >
            Nombre Mascota
          </label>
          <input
            id="mascota"
            type="text"
            placeholder="Nombre de la mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block uppercase text-gray-700 font-bold"
          >
            Nombre Propietario
          </label>
          <input
            id="propietario"
            type="text"
            placeholder="Nombre del propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block uppercase text-gray-700 font-bold"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Contacto"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block uppercase text-gray-700 font-bold"
          >
            Alta
          </label>
          <input
            id="alta"
            type="date"
            placeholder=""
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block uppercase text-gray-700 font-bold"
          >
            Sintomas
          </label>
          <textarea
            placeholder="Describe los sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>
        <input
          type="submit"
          className="bg-indigo-700 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-colors"
          value={paciente.id ? "editar paciente" : "agregar paciente"}
        />
      </form>
    </div>
  );
};

export default Formulario;
