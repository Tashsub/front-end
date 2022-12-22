import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import styles from "./styles/Atoms.module.scss";
import markerIconGreen from "assets/markerGreen.svg";
import markerIconRed from "assets/markerRed.svg";
import { apiEndpoints } from "Api/Endpoints";
import { useFetchData } from "Hooks/useFetchData";
import ErrorMessage from "./ErrorMessage";

type appProps = {
	site: any;
	isLoading: Boolean;
};

function Map({ site, isLoading }: appProps) {
	console.log("its here");
	console.log(site);

	const { map, loading } = styles;

	const containerStyle = {
		width: "100%",
		height: "500px",
	};

	let tt = site;

	// const tt = {
	// 	id: "kraken-arthur",
	// 	location: {
	// 		lat: 53.5955752,
	// 		lng: -1.979958,
	// 	},
	// 	name: "Kraken Arthur",
	// 	schedules: {
	// 		now: {
	// 			service: "Dispatch",
	// 			start: "2022-01-02T17:00:26.573Z",
	// 			end: "2022-01-02T18:00:26.573Z",
	// 		},
	// 		next: {
	// 			service: "DFFR",
	// 			start: "2022-01-02T18:00:26.573Z",
	// 			end: "2022-01-02T19:00:26.573Z",
	// 		},
	// 	},
	// 	size: 50000000,
	// 	status: "Good",
	// };

	const key = "AIzaSyCcGn9gVldIXU-ozZqMdBFu4l8aZiq8wa8";

	const center = () => {
		return {
			lat: tt.location.lat,
			lng: tt.location.lng,
		};
	};

	const marker = () => {
		return (
			<Marker
				position={{ lat: tt.location.lat, lng: tt.location.lng }}
				title={tt.name}
				icon={{
					url: tt.status == "Alert" ? markerIconRed : markerIconGreen,
				}}
			/>
		);
	};

	return (
		<div className={isLoading ? map : loading}>
			<LoadScript googleMapsApiKey={key}>
				<GoogleMap
					mapContainerStyle={containerStyle}
					center={center()}
					zoom={9}
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
		</div>
	);
}

export default Map;
