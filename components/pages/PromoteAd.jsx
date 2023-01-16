import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";

export const PromoteAd = () => {
  const Table = styled.table`
    border: 2px solid #00a693;
    width: 100%;
    border-collapse: collapse;
  `;
  const TH = styled.th`
    border: 2px solid #00a693;
  `;
  const TD = styled.td`
    border: 2px solid #00a693;
  `;
  return (
    <Grid
      container
      sx={{ maxWidth: "1440px", margin: "0 auto", padding: "30px 0 40px 0" }}
    >
      <Grid
        container
        direction="column"
        gap="64px"
        marginTop="100px"
        alignItems="center"
      >
        <Typography variant="h1" fontSize="24px" fontWeight={700}>
          ارتقاء آگهی
        </Typography>
        <Box
          sx={{
            backgroundColor: "white",
            borderRadius: "10px",
            width: "900px",
            height: "auto",
            padding: "10px",
          }}
        >
          <Table>
            <tr>
              <TH>نام</TH>
              <TH>مبلغ</TH>
              <TH>توضیحات</TH>
              <TH>پرداخت</TH>
            </tr>
            <tr>
              <TD>
                {/* <Box> */}
                {/* <Typography
                    variant="subtitle1"
                    fontSize="16px"
                    fontWeight={700}
                  > */}
                آگهی ویژه
                {/* </Typography> */}
                {/* </Box> */}
              </TD>
              <TD></TD>
              <TD></TD>
              <TD></TD>
            </tr>
          </Table>
        </Box>
      </Grid>
    </Grid>
  );
};
