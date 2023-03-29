import { useQuery } from "@tanstack/react-query";
import { keyboard } from "@testing-library/user-event/dist/keyboard";
import { AxiosResponse } from "axios";
import { FC, useState } from "react";
import axios, { baseUrl, suggestionsResourceUrl } from '../api/AxiosConfig';

interface SearchProps {
    searchResults: any;
    searchQuery: any,
    isLoading: boolean,
}

const Search: FC = () => {
    const [keyword, setKeyword] = useState("")

    const suggestions = async (keyword: string): Promise<any[]> => {
        const { data } = await axios.get(`${baseUrl}${suggestionsResourceUrl}?cityName=${keyword}`);
        return data;
    }
    const { isLoading, status, data, error } = useQuery(['suggestions', keyword], () => suggestions(keyword), { retry: false });


    return (
        <div>
            <input onChange={(event) => setKeyword(event.target.value)}></input>
            <div>
                { isLoading && <p>loading</p> }
                {data && data.map((result: any) => {
                    return (<p>{result}</p>)
                })}
            </div>
        </div>
    ) 
}

export default Search;