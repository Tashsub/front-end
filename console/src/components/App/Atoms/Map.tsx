import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import styles from "./styles/Atoms.module.scss";

function Map() {
	const { map } = styles;

	const key = "AIzaSyCcGn9gVldIXU-ozZqMdBFu4l8aZiq8wa8";

	const containerStyle = {
		width: "100%",
		height: "100%",
	};

	const center = {
		lat: 53.383331,
		lng: -1.466667,
	};

	return (
		<div className={map}>
			<LoadScript googleMapsApiKey={key}>
				<GoogleMap mapContainerStyle={containerStyle} center={center} zoom={9}>
					{/* Child components, such as markers, info windows, etc. */}
					<></>
				</GoogleMap>
			</LoadScript>
		</div>
	);
}

export default Map;
