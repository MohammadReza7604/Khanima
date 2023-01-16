import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export const ExpertsBox = (props) => {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      gap="12px"
      sx={{ cursor: "pointer" }}
    >
      <Image
        width={154}
        height={154}
        alt="logo"
        src="/images/expert1.png"
        style={{ borderRadius: "10px" }}
      />
      <Typography variant="h4" fontSize="14px" fontWeight={700}>
        کارشناس آنتیک
      </Typography>
      <Typography variant="h4" fontSize="12px" fontWeight={500}>
        تهران، اندیشه
      </Typography>
    </Grid>
  );
};
