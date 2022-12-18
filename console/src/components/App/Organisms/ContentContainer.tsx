import React from "react";
import Card from "./Card";
import styles from "./styles/Organisms.module.scss";

function ContentContainer() {
	const { contentContainer } = styles;
	return <div className={contentContainer}>
        <Card schedule="Hello"/>
    </div>;
}

export default ContentContainer;
