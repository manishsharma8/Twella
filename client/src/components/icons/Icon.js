import Download from './Download';
import Heart from './Heart';
import Moon from './Moon';
import Search from './Search';
import Verified from './Verified';

const Icon = ({ name }) => {
	switch (name) {
		case 'search':
			return <Search />;
		case 'verified':
			return <Verified />;
		case 'moon':
			return <Moon />;
		case 'heart':
			return <Heart />;
		case 'download':
			return <Download />;
		default:
			return <div>Icon doesn't exist</div>;
	}
};

export default Icon;
