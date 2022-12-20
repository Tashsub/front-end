import React from "react";
import styles from "./styles/Organisms.module.scss";
import ServiceColorItem from "../Atoms/ServiceColorItem";
import { Text as ScheduleText } from "../Atoms/Text";
import { Text as ServiceText } from "../Atoms/Text";
import { TooltipIcon } from "../Molecules/TooltipIcon";
import ScheduleDates from "../Atoms/ScheduleDates";

type appProps = {
	scheduleText: string;
	schedule?: {
		service: string;
		start: string;
		end: string;
	};
};
function ServiceCard({ scheduleText, schedule }: appProps) {
	const {
		serviceTextWrapper,
		serviceCard,
		serviceColorWrapper,
		toolTipWrapper,
	} = styles;

	const serviceTextStyle = {
		fontWeight: "500",
		margin: "0",
	};

	const scheduleTextStyle = {
		margin: "0",
		color: "var(--text-black-le)",
	};

	const tooltipContent = <ScheduleDates startDate={schedule?.start} endDate={schedule?.start} />;

	return (
		<div className={serviceCard}>
			<div className={serviceColorWrapper}>
				<ServiceColorItem service={schedule?.service ?? "Not Available"} />
			</div>
			<div className={serviceTextWrapper}>
				<ScheduleText text={scheduleText} style={scheduleTextStyle} />
				<ServiceText
					text={schedule?.service ?? "No Schedule"}
					style={serviceTextStyle}
				/>
			</div>
			<div className={toolTipWrapper}>
				<TooltipIcon tooltipContent={tooltipContent} />
			</div>
		</div>
	);
}

export default ServiceCard;
