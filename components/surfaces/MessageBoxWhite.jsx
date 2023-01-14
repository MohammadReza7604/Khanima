import React from "react";
import { Grid, Typography } from "@mui/material";
import DoneAllIcon from "@mui/icons-material/DoneAll";

export const MessageBoxWhite = () => {
  return (
    <Grid
      container
      direction="column"
      sx={{
        width: "504px",
        height: "58px",
        bgcolor: "white",
        borderRadius: "10px 0px 10px 10px",
        padding: "10px",
        gap: "4px",
        // transform: "matrix(1, 0, 0, -1, 0, 0)",
      }}
    >
      <Grid>
        <Typography
          sx={{
            fontSize: "12px",
            fontWeight: 600,
            color: "#282828",
            // transform: "matrix(1, 0, 0, -1, -10, 30)",
          }}
        >
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است.
        </Typography>
      </Grid>
      <Grid container direction="row" gap="6px" alignItems="center">
        <DoneAllIcon sx={{ width: "16px", height: "16px", color: "#00A693" }} />
        <Typography
          sx={{
            fontSize: "8px",
            fontWeight: 600,
            color: "#282828",
            // transform: "matrix(1, 0, 0, -1, -10, 30)",
          }}
        >
          پنج دقیقه پیش
        </Typography>
      </Grid>
    </Grid>
  );
};
