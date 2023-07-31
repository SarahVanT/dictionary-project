import React, { useState, useEffect } from "react";
import axios from "axios";
import Result from "./Result";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [loaded, setLoaded] = useState(false);
  const [definition, setDefinition] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(null); // New state to handle errors

  function handleImages(response) {
    setPhotos(response.data.photos);
  }

  function handleResponse(response) {
    if (response.data && response.data.word) {
      setDefinition(response.data);
      setError(null); // Reset error if there was a previous error
    } else {
      setDefinition(null); // Reset definition if the response doesn't contain a valid definition
      setError("Word not found in the dictionary."); // Set the error message
    }

    let apiKey = "tc77416a9a6oe00ff484244bdff2d3b1";
    let apiUrl = `https://api.shecodes.io/images/v1/search?query=${response.data.word}&key=${apiKey}`;
    
    axios
      .get(apiUrl, { headers: { Authorization: `Bearer ${apiKey}` } })
      .then(handleImages);
  }

  function load() {
    setLoaded(true);
    if (keyword.trim() !== "") {
      search();
    }
  }

  function search() {
    let apiKey = "eac360db5fc86ft86450f3693e73o43f";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (keyword.trim() !== "") {
      search();
    }
  }

  function handleKeywordChange(event) {
    setError(null); // Reset the error state when the user types in the search input
    setKeyword(event.target.value);
  }

  useEffect(() => {
    if (!loaded) {
      load();
    }
    // Cleanup function to reset 'photos' state when the component is unmounted
    return () => {
      setPhotos([]);
    };
  }, [definition, keyword, loaded]);

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
        {error && <div className="error-message">{error}</div>}
      </section>
      {loaded && !error && (
        <>
          <Result definition={definition} />
          <Photos photos={photos} />
        </>
      )}
      {!loaded && "Loading!"}
    </div>
  );
}
