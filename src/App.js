import { useState } from "react";
import data from "./data.json";
import TareasList from "./component/TareasList.js";
import TareaAgregar from "./component/TareaAgregar.js";
import "./App.css";

//Componente principal
function App() {
  const [tareas, setTareas] = useState(data);

  //Funcion para completar una tarea y cambiar su estado
  const onComplete = (id) => {
    setTareas(
      tareas.map((tarea) => {
        return tarea.id === Number(id)
          ? { ...tarea, completed: !tarea.completed }
          : { ...tarea };
      })
    );
  };

  //Funcion para eliminar una tarea de la lista
  const onDeleteItem = (id) => {
    setTareas(tareas.filter((tarea) => tarea.id !== Number(id)));
  };

  //Funcion para agregar una tarea a la lista
  const addTarea = (nuevaTarea) => {
    const newTarea = {
      id: tareas.length + 1,
      task: nuevaTarea,
      completed: false,
    };
    setTareas([...tareas, newTarea]);
  };

  //Devuelve la lista de tareas.
  return (
    <div className="container">
      <h1>Lista de tareas</h1>
      <TareaAgregar addTarea={addTarea} />
      <TareasList
        tareas={tareas}
        onComplete={onComplete}
        onDeleteItem={onDeleteItem}
      />
    </div>
  );
}

export default App;
