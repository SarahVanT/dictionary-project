import React from "react";

export default function Meaning(props) {
    console.log(props.meaning);
    return (
      <div className="Meaning">
        <h3>{props.meaning.partOfSpeech}</h3>
        <h3>{props.meaning.definition}</h3>
        <h3>{props.meaning.example}</h3>
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