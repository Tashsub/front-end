import React from "react";
import Icon from "../Atoms/RoundedIcon";
import {Text} from "../Atoms/Text";
import styles from "./styles/Molecules.module.scss";

type appProps = {
	status: string;
	name: string;
	reading: string;
};

const style = {
    fontWeight: "bold",
}

function IconWithText({ status, name, reading }: appProps) {
	const { iconWithTextWrapper, debugBorder, iconDiv } = styles;

	return (
		<div className={iconWithTextWrapper}>
			<div className={iconDiv} >
				<Icon status={status} />
			</div>
			<div className={debugBorder} >
				<Text text={name} style={style}  />
				<Text text={reading} />
			</div>
		</div>
	);
}

export default IconWithText;
