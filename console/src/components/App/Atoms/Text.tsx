import React from "react";

type appProps = {
	text: string | number | undefined;
	className?: any;
	style?: object;
};
export function Text({ text, className, style }: appProps) {
	return (
		<p className={className} style={style}>
			{text}
		</p>
	);
}
