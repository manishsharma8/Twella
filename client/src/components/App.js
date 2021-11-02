import { useEffect, useRef, useState } from 'react';
import * as htmlToImage from 'html-to-image';
import axios from 'axios';

import Search from './Search';
import Card from './Card';
import ActionDrawer from './ActionDrawer';

const colors = [
	'from-yellow-400 via-red-500 to-pink-500',
	'from-blue-400 to-blue-600',
	'from-purple-400 to-blue-600',
	'from-yellow-400 to-green-600',
	'from-purple-200 to-blue-400',
	'from-pink-600 to-gray-900',
];

const App = () => {
	const [data, setData] = useState([]);
	const [selectedColor, setSelectedColor] = useState(colors[0]);
	const printRef = useRef();

	useEffect(() => {
		let id = `1028131675602079747`;
		fetchTweet(id);
	}, []);

	const fetchTweet = async (id) => {
		const { data } = await axios.get(`api/${id}`);
		if (!data.errors) {
			setData(data);
		} else {
		}
	};

	const handleChangeColor = (colorString) => {
		setSelectedColor(colorString);
	};

	const handleImageDownload = () => {
		const element = printRef.current;
		htmlToImage.toPng(element).then(function (dataUrl) {
			var link = document.createElement('a');
			link.download = 'my-image-name.png';
			link.href = dataUrl;
			link.click();
		});
	};

	return (
		<div className="m-10">
			<Search fetchTweet={fetchTweet} />
			{data.data && (
				<Card forwardRef={printRef} color={selectedColor} data={data} />
			)}
			<ActionDrawer
				colors={colors}
				handleChangeColor={handleChangeColor}
				handleImageDownload={handleImageDownload}
			/>
		</div>
	);
};

export default App;
