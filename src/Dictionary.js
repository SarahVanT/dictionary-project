import React, { useState } from "react";
import axios from "axios";
import Result from "./Result";
import "./Dictionary.css";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [loaded, setLoaded] = useState(false);
  const [definition, setDefinition] = useState(null);

  function handleResponse(response) {
    setDefinition(response.data);
  }

  function load() {
    setLoaded(true);
    search();
  }

  function search() {
    let apiKey = "eac360db5fc86ft86450f3693e73o43f";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <form onSubmit={handleSubmit}>
            <label>What word do you want to look up?</label>
            <input
              type="search"
              placeholder="Search for a word"
              defaultValue={props.defaultKeyword}
              autoFocus={true}
              className="form-control search-input"
              onChange={handleKeywordChange}
            />
          </form>
          <small className="hint">i.e. paris, wine, yoga, coding</small>
        </section>
        <Result definition={definition} />
        {/* <Photos photos={photos} /> */}
      </div>
  );
      
  } else {
    load();
    return "Loading!"
  }

}
// import React, { useState } from "react";
// import axios from "axios";
// import Results from "./Results";
// import './Dictionary.css';

// export default function Dictionary(props) {
//     let [keyword, setkeyword] = useState(props.defaultKeyword);
//     let [results, setResults] = useState(null);
//     let [loaded, setLoaded] = useState(false);
//     // let [definition, setDefinition] = useState(null);

//     function handleResponse(response){
//         setResults(response.data);
//     }

//     function search(){
//         let key = `tc77416a9a6oe00ff484244bdff2d3b1`;
//         let apiURL = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${key}`;
//         console.log(apiURL);
//         axios.get(apiURL).then(handleResponse);
//     }


//     function handleSubmit(event){
//         event.preventDefault();
//         // let imageApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${key}`;
//         // axios.get(imageApiUrl).then(handleImageResponse);
//         search();
//     }

//     function load(){
//         setLoaded(true);
//         search();
//     }

//     function handleKeywordChange(event){
//         setkeyword(event.target.value);
//     }

//     if (loaded) {
//         return (
//             <div className="Dictionary">
//                 <section>
//                     <h1>What word do you want to look up?</h1>
//                     <form onSubmit={handleSubmit}>
//                         <input 
//                             type="search" 
//                             autoFocus={true} 
//                             onChange={handleKeywordChange}
//                             defaultValue={props.defaultKeyword}
//                             className="form-control"
//                             autoComplete="off"
//                         />
//                     </form>
//                     <small className="hint">
//                         suggested words: sunset, wine, yoga, plants
//                     </small>
//                     <Results results={results} />
//                 </section>
//             </div>
//         );
//     } else {
//         loaded();
//         return "Loading";
//     }
// }