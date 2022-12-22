import React, { useState, useEffect } from "react";

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
				return response.json();
			})
			.then(function (response) {
				setResults(response);
			})
			.catch(function (error) {
				if (error instanceof Error) {
					setError(error.message);
				}
			})
			.finally(() => {
				setLoading(false);
			});
	}, [endpoint]);
	return { loading, results, error };
};

export { useFetchData };
