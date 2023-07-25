import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import './Dictionary.css';

export default function Dictionary() {
    const [keyword, setkeyword] = useState("");
    const [results, setResults] = useState(null);

    function handleResponse(response){
        console.log(response.data);
        setResults(response.data);
    }

    function search(event){
        event.preventDefault();
        // let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        let key = `tc77416a9a6oe00ff484244bdff2d3b1`;
        let apiURL = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${key}`;
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