import React from "react";
import { Grid, IconButton, styled, Typography } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

export const BackPageMobile = (props) => {
  const CustomGrid = styled(Grid)(({ theme }) => ({
    width: "390px",
    direction: "row",
    alignItems: "center",
    padding: "0 30px",
    justifyContent: "space-between",
    ...props.style,
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  }));
  return (
    <Grid container>
      <CustomGrid container>
        <Typography fontSize="12px" fontWeight={700}>
          {props.title}
        </Typography>
        <IconButton>
          <KeyboardBackspaceIcon
            sx={{ color: "white", width: "20px", height: "20px" }}
          />
        </IconButton>
      </CustomGrid>
    </Grid>
  );
};
