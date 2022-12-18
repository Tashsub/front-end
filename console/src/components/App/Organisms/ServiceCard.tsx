import React from "react";
import styles from "./styles/Organisms.module.scss";
import ServiceColorItem from "../Atoms/ServiceColorItem";
import { Text as ScheduleText } from "../Atoms/Text";
import { Text as ServiceText } from "../Atoms/Text";
import { TooltipIcon } from "../Atoms/TooltipIcon";

type appProps = {
	scheduleNow: string;
	scheduleNext: string;
};
function ServiceCard({ scheduleNow, scheduleNext }: appProps) {
	const { serviceTextWrapper } = styles;

	const serviceTextStyle = {
		fontWeight: "500",
		margin: "0",
	};

	const scheduleTextStyle = {
		margin: "0",
		color: "var(--text-black-le)",
	};

	return (
		<>
			<div>
				<ServiceColorItem />
			</div>
			<div className={serviceTextWrapper}>
				<ScheduleText text={"NOW"} style={scheduleTextStyle} />
				<ServiceText text={"DC Low"} style={serviceTextStyle} />
			</div>
			<div>
				<TooltipIcon></TooltipIcon>
			</div>
		</>
	);
}

export default ServiceCard;
