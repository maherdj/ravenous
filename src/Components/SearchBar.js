import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Container from "@mui/material/Container";

function SearchBar() {
  const [selected, setSelected] = useState({
    activeObject: null,
    objects: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
  });

  const selectChoice = () => {
    setSelected(!selected);
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
              sx={{ bgcolor: selected ? "gold" : "white" }}
              onClick={selectChoice}
            >
              Best Match
            </Button>
            <Button
              sx={{ bgcolor: selected ? "gold" : "white" }}
              onClick={selectChoice}
            >
              Highest Rated
            </Button>
            <Button
              sx={{ backgroundColor: selected ? "gold" : "white" }}
              onClick={selectChoice}
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
            id="search-bar"
            className="text"
            hiddenLabel
            size="small"
            placeholder="Enter restaurant..."
            sx={{ bgcolor: "#fff", position: "relative" }}
          ></TextField>
          <TextField
            id="search-bar"
            className="text"
            hiddenLabel
            size="small"
            placeholder="Enter city..."
            sx={{ bgcolor: "#fff", position: "relative", marginLeft: "5px" }}
          ></TextField>
          <IconButton
            type="submit"
            aria-label="search"
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
