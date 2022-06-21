async function getUser() {
	/*try {
		const response = await fetch(
			`https://assets.breatheco.de/apis/fake/todos/user/franespinosa`
		);
		const data = await response.json();
		console.log(data);
		return data;
	} catch (error) {
		console.log(error);
	}*/
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
			console.log(res1);
			return res1;
		})
		.catch((err) => {
			console.log({ err });
		});
}

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

export default { getUser, updateUser };
