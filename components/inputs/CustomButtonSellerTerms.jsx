import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  styled,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const CustomButtonSellerTerms = (props) => {
  const CustomAccordionSummary = styled(AccordionSummary)({
    padding: "0 8px 0 0",
    marginBottom: "0",
  });
  const TypoAccordionSummary = styled(Typography)({
    color: "white",
    fontSize: "10px",
    fontWeight: 700,
  });
  const CustomAccordion = styled(Accordion)(({ theme }) => ({
    backgroundColor: "#00A693",
    boxShadow: "none",
    width: "905px",
    height: "auto",
    borderRadius: "10px",
    padding: "0 20px",
    "&::before":{
      position:"inherit"
    },
    [theme.breakpoints.between('xs','md')]:{
      backgroundColor: "inherit",
      width: "390px",

    }
  }));

  return (
    <CustomAccordion id="ca">
      <CustomAccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
      >
        <TypoAccordionSummary>{props.text}</TypoAccordionSummary>
      </CustomAccordionSummary>
      <AccordionDetails
        sx={{
          padding: "0 16px 16px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        {/* <TypoAccordionSummary>فعال</TypoAccordionSummary>
    <TypoAccordionSummary>غیرفعال</TypoAccordionSummary> */}
        {/* <TypoAccordionSummary>Others</TypoAccordionSummary> */}
      </AccordionDetails>
    </CustomAccordion>
  );
};
