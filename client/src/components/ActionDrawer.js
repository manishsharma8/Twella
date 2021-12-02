import ColorPopover from './bottomTray/ColorPopover';
import Icon from './icons/Icon';

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
					<Icon name="moon" />
					<div className="mx-auto text-gray-500 group-hover:text-gray-300">
						Card
					</div>
				</button>
				<button
					onClick={() => toggleShowStats()}
					className="rounded-lg px-3 py-2 hover:bg-gray-700 grid grid-cols-1 text-center group"
				>
					<Icon name="heart" />
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
					<Icon name="download" />
					Download
				</button>
			</div>
		</div>
	);
};
export default ActionDrawer;
