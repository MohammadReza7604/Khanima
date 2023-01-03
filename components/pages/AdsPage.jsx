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
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AppsRoundedIcon from "@mui/icons-material/AppsRounded";
import ViewListRoundedIcon from "@mui/icons-material/ViewListRounded";
import { CardBoxAdsPage } from "../surfaces/CardBoxAdsPage";
import { ModelListCardAdsPage } from "../surfaces/ModelListCardAdsPage";

export const AdsPage = () => {
  const TypoAccordionSummary = styled(Typography)({
    fontSize: "14px",
    fontWeight: 500,
    color: "#282828",
  });
  const CustomFormControlLabel = styled(FormControlLabel)({
    color: "#282828",
    display: "flex",
    gap: "87px",
    fontSize: "14px",
    fontWeight: 500,
    margin: "0",
  });
  const [value, setValue] = useState("");
  const [change, setChange] = useState(true);
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const changeCardHandler = () => {
    setChange(true);
  };
  return (
    <Box
      sx={{ maxWidth: "1440px", margin: "0 auto", padding: "30px 0 40px 0" }}
    >
      <Stack direction="row">
        <Stack direction="column" gap="60px">
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
              height: "285px",
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
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#282828" }} />}
                sx={{ padding: "0 0", marginBottom: "0" }}
              >
                <TypoAccordionSummary>وضعیت کالا</TypoAccordionSummary>
              </AccordionSummary>
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
            <Divider sx={{ border: "1px solid rgba(0,0,0,.50)" }} />
            <Accordion
              id="ca"
              sx={{
                backgroundColor: "#fff",
                boxShadow: "none",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#282828" }} />}
                sx={{ padding: "0 0", marginBottom: "0" }}
              >
                <TypoAccordionSummary>قیمت</TypoAccordionSummary>
              </AccordionSummary>
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
            <Divider sx={{ border: "1px solid rgba(0,0,0,.50)" }} />
            <Accordion
              id="ca"
              sx={{
                backgroundColor: "#fff",
                boxShadow: "none",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#282828" }} />}
                sx={{ padding: "0 0", marginBottom: "0" }}
              >
                <TypoAccordionSummary>فیلتر</TypoAccordionSummary>
              </AccordionSummary>
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
            <Divider sx={{ border: "1px solid rgba(0,0,0,.50)" }} />
            <CustomFormControlLabel
              sx={{}}
              control={<Checkbox defaultChecked />}
              label="فقط عکس‌دار"
              labelPlacement="start"
            />
            <Divider sx={{ border: "1px solid rgba(0,0,0,.50)" }} />

            <CustomFormControlLabel
              control={<Checkbox />}
              label="فقط فوری‌ها"
              labelPlacement="start"
            />
            <Divider sx={{ border: "1px solid rgba(0,0,0,.50)" }} />

            <CustomFormControlLabel
              control={<Checkbox />}
              label="حذف توافقی‌ها"
              labelPlacement="start"
            />
          </Paper>
        </Stack>
        <Stack margin="0 auto" gap="40px">
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: " flex-start",
            }}
          >
            <IconButton
              onClick={() => setChange(false)}
              size="small"
              sx={{ ml: 2 }}
            >
              <ViewListRoundedIcon
                sx={{
                  transform: "rotate(180deg)",
                  color: "white",
                  width: "24px",
                  height: "24px",
                }}
              />
            </IconButton>
            <IconButton
              onClick={changeCardHandler}
              size="small"
              color="white"
              sx={{
                ml: 2,
              }}
            >
              <AppsRoundedIcon
                sx={{ color: "white", width: "25px", height: "25px" }}
              />
            </IconButton>
          </Box>
          {change ? (
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexWrap: "wrap",
                gap: "29px",
                justifyContent: "center",
              }}
            >
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
            </Box>
          ) : (
            <ModelListCardAdsPage />
          )}
        </Stack>
      </Stack>
    </Box>
  );
};
