import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import styles from "./styles/Atoms.module.scss";
import markerIconGreen from "assets/markerGreen.svg";
import markerIconRed from "assets/markerRed.svg";
import { useNavigate } from "react-router-dom";

type appProps = {
	sites: Array<any>;
};

function Map({ sites }: appProps) {
	const { map } = styles;

	const navigate = useNavigate();
	const handleClick = (id: string) => navigate(`/site/:${id}`);

	const containerStyle = {
		width: "100%",
		height: "100%",
	};

	const key = "AIzaSyCcGn9gVldIXU-ozZqMdBFu4l8aZiq8wa8";

	const center = {
		lat: 53.65,
		lng: -1.466667,
	};

	const markers = sites.map((site) => {
		return (
			<Marker
				position={{ lat: site.location.lat, lng: site.location.lng }}
				title={site.name}
				icon={{
					url: site.status == "Alert" ? markerIconRed : markerIconGreen,
				}}
				onClick={() => {
					navigate(`/site/${site.id}`);
				}}
			/>
		);
	});

	return (
		<div className={map}>
			<LoadScript googleMapsApiKey={key} >
				<GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
					{/* Child components, such as markers, info windows, etc. */}
					{markers}
				</GoogleMap>
			</LoadScript>
		</div>
	);
}

export default Map;
