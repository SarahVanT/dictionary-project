import React, { useState } from "react";
import axios from "axios";
import './Dictionary.css';

export default function Dictionary() {
    let [keyword, setkeyword] = useState("");

    function handleResponse(response){
        console.log(response.data[0].meanings[0].definitions[0].definition);
    }

    function search(event){
        event.preventDefault();
        let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        console.log(apiURL);
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
       </div>
    );
}