export function alterImageQuality(link) {
	link = link.slice(0, -11) + link.slice(link.length - 4);
	return link;
}
