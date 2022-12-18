import React from "react";
import styles from "./styles/Atoms.module.scss";

function Tooltip() {
	const { hoverItem, tooltip } = styles;

	return (
		<div className={hoverItem}>
			hover me
			<div className={tooltip}>
				<span>I'm a tooltip!</span>
				<span>hhkkbjkhbkjh</span>
			</div>
		</div>
	);
}

export default Tooltip;
