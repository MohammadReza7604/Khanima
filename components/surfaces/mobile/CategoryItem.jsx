import { Accordion, AccordionDetails, AccordionSummary, Divider, Grid, styled } from "@mui/material";
import Image from "next/image";
import React from "react";
import { IconTitleGlobal } from "../../data-display/IconTitle";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

export const CategoryItem = (props) => {
  const CustomAccordionSummary = styled(AccordionSummary)({
    padding: "0 8px 0 0",
    marginBottom: "0",
  });
  const Line = styled(Divider)({
    borderWidth: "1px",
    borderColor: "rgba(99, 99, 99)",
  });
  return (
    <Grid container direction="column">
      <Accordion
        id="ca"
        sx={{
          boxShadow: "none",
        }}
      >
        <CustomAccordionSummary
          expandIcon={<KeyboardArrowLeftIcon sx={{ color: "white" }} />}
        >
          <IconTitleGlobal
            title={props.title}
            styleBox={{display:"flex",alignSelf:"center"}}
            icon={
              <Image
                width={16}
                height={16}
                alt="vector"
                src={props.src}
              />
            }
          />
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
      </Accordion>
      <Line />
    </Grid>
  );
};
