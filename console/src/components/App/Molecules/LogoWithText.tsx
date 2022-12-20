import React from "react";
import Logo from "../Atoms/Logo";
import styles from "./styles/Molecules.module.scss";
import { Text } from "../Atoms/Text";

function LogoWithText() {
	const { textWrapper, logoWithTextWrapper, logoTextBoldWhite, logoTextPink } =
		styles;
	return (
		<div className={logoWithTextWrapper}>
			<Logo height={60} />
			<div className={textWrapper}>
				<Text className={logoTextBoldWhite} text="KRAKEN" />
				<Text className={logoTextPink} text="Flex" />
			</div>
		</div>
	);
}

export default LogoWithText;
