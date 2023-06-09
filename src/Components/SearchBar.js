import React from "react";

import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";

function SearchBar() {
  return (
    <>
      <Paper component="form">
        <TextField
          id="search-bar"
          className="text"
          hiddenLabel
          size="small"
          sx={{ bgcolor: "#fff" }}
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
          }}
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </>
  );
}

export default SearchBar;
