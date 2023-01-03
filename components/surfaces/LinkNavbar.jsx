import { Link, styled } from "@mui/material";
import React from "react";

export const LinkNavbar = (props) => {
  const LinkNav = styled(Link)({
    color: "white",
    fontSize: "16px",
    fontWeight: 500,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
      cursor: "pointer",
    },
  });
  return <LinkNav>{props.text}</LinkNav>;
};
