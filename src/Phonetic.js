import React from "react";
import "./Phonetic.css";

// Defining the 'Phonetic' component
export default function Phonetic(props){
    // Check if 'props.phonetic' is provided (not null or undefined)
    if (props.phonetic){
        return (
            <div className="Phonetic">
                <h2>{props.phonetic}</h2>
            </div>
        );
    } else {
        // If 'props.phonetic' is not provided, nothing will be rendered
        return null;
    }
}