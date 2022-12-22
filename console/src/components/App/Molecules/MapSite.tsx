import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import styles from "./styles/Molecules.module.scss";
import markerIconGreen from "assets/markerGreen.svg";
import markerIconRed from "assets/markerRed.svg";
import { Text } from "../Atoms/Text";
import { GetMegaWatts } from "Extensions/SizeConverterExtensions";
import { key } from "Api/GoogleMapsKey";

type appProps = {
	site: any;
	isLoading: Boolean;
};

function Map({ site, isLoading }: appProps) {
	const { map, loading, overlay, overlayContent, siteName, siteSize } = styles;

	const containerStyle = {
		width: "100%",
		height: "500px",
	};

	const center = () => {
		return {
			lat: site.location.lat,
			lng: site.location.lng,
		};
	};

	const marker = () => {
		return (
			<Marker
				position={{ lat: site.location.lat, lng: site.location.lng }}
				title={site.name}
				icon={{
					url: site.status == "Alert" ? markerIconRed : markerIconGreen,
				}}
			/>
		);
	};

	const convertSiteSize = GetMegaWatts(site.size);
	const displaySiteSize = `${convertSiteSize} MW`;

	return (
		<div className={isLoading ? loading : map}>
			<LoadScript googleMapsApiKey={key}>
				<GoogleMap
					mapContainerStyle={containerStyle}
					center={center()}
					zoom={10}
					options={{
						mapTypeControl: false,
						scaleControl: false,
						fullscreenControl: false,
						zoomControl: false,
					}}
				>
					{marker()}
				</GoogleMap>
			</LoadScript>
			<div className={overlay}>
				<div className={overlayContent}>
					<Text text={site.name} className={siteName} />
					<Text text={displaySiteSize} className={siteSize} />
				</div>
			</div>
		</div>
	);
}

export default Map;
