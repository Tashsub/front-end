import React from "react";
import ErrorMessage from "../Atoms/ErrorMessage";
import Card from "./Card";
import styles from "./styles/Organisms.module.scss";
import Filter from "../Molecules/FilterBar";

type appProps = {
	sites: Array<any>;
	error: string | null;
	getSearch: Function;
};

function ContentContainer({ sites, error, getSearch }: appProps) {
	const { contentContainer, box } = styles;

	const errMsg = "Could not display results. Please try again later";

	const mappedResults = sites.map((site: any) => {
		return (
			<Card
				key={site.id}
				id={site.id}
				name={site.name}
				reading={site.size}
				status={site.status}
				scheduleNow={site.schedules.now}
				scheduleNext={site.schedules.next}
			/>
		);
	});

	return (
		<div className={contentContainer}>
			{error ? (
				<ErrorMessage text={errMsg} />
			) : (
				<>
					<div className={box}>
						<Filter getSearch={getSearch} />
					</div>
					<div data-testid="mapped-sites">{mappedResults}</div>
				</>
			)}
		</div>
	);
}

export default ContentContainer;
