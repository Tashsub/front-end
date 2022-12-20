import React from "react";
import IconInCircle from "./IconInCircle";
import { Text } from "../Atoms/Text";
import styles from "./styles/Molecules.module.scss";

type appProps = {
	status: string;
	name: string;
	reading: string;
};

const style = {
	fontWeight: "bold",
};

function IconWithText({ status, name, reading }: appProps) {
	const { iconWithTextWrapper, iconDiv } = styles;

	return (
		<div className={iconWithTextWrapper}>
			<div className={iconDiv}>
				<IconInCircle status={status} />
			</div>
			<div>
				<Text text={name} style={style} />
				<Text text={reading} />
			</div>
		</div>
	);
}

export default IconWithText;
