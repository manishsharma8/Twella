import ColorPopover from './bottomTray/ColorPopover';

const ActionDrawer = ({
	handleImageDownload,
	toggleCardColor,
	toggleShowStats,
	colors,
	selectedColor,
	handleChangeColor,
}) => {
	return (
		<div className="fixed left-0 right-0 bottom-16 grid grid-cols-3 gap-6 divide-x-2 divide-gray-700 mx-auto border border-gray-700 bg-gradient-to-r from-gray-800 to-gray-900 text-gray-300 w-2/5 p-1.5 rounded-xl">
			<div className="grid grid-cols-3 col-start-1 col-end-3">
				<ColorPopover
					colors={colors}
					selectedColor={selectedColor}
					handleChangeColor={handleChangeColor}
				/>
				<button
					onClick={() => toggleCardColor()}
					className="rounded-lg px-3 py-2 hover:bg-gray-700 grid grid-cols-1 text-center group"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-8 w-8 mx-auto"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
					</svg>
					<div className="mx-auto text-gray-500 group-hover:text-gray-300">
						Card
					</div>
				</button>
				<button
					onClick={() => toggleShowStats()}
					className="rounded-lg px-3 py-2 hover:bg-gray-700 grid grid-cols-1 text-center group"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-8 w-9 mx-auto"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fillRule="evenodd"
							d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
							clipRule="evenodd"
						/>
					</svg>
					<div className="mx-auto text-gray-500 group-hover:text-gray-300">
						Response
					</div>
				</button>
			</div>
			<div className="w-full">
				<button
					onClick={() => handleImageDownload()}
					className="bg-blue-500 ml-6 w-4/5 rounded-lg px-3 py-2 text-sm"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-8 w-8 mx-auto"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
						/>
					</svg>
					Download
				</button>
			</div>
		</div>
	);
};
export default ActionDrawer;
