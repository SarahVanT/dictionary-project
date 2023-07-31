// Import necessary modules and components
import React, { useState } from "react";
import axios from "axios";
import Result from "./Result";
import Photos from "./Photos";
import "./Dictionary.css";

// Functional component 'Dictionary'
export default function Dictionary(props) {
  // State variables using the 'useState' hook 
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [loaded, setLoaded] = useState(false);
  const [definition, setDefinition] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(null);

  // Function to handle API response for images
  function handleImages(response) {
    setPhotos(response.data.photos);
  }

  function handleResponse(response) {
    // Check if the response contains a valid definition
    if (response.data && response.data.word) {
      setDefinition(response.data);
      setError(null); // Reset error if there was a previous error
    } else {
      setDefinition(null); // Reset definition if the response doesn't contain a valid definition
      setError("Word not found in the dictionary."); // Set the error message
    }
  
    let apiKey = "tc77416a9a6oe00ff484244bdff2d3b1";
    let apiUrl = `https://api.shecodes.io/images/v1/search?query=${response.data.word}&key=${apiKey}`;
    
    // Make another API request to fetch related images using Axios
    axios
      .get(apiUrl, { headers: { Authorization: `Bearer ${apiKey}` } })
      .then(handleImages);
  }

  // Function to load data and initiate search on component mount
  function load() {
    setLoaded(true);
    search();
  }

  // Function to perform the word search
  function search() {
    let apiKey = "eac360db5fc86ft86450f3693e73o43f";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    // Make an API request to fetch word definition using Axios
    axios.get(apiUrl).then(handleResponse);
  }

  // Function to handle form submission
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  // Function to handle changes in the search input
  function handleKeywordChange(event) {
    setError(null); // Reset the error state when the user types in the search input
    setKeyword(event.target.value);
  }

  if (loaded) {
    if (error) {
      // Render the error message if there's an error
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
                className={`form-control search-input ${error ? "error" : ""}`}
                onChange={handleKeywordChange}
              />
            </form>
            <small className="hint">i.e. paris, wine, yoga, coding</small>
          </section>
          <div className="error-message">{error}</div>
        </div>
      );
    } else {
      // Render the search result, search input form, and related photos.
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
          <Photos photos={photos} />
        </div>
      );
    }
  } else {
    // If data is not yet loaded, initiate the loading process and display "Loading!"
    load();
    return "Loading!";
  }
}
