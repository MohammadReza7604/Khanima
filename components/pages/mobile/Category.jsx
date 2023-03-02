import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Grid,
  styled,
  Typography,
} from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { IconTitleGlobal } from "../../data-display/IconTitle";
import Image from "next/image";
import { CategoryItem } from "../../surfaces/mobile/CategoryItem";

export const Category = () => {
  const CustomGridWarper = styled(Grid)(({ theme }) => ({
    background: "url(/images/back-mobile.png)",
  }));
  const CustomGrid = styled(Grid)(({ theme }) => ({
    height: "auto",
    width: "390px",
    marginTop: "50px",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  }));

  return (
    <CustomGridWarper container>
      <CustomGrid container direction="column" gap="20px">
        <Typography fontSize="12px" padding="30px 0 0 30px" fontWeight={900}>
          دسته بندی ها
        </Typography>
        <Divider
          sx={{
            borderWidth: "1px",
            borderColor: "rgba(99, 99, 99)",
            width: "100vw",
          }}
        />
        <Grid container direction="column" padding="0 30px" gap="20px">
          <CategoryItem title="لوازم خانه" src={"/images/icon-home.svg"}/>
          <CategoryItem title="لوازم آشپزخانه" src={"/images/icon-kitchen.svg"}/>
          <CategoryItem title="وسایل شخصی" src={"/images/icon-watch.svg"}/>
          <CategoryItem title="سکه، تمبر، اسکناس" src={"/images/icon-dollar.svg"}/>
          <CategoryItem title="ابزار و تجهیزات" src={"/images/icon-tool.svg"}/>
          <CategoryItem title="سرگرمی" src={"/images/icon-game.svg"}/>
          <CategoryItem title="حراجی" src={"/images/icon-sales.svg"}/>
          <CategoryItem title="کارشناسی" src={"/images/icon-user.svg"}/>
          <CategoryItem title="نیازمندی" src={"/images/icon-need.svg"}/>
          <CategoryItem title="متفرقه" src={"/images/icon-other.svg"}/>

        </Grid>
      </CustomGrid>
    </CustomGridWarper>
  );
};
