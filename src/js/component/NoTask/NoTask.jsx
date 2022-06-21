import React from "react";

function NoTask({ tareaApi }) {
	if (tareaApi.length === 0) {
		return (
			<div>
				<p className="no-task-p">
					This looks empty. Write down your first task!
				</p>
			</div>
		);
	} else {
		return <></>;
	}
}

export default NoTask;
