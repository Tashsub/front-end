import { useState, useEffect } from "react";
import styles from "./styles/Portfolio.module.scss";
import Menu from "components/App/Organisms/Header";
import Map from "components/App/Molecules/MapPortfolio";
import ContentContainer from "components/App/Organisms/ContentContainer";
import { useFetchData } from "Hooks/useFetchData";
import { apiEndpoints } from "Api/Endpoints";
import { sortArrayExtensions } from "Extensions/SortArrayExtensions";
import ErrorMessage from "components/App/Atoms/ErrorMessage";

export default function Portfolio() {
	const { shell } = styles;

	const url = apiEndpoints("sites");

	const [filter, setFilter] = useState<string>("");

	const requestObj = {
		url: url,
		method: "GET",
	};

	const { error, loading, results } = useFetchData(requestObj);

	let sites: Array<any> = [];

	switch (filter) {
		case "Name":
			sites = sortArrayExtensions(results, ["name"]);
			break;
		case "Size":
			sites = sortArrayExtensions(results, ["size"]).reverse();
			break;
		default:
			sites = results;
			break;
	}

	if (error) {
		return (
			<>
				<Menu />
				<ErrorMessage
					text={"Could not display data. Please try again later."}
				/>
			</>
		);
	}

	return (
		<div className={shell}>
			<Menu />
			<Map sites={sites} />
			<ContentContainer sites={sites} error={error} getSearch={setFilter} />)
		</div>
	);
}
