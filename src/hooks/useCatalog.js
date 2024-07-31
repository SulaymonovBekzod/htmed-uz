import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl, baseHeaders } from "../repository/repository";

function Catalog() {
    const [catalogData, setCatalogData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const endPoint = "category-image-list/";
            try {
                const response = await axios.get(baseUrl + endPoint, {
                    headers: baseHeaders,
                });
                setCatalogData(response?.data?.results || []); // Default to empty array if no results
            } catch (error) {
                setError(error.message);
            }
        };

        fetchData()

    }, [])
    const katalogId = (id) => {
        console.log(`Selected katalog ID: ${id}`);
        // Boshqa logikalar bu yerda bo'lishi mumkin
    };

    return {
        catalogData,
        error,
        katalogId,
    };
}

export default Catalog;
