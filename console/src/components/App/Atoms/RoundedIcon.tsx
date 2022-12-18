import React from "react";
import styles from "./styles/Atoms.module.scss";

function backgroundColor(css: string) {
	return {
		backgroundColor: `var(${css})`,
	};
}

const statusObj = {
	good: {
		text: "good",
		css: backgroundColor("--status-good"),
		icon: "done",
	},
	alert: {
		text: "alert",
		css: backgroundColor("--status-alert"),
		icon: "alert",
	},
	unknown: {
		text: "unknown",
		css: backgroundColor("--status-unknown"),
		icon: "question_mark",
	},
	warning: {
		text: "warning",
		css: backgroundColor("--status-warning"),
		icon: "warning",
	},
};

type appProps = {
	status: string;
};

function Icon({ status }: appProps) {
	const { materialIcons, divRoundForIcon } = styles;

	let stat,
		icon,
		backgroundColor = null;

	switch (status.toLowerCase()) {
		case statusObj.good.text:
			stat = statusObj.good.text;
			backgroundColor = statusObj.good.css;
			icon = statusObj.good.icon;
			break;
		case statusObj.alert.text:
			stat = statusObj.alert.text;
			backgroundColor = statusObj.alert.css;
			icon = statusObj.alert.icon;
			break;
		case statusObj.warning.text:
			stat = statusObj.warning.text;
			backgroundColor = statusObj.warning.css;
			icon = statusObj.warning.icon;
			break;
		default:
			stat = statusObj.unknown.text;
			backgroundColor = statusObj.unknown.css;
			icon = statusObj.unknown.icon;
			break;
	}

	console.log(icon);

	return (
		<div className={divRoundForIcon} style={backgroundColor}>
			<span
				className={materialIcons}
				style={{ color: "white", fontSize: "25px", }}
			>
				{icon}
			</span>
		</div>
	);
}

export default Icon;
