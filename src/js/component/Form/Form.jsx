import React from "react";
import { useState } from "react";

function Form({ list, setList }) {
	const [task, setTask] = useState("");

	const generarID = () => {
		const random = Math.random().toString(36).substring(2);
		const fecha = Date.now().toString(36);

		return fecha + random;
	};

	//FUNCION INTRO TAREA
	function handleSubmit(e) {
		e.preventDefault();
		if (task !== "") {
			const object = {
				task: task,
				id: generarID(),
			};

			setList([...list, object]);
			setTask("");

			console.log(object);
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
