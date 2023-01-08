const baseUrl = "http://localhost:8000/";

export const apiEndpoints = (resource: string, url = baseUrl) => {
	return url + resource;
};
