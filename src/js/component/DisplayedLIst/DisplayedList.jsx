import React from "react";
import NoTask from "../NoTask/NoTask.jsx";
import api from "../../../api.js";
import { useEffect } from "react";

function DisplayedList({ tareaApi, setTareaApi }) {
	//API OBTENER TAREAS USUARIO
	useEffect(() => {
		fetch(`https://assets.breatheco.de/apis/fake/todos/user/franespinosa`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((res1) => {
				console.log({ status: res1.status });
				return res1.json();
			})
			.then((res1) => {
				setTareaApi(res1);
			})
			.catch((err) => {
				console.log({ err });
			});
	}, []);
	//LLAMADA A LA API PARA BORRAR TAREAS(Actualizar listado sin tarea a borrar)
	const updateUser = (data) => {
		fetch(`https://assets.breatheco.de/apis/fake/todos/user/franespinosa`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then((res) => {
				console.log({ status: res.status });
				return res.json();
			})
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log({ err });
			});
	};

	return (
		<div className="list-container">
			<NoTask tareaApi={tareaApi} />

			{tareaApi.map((tarea) => (
				<p className="element-list">
					<button
						className="delete-task-button"
						onClick={function deleteTask(e) {
							let tareaABorrar =
								e.target.parentElement.textContent.slice(1);
							console.log(tareaABorrar);

							const listadoTareas = tareaApi.filter(
								(task) => task.label !== tareaABorrar
							);
							console.log(listadoTareas);
							updateUser(listadoTareas);
							setTareaApi(listadoTareas);
						}}>
						X
					</button>
					{tarea.label}
				</p>
			))}
		</div>
	);
}

export default DisplayedList;
