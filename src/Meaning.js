import React from "react";
import Synonyms from "./Synonyms.js";
import Examples from "./Examples.js";
import "./Meaning.css";

export default function Meaning(props) {
    console.log(props.meaning);
    return (
      <div className="Meaning">
        <br />
        <h3>{props.meaning.partOfSpeech}</h3>
        <p><strong>Definition:</strong> {props.meaning.definition}</p>
        <Examples example={props.meaning.example}/>
        <Synonyms synonym={props.meaning.synonyms}/>
      </div>
    ); 
  }