import React from "react";
import "./Examples.css";

// Defining the 'Examples' component
export default function Examples(props) {
    // Check if 'props.example' is provided (not null or undefined)
    if (props.example){
        return(
            <div className="Examples">
              <h3>Example:</h3>
              <p>{props.example}</p> 
            </div>
            
        );
    } else {
        // If 'props.example' is not provided, nothing will be rendered
        return null;
    }
}