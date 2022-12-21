import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import styles from "./styles/Molecules.module.scss";

type appProps = {
	getSearch: Function;
};

function FilterBar({ getSearch }: appProps) {
	const { autoComplete } = styles;

	const [search] = useState<string>("");

	const searchOptions = ["Name", "Size"];

	return (
		<Autocomplete
			data-testid="auto-complete-filter"
			className={autoComplete}
			disablePortal
			value={search}
			onInputChange={(event, inputValue: string) => {
				getSearch(inputValue);
			}}
			id="search"
			options={searchOptions}
			sx={{ width: "100%" }}
			renderInput={(params) => <TextField {...params} label="Sort By" />}
		/>
	);
}

export default FilterBar;
