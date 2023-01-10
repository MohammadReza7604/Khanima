import React from "react";
import { Button } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export const CustomButtonSellerTerms = (props) => {
  return (
    <Button
      variant="contained"
      endIcon={<KeyboardArrowDownIcon sx={{ color: "white" }} />}
      sx={{
        display: "flex",
        width: "905px",
        height: "46px",
        color: "white",
        fontSize: "16px",
        fontWeight: 600,
        justifyContent: "space-between",
        borderRadius: "10px",
      }}
    >
      {props.text}
    </Button>
  );
};
