import React from "react";
import Business from "./Business";

import Grid from "@mui/material/Grid";

export function BusinessList({ businesses }) {
  return (
    <Grid
      container
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ paddingLeft: "50px" }}
      margin={3}
    >
      {businesses.map((business) => {
        return (
          <Grid item sm={3.5}>
            <Business business={business} />
          </Grid>
        );
      })}
    </Grid>
  );
}
