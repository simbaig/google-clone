import React, { createContext, useContext, useState } from "react";

const ResultContext = createContext();
const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";

export const ResultContextProvider = ({ children }) => {
	const [results, setResults] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [searchTerm, setSearchTerm] = useState("");

	const getResult = async (type) => {
		setIsLoading(true);

		const response = fetch(`${baseUrl}${type}`, {
			method: "GET",
			headers: {
				"X-User-Agent": "desktop",
				"X-Proxy-Location": "EU",
				"X-RapidAPI-Key": "9b4da91995msh5ea4747c553a2a0p1b6301jsne9875e8e0b03",
				"X-RapidAPI-Host": "google-search3.p.rapidapi.com",
			},
		});

		const data = await response.json();

		setResults(data);
		setIsLoading(false);
	};

	return (
		<ResultContext.Provider
			value={{ getResult, results, searchTerm, setSearchTerm, isLoading }}
		>
			{children}
		</ResultContext.Provider>
	);
};

export const useResultContext = () => useContext(ResultContext);
