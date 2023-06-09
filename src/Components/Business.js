import React from "react";
import Container from "@mui/material/Container";
import "../Business.css";

function Business() {
  return (
    <Container
      sx={{
        bgcolor: "#ededed",
        borderBottomRightRadius: "30px",
        borderTopLeftRadius: "30px",
        borderBottomLeftRadius: "30px",
        borderTopRightRadius: "30px",
        // justifyContent: "center",
        // alignItems: "center",
        // paddingLeft: "30px",
      }}
    >
      <h4 className="business-name">Business</h4>
      <img className="business-img"></img>
      <li>address, city, state, zipcode</li>
      <li>category</li>
      <li>rating</li>
      <li>review count</li>
    </Container>
  );
}

export default Business;
