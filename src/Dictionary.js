import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import './Dictionary.css';

export default function Dictionary() {
    const [keyword, setkeyword] = useState("");
    const [results, setResults] = useState(null);

    function handleResponse(response){
        setResults(response.data[0]);
    }

    function search(event){
        event.preventDefault();
        let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        console.log(apiURL);
        axios.get(apiURL).then(handleResponse);
    }

    function handleKeywordChange(event){
        setkeyword(event.target.value);
    }

    return (
       <div className="Dictionary">
        <form onSubmit={search}>
            <input type="search" autoFocus={true} onChange={handleKeywordChange}/>
            {/* <input type="submit"/> */}
        </form>
        <Results results={results} />
       </div>
    );
}