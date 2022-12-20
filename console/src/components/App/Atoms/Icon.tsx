import React from "react";
import styles from "./styles/Atoms.module.scss";

type appProps = {
	icon: string; // icon names from https://fonts.google.com/icons
	iconSize: number;
	iconColor: string;
};

export default function ({ icon, iconSize, iconColor }: appProps) {
	const { materialIcons } = styles;

	const style = {
		color: `var(${iconColor})`,
		fontSize: `${iconSize}px`,
	};

	return (
		<span className={materialIcons} style={style}>
			{icon}
		</span>
	);
}
