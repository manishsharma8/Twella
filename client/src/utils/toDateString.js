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

export function toDateString(props, type) {
	let dateString = '';

	const d = new Date(props);
	let hours = d.getHours();
	let min = d.getMinutes();
	let date = d.getDate();
	let month = monthNames[d.getMonth()];
	let year = d.getFullYear();

	if (min < 10) min = '0' + min;

	if (hours > 12) {
		dateString += (hours - 12).toString() + ':' + min + ' PM';
	} else {
		dateString += hours + ':' + min + ' AM';
	}
	dateString += ' · ';
	dateString += date + ' ' + month + ', ' + year;

	if (type === 1) return dateString;
	else return ' · ' + date + ' ' + month;
}
