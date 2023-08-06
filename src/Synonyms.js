import React from "react";
import "./Synonyms.css";

// Defining the 'Synonyms' component
export default function Synonyms(props) {
  console.log(props.synonym);
  // Check if 'props.synonyms' is provided (not null or undefined)
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        <h3>Similar:</h3>
        <ul>
          {props.synonyms.map(function (synonym, index) {
            return <li key={index}>{synonym}</li>;
          })}
        </ul>
      </div>
    );
  } else {
    // If 'props.synonyms' is not provided, nothing will be rendered
    return null;
  }
}