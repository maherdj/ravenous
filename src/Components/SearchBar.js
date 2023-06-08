import React from "react";

import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";



function SearchBar() {
    return (
        <>
            <form>
                    <TextField
                        id="search-bar"
                        className="text"
                        label="Search..."
                        size="small"
                        sx={{color: "gray"}}>

                    </TextField>
                <IconButton type="submit" aria-label="search">
                    <SearchIcon/>
                </IconButton>
            </form>
        </>
    )
}

export default SearchBar