import {
  Box,
  Button,
  Grid,
  IconButton,
  styled,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import { CustomBox } from "../../layout/CustomBox";
import { GroupSingleBox, GroupSingleBoxMobile } from "../../surfaces/GroupSingleBox";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export const GroupSingleMobile = () => {
  const Wrapper = styled(Grid)(({ theme }) => ({
    background: "url(/images/back-mobile.png)",
    padding: "0 10px",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  }));
  const CustomButton = styled(Button)({
    width: "150px",
    height: "36px",
    color: "black",
    fontSize: "16px",
    fontWeight: 700,
  });
  return (
    <Wrapper container>
      <Grid container marginTop="80px" direction="column" gap="34px">
        <Grid container direction="row" gap="10px">
          <Box container direction="column" xs={4}>
            <Image
              width={106}
              height={100}
              alt="pic-group"
              src="/images/pic-box.png"
            />
          </Box>
          <Grid container direction="column" xs={7.3} gap="5px">
            <Grid container direction="row" justifyContent="space-between">
              <Grid
                container
                direction="row"
                width="fit-content"
                alignItems="center"
                gap="20px"
              >
                <Typography variant="h1" fontSize="10px" fontWeight={700}>
                  گروه اطلس
                </Typography>
                <Typography fontSize="10px" fontWeight={700}>
                  Zafarshop@
                </Typography>
              </Grid>
              <IconButton
                sx={{
                  width: "12px",
                  height: "12px",
                  "&:hover": { backgroundColor: "white" },
                }}
              >
                <MoreVertIcon sx={{ width: "12px", height: "12px" }} />
              </IconButton>
            </Grid>
            <Typography
              fontSize="10px"
              fontWeight={500}
              textAlign="justify"
              lineHeight="220%"
            >
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است
            </Typography>
          </Grid>
        </Grid>
        <CustomButton
          size="small"
          variant="contained"
          sx={{ fontSize: "10px", width: "32px", height: "20px" }}
        >
          درج کالا
        </CustomButton>

        <CustomBox
          width="100%"
          height="auto"
          style={{
            padding: "6px 5px",
            display: "flex",
            flexDirection: "column",
            gap: "30px",
            marginBottom:"30px" 
          }}
        >
          <Grid
            container
            bgcolor="white"
            borderRadius="5px"
            width="100%"
            height="28px"
            justifyContent="center"
            alignItems="center"
          >
            <Typography
              variant="h3"
              fontSize="12px"
              fontWeight={500}
              color="black"
            >
              پیام مدیر - Pin Message
            </Typography>
          </Grid>
          <Grid container flexWrap="wrap" gap="10px" justifyContent="center">
            <GroupSingleBoxMobile />
            <GroupSingleBoxMobile />
            <GroupSingleBoxMobile />
            <GroupSingleBoxMobile />
            <GroupSingleBoxMobile />
            <GroupSingleBoxMobile />
            <GroupSingleBoxMobile />
            <GroupSingleBoxMobile />
          </Grid>
        </CustomBox>
      </Grid>
    </Wrapper>
  );
};
