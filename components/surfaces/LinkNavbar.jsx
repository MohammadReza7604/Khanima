import { Button, ButtonBase, Link, styled } from "@mui/material";
import React from "react";

export const LinkNavbar = (props) => {
  const LinkNav = styled(Link)({
    color: "white",
    fontSize: "18px",
    fontWeight: 600,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
      cursor: "pointer",
    },
  });
  return <LinkNav href={props.href}>{props.text}</LinkNav>;
};
export const LinkNavbarButton = (props) => {
  const CustomButton = styled(ButtonBase)({
    color: "white",
    fontSize: "16px",
    fontWeight: 600,
  });
  return (
    <CustomButton
      id={props.id}
      onClick={props.onClick}
      variant="text"
    >
      {props.text}
    </CustomButton>
  );
};
