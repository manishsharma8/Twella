import ColorPopover from './bottomTray/ColorPopover';

const ActionDrawer = ({
	handleImageDownload,
	toggleCardColor,
	colors,
	selectedColor,
	handleChangeColor,
}) => {
	return (
		<div className="grid grid-cols-7 mx-auto bg-gray-700 bg-opacity-40 text-gray-300 w-1/2 p-1.5 rounded-lg gap-0.5">
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
				onClick={() => handleImageDownload()}
				className="bg-blue-500 rounded-lg px-3 py-2 col-start-6 text-sm col-span-2"
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
	);
};
export default ActionDrawer;
