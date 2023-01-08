import React from "react";
import Logo from "../Atoms/Logo";
import styles from "./styles/Molecules.module.scss";
import { Text } from "../Atoms/Text";

function LogoWithText() {
	const { textWrapper, logoWithTextWrapper, logoTextBoldWhite, logoTextWhite } =
		styles;
	return (
		<div className={logoWithTextWrapper}>
			<Logo height={60} />
			<div className={textWrapper}>
				<Text className={logoTextBoldWhite} text="Energy" />
				<Text className={logoTextWhite} text="Pro" />
			</div>
		</div>
	);
}

export default LogoWithText;
