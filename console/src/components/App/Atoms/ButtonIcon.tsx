import React from "react";
import styles from "./styles/Atoms.module.scss";

type appProps = {
	iconName: string;
};

function ButtonIcon({ iconName}: appProps) {
	const { buttonMain, materialIcons } = styles;

	return (
		<button className={buttonMain} >
			<span className={materialIcons}>{iconName}</span>
		</button>
	);
}

export default ButtonIcon;
