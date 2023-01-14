import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import MicIcon from "@mui/icons-material/Mic";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { styled } from "@mui/material";

export const CustomTextfieldChat = () => {
  const CustomIconButton = styled(IconButton)({
    "&:hover": {
      backgroundColor: "inherit",
    },
  });
  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: "100%",
        backgroundColor: "inherit",
        border: "2px solid white",
        borderRadius: "10px",
      }}
    >
      <CustomIconButton sx={{ p: "10px" }} aria-label="microphone">
        <MicIcon sx={{ width: "26px", height: "26px", color: "white" }} />
      </CustomIconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="متن بنویسید"
        inputProps={{ "aria-label": "input text" }}
      />
      <CustomIconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <AttachFileIcon
          sx={{ width: "26px", height: "26px", color: "white" }}
        />
      </CustomIconButton>
    </Paper>
  );
};
