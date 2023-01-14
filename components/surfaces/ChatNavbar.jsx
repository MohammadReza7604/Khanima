import { Box, Grid } from "@mui/material";
import Image from "next/image";
import React from "react";
import { IconTitleChat } from "../data-display/IconTitle";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PhoneIcon from "@mui/icons-material/Phone";

export const ChatNavbar = () => {
  return (
    <Grid
      container
      direction="row"
      width="866px"
      height="74px"
      bgcolor="white"
      borderRadius="10px"
      padding="10px"
    >
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box>
          <IconTitleChat
            title="مرتضی شیرین زاده"
            sx={{ color: "#282828", fontSize: "16px", fontWeight: 700 }}
            icon={
              <Image
                width={54}
                height={54}
                alt="profile-chat"
                src="/images/profile-chat.png"
                style={{ borderRadius: "5px" }}
              />
            }
          />
        </Box>

        <Grid>
          <PhoneIcon sx={{ width: "28px", height: "28px" }} />
          <MoreVertIcon
            sx={{ width: "28px", height: "28px", marginLeft: "20px" }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};
