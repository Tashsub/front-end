import styles from "./styles/Portfolio.module.scss";
import Menu from "components/App/Organisms/Header";
import Map from "components/App/Atoms/Map";
import ContentContainer from "components/App/Organisms/ContentContainer";
import useFetchData from "Hooks/useFetchData";
import { apiEndpoints } from "Api/Endpoints";

export default function Portfolio() {
	const { shell } = styles;

	const url = apiEndpoints("sites");

	const requestObj = {
		url: url,
		method: "GET",
	};

	const { error, loading, results: sites } = useFetchData(requestObj);

	return (
		<div className={shell}>
			<Menu />
			<Map />
			<ContentContainer sites={sites} error={error} />
		</div>
	);
}
