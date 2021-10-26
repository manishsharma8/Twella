import { useEffect } from 'react';
import axios from 'axios';
import Search from './Search';

const App = () => {
	useEffect(() => {
		const fetchTweet = async () => {
			const res = await axios.get('/1450057833655902211');
			console.log(res);
		};

		fetchTweet();
	}, []);

	return (
		<div>
			<Search />
		</div>
	);
};

export default App;
