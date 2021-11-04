import Search from './Search';

const Navbar = ({ fetchTweet }) => {
	return (
		<div className="grid grid-cols-5">
			<div className="text-3xl font-bold text-white">Twella</div>
			<div className="col-span-3">
				<Search fetchTweet={fetchTweet} />
			</div>
		</div>
	);
};

export default Navbar;
