import React from "react";
import LogoWithText from "../Molecules/LogoWithText";
import ButtonIcon from "../Atoms/ButtonIcon";
import styles from "./styles/Organisms.module.scss";

function Header() {
	const { header, logoWithText, menu } = styles;
	return (
		<div className={header}>
			<div className={logoWithText}>
				<LogoWithText />
			</div>
			<div className={menu}>
				<ButtonIcon iconName={"menu"} />
			</div>
		</div>
	);
}

export default Header;
