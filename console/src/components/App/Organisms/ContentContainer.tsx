import React from "react";
import ErrorMessage from "../Atoms/ErrorMessage";
import Card from "./Card";
import styles from "./styles/Organisms.module.scss";
import SearchBar from "./SearchBar";

type appProps = {
	sites: Array<any>;
	error: string;
};

function ContentContainer({ sites, error }: appProps) {
	const { contentContainer, ss } = styles;

	const errMsg = "Could not display results. Please try again later";

	const mappedResults = sites.map((site: any) => {
		return (
			<Card
				key={site.id}
				name={site.name}
				reading={site.size}
				status={site.status}
				scheduleNow={site.schedules.now}
				scheduleNext={site.schedules.next}
			/>
		);
	});

	const content = (
		<>
			<SearchBar />
			{mappedResults}
		</>
	);

	return (
		<div className={contentContainer}>
			{error ? <ErrorMessage text={errMsg} /> : <>{content}</>}
		</div>
	);
}

export default ContentContainer;
