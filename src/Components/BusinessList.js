import React from "react";
import Business from "./Business";

import Grid from "@mui/material/Grid";

export function BusinessList() {
  return (
    <Grid
      container
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ paddingLeft: "100px" }}
    >
      <Grid item sm={3}>
        <Business />
      </Grid>
      <Grid item sm={3}>
        <Business />
      </Grid>
      <Grid item md={3}>
        <Business />
      </Grid>
    </Grid>
  );
}
