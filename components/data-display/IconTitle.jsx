import React from "react";
import { Box, Grid, styled, Typography } from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";

export const IconTitle = (props) => {
  const Title=styled(Typography)(({theme})=>({
    [theme.breakpoints.between('xs','md')]:{
      fontSize:"10px"
    }
  }))
  const Wrapper=styled(Grid)(({theme})=>({
    [theme.breakpoints.between('xs','md')]:{
      width:"fit-content"
    }
  }))
  return (
    <Wrapper container direction="row" gap="5px" justifyContent="flex-end">
      <Title sx={{ direction: `${props.dir}`, ...props.style }}>
        {props.title}
      </Title>
      <Box>{props.icon}</Box>
    </Wrapper>
  );
};
export const IconTitleGlobal = (props) => {
  const Text = styled(Typography)(({ theme }) => ({
    [theme.breakpoints.between("xs", "md")]: {
      fontSize: "8px",
    },
  }));
  return (
    <Grid container direction="row" gap="5px" alignItems="center" width="auto"sx={{...props.sx}}>
      <Box sx={{ ...props.styleBox }}>{props.icon}</Box>
      <Text sx={{ ...props.style }}>{props.title}</Text>
    </Grid>
  );
};
export const IconTitle2 = (props) => {
  return (
    <Grid container direction="row" gap="5px" justifyContent="flex-start">
      <Box>
        <AssignmentIcon sx={{ ...props.styleIcon }} />
      </Box>
      <Typography sx={{ ...props.styleText }}>{props.title}</Typography>
    </Grid>
  );
};
export const IconTitleChat = (props) => {
  return (
    <Grid container direction="row" gap="5px" alignItems="center">
      <Box display="flex" alignItems="center">
        {props.icon}
      </Box>
      <Typography sx={props.sx}>{props.title}</Typography>
    </Grid>
  );
};
