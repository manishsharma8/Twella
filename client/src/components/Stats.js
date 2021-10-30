const Stats = ({ metrics }) => {
	return (
		<div className="flex gap-10 mt-4 text-base text-gray-400">
			<div>
				<span className="text-gray-500 font-bold">{metrics.reply_count}</span>{' '}
				replies
			</div>
			<div>
				<span className="text-gray-500 font-bold">{metrics.retweet_count}</span>{' '}
				shares
			</div>
			<div>
				<span className="text-gray-500 font-bold">{metrics.like_count}</span>{' '}
				likes
			</div>
		</div>
	);
};

export default Stats;
