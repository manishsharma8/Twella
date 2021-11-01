import { useEffect } from 'react';
import { alterImageQuality } from '../utils/alterImageQuality';
import { toDateString } from '../utils/toDateString';

import Media from './Media';
import ReferencedCard from './ReferencedCard';
import Stats from './Stats';

const Card = ({ data, forwardRef }) => {
	const NewlineText = ({ text }) => {
		let pattern = /http\S+/;
		text = text.replace(pattern, '');
		const newText = text.split('\n').map((str) => <p>{str}</p>);
		return newText;
	};

	return (
		<div className="rounded-xl overflow-hidden w-3/5 mx-auto my-10">
			<div
				ref={forwardRef}
				className="py-10 px-14 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500"
			>
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
							className="rounded-full w-12 h-12"
							src={alterImageQuality(data.includes.users[0].profile_image_url)}
							alt="profile_picture"
						/>
						<div className="text-base flex flex-col leading-snug">
							<div className="flex gap-2">
								<span className="font-bold">{data.includes.users[0].name}</span>
								{data.includes.users[0].verified ? (
									<svg
										className="my-auto w-5 h-5 text-blue-400"
										viewBox="0 0 24 24"
										fill="currentColor"
									>
										<g>
											<path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
										</g>
									</svg>
								) : null}
							</div>
							<span className="text-gray-400">
								@{data.includes.users[0].username}
							</span>
						</div>
					</div>
					<div className="text-gray-700 leading-relaxed">
						<NewlineText text={data.data[0].text} />
					</div>
					{data.includes.media && <Media medium={data.includes.media} />}
					{data.data[0].referenced_tweets && (
						<ReferencedCard id={data.data[0].referenced_tweets[0].id} />
					)}
					<div className="text-base mt-2 text-gray-400">
						{toDateString(data.data[0].created_at, 1)}
					</div>
					<Stats metrics={data.data[0].public_metrics} />
				</div>
			</div>
		</div>
	);
};

export default Card;

// style={{
//     backgroundImage:
//         'linear-gradient(330deg, rgb(255, 25, 125), rgb(45, 13, 255), rgb(0, 255, 179))',
// }}
