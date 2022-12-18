import React from "react";
import styles from "./styles/Atoms.module.scss";

type appProps = {};

const services = {
	dcLow: {
		text: "DC LOW",
		color: "--dc-low",
	},
	dcHigh: {
		text: "DC HIGH",
		color: "--dc-high",
	},
	dispatch: {
		text: "Dispatch",
		color: "--dispatch",
	},
};

function ServiceColorItem() {
	const { serviceColorItem } = styles;
	return (
		<div className={serviceColorItem} style={{ backgroundColor: "black" }}></div>
	);
}

export default ServiceColorItem;
