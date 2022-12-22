import styles from "./styles/site.module.scss";
import Menu from "components/App/Organisms/Header";
import MapSite from "components/App/Molecules/MapSite";
import { useNavigate, useParams } from "react-router-dom";
import { apiEndpoints } from "Api/Endpoints";
import { useFetchData } from "Hooks/useFetchData";
import ErrorMessage from "components/App/Atoms/ErrorMessage";

export default function Site() {
	const { shell, homeButton } = styles;

	const navigate = useNavigate();

	const { id } = useParams();

	const url = apiEndpoints("sites");
	const requestObj = {
		url: url + `/${id}`,
		method: "GET",
	};

	const { results: site, error, loading } = useFetchData(requestObj);

	if (error) {
		return (
			<>
				<Menu />
				<ErrorMessage text={"Could not display data. Please try again later"} />
			</>
		);
	}

	return (
		<div className={shell}>
			{loading ? (
				<p></p>
			) : (
				<>
					<Menu />
					<MapSite site={site} isLoading={loading} />
					<button
						className={homeButton}
						onClick={() => {
							navigate("/");
						}}
					>
						Return to Home
					</button>
				</>
			)}
		</div>
	);
}
