import React from "react";

type appProps = {
	text: string;
	style: any;
};
function Text({ text, style }: appProps) {
	return <p className={style}>{text}</p>;
}

export default Text;
