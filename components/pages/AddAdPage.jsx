import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { AddAdPageBox } from "../surfaces/AddAdPageBox";

export const AddAdPage = () => {
  return (
    <Box sx={{ maxWidth: "999px", margin: "0 auto", padding: "30px 0 40px 0" }}>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        gap="40px"
        margin="113px 0"
      >
        <Grid>
          <Typography variant="h2" fontSize="28px" fontWeight={700}>
            ثبت آگهی
          </Typography>
        </Grid>
        <Grid>
          <Grid
            container
            width="100%"
            flexWrap="wrap"
            gap="20px"
            justifyContent="center"
          >
            <AddAdPageBox text={"آگهی فروش"} />
            <AddAdPageBox text={"حجره دار"} />
            <AddAdPageBox text={"کارشناس"} />
            <AddAdPageBox text={"مزایده"} />
            <AddAdPageBox text={"درخواست"} />
            <AddAdPageBox text={"کلکسیونر"} />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
