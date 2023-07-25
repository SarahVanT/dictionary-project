import React from "react";

export default function Synonyms(props){
    if (props.synonym) {
        return(
           <p>
                {props.synonym.map(function (synonym, index){
                    return <span key={index}>{synonym}{" "}</span>;
                })}
           </p>
            // <p><strong>Synonym:</strong> {props.synonym}</p>
        );
    } else{
        return null;
    }
}