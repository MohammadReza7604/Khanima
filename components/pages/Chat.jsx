import { Box, Grid, styled, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import { CustomTextfieldChat } from "../inputs/CustomTextfieldChat";
import { CustomBox } from "../layout/CustomBox";
import { TabPanel } from "../navigation/TabPanel";
import { ChatBox } from "../surfaces/ChatBox";
import { ChatNavbar } from "../surfaces/ChatNavbar";
import { MessageBoxBlue } from "../surfaces/MessageBoxBlue";
import { MessageBoxWhite } from "../surfaces/MessageBoxWhite";

export const Chat = () => {
  const CustomTab = styled(Tab)({
    color: "white",
    marginRight: "10px",
    fontSize: "18px",

    "&:hover": {
      color: "black",
      backgroundColor: "#00A693",
      borderRadius: "5px",
    },
    "&.Mui-selected": {
      color: "black",
      backgroundColor: "#00A693",
      borderRadius: "5px",
      border: "0",
    },
    "&.Mui-focusVisible": {
      border: "0",
    },
  });
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid
      container
      sx={{
        maxWidth: "1440px",
        margin: "0 auto",
        padding: "30px 0 40px 0",
        gap: "26px",
      }}
    >
      <Grid
        container
        marginTop="100px"
        direction="row"
        justifyContent="space-between"
      >
        <Grid>
          <Grid>
            <Box sx={{ width: "100%" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                centered
                indicatorColor={""}
              >
                <CustomTab label="چت" />
                <CustomTab label="اعلان" />
                <CustomTab label="پیام گروه" />
              </Tabs>
            </Box>
          </Grid>
          <TabPanel value={value} index={0}>
            <ChatBox />
          </TabPanel>
          <TabPanel value={value} index={1}>
            2
          </TabPanel>
          <TabPanel value={value} index={3}>
            3
          </TabPanel>
        </Grid>
        <Grid>
          <CustomBox width="914px" height="auto">
            <Grid container gap="32px">
              <ChatNavbar />
              <Grid container justifyContent="flex-start">
                <MessageBoxBlue />
              </Grid>
              <Grid container justifyContent="flex-end">
                <MessageBoxWhite />
              </Grid>
              <Grid container justifyContent="flex-start">
                <MessageBoxBlue />
              </Grid>
              <Grid container justifyContent="flex-end">
                <MessageBoxWhite />
              </Grid>
              <Grid container justifyContent="flex-start">
                <MessageBoxBlue />
              </Grid>
              <Grid container justifyContent="flex-end">
                <MessageBoxWhite />
              </Grid>
              <CustomTextfieldChat />
            </Grid>
          </CustomBox>
        </Grid>
      </Grid>
    </Grid>
  );
};
