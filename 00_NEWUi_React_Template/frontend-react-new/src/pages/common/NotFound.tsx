// NotFound.js
import React, { useEffect } from "react";
import "../../assets/css/notfound.css";
import initWow from "../../assets/js/mywow";

function NotFound() {
  useEffect(()=>{
    initWow();
  })

  return (
    <div id="notfound-wrapper">
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404 wow wobble" data-wow-delay="0.5s">
            <h1>Oops!</h1>
          </div>
          <h2>404 - Page not found</h2>
          <p>
            The page you are looking for might have been removed had its name
            changed or is temporarily unavailable.
          </p>
          <a href="/">Go To Home</a>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
