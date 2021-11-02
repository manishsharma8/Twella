import ColorPopover from './bottomTray/ColorPopover';

const ActionDrawer = ({ handleImageDownload, colors, handleChangeColor }) => {
	return (
		<div className="grid grid-cols-6 mx-auto bg-gray-700 bg-opacity-40 text-gray-300 w-1/2 p-1.5 rounded-lg gap-2">
			<ColorPopover colors={colors} handleChangeColor={handleChangeColor} />
			<button
				onClick={() => handleImageDownload()}
				className="bg-blue-500 rounded-lg px-3 py-2"
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
