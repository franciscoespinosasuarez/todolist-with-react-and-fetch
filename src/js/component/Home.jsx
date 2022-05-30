import React from "react";
import { useState } from "react";
import Form from "./Form/Form.jsx";
import DisplayedList from "./DisplayedLIst/DisplayedList.jsx";
//create your first component
const Home = () => {
	const [list, setList] = useState([]);
	return (
		<div className="container">
			<div>
				<h1>To-do list</h1>
			</div>
			<div>
				<Form list={list} setList={setList} />
				<DisplayedList list={list} setList={setList} />
			</div>
		</div>
	);
};

export default Home;
