import { FC } from "react";

interface SearchProps {
    keyword: string,
    setKeyword: (keyword: string) => void,
    cities: any[]
}

const Search: FC<SearchProps> = ({cities, setKeyword}) => {
    return (
        <div>
            <input onChange={(event) => setKeyword(event.target.value)}></input>
            <div>
                {cities && cities.map((result: any) => {
                    return (<p>{result.name}</p>)
                })}
            </div>
        </div>
    ) 
}

export default Search;