import React from "react";
import IconWithText from "../Molecules/IconWithText";
import styles from "./styles/Organisms.module.scss";
import ServiceCard from "./ServiceCard";
import { GetMegaWatts } from "Extensions/SizeConverterExtensions";

type appProps = {
	status: string;
	reading: number;
	name: string;
	scheduleNow?: scheduleProps;
	scheduleNext?: scheduleProps;
};

type scheduleProps = {
	service: string;
	start: string;
	end: string;
};

function Card({ status, reading, name, scheduleNow, scheduleNext }: appProps) {
	const { card, serviceCardWrapper } = styles;

	const megaWattReading = GetMegaWatts(reading);
	const finalReading = `${megaWattReading}MW`;

	return (
		<div className={card} data-testid="site-cards">
			<div>
				<IconWithText status={status} name={name} reading={finalReading} />
			</div>
			<div className={serviceCardWrapper}>
				<ServiceCard scheduleText={"Now"} schedule={scheduleNow} />
				<ServiceCard scheduleText={"Next"} schedule={scheduleNext} />
			</div>
		</div>
	);
}

export default Card;
