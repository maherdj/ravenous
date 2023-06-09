import React from "react";
import Container from "@mui/material/Container";
import "../Business.css";

function Business() {
  return (
    <>
      <h4 className="business-name">Business</h4>
      <img className="business-img"></img>
      <li>address, city, state, zipcode</li>
      <li>category</li>
      <li>rating</li>
      <li>review count</li>
    </>
  );
}

export default Business;
