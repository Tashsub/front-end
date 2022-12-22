// import dependencies
import React from "react";
import { sortArrayExtensions } from "Extensions/SortArrayExtensions";
import Card from "../Organisms/Card";

// import react-testing methods
import { fireEvent, screen, render, within } from "@testing-library/react";

// add custom jest matchers from jest-dom
import "@testing-library/jest-dom";

// the component to test
import ContentContainer from "../Organisms/ContentContainerPortfolio";

// the data from an API call
import apiData from "../../../../../mockAPI/src/db.json";

//Arrange mock functions/api data/results
const mock = { loading: false, results: apiData, error: "" };

jest.mock(".../../../Hooks/useFetchData", () => ({
	useFetchData: () => {
		return mock;
	},
}));

const getSearch = jest.fn();

const sortedApiDataBySize = sortArrayExtensions(mock.results.sites, ["Size"]);

//Tests
describe("App", () => {
	it("Should render the site list correctly", async () => {
		render(
			<ContentContainer
				sites={mock.results.sites}
				error={null}
				getSearch={getSearch}
			/>
		);

		expect(screen.getAllByTestId("site-cards")).toHaveLength(4);
	});

	it("Should order sites by size when user changes dropdown", async () => {
		render(
			<ContentContainer
				sites={mock.results.sites}
				error={null}
				getSearch={getSearch}
			/>
		);

		let autocomplete = screen.getByTestId("auto-complete-filter");
		let input = within(autocomplete).getByRole("combobox");

		//click the filter
		autocomplete.click();
		autocomplete.focus();

		//change input to size
		await fireEvent.change(input, { target: { value: "Size" } });

		// navigate to the first item in the autocomplete box
		await fireEvent.keyDown(autocomplete, { key: "ArrowDown" });
		// select the first item
		await fireEvent.keyDown(autocomplete, { key: "Enter" });

		// check the new value of the input field
		expect(input).toHaveValue("Size");

		let finalResult = sortedApiDataBySize.map((site: any) => {
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

		let expectedResult = (
			await render(finalResult).findByTestId("mapped-sites")
		).innerHTML;

		let currentScreen = screen.getByTestId("mapped-sites").innerHTML;

		expect(currentScreen).toBe(expectedResult);
	});
});
