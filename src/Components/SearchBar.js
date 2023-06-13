import React, { useState, useRef, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Container from "@mui/material/Container";

function SearchBar() {
  const [bestMatchSelected, setBestMatchSelected] = useState(false);
  const [highestRatedSelected, setHighestRatedSelected] = useState(false);
  const [mostReviewedSelected, setMostReviewedSelected] = useState(false);

  const searchTypeRef = useRef();
  const searchLocationRef = useRef();

  // will need to refractor this, I don't think this is the best way to do this
  const selectBestMatch = () => {
    setBestMatchSelected(!bestMatchSelected);
    setHighestRatedSelected(false);
    setMostReviewedSelected(false);
  };

  const selectHighestRated = () => {
    setHighestRatedSelected(!highestRatedSelected);
    setMostReviewedSelected(false);
    setBestMatchSelected(false);
  };

  const selectMostReviewed = () => {
    setMostReviewedSelected(!mostReviewedSelected);
    setBestMatchSelected(false);
    setHighestRatedSelected(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    let searchTypeValue = searchTypeRef.current.value;
    let searchLocationValue = searchLocationRef.current.value;

    if (bestMatchSelected === true) {
      console.log(
        `searching Yelp with ${searchTypeValue}, ${searchLocationValue}, best_match`
      );
    } else if (highestRatedSelected === true) {
      console.log(
        `searching Yelp with ${searchTypeValue}, ${searchLocationValue}, highest_rated`
      );
    } else if (mostReviewedSelected === true) {
      console.log(
        `searching Yelp with ${searchTypeValue}, ${searchLocationValue}, most_reviewed`
      );
    }
  };
  return (
    <>
      <Container sx={{}}>
        <Container
          sx={{
            position: "absolute",
            padding: "20px",
            top: "150px",
            left: "130px",
          }}
        >
          <ButtonGroup sx={{ backgroundColor: "white" }}>
            <Button
              sx={{ bgcolor: bestMatchSelected ? "gold" : "white" }}
              onClick={selectBestMatch}
              select="Best Match"
            >
              Best Match
            </Button>
            <Button
              sx={{ bgcolor: highestRatedSelected ? "gold" : "white" }}
              onClick={selectHighestRated}
              select="Highest Rated"
            >
              Highest Rated
            </Button>
            <Button
              sx={{ backgroundColor: mostReviewedSelected ? "gold" : "white" }}
              onClick={selectMostReviewed}
              select="Most Reviewed"
            >
              Most Reviewed
            </Button>
          </ButtonGroup>
        </Container>

        {/* <Paper component="form" sx={{ position: "absolute" }}> */}
        <Container
          sx={{ position: "absolute", width: "700px", height: "200px" }}
        >
          <TextField
            id="type-bar"
            ref={searchTypeRef}
            className="text"
            hiddenLabel
            size="small"
            placeholder="Enter restaurant..."
            sx={{ bgcolor: "#fff", position: "relative" }}
          ></TextField>
          <TextField
            id="loaction-search"
            ref={searchLocationRef}
            className="text"
            hiddenLabel
            size="small"
            placeholder="Enter city..."
            sx={{ bgcolor: "#fff", position: "relative", marginLeft: "5px" }}
          ></TextField>
          <IconButton
            type="submit"
            aria-label="search"
            onClick={onSubmit}
            sx={{
              bgcolor: "#fff",
              borderBottomRightRadius: "0px",
              borderTopLeftRadius: "0px",
              borderBottomLeftRadius: "0px",
              borderTopRightRadius: "0px",
              position: "absolute",
            }}
          >
            <SearchIcon />
          </IconButton>
        </Container>

        {/* </Paper> */}
      </Container>
    </>
  );
}
export default SearchBar;
