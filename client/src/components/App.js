import { useEffect, useState } from 'react';
import axios from 'axios';
import Search from './Search';
import Card from './Card';

const App = () => {
	const [data, setData] = useState([]);
	// const [errors, setErrors] = useState([]);
	// const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		let id = `1450094859688103941`;
		fetchTweet(id);
	}, []);

	const fetchTweet = async (id) => {
		// setIsLoading(true);
		const { data } = await axios.get(`api/${id}`);
		if (!data.errors) {
			setData(data);
			// setErrors([]);
		} else {
			// setErrors(data.errors);
		}
		// setIsLoading(false);
	};

	return (
		<div className="m-10">
			<Search fetchTweet={fetchTweet} />
			{data.data && <Card data={data} />}
		</div>
	);
};

export default App;
