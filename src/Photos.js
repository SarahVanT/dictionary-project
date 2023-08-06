import React from "react";
import "./Photos.css";

export default function Photos(props) {
  // Check if 'props.photos' is provided and not an empty array
  if (props.photos.length) {
    return (
      <section className="Photos">
        <div className="row">
          {/* Loop through the 'props.photos' array and render each photo */}
          {props.photos.map(function (photo, index) {
            return (
              // Each photo is displayed in a Bootstrap column
              <div className="col-lg-4 col-md-6" key={index}>
                <a
                  href={photo.src.original}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={photo.src.landscape}
                    className="img-fluid"
                    alt={photo.alt}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    // If 'props.photos' is empty, the component will return null and won't render anything
    return null;
  }
}