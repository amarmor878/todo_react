import React, { useState } from "react";

//Componente para agregar una tarea a la lista
const TareaAgregar = ({ addTarea }) => {
  const [inputUsuario, setInputUsuario] = useState();

  //Funcion para manejar el input del usuario
  const handleOnChange = (e) => {
    setInputUsuario(e.currentTarget.value);
  };

  //Funcion para manejar el submit del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputUsuario.trim() !== "") {
      addTarea(inputUsuario);
      setInputUsuario("");
    }
  };

  //Devuelve el formulario para agregar una tarea
  return (
    <div style={{ margin: "20px" }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Agregar tarea"
          value={inputUsuario}
          onChange={handleOnChange}
        ></input>
        <button>Agregar</button>
      </form>
    </div>
  );
};

export default TareaAgregar;
