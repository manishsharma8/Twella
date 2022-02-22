import { alterImageQuality } from '../utils/alterImageQuality';
import { toDateString } from '../utils/toDateString';
import { Resizable } from 're-resizable';

import Media from './Media';
import ReferencedCard from './ReferencedCard';
import Stats from './Stats';
import Icon from './icons/Icon';
import Memoji from '../static/memoji.png';
import { useEffect, useState, useCallback } from 'react';

function useStateRef(processNode) {
	const [node, setNode] = useState(null);
	const setRef = useCallback(
		(newNode) => {
			setNode(processNode(newNode));
		},
		[processNode]
	);
	return [node, setRef];
}

const Card = ({ data, color, forwardRef, cardLight, showStats }) => {
	const [width, setWidth] = useState(0);
	const [height, setHeight] = useState(0);
	const [minHeight, setMinHeight] = useState(0);
	const [refHeight, setRef] = useStateRef((node) => node?.clientHeight || 0);
	const [date, setDate] = useState(new Date());

	useEffect(() => {
		setMinHeight(refHeight);
	}, [refHeight]);

	const NewlineText = ({ text }) => {
		let pattern = /http\S+/;
		text = text.replace(pattern, '');
		const newText = text
			.split('\n')
			.map((str, index) => <p key={index}>{str}</p>);
		return newText;
	};

	const metrics = {
		like_count: 6946,
		quote_count: 1564,
		reply_count: 420,
		retweet_count: 42700,
	};

	let gradient;
	if (cardLight) {
		gradient =
			'linear-gradient(-50deg,rgba(255,255,255,.5),rgba(255,255,255,.95) 80%';
	} else {
		gradient = 'linear-gradient(-50deg,rgba(0,0,0,.94),rgba(0,0,0,.58) 100%)';
	}
	console.log(data);

	return (
		<div>
			<Resizable
				style={{
					marginLeft: 'auto',
					marginRight: 'auto',
				}}
				onResizeStop={(e, direction, ref, d) => {
					setWidth(width + d.width);
					setHeight(height + d.height);
				}}
				defaultSize={{ width: 1000 }}
				maxWidth={1100}
				minWidth={550}
				minHeight={minHeight + 80}
				handleStyles={{
					left: {
						position: 'absolute',
						top: '50%',
						left: '-4px',
						width: '8px',
						height: '8px',
						backgroundColor: 'white',
						borderRadius: '100%',
						cursor: 'ew-resize',
					},
					right: {
						position: 'absolute',
						top: '50%',
						right: '-4px',
						width: '8px',
						height: '8px',
						backgroundColor: 'white',
						borderRadius: '100%',
						cursor: 'ew-resize',
					},
					top: {
						position: 'absolute',
						top: '-4px',
						left: '50%',
						width: '8px',
						height: '8px',
						backgroundColor: 'white',
						borderRadius: '100%',
						cursor: 'n-resize',
					},
					bottom: {
						position: 'absolute',
						bottom: '-4px',
						left: '50%',
						width: '8px',
						height: '8px',
						backgroundColor: 'white',
						borderRadius: '100%',
						cursor: 'n-resize',
					},
				}}
			>
				<div className="w-full h-full mx-auto my-12 shadow-2xl">
					<div
						ref={forwardRef}
						className={`h-full flex py-10 px-14 rounded-xl bg-gradient-to-r ${color}`}
					>
						<div
							style={{
								backgroundImage: gradient,
								fontSize: '22px',
								maxWidth: '700px',
							}}
							ref={setRef}
							className={`my-10 w-full backdrop-blur-xl border mx-auto rounded-xl py-6 px-10 shadow-2xl ${
								cardLight ? 'border-gray-300' : 'border-gray-600'
							}`}
						>
							<div className="flex gap-3 mb-4">
								{data.includes.users ? (
									<img
										className="rounded-full w-14 h-14"
										src={alterImageQuality(
											data.includes.users[0].profile_image_url
										)}
										alt="profile_picture"
									/>
								) : (
									<img
										className="rounded-full w-14 h-14 -ml-2"
										src={Memoji}
										alt="profile_picture"
									/>
								)}
								<div className="flex flex-col leading-snug">
									<div className="flex gap-2">
										<span
											className={`font-bold text-lg ${
												cardLight ? '' : 'text-gray-200'
											}`}
										>
											{data.includes.users
												? data.includes.users[0].name
												: 'Manish Sharma'}
										</span>
										{data.includes.users && data.includes.users[0].verified ? (
											<Icon name="verified" />
										) : null}
									</div>
									<span className="text-gray-400 text-base">
										@
										{data.includes.users
											? data.includes.users[0].username
											: 'manish832001'}
									</span>
								</div>
							</div>
							<div
								className={`leading-relaxed text-2xl ${
									cardLight ? 'text-gray-700' : 'text-gray-300'
								}`}
							>
								{data.data ? (
									<NewlineText text={data.data[0].text} />
								) : (
									'Capture and share twitter posts as beautiful images. Get Started by pasting a tweet url into the input above.'
								)}
							</div>
							{data.includes.media && <Media medium={data.includes.media} />}
							{data.data && data.data[0].referenced_tweets && (
								<ReferencedCard
									cardLight={cardLight}
									id={data.data[0].referenced_tweets[0].id}
								/>
							)}
							<div className="text-base mt-3 text-gray-400">
								{data.data
									? toDateString(data.data[0].created_at, 1)
									: toDateString(date.toISOString(), 1)}
							</div>
							{showStats ? (
								<>
									{data.data ? (
										<Stats
											cardLight={cardLight}
											metrics={data.data[0].public_metrics}
										/>
									) : (
										<Stats cardLight={cardLight} metrics={metrics} />
									)}
								</>
							) : null}
						</div>
					</div>
				</div>
			</Resizable>
		</div>
	);
};

export default Card;
