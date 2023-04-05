import { useQuery } from "@tanstack/react-query";
import { FC, useState } from "react";
import { useDebounce } from "use-debounce";
import axios, { baseUrl, suggestionsResourceUrl } from "../api/AxiosConfig";
import Map from "../map/Map";
import Search from "../search/Search";

const GeoFinder: FC = () => {
    const [keyword, setKeyword] = useState("");
    const debouncedSearchTerm = useDebounce(keyword, 500);

    const suggestions = async (keyword: string): Promise<any[]> => {
        const { data } = await axios.get(`${baseUrl}${suggestionsResourceUrl}?cityName=${keyword}`);
        return data;
    }
    const { isLoading, status, data, error } = useQuery(['suggestions', debouncedSearchTerm], () => suggestions(keyword), { retry: false, enabled: !!keyword  });

    return(
        <div className="App">
            <h1>GEO-FINDER</h1>
            <Search keyword={keyword} setKeyword={setKeyword} cities={data!!} />
            <Map locations={data!!} zoomLevel={5} />
        </div>
)};

export default GeoFinder;