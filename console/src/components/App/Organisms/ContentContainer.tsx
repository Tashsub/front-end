import React from "react";
import styles from "./styles/Organisms.module.scss";

function ContentContainer() {
	const { contentContainer } = styles;
	return <div className={contentContainer}>ContentContainer</div>;
}

export default ContentContainer;
