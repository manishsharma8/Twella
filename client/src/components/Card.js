import { useEffect } from 'react';
import { toDateString } from '../utils/toDateString';

import Media from './Media';
import Stats from './Stats';

const Card = ({ data }) => {
	const NewlineText = ({ text }) => {
		let pattern = /http\S+/;
		text = text.replace(pattern, '');
		const newText = text
			.split('\n')
			.map((str) => <p className="leading-relaxed">{str}</p>);

		return newText;
	};

	useEffect(() => {}, [data]);

	return (
		<div className="py-10 px-14 w-3/5 mx-auto my-10 rounded-lg bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
			<div
				style={{
					backgroundImage:
						'linear-gradient(-50deg,rgba(255,255,255,.5),rgba(255,255,255,.95) 80%)',
					fontSize: '22px',
				}}
				className="backdrop-blur-xl border border-gray-300 rounded-xl py-6 px-10 shadow-2xl"
			>
				<div className="flex gap-3 mb-4">
					<img
						className="rounded-full"
						src={data.includes.users[0].profile_image_url}
						alt="profile_picture"
					/>
					<div className="text-base flex flex-col leading-snug">
						<span className="font-bold">{data.includes.users[0].name}</span>
						<span className="text-gray-400">
							@{data.includes.users[0].username}
						</span>
					</div>
				</div>
				<div className="text-gray-700">
					<NewlineText text={data.data[0].text} />
				</div>
				{data.includes.media && <Media medium={data.includes.media} />}
				<div className="text-base mt-2 text-gray-400">
					{toDateString(data.data[0].created_at)}
				</div>
				<Stats metrics={data.data[0].public_metrics} />
			</div>
		</div>
	);
};

export default Card;

// style={{
//     backgroundImage:
//         'linear-gradient(330deg, rgb(255, 25, 125), rgb(45, 13, 255), rgb(0, 255, 179))',
// }}
