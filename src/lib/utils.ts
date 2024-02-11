export function toKebabCase(inputString: string): string {
	return inputString.replace(/\s+/g, '-').toLowerCase();
}

export function getRandomSubset<T>(array: T[], size: number = Infinity): T[] {
	const shuffled = array.slice();
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled.slice(0, size);
}

export function capitaliseFirstLetter(inputString: string): string {
	return inputString.charAt(0).toUpperCase() + inputString.slice(1);
}
