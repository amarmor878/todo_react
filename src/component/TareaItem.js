import React from "react";

//Componente para mostrar una tarea
const TareaItem = ({ tarea, onComplete, onDeleteItem }) => {
  //Funcion para cambiar el estilo de la tarea dependiendo de su estado
  const getStyle = () => {
    return {
      textDecoration: tarea.completed ? "line-through" : "none",
      margin: "20px",
      border: "1px #ccc solid",
      backgroundColor: "#CCF7E3",
    };
  };

  //Devuelve la tarea con su checkbox y boton para eliminarla
  return (
    <div style={getStyle()}>
      <input
        type="checkbox"
        checked={tarea.completed}
        onChange={() => onComplete(tarea.id)}
      ></input>
      {tarea.task}
      <button className="add-btn" onClick={() => onDeleteItem(tarea.id)}>
        X
      </button>
    </div>
  );
};
export default TareaItem;
