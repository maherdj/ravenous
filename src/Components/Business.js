import React from "react";
import Container from "@mui/material/Container";
import "../Business.css";

function Business({ business }) {
  const {
    imageSrc,
    name,
    address,
    city,
    state,
    zipCode,
    category,
    rating,
    reviewCount,
  } = business;
  return (
    <Container
      sx={{
        // bgcolor: "#ededed",
        borderBottomRightRadius: "30px",
        borderTopLeftRadius: "30px",
        borderBottomLeftRadius: "30px",
        borderTopRightRadius: "30px",
        padding: "10px",
        // justifyContent: "center",
        // alignItems: "center",
        // paddingLeft: "30px",
      }}
    >
      <h4 className="business-name">{name}</h4>
      <img className="business-img" src={imageSrc}></img>
      <li>
        {address}, {city}, {state}, {zipCode}
      </li>
      <li>{category}</li>
      <li>{rating}</li>
      <li>{reviewCount}</li>
    </Container>
  );
}

export default Business;
