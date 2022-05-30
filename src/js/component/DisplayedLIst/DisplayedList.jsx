import React from "react";
import NoTask from "../NoTask/NoTask.jsx";

function DisplayedList({ list, setList }) {
	return (
		<div className="list-container">
			<NoTask list={list} />

			{list.map((task) => {
				return (
					<p id={task.id} className="element-list">
						<button
							onClick={function deleteTask(e) {
								console.log(e.target.parentElement.id);
								const listaActualizada = list.filter(
									(task) =>
										task.id !== e.target.parentElement.id
								);
								setList(listaActualizada);
							}}
							className="delete-task-button">
							X
						</button>
						{task.task}
					</p>
				);
			})}
		</div>
	);
}

export default DisplayedList;
