import { Grid, Menu, Paper } from "@mui/material";
import React from "react";

export const CategorizeMenu = (props) => {
  return (
    <Paper
      sx={{
        background: "#FFFFFF",
        borderRadius: "15px 0px 15px 15px",
        width: "879px",
        height: "375px",
        // position: "relative",
        // top: "74px",
        // right: "18px",
      }}
    >
      <Grid container direction="row">
        <Menu
          id={props.id}
          elevation={0}
          MenuListProps={props.MenuListProps}
          anchorEl={props.anchorEl}
          open={props.open}
          onClose={props.onClose}
        ></Menu>
      </Grid>
    </Paper>
  );
};
