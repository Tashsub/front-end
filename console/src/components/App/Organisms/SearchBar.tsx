import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { Select } from "@mui/material";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import styles from "./styles/Organisms.module.scss";

function SearchBar() {
	const { box } = styles;

	const [search, setSearch] = useState<string | null>("");

	const handleChange = (event: any) => {
		console.log(event.target.value);
		setSearch(event.target.value);
	};

	const searchOptions = ["Name", "Size"];

	return (
		// <Box className={box}>
		// 	<FormControl fullWidth>
		// 		<InputLabel id="sort-search-by">Sort By</InputLabel>
		// 		<Select
		// 			labelId="sort-search-by"
		// 			id="select"
		// 			value={search}
		// 			label="sortBy"
		// 			onChange={handleChange}
		// 		>
		// 			{searchOptions.map((option) => {
		// 				return (
		// 					<MenuItem key={option.value} value={option.value}>
		// 						{option.value}
		// 					</MenuItem>
		// 				);
		// 			})}
		// 		</Select>
		// 	</FormControl>
		// </Box>
		<div className={box}>
			<Autocomplete
				disablePortal
				value={search}
				onInputChange={(event, InputValue: string | null) => {
					setSearch(InputValue);
					console.log(InputValue);
				}}
				id="combo-box-demo"
				options={searchOptions}
				sx={{ width: 300 }}
				renderInput={(params) => <TextField {...params} label="Sort By" />}
			/>
		</div>
	);
}

export default SearchBar;
