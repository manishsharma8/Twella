export function alterImageQuality(link) {
	link = link.slice(0, -11) + '.jpg';
	return link;
}
