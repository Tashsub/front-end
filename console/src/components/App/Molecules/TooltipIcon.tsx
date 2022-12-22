import React, { ReactElement } from "react";
import styles from "./styles/Molecules.module.scss";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional
import Icon from "../Atoms/Icon";


type appProps = {
	tooltipContent: ReactElement;
};
export function TooltipIcon({ tooltipContent }: appProps) {
	const { buttonWrapper } = styles;

	return (
		<Tippy
			content={tooltipContent}
			arrow={true}
			placement={"left"}
			aria={{ content: "auto" }} //allows screen reader to read tooltip content
			trigger={"mouseenter focus, click"}
		>
			<button className={buttonWrapper}>
				<Icon
					icon={"schedule"}
					iconSize={25}
					iconColor={"--overlay-black-48"}
				/>
			</button>
		</Tippy>
	);
}
