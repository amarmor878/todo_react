import React from "react";
import TareaItem from "./TareaItem.js";

//Componente para mostrar la lista de tareas
const TareasList = ({ tareas, onComplete, onDeleteItem }) => {
  return (
    <div>
      {tareas.map((tarea, index) => (
        <TareaItem key={`todo-${index}`} tarea={tarea} onComplete={onComplete} onDeleteItem={onDeleteItem} />
      ))}
    </div>
  );
};

export default TareasList;
