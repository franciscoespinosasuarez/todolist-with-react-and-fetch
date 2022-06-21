import React from "react";
import { useState } from "react";
import Form from "./Form/Form.jsx";
import DisplayedList from "./DisplayedLIst/DisplayedList.jsx";
import NoTask from "./NoTask/NoTask.jsx";
//create your first component
const Home = () => {
	const [list, setList] = useState([]);
	const [tareaApi, setTareaApi] = useState([]);
	return (
		<div className="container">
			<div>
				<h1>To-do list</h1>
			</div>
			<div>
				<Form tareaApi={tareaApi} setTareaApi={setTareaApi} />
				<DisplayedList tareaApi={tareaApi} setTareaApi={setTareaApi} />
				<NoTask tareaApi={tareaApi} />
			</div>
		</div>
	);
};

export default Home;
