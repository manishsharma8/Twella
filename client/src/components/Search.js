const Search = ({ fetchTweet }) => {
	const onEnterHandler = async (e) => {
		if (e.key === 'Enter') {
			var split = e.target.value.split('/');
			fetchTweet(split[5]);
		}
	};

	return (
		<div
			onKeyDown={onEnterHandler}
			className="flex mx-auto w-3/6 px-5 py-4 bg-gray-700 bg-opacity-40 text-gray-400 rounded-lg border border-gray-700 focus-within:ring-2 focus-within:ring-indigo-600 focus-within:text-gray-200"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-5 w-5 my-auto mr-4"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
				/>
			</svg>
			<input
				className="text-md w-full bg-transparent outline-none text-gray-200 placeholder-gray-400"
				placeholder="Paste Twitter post link"
			/>
		</div>
	);
};

export default Search;
