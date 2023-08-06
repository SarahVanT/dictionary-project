// Import necessary modules and components
import React, { useState } from "react";
import axios from "axios";
import Result from "./Result";
import Photos from "./Photos";
import "./Dictionary.css";

// Defining the 'Dictionary' component
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

  // Function to handle API response for word definition
  function handleResponse(response) {
    // Check if the response contains a valid definition
    if (response.data && response.data.word) {
      setDefinition(response.data);
       // Reset error if there was a previous error
      setError(null);
    } else {
      // Reset definition if the response doesn't contain a valid definition
      setDefinition(null);
      // Set the error message
      setError("Word not found in the dictionary."); 
    };
  
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
    // Reset the error state when the user types in the search input
    setError(null); 
    setKeyword(event.target.value);

    // Clear the photos state when the search input is empty
    if (!event.target.value) {
      setPhotos([]); 
    }
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
              <div className="error-message">
                <i className="fas fa-exclamation-circle"></i> {error}
              </div>
            </form>
            <p className="hint">Suggested words to look up: paris, yoga, coding</p>
          </section>
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
            <p className="hint">Suggested words to look up: paris, yoga, coding</p>
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
