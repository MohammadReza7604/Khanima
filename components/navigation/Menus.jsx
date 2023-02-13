import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  InputAdornment,
  MenuItem,
  OutlinedInput,
  styled,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const AdType = () => {
  const itemsAdType = [
    "آگهی",
    "حجره دار",
    "کارشناس",
    "مزایده",
    "درخواست",
    "کلکسیونر",
  ];
  const Text = styled(Typography)({
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "24px",
    color: "#282828",
    padding: "4px",
  });
  return (
    <Grid
      container
      direction="column"
      padding="24px 14px 14px 14px"
      justifyContent="space-between"
      sx={{
        width: "180px",
        height: "auto",
        borderRadius: "15px 0px 15px 15px",
      }}
    >
      {itemsAdType.map((item, index) => (
        <>
          <MenuItem key={index}>
            <Text>{item}</Text>
          </MenuItem>
          <Divider sx={{ borderWidth: "1px" }} />
        </>
      ))}
    </Grid>
  );
};

export const CategoryMenuAppBar = () => {
  const items1 = [
    "لوازم آشپزخانه",
    "وسایل شخصی",
    "سکه، تمبر، اسکناس",
    "ابزار و تجهیزات",
    "سرگرمی",
    "حراجی",
    "کارشناسی",
    "نیازمندی",
    "متفرقه",
  ];
  const items2 = [
    "گرامافون و صفحه",
    "ضبط صوت و نوار کاست",
    "رادیو",
    "واکمن",
    "هدفون و میکروفون",
    "سایر لوازم صوتی",
  ];
  const items3 = [
    "گرامافون و صفحه",
    "ضبط صوت و نوار کاست",
    "رادیو",
    "واکمن",
    "هدفون و میکروفون",
  ];
  const CustomDivider = styled(Divider)({
    border: "1px solid #282828",
    opacity: "0.5",
  });
  const Title = styled(Typography)({
    fontWeight: 600,
    fontSize: "12px",
    lineHeight: "20px",
    color: "#282828",
    paddingLeft: "8px",
  });
  const SubTitle = styled(Typography)({
    fontWeight: 500,
    fontSize: "12px",
    lineHeight: "20px",
    color: "#282828",
    padding: "8px",
  });
  const Item = styled(Typography)({
    fontWeight: 500,
    fontSize: "10px",
    lineHeight: "20px",
    color: "#282828",
    padding: "4px",
  });
  return (
    <Grid
      container
      direction="row"
      padding="20px 14px 14px 14px"
      justifyContent="space-between"
      sx={{
        width: "514px",
        height: "auto",
        borderRadius: "15px 0px 15px 15px",
      }}
    >
      <Grid
        container
        direction="column"
        alignItems="flex-start"
        gap="10px"
        marginRight="12px"
        xs={2.5}
      >
        <Title>لوازم خانه</Title>
        {items1.map((item, index) => (
          <MenuItem key={index}>
            <SubTitle>{item}</SubTitle>
          </MenuItem>
        ))}
      </Grid>
      <Divider sx={{ borderWidth: "1px" }} />
      <Grid
        container
        direction="column"
        justifyContent="space-between"
        padding="0 14px"
        xs={3}
      >
        <Grid container direction="column" gap="4px">
          <Title>لوازم صوتی</Title>
          <CustomDivider />
          {items2.map((item, index) => (
            <MenuItem key={index}>
              <Item>{item}</Item>
            </MenuItem>
          ))}
        </Grid>
        <Grid container direction="column" gap="2px">
          <Title>لوازم صوتی</Title>
          <CustomDivider />
          {items3.map((item, index) => (
            <MenuItem key={index}>
              <Item>{item}</Item>
            </MenuItem>
          ))}
        </Grid>
      </Grid>
      <Grid
        container
        direction="column"
        justifyContent="space-between"
        padding="0 14px"
        xs={3}
      >
        <Grid container direction="column" gap="4px">
          <Title>لوازم صوتی</Title>
          <CustomDivider />
          {items2.map((item, index) => (
            <MenuItem key={index}>
              <Item>{item}</Item>
            </MenuItem>
          ))}
        </Grid>
        <Grid container direction="column" gap="2px">
          <Title>لوازم صوتی</Title>
          <CustomDivider />
          {items3.map((item, index) => (
            <MenuItem key={index}>
              <Item>{item}</Item>
            </MenuItem>
          ))}
        </Grid>
      </Grid>
      <Grid
        container
        direction="column"
        justifyContent="space-between"
        padding="0 14px"
        xs={3}
      >
        <Grid container direction="column" gap="4px">
          <Title>لوازم صوتی</Title>
          <CustomDivider />
          {items2.map((item, index) => (
            <MenuItem key={index}>
              <Item>{item}</Item>
            </MenuItem>
          ))}
        </Grid>
        <Grid container direction="column" gap="2px">
          <Title>لوازم صوتی</Title>
          <CustomDivider />
          {items3.map((item, index) => (
            <MenuItem key={index}>
              <Item>{item}</Item>
            </MenuItem>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export const CityMenuAppBar = () => {
  const CustomFormControlLabel = styled(FormControlLabel)({
    color: "#282828",
    display: "flex",
    justifyContent: "space-between",
    fontSize: "14px",
    fontWeight: 500,
    margin: "0",
    "& .MuiFormControlLabel-label": {
      color: "#282828",
      fontSize: "14px",
    },
  });
  const CustomAccordionSummary = styled(AccordionSummary)({
    padding: "0 8px 0 0",
    marginBottom: "0",
  });
  const TypoAccordionSummary = styled(Typography)({
    fontSize: "14px",
    fontWeight: 500,
    color: "#282828",
  });

  return (
    <Grid
      container
      direction="column"
      padding="10px 14px 14px 14px"
      justifyContent="space-between"
      gap="2px"
      sx={{
        width: "270px",
        height: "auto",
        borderRadius: "10px",
      }}
    >
      <FormControl sx={{ width: "246px" }} variant="outlined">
        <OutlinedInput
          id="city-search"
          placeholder="استان و شهر را وارد نمایید"
          endAdornment={
            <InputAdornment position="end">
              <SearchIcon sx={{ color: "#282828" }} />
            </InputAdornment>
          }
          sx={{
            color: "black",
            input: {
              "&::placeholder": {
                color: "black",
                fontSize: "14px",
              },
            },
          }}
        />
      </FormControl>
      <CustomFormControlLabel
        control={<Checkbox />}
        label="همه ایران"
        labelPlacement="start"
      />
      <Accordion
        id="ca"
        sx={{
          backgroundColor: "#fff",
          boxShadow: "none",
        }}
      >
        <CustomAccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#282828" }} />}
        >
          <TypoAccordionSummary>تهران</TypoAccordionSummary>
        </CustomAccordionSummary>
        <AccordionDetails
          sx={{
            padding: "0 16px 16px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          {/* <TypoAccordionSummary>2/000/000</TypoAccordionSummary>
                <TypoAccordionSummary>2/500/000</TypoAccordionSummary> */}
          {/* <TypoAccordionSummary>Others</TypoAccordionSummary> */}
        </AccordionDetails>
      </Accordion>
      <Accordion
        id="ca"
        sx={{
          backgroundColor: "#fff",
          boxShadow: "none",
        }}
      >
        <CustomAccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#282828" }} />}
        >
          <TypoAccordionSummary>تهران</TypoAccordionSummary>
        </CustomAccordionSummary>
        <AccordionDetails
          sx={{
            padding: "0 16px 16px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          {/* <TypoAccordionSummary>2/000/000</TypoAccordionSummary>
                <TypoAccordionSummary>2/500/000</TypoAccordionSummary> */}
          {/* <TypoAccordionSummary>Others</TypoAccordionSummary> */}
        </AccordionDetails>
      </Accordion>
      <Divider />
    </Grid>
  );
};
