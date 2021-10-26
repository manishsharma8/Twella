import { useEffect, useState } from 'react';
import axios from 'axios';
import Search from './Search';

const App = () => {
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		fetchTweet();
	}, []);

	const fetchTweet = async (id) => {
		setIsLoading(true);
		const res = await axios.get(`/${id}`);
		setIsLoading(false);
	};

	return (
		<div className="m-10">
			<Search fetchTweet={fetchTweet} />
		</div>
	);
};

export default App;
