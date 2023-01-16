import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";

export const Payment = () => {
  const Table = styled.table`
    border: 2px solid #00a693;
    width: 100%;
    border-collapse: collapse;
  `;
  const TH = styled.th`
    border: 2px solid #00a693;
    padding: 14px;
  `;
  const TD = styled.td`
    border: 2px solid #00a693;
    text-align: center;
    padding: 14px;
  `;
  return (
    <Grid
      container
      sx={{ maxWidth: "1440px", margin: "0 auto", padding: "30px 0 40px 0" }}
    >
      <Grid
        container
        direction="column"
        gap="75px"
        marginTop="90px"
        marginBottom="90px"
        alignItems="center"
      >
        <Typography variant="h1" fontSize="24px" fontWeight={700}>
          پرداخت‌های من
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
              <TH>سفارش</TH>
              <TH>تاریخ</TH>
              <TH>وضعیت</TH>
              <TH>مجموع</TH>
              <TH>بابت</TH>
              <TH>عملیات‌ها</TH>
            </tr>
            <tr>
              <TD>
                <Typography
                  variant="subtitle1"
                  fontSize="14px"
                  fontWeight={600}
                  color="black"
                >
                  #900
                </Typography>
              </TD>
              <TD>
                <Typography
                  variant="subtitle1"
                  fontSize="14px"
                  fontWeight={600}
                  color="black"
                >
                  30 مرداد 1400
                </Typography>
              </TD>
              <TD>
                <Typography
                  variant="subtitle1"
                  fontSize="14px"
                  fontWeight={600}
                  color="black"
                >
                  در انتظار پرداخت
                </Typography>
              </TD>
              <TD>
                <Typography
                  variant="subtitle1"
                  fontSize="14px"
                  fontWeight={600}
                  color="black"
                >
                  3000 تومان
                </Typography>
              </TD>
              <TD>
                <Typography
                  variant="subtitle1"
                  fontSize="14px"
                  fontWeight={600}
                  color="black"
                >
                  شارژ حساب کاربری
                </Typography>
              </TD>
              <TD>
                <Grid
                  container
                  direction="row"
                  gap="16px"
                  justifyContent="center"
                  padding="5px"
                >
                  <Button
                    variant="contained"
                    sx={{ width: "108px", height: "32px" }}
                  >
                    پرداخت
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      width: "76px",
                      height: "32px",
                      backgroundColor: "#CF2428",
                    }}
                  >
                    لغو
                  </Button>
                </Grid>
              </TD>
            </tr>
            <tr>
              <TD>
                <Typography
                  variant="subtitle1"
                  fontSize="14px"
                  fontWeight={600}
                  color="black"
                >
                  #900
                </Typography>
              </TD>
              <TD>
                <Typography
                  variant="subtitle1"
                  fontSize="14px"
                  fontWeight={600}
                  color="black"
                >
                  30 مرداد 1400
                </Typography>
              </TD>
              <TD>
                <Typography
                  variant="subtitle1"
                  fontSize="14px"
                  fontWeight={600}
                  color="black"
                >
                  در انتظار پرداخت
                </Typography>
              </TD>
              <TD>
                <Typography
                  variant="subtitle1"
                  fontSize="14px"
                  fontWeight={600}
                  color="black"
                >
                  3000 تومان
                </Typography>
              </TD>
              <TD>
                <Typography
                  variant="subtitle1"
                  fontSize="14px"
                  fontWeight={600}
                  color="black"
                >
                  شارژ حساب کاربری
                </Typography>
              </TD>
              <TD>
                <Grid
                  container
                  direction="row"
                  gap="16px"
                  justifyContent="center"
                  padding="5px"
                >
                  <Button
                    variant="contained"
                    sx={{ width: "108px", height: "32px" }}
                  >
                    پرداخت
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      width: "76px",
                      height: "32px",
                      backgroundColor: "#CF2428",
                    }}
                  >
                    لغو
                  </Button>
                </Grid>
              </TD>
            </tr>
            <tr>
              <TD>
                <Typography
                  variant="subtitle1"
                  fontSize="14px"
                  fontWeight={600}
                  color="black"
                >
                  #900
                </Typography>
              </TD>
              <TD>
                <Typography
                  variant="subtitle1"
                  fontSize="14px"
                  fontWeight={600}
                  color="black"
                >
                  30 مرداد 1400
                </Typography>
              </TD>
              <TD>
                <Typography
                  variant="subtitle1"
                  fontSize="14px"
                  fontWeight={600}
                  color="black"
                >
                  در انتظار پرداخت
                </Typography>
              </TD>
              <TD>
                <Typography
                  variant="subtitle1"
                  fontSize="14px"
                  fontWeight={600}
                  color="black"
                >
                  3000 تومان
                </Typography>
              </TD>
              <TD>
                <Typography
                  variant="subtitle1"
                  fontSize="14px"
                  fontWeight={600}
                  color="black"
                >
                  شارژ حساب کاربری
                </Typography>
              </TD>
              <TD>
                <Grid
                  container
                  direction="row"
                  gap="16px"
                  justifyContent="center"
                  padding="5px"
                >
                  <Button
                    variant="contained"
                    sx={{ width: "108px", height: "32px" }}
                  >
                    پرداخت
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      width: "76px",
                      height: "32px",
                      backgroundColor: "#CF2428",
                    }}
                  >
                    لغو
                  </Button>
                </Grid>
              </TD>
            </tr>
          </Table>
        </Box>
      </Grid>
    </Grid>
  );
};
