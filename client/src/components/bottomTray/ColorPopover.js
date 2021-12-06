import { Popover } from '@headlessui/react';

const ColorPopover = ({ colors, selectedColor, handleChangeColor }) => {
	if (colors) {
		return (
			<Popover className="relative hover:bg-gray-700 rounded-lg px-3 py-2">
				<Popover.Button className="h-full w-full text-center grid grid-cols-1 group">
					<div
						className={`bg-gradient-to-br ${selectedColor} mx-auto mt-auto w-7 h-7 rounded-full ring-2 ring-gray-300`}
					></div>
					<div className="mt-auto text-sm text-gray-500 group-hover:text-gray-300">
						Color
					</div>
				</Popover.Button>
				<Popover.Panel
					className="absolute z-10 w-screen max-w-max"
					style={{ top: '-8.4rem', left: '-0.5rem' }}
				>
					<div className="grid grid-cols-3 bg-gray-700 p-2 rounded-lg gap-3">
						{colors.map((color) => {
							return (
								<button
									key={color}
									onClick={() => handleChangeColor(color)}
									className={`bg-gradient-to-br ${color} border-2 border-gray-700 hover:border-gray-50 transition ease-in duration-200 rotate-45 rounded-lg h-11 w-11`}
								></button>
							);
						})}
					</div>
				</Popover.Panel>
			</Popover>
		);
	}
};

export default ColorPopover;
