export function setTitle(title : undefined | string) {
	document.title = (typeof title === 'undefined' || title === '')
		? 'DATAGROUP · Projekte'
		: `${title} | DATAGROUP · Projekte`
}
