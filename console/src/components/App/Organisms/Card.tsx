import React from "react";
import IconWithText from "../Molecules/IconWithText";
import styles from "./styles/Organisms.module.scss";
import ServiceCard from "./ServiceCard";

type appProps = {
    schedule: string
}

function Card({schedule}: appProps) {

	const { card, serviceCardWrapper, tt } = styles;

	return (
		<div className={card}>
			<div className={tt}>
				<IconWithText status={"good"} name={"Kraken Arthur"} reading={"20MW"} />
			</div>
			<div className={serviceCardWrapper}>
                <ServiceCard scheduleNow={schedule} scheduleNext={schedule}/>
            </div>
		</div>
	);
}

export default Card;
