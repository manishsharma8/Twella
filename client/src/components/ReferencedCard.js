import { useEffect, useState } from 'react';
import axios from 'axios';
import { toDateString } from '../utils/toDateString';

const ReferencedCard = ({ id }) => {
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
		const newText = text
			.split('\n')
			.map((str) => <p className="leading-relaxed">{str}</p>);

		return newText;
	};

	useEffect(() => {
		fetchTweet(id);
	}, [id]);

	return data.data ? (
		<div className="mt-3 border border-gray-300 p-3 text-base rounded-lg">
			<div className="flex">
				<img
					className="rounded-full w-7 h-7"
					src={data.includes.users[0].profile_image_url}
					alt="referencedtweetprofileimage"
				/>
				<span className="ml-2 font-medium my-auto">
					{data.includes.users[0].name}
				</span>
				{data.includes.users[0].verified ? (
					<svg
						className="ml-1 my-auto w-5 h-5 text-blue-400"
						viewBox="0 0 24 24"
						fill="currentColor"
					>
						<g>
							<path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
						</g>
					</svg>
				) : null}
				<span className="my-auto ml-2 text-gray-500">
					@{data.includes.users[0].username}
				</span>
				<span className="my-auto ml-1 text-gray-500">
					{toDateString(data.data[0].created_at)}
				</span>
			</div>
			<div className="mt-2 text-lg text-gray-700">
				<NewlineText text={data.data[0].text} />
			</div>
		</div>
	) : null;
};

export default ReferencedCard;