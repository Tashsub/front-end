import React from "react";
import styles from "./styles/Atoms.module.scss";
import { GetBGColorExtensions } from "../../../Extensions/GetColorExtensions";

const services = {
	dcLow: {
		text: "DC Low",
		color: GetBGColorExtensions("--dc-low"),
	},
	dcHigh: {
		text: "DC HIGH",
		color: GetBGColorExtensions("--dc-high"),
	},
	dispatch: {
		text: "Dispatch",
		color: GetBGColorExtensions("--dispatch"),
	},
	dffr: {
		text: "DFFR",
		color: GetBGColorExtensions("--dfr-both"),
	},
	noSchedule: {
		text: "No Schedule",
		color: GetBGColorExtensions("--background"),
	},
};

type appProps = {
	service: string;
};

function ServiceColorItem({ service }: appProps) {
	const { serviceColorItem } = styles;

	let bgColor = null;

	switch (service) {
		case services.dcHigh.text:
			bgColor = services.dcHigh.color;
			break;
		case services.dcLow.text:
			bgColor = services.dcLow.color;
			break;
		case services.dffr.text:
			bgColor = services.dffr.color;
			break;
		case services.dispatch.text:
			bgColor = services.dispatch.color;
			break;
		default:
			bgColor = services.noSchedule.color
			break;
	}

	return (
		<div
			className={serviceColorItem}
			style={bgColor}
		></div>
	);
}

export default ServiceColorItem;
