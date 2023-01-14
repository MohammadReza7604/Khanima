import { Box, Divider, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { IconTitleChat } from "../data-display/IconTitle";
import { ChatBoxItem } from "./ChatBoxItem";

export const ChatBox = () => {
  return (
    <Grid
      container
      bgcolor="white"
      borderRadius="15px"
      width="288px"
      height="490px"
      padding="12px"
      direction="column"
    >
      <ChatBoxItem />
      <ChatBoxItem />
      <ChatBoxItem />
      <ChatBoxItem />
      <ChatBoxItem />
      <ChatBoxItem />
      <ChatBoxItem />
    </Grid>
  );
};
