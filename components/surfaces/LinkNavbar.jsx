import { Link, styled } from "@mui/material";
import React from "react";

export const LinkNavbar = (props) => {
  const LinkNav = styled(Link)(({ theme }) => ({
    color: "white",
    fontSize: "16px",
    fontWeight: 600,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
      cursor: "pointer",
    },
    [theme.breakpoints.down("lg")]: {
      fontSize: "14px",
      fontWeight: 600,
    },
  }));
  return <LinkNav href={props.href}>{props.text}</LinkNav>;
};
