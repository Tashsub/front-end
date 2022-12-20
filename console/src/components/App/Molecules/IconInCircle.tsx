import React from "react";
import styles from "./styles/Molecules.module.scss";
import Icon from "../Atoms/Icon";
import { GetBGColorExtensions } from "Extensions/GetColorExtensions";

const statusObj = {
	good: {
		text: "good",
		css: GetBGColorExtensions("--status-good"),
		icon: "done",
	},
	alert: {
		text: "alert",
		css: GetBGColorExtensions("--status-alert"),
		icon: "priority_high",
	},
	unknown: {
		text: "unknown",
		css: GetBGColorExtensions("--status-unknown"),
		icon: "question_mark",
	},
	warning: {
		text: "warning",
		css: GetBGColorExtensions("--status-warning"),
		icon: "warning",
	},
};

type appProps = {
	status: string;
};

function IconInCircle({ status }: appProps) {
	const { divRoundForIcon } = styles;

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

	return (
		<div className={divRoundForIcon} style={backgroundColor}>
			<Icon icon={icon} iconSize={25} iconColor={"--text-white-he"} />
		</div>
	);
}

export default IconInCircle;
