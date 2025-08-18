declare module '*.png' {
	const src: number | string;
	export default src;
}

declare module '*.jpg' {
	const src: number | string;
	export default src;
}

declare module '*.jpeg' {
	const src: number | string;
	export default src;
}

declare module '*.gif' {
	const src: number | string;
	export default src;
}

declare module '*.svg' {
	const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
	export default content;
}
