import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";

export const IconTitle = (props) => {
  return (
    <Grid container direction="row" gap="5px" justifyContent="flex-end">
      <Typography sx={{ direction: `${props.dir}` }}>{props.title}</Typography>
      <Box>{props.icon}</Box>
    </Grid>
  );
};
export const IconTitle2 = (props) => {
  return (
    <Grid container direction="row" gap="5px" justifyContent="flex-start">
      <Box>
        <AssignmentIcon />
      </Box>
      <Typography>{props.title}</Typography>
    </Grid>
  );
};
export const IconTitleChat = (props) => {
  return (
    <Grid container direction="row" gap="5px" alignItems="center">
      <Box display="flex" alignItems="center">
        {props.icon}
      </Box>
      <Typography sx={props.sx}>{props.title}</Typography>
    </Grid>
  );
};
