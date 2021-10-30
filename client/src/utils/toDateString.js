const monthNames = [
	'Jan',
	'Feb',
	'Mar',
	'Apr',
	'May',
	'Jun',
	'Jul',
	'Aug',
	'Sept',
	'Oct',
	'Nov',
	'Dec',
];

export function toDateString(props) {
	let dateString = '';

	const d = new Date(props);
	const hours = d.getHours();
	const min = d.getMinutes();
	const date = d.getDate();
	const month = monthNames[d.getMonth()];
	const year = d.getFullYear();

	if (hours > 12) {
		dateString += (hours - 12).toString() + ':' + min + ' PM';
	} else {
		dateString += hours + ':' + min + ' AM';
	}
	dateString += ' · ';
	dateString += date + ' ' + month + ', ' + year;

	return dateString;
}
