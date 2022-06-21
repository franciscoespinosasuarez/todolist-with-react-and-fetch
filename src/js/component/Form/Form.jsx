import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function Form({ tareaApi, setTareaApi }) {
	const [task, setTask] = useState("");

	//API ACTUALIZAR LISTA DE TAREAS

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

	//FUNCION INTRO TAREA
	function handleSubmit(e) {
		e.preventDefault();
		if (task !== "") {
			//objeto con tarea nueva
			const object = {
				label: task,
				done: false,
				//id: generarID(),
			};
			setTareaApi([...tareaApi, object]);
			const sumaTareas = [...tareaApi, object];

			updateUser(sumaTareas);

			//setList([...list, object]);
			setTask("");
		}
	}

	return (
		<div className="form">
			<form className="form">
				<input
					className="input-task"
					type="text"
					placeholder="Write a task"
					value={task}
					onChange={(e) => {
						setTask(e.target.value);
					}}
					onKeyDown={(e) => {
						if (e.key === "Enter") {
							handleSubmit(e);
						}
					}}
				/>
				<input
					className="button"
					type="submit"
					value="Add"
					onClick={(e) => {
						handleSubmit(e);
					}}
				/>
			</form>
		</div>
	);
}

export default Form;
