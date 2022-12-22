import React from "react";
import styles from "./styles/Organisms.module.scss";
import { site } from "TS/Interfaces/global_interfaces";
import { Text } from "../Atoms/Text";
import { GetDateTime } from "Extensions/GetDateTimeExtensions";
import { GetMegaWatts } from "Extensions/SizeConverterExtensions";

type appProps = {
	site: site | any;
};

function ContentContainerSite({ site }: appProps) {
	const { siteInfoContainer, siteInfoContent, title } = styles;

	return (
		<div className={siteInfoContainer}>
			<div className={siteInfoContent}>
				<Text text={"Name"} className={title} />
				<Text text={site?.name} />
				<br />
				<Text text={"Location"} className={title} />
				<Text text={"Latitude:  " + site?.location.lat} />
				<Text text={"Longitude:  " + site?.location.lng} />
				<br />
				<Text text={"Schedule Now"} className={title} />
				<Text
					text={
						site?.schedules?.now
							? `Service: ${site.schedules.now.service}`
							: "Not Available"
					}
				/>
				<Text
					text={
						site?.schedules?.now
							? `Start: ${GetDateTime(site.schedules.now.start)}`
							: "Not Available"
					}
				/>
				<Text
					text={
						site?.schedules?.now
							? `End: ${GetDateTime(site.schedules.now.end)}`
							: "Not Available"
					}
				/>
				<br />
				<Text text={"Schedule Next"} className={title} />
				<Text
					text={
						site?.schedules?.next
							? `Service: ${site.schedules.next.service}`
							: "Not Available"
					}
				/>
				<Text
					text={
						site?.schedules?.next
							? `Start: ${GetDateTime(site?.schedules.next.start)}`
							: "Not Available"
					}
				/>
				<Text
					text={
						site?.schedules?.next
							? `End: ${GetDateTime(site.schedules.next?.end)}`
							: "Not Available"
					}
				/>
				<br />
				<Text text={"Size"} className={title} />
				<Text text={GetMegaWatts(site?.size) + " MW"} />
				<br />
				<Text text={"Status"} className={title} />
				<Text text={site?.status} />
			</div>
		</div>
	);
}

export default ContentContainerSite;
