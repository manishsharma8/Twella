import { useEffect, useState } from 'react';

const Media = ({ medium }) => {
	const [mediaSize, setMediaSize] = useState(1);
	const [mediaGrid, setMediaGrid] = useState('');

	useEffect(() => {
		setMediaSize(medium.length);
		switch (mediaSize) {
			case 1:
				setMediaGrid('');
				break;
			case 2:
				setMediaGrid('grid-cols-2');
				break;
			case 3:
				setMediaGrid('grid-cols-2 grid-cols-2');
				break;
			case 4:
				setMediaGrid('grid-cols-2 grid-cols-2');
				break;
			default:
				return;
		}
	}, [medium, mediaSize]);

	return (
		<div
			style={{ paddingBottom: '50%' }}
			className="mt-3 w-full h-auto relative rounded-xl overflow-hidden"
		>
			<div
				className={`absolute grid gap-0.5 overflow-hidden inset-0 ${mediaGrid}`}
			>
				{medium.map((media, index) => {
					return (
						<div
							className={`bg-cover bg-center bg-no-repeat ${
								index === 0 && mediaSize === 3 ? 'row-span-2' : ''
							}`}
							alt="media"
							style={{ backgroundImage: `url(${media.url})` }}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Media;
