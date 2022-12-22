import React from "react";
import IconWithText from "../Molecules/IconWithText";
import styles from "./styles/Organisms.module.scss";
import ServiceCard from "./ServiceCard";
import { GetMegaWatts } from "Extensions/SizeConverterExtensions";
import { useNavigate } from "react-router-dom";

type appProps = {
	status: string;
	reading: number;
	name: string;
	scheduleNow?: scheduleProps;
	scheduleNext?: scheduleProps;
	id: string;
};

type scheduleProps = {
	service: string;
	start: string;
	end: string;
};

function Card({
	status,
	reading,
	name,
	scheduleNow,
	scheduleNext,
	id,
}: appProps) {
	const { card, serviceCardWrapper } = styles;

	const navigate = useNavigate();

	const megaWattReading = GetMegaWatts(reading);
	const finalReading = `${megaWattReading}MW`;

	return (
		<div className={card} data-testid="site-cards">
			<div
				onClick={() => {
					navigate(`/site/${id}`);
				}}
			>
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
