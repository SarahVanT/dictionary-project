import React from "react";
import Synonyms from "./Synonyms.js";
import Examples from "./Examples.js";
import "./Meaning.css";

// Defining the 'Meaning' component
export default function Meaning(props) {
    return (
      <div className="Meaning">
        <h2>{props.meaning.partOfSpeech}</h2>
        <p>{props.meaning.definition}</p>
        <Examples example={props.meaning.example}/>
        <Synonyms synonyms={props.meaning.synonyms} />
      </div>
    ); 
}