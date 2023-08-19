import { element } from "prop-types";
import React, {useState} from "react";

const TodoList = () => {

    const [listaTareas, setTareas] = useState([])

    function agregarTarea(e) {
        e.preventDefault()
        let tarea = document.getElementById("tarea").value
        setTareas(listaTareas => [...listaTareas, tarea])
        document.getElementById("form").reset()
    }

    const eliminarTarea = (posicionTarea) => {
            const listaTareasModificada = [...listaTareas];
            listaTareasModificada.splice(posicionTarea, 1);
            setTareas(listaTareasModificada)
    }

	return (
		<>

            <h2 className="todoList_title">todos</h2>
            <div className="card todoList_content" style={{width: '18em'}}>
                <ul className="list-group list-group-flush text-center">
                    <li className="list-group-item">
                        <form id="form" onSubmit={agregarTarea}>
                            <input type="text" class="form-control" placeholder="Tarea" aria-label="Tarea" aria-describedby="basic-addon1" id="tarea"/>
                        </form>
                    </li>
                    {listaTareas.map((element, index) => {
                        return (
                            <li className="list-group-item d-flex justify-content-center todo_list_task" key={index}>
                                <p className="me-3">{element}</p>
                                <div className="todoList_delete" onClick={() => eliminarTarea(index)}>X</div>
                            </li>
                        )
                    })}
                    <li className="list-group-item">
                        {listaTareas.length + " tareas faltantes"}
                    </li>
                </ul>
            </div>
		</>
	);
};

export default TodoList;
