import { nFormatter } from '../utils/nFormatter';

const Stats = ({ metrics }) => {
	return (
		<div className="flex gap-10 mt-4 text-base text-gray-400">
			<div>
				<span className="text-gray-500 font-bold">
					{nFormatter(metrics.reply_count, 1)}
				</span>{' '}
				replies
			</div>
			<div>
				<span className="text-gray-500 font-bold">
					{nFormatter(metrics.retweet_count, 1)}
				</span>{' '}
				shares
			</div>
			<div>
				<span className="text-gray-500 font-bold">
					{nFormatter(metrics.like_count, 1)}
				</span>{' '}
				likes
			</div>
		</div>
	);
};

export default Stats;
