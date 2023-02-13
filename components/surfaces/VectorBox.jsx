import React from "react";
import { Grid, styled, Typography } from "@mui/material";
import SourceOutlinedIcon from "@mui/icons-material/SourceOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import { AiOutlineShop } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { RiAuctionLine } from "react-icons/ri";
import { CgCarousel } from "react-icons/cg";
import {CgShoppingBag} from "react-icons/cg"
import GroupsIcon from '@mui/icons-material/Groups';

export const VectorBox = (props) => {
  const CustomTypo = styled(Typography)({
    fontSize: "20px",
    fontWeight: 700,
    color: "#282828",
  });
  const CustomGrid = styled(Grid)({
    width: "142px",
    height: "142px",
    backgroundColor: "white",
    borderRadius: "14px",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "8px 6px 30px rgba(0, 0, 0, 0.2)",
  });
  return (
    <Grid container direction="row" gap="80px" justifyContent="center">
      <CustomGrid container direction="column">
        <SourceOutlinedIcon sx={{ width: "72px", height: "72px" }} />
        <CustomTypo>آگهی</CustomTypo>
      </CustomGrid>
      <CustomGrid container direction="column">
        <ArticleOutlinedIcon sx={{ width: "72px", height: "72px" }} />
        <CustomTypo>درخواست</CustomTypo>
      </CustomGrid>
      <CustomGrid container direction="column">
        <AiOutlineShop
          style={{ width: "72px", height: "72px", color: "#00A693" }}
        />
        <CustomTypo>حجره‌دار</CustomTypo>
      </CustomGrid>
      <CustomGrid container direction="column">
        <AiOutlineUser
          style={{ width: "72px", height: "72px", color: "#00A693" }}
        />
        <CustomTypo>کارشناس</CustomTypo>
      </CustomGrid>
      <CustomGrid container direction="column">
        <RiAuctionLine
          style={{ width: "72px", height: "72px", color: "#00A693" }}
        />
        <CustomTypo>مزایده</CustomTypo>
      </CustomGrid>
      <CustomGrid container direction="column">
        <CgCarousel
          style={{
            width: "72px",
            height: "72px",
            color: "#00A693",
            transform: "rotate(180deg)",
          }}
        />
        <CustomTypo>کلکسیونر</CustomTypo>
      </CustomGrid>
    </Grid>
  );
};

export const VectorBoxMobile = (props) => {
  const CustomTypo = styled(Typography)({
    fontSize: "8px",
    fontWeight: 700,
    color: "#282828",
  });
  const CustomGrid = styled(Grid)({
    width: "52px",
    height: "52px",
    backgroundColor: "white",
    borderRadius: "5px",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "8px 6px 30px rgba(0, 0, 0, 0.2)",
  });
  return (
    <Grid container direction="row" gap="10px" justifyContent="center">
      <CustomGrid container direction="column">
        <CgShoppingBag style={{ width: "28px", height: "28px",color: "#00A693" }} />
        <CustomTypo>اجناس</CustomTypo>
      </CustomGrid>
      <CustomGrid container direction="column">
        <AiOutlineShop
          style={{ width: "28px", height: "28px", color: "#00A693" }}
        />
        <CustomTypo>حجره‌دار</CustomTypo>
      </CustomGrid>
      <CustomGrid container direction="column">
        <AiOutlineUser
          style={{ width: "28px", height: "28px", color: "#00A693" }}
        />
        <CustomTypo>کارشناس</CustomTypo>
      </CustomGrid>
      <CustomGrid container direction="column">
        <ArticleOutlinedIcon sx={{ width: "28px", height: "28px" }} />
        <CustomTypo>درخواست</CustomTypo>
      </CustomGrid>
    
      <CustomGrid container direction="column">
        <GroupsIcon
          sx={{ width: "28px", height: "28px" }}
        />
        <CustomTypo>گروه</CustomTypo>
      </CustomGrid>
    </Grid>
  );
};
