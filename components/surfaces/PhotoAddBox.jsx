import React from "react";
import { Grid, IconButton } from "@mui/material";
import { TbCameraPlus } from "react-icons/tb";

export const PhotoAddBox = (props) => {
  return (
    <Grid
      container
      sx={{
        border: "2px solid #FFFFFF",
        borderRadius: "5px",
        width: "140px",
        height: "165px",
        justifyContent: "center",
        alignItems: "center",
        ...props.style,
      }}
    >
      <IconButton component="label">
        <input hidden accept="image/*" type="file" />
        <TbCameraPlus
          style={{ color: "white", width: "42px", height: "42px" }}
        />
      </IconButton>
    </Grid>
  );
};
