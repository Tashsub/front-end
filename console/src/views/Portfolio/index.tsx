import monogram from "assets/monogram.svg";
import styles from "./styles/Portfolio.module.scss";
import Menu from "components/App/Organisms/Header";
import Map from "components/App/Atoms/Map";
import ContentContainer from "components/App/Organisms/ContentContainer";

export default function Portfolio() {
	const { shell } = styles;
	return (
		<div className={shell}>
			<Menu />
			<Map />
			<ContentContainer />
		</div>
	);
}
