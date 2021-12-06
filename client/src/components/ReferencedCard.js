import { useEffect, useState } from 'react';
import axios from 'axios';
import { alterImageQuality } from '../utils/alterImageQuality';
import { toDateString } from '../utils/toDateString';
import Icon from './icons/Icon';

const ReferencedCard = ({ id, cardLight }) => {
	const [data, setData] = useState([]);

	const fetchTweet = async (id) => {
		const { data } = await axios.get(`api/${id}`);
		if (!data.errors) {
			setData(data);
		} else {
		}
	};

	const NewlineText = ({ text }) => {
		let pattern = /http\S+/;
		text = text.replace(pattern, '');
		const newText = text.split('\n').map((str, index) => (
			<p key={index} className="leading-relaxed">
				{str}
			</p>
		));

		return newText;
	};

	useEffect(() => {
		fetchTweet(id);
	}, [id]);

	return data.data ? (
		<div
			className={`mt-3 border ${
				cardLight ? 'border-gray-300' : 'border-gray-700'
			} p-3 text-base rounded-lg`}
		>
			<div className="flex">
				<img
					className="rounded-full w-7 h-7"
					src={alterImageQuality(data.includes.users[0].profile_image_url)}
					alt="referencedtweetprofileimage"
				/>
				<span
					className={`ml-2 font-medium my-auto ${
						cardLight ? '' : 'text-gray-200'
					}`}
				>
					{data.includes.users[0].name}
				</span>
				{data.includes.users[0].verified ? (
					<span className="ml-1 my-auto">
						<Icon name="verified" />
					</span>
				) : null}
				<span className="my-auto ml-2 text-gray-400">
					@{data.includes.users[0].username}
				</span>
				<span className="my-auto ml-1 text-gray-400">
					{toDateString(data.data[0].created_at)}
				</span>
			</div>
			<div
				className={`mt-2 text-lg ${
					cardLight ? 'text-gray-700' : 'text-gray-300'
				}`}
			>
				<NewlineText text={data.data[0].text} />
			</div>
		</div>
	) : null;
};

export default ReferencedCard;
