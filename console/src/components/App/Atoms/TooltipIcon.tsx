import React from "react";
import styles from "./styles/Atoms.module.scss";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional

export function TooltipIcon() {
	const { hoverItem, tooltip } = styles;
	const style = {
		backgroundColor: "red",
	};

	const elem = (
		<span>
			<p style={{ margin: 0 }}>
				<b>Start:</b> test{" "}
			</p>
			<p style={{ margin: 0 }}>
				<b>End:</b> test
			</p>
		</span>
	);

	return (
		<Tippy content={elem} arrow={true}>
			<button>My button</button>
		</Tippy>
	);
}
