import React, { useState, useEffect, useCallback } from "react";

type appProps = {
	url: string;
	method?: string;
	body?: any;
};

const useFetchData = ({ url, method, body }: appProps) => {
	const [error, setError] = useState<string | null>(null);
	const [results, setResults] = useState([]);
	const [loading, setLoading] = useState(true);
	const [endpoint, setEndpoint] = useState(url);

	useEffect(() => {
		fetch(endpoint, { method: method, body: body })
			.then(function (response) {
				if (!response.ok) {
					throw Error(response.statusText);
				}
				console.log("fetching data ");
				return response.json();
			})
			.then(function (response) {
				setResults(response);
				console.log(response);
			})
			.catch(function (error) {
				if (error instanceof Error) {
					setError(error.message);
				}
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	// async function doFetch(endpoint:string) {
	// 	try {
	// 		console.log("here in custom hook");
	// 		const response = await fetch(endpoint, { method: method, body: body });
	// 		console.log(response);

	// 		if (!response.ok) {
	// 			const message = `An error has occurred: ${response.status}`;
	// 			throw new Error(message);
	// 		}

	// 		const result = await response?.json();
	// 		console.log(result);

	// 		setResults(result);
	// 	} catch (error) {
	// 		if (error instanceof Error) {
	// 			setError(error.message);
	// 		}
	// 	}
	// }

	// useEffect(() => {
	// 	doFetch(endpoint);
	// }, [endpoint]);

	return { loading, results, error };
};

export { useFetchData };
