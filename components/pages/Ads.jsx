import React, { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  styled,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AppsRoundedIcon from "@mui/icons-material/AppsRounded";
import ViewListRoundedIcon from "@mui/icons-material/ViewListRounded";
import { CardBoxAdsPage } from "../surfaces/CardBoxAdsPage";
import { ModelListCardAdsPage } from "../surfaces/ModelListCardAdsPage";
import { AppBarBanner } from "../surfaces/AppBarBanner";
import { TabPanel } from "../navigation/TabPanel";

export const Ads = () => {
  const CustomTab = styled(Tab)({
    marginRight: "10px",

    "&:hover": {
      backgroundColor: "#00A693",
      borderRadius: "5px",
    },
    "&.Mui-selected": {
      backgroundColor: "#00A693",
      borderRadius: "5px",
      border: "0",
    },
    "&.Mui-focusVisible": {
      border: "0",
    },
  });
  const TypoAccordionSummary = styled(Typography)({
    fontSize: "14px",
    fontWeight: 500,
    color: "#282828",
  });
  const CustomFormControlLabel = styled(FormControlLabel)({
    color: "#282828",
    display: "flex",
    justifyContent: "space-between",
    fontSize: "14px",
    fontWeight: 500,
    margin: "0",
    "& .MuiFormControlLabel-label": {
      color: "#282828",
      fontSize:"14px"
    },
  });
  const CustomAccordionSummary = styled(AccordionSummary)({
    padding: "0 8px 0 0",
    marginBottom: "0",
  });

  const [value, setValue] = useState("");
  const [change, setChange] = useState(true);
  const [valueTab, setValueTab] = useState(0);
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const changeCardHandler = () => {
    setChange(true);
  };

  const handleChangeTab = (event, newValue) => {
    setValueTab(newValue);
  };
  return (
    <>
      <AppBarBanner />
      <Box
        sx={{ maxWidth: "1440px", margin: "0 auto", padding: "30px 0 40px 0" }}
      >
        <Grid container direction="row">
          <Grid container direction="column" gap="60px" xs={3}>
            <FormControl sx={{ width: "264px", height: "40px" }}>
              <InputLabel id="ad-type">دسته‌بندی</InputLabel>
              <Select
                labelId="ad-type"
                id="ad-type"
                value={value}
                label="دسته‌بندی"
                onChange={handleChange}
                sx={{
                  border: "1px solid white",
                  "& .MuiSelect-icon": {
                    color: "white",
                  },
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <Paper
              sx={{
                width: "264px",
                backgroundColor: "#FFF",
                borderRadius: "10px",
                padding: "10px 20px",
              }}
            >
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
                  <TypoAccordionSummary>وضعیت کالا</TypoAccordionSummary>
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
              <Divider />
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
                  <TypoAccordionSummary>قیمت</TypoAccordionSummary>
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
                  <TypoAccordionSummary>فیلتر</TypoAccordionSummary>
                </CustomAccordionSummary>
                <AccordionDetails
                  sx={{
                    padding: "0 16px 16px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  {/* <TypoAccordionSummary>رنگ</TypoAccordionSummary>
                <TypoAccordionSummary>برند</TypoAccordionSummary> */}
                  {/* <TypoAccordionSummary>Others</TypoAccordionSummary> */}
                </AccordionDetails>
              </Accordion>
              <Divider />
              <CustomFormControlLabel
                control={<Checkbox defaultChecked />}
                label="فقط عکس‌دار"
                labelPlacement="start"
              />
              <Divider />

              <CustomFormControlLabel
                control={<Checkbox />}
                label="فقط فوری‌ها"
                labelPlacement="start"
              />
              <Divider />

              <CustomFormControlLabel
                control={<Checkbox />}
                label="حذف توافقی‌ها"
                labelPlacement="start"
              />
            </Paper>
          </Grid>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            gap="40px"
            xs={9}
          >
            <Grid>
              <Box sx={{ width: "100%" }}>
                <Tabs
                  value={valueTab}
                  onChange={handleChangeTab}
                  centered
                  indicatorColor={""}
                >
                  <CustomTab
                    icon={
                      <ViewListRoundedIcon
                        sx={{
                          transform: "rotate(180deg)",
                          color: "white",
                          width: "30px",
                          height: "30px",
                        }}
                      />
                    }
                  />
                  <CustomTab
                    icon={
                      <AppsRoundedIcon
                        sx={{ color: "white", width: "30px", height: "30px" }}
                      />
                    }
                  />
                </Tabs>
              </Box>
            </Grid>
            <TabPanel value={valueTab} index={0}>
              <Grid container>
                <ModelListCardAdsPage />
                <ModelListCardAdsPage />
                <ModelListCardAdsPage />
                <ModelListCardAdsPage />
                <ModelListCardAdsPage />
                <ModelListCardAdsPage />
              </Grid>
            </TabPanel>
            <TabPanel value={valueTab} index={1}>
              <Grid container flexWrap="wrap" justifyContent="space-between">
                <CardBoxAdsPage />
                <CardBoxAdsPage />
                <CardBoxAdsPage />
                <CardBoxAdsPage />
                <CardBoxAdsPage />
                <CardBoxAdsPage />
                <CardBoxAdsPage />
                <CardBoxAdsPage />
                <CardBoxAdsPage />
                <CardBoxAdsPage />
                <CardBoxAdsPage />
                <CardBoxAdsPage />
              </Grid>
            </TabPanel>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
