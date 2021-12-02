import { alterImageQuality } from '../utils/alterImageQuality';
import { toDateString } from '../utils/toDateString';
import { Resizable } from 're-resizable';

import Media from './Media';
import ReferencedCard from './ReferencedCard';
import Stats from './Stats';
import Icon from './icons/Icon';
import { useEffect, useState, useRef } from 'react';

const Card = ({ data, color, forwardRef, cardLight, showStats }) => {
	const [width, setWidth] = useState(0);
	const [height, setHeight] = useState(0);
	const [minWidth, setMinWidth] = useState(0);
	const cardEle = useRef(null);

	useEffect(() => {
		setMinWidth(cardEle.current.offsetHeight);
	}, []);

	const NewlineText = ({ text }) => {
		let pattern = /http\S+/;
		text = text.replace(pattern, '');
		const newText = text.split('\n').map((str) => <p>{str}</p>);
		return newText;
	};

	let gradient;
	if (cardLight) {
		gradient =
			'linear-gradient(-50deg,rgba(255,255,255,.5),rgba(255,255,255,.95) 80%';
	} else {
		gradient = 'linear-gradient(-50deg,rgba(0,0,0,.94),rgba(0,0,0,.58) 100%)';
	}

	return (
		<div className="">
			<Resizable
				style={{
					marginLeft: 'auto',
					marginRight: 'auto',
				}}
				onResizeStop={(e, direction, ref, d) => {
					setWidth(width + d.width);
					setHeight(height + d.height);
				}}
				defaultSize={{ width: 700 }}
				maxWidth={1100}
				minWidth={550}
				minHeight={minWidth + 70}
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
								maxWidth: '600px',
							}}
							ref={cardEle}
							className={`my-auto w-full backdrop-blur-xl border mx-auto rounded-xl py-6 px-10 shadow-2xl ${
								cardLight ? 'border-gray-300' : 'border-gray-600'
							}`}
						>
							<div className="flex gap-3 mb-4">
								<img
									className="rounded-full w-12 h-12"
									src={alterImageQuality(
										data.includes.users[0].profile_image_url
									)}
									alt="profile_picture"
								/>
								<div className="text-base flex flex-col leading-snug">
									<div className="flex gap-2">
										<span
											className={`font-bold ${
												cardLight ? '' : 'text-gray-200'
											}`}
										>
											{data.includes.users[0].name}
										</span>
										{data.includes.users[0].verified ? (
											<Icon name="verified" />
										) : null}
									</div>
									<span className="text-gray-400">
										@{data.includes.users[0].username}
									</span>
								</div>
							</div>
							<div
								className={`leading-relaxed ${
									cardLight ? 'text-gray-700' : 'text-gray-300'
								}`}
							>
								<NewlineText text={data.data[0].text} />
							</div>
							{data.includes.media && <Media medium={data.includes.media} />}
							{data.data[0].referenced_tweets && (
								<ReferencedCard
									cardLight={cardLight}
									id={data.data[0].referenced_tweets[0].id}
								/>
							)}
							<div className="text-base mt-2 text-gray-400">
								{toDateString(data.data[0].created_at, 1)}
							</div>
							{showStats ? (
								<Stats
									cardLight={cardLight}
									metrics={data.data[0].public_metrics}
								/>
							) : null}
						</div>
					</div>
				</div>
			</Resizable>
		</div>
	);
};

export default Card;
