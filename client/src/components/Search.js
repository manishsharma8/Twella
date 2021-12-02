import Icon from './icons/Icon';

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
			className="flex mx-24 px-5 py-3 bg-gray-700 bg-opacity-40 text-gray-400 rounded-lg border border-gray-700 focus-within:ring-2 focus-within:ring-indigo-600 focus-within:text-gray-200"
		>
			<Icon name="search" />
			<input
				className="text-md w-full bg-transparent outline-none text-gray-200 placeholder-gray-400"
				placeholder="Paste Twitter post link"
			/>
		</div>
	);
};

export default Search;
