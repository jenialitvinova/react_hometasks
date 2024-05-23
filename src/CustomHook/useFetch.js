import { useState } from "react";

const useFetch = (url, options) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const res = await fetch(url, options);
            const json = await res.json();
            setResponse(json);
            setIsLoading(false);
            console.log(`API call: ${url} - Status: ${res.status}`);

            let currentData = localStorage.getItem("API_CALL");

            if (currentData) {
                currentData = JSON.parse(currentData);
            } else {
                currentData = [];
            }

            currentData.push({
                status: res.status,
                body: options.body,
            });

            localStorage.setItem("API_CALL", JSON.stringify(currentData));
        } catch (error) {
            setError(error);
        }
    };

    return { response, error, isLoading, fetchData };
};

export default useFetch;