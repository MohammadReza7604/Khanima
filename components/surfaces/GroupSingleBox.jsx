import { Grid } from "@mui/material";
import Image from "next/image";
import React from "react";
import { IconTitleGlobal } from "../data-display/IconTitle";
import { CustomBox } from "../layout/CustomBox";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { BoxItemsShopCarousel } from "../layout/‌BoxItemesShopCarousel";

export const GroupSingleBox = () => {
  return (
    <CustomBox
      width="252px"
      height="400px"
      style={{
        padding: "16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid container direction="column" alignItems="center" gap="10px">
        <Grid container direction="row" justifyContent="space-between">
          <IconTitleGlobal
            style={{ fontSize: "12px" }}
            title="مرتضی شیرین زاده"
            icon={
              <Image
                width={28}
                height={28}
                alt="profile-photo"
                src="/images/profile-chat.png"
                style={{ borderRadius: "5px" }}
              />
            }
          />
          <NotificationsIcon sx={{ width: "22px", height: "22px" }} />
        </Grid>
        <BoxItemsShopCarousel />
      </Grid>
    </CustomBox>
  );
};
