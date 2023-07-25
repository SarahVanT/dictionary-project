import React from "react";
import Synonyms from "./Synonyms.js";
import Examples from "./Examples.js";

export default function Meaning(props) {
    console.log(props.meaning);
    return (
      <div className="Meaning">
        <br />
        <h3>{props.meaning.partOfSpeech}</h3>
        <p><strong>Definition:</strong> {props.meaning.definition}</p>
        <Examples example={props.meaning.example}/>
        <Synonyms synonym={props.meaning.synonyms}/>
        {/* {props.meaning.definition.map(function (definition, index) {
          return (
            <div key={index}>
              <div className="definition">{definition.definition}</div>
              <div className="example">{definition.example}</div>
            </div>
          );
        })} */}
      </div>
    );
  }