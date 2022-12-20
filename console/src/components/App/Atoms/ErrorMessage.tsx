import React from "react";
import Icon from "./Icon";
import styles from "./styles/Atoms.module.scss";

type appProps = {
	text: string;
};

function ErrorMessage({ text }: appProps) {
	const { error } = styles;
	return (
		<div className={error}>
			<p>{text}</p>
			<Icon icon={"error"} iconColor={"text-black-he"} iconSize={40} />
		</div>
	);
}

export default ErrorMessage;
