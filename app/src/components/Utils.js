export function humanReadableName(name) {
	return name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
};
