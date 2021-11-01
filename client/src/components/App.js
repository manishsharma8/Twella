import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import Search from './Search';
import Card from './Card';
import ActionDrawer from './ActionDrawer';
import html2canvas from 'html2canvas';

const App = () => {
	const [data, setData] = useState([]);
	const printRef = useRef();
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

	const handleImageDownload = async () => {
		const element = printRef.current;
		console.log(element);
		const canvas = await html2canvas(element, {
			allowTaint: true,
			useCORS: true,
		});

		const data = canvas.toDataURL('image/png');
		const link = document.createElement('a');
		if (typeof link.download === 'string') {
			link.href = data;
			link.download = 'image.png';

			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
		} else {
			window.open(data);
		}
	};

	return (
		<div className="m-10">
			<Search fetchTweet={fetchTweet} />
			{data.data && <Card forwardRef={printRef} data={data} />}
			<ActionDrawer handleImageDownload={handleImageDownload} />
		</div>
	);
};

export default App;
