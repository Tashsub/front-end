import React from "react";
import { GetDateTime } from "Extensions/GetDateTimeExtensions";

type appProps = {
	startDate?: string;
	endDate?: string;
};

function ScheduleDates({ startDate, endDate }: appProps) {
	return (
		<span>
			<p style={{ margin: 0 }}>
				<b>Start:</b> {startDate ? GetDateTime(startDate) : "No Schedule"}
			</p>
			<p style={{ margin: 0 }}>
				<b>End:</b> {endDate ? GetDateTime(endDate) : "No Schedule"}
			</p>
		</span>
	);
}

export default ScheduleDates;
