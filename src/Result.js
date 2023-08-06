import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./Result.css";

// Defining the 'Result' component
export default function Result(props) {
  // Check if the 'props.definition' has a value (meaning it contains the word definition)
  if (props.definition) {
    return (
      <div className="Result">
        <section>
          <h1>{props.definition.word}</h1>
          <Phonetic phonetic={props.definition.phonetic} />
        </section>
        {/* Loop through the 'meanings' array in 'props.definition' and render the 'Meaning' component for each meaning */}
        {props.definition.meanings.map(function (meaning, index) {
          return (
            // Each meaning section has a unique 'key' based on the 'index'
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    // If 'props.definition' is null or not provided, return 'null' (nothing will be rendered)
    return null;
  }
}