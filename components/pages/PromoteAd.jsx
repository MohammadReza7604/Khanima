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
    text-align: center;
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
        marginTop="128px"
        marginBottom="100px"
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
                <Typography
                  variant="subtitle1"
                  fontSize="16px"
                  fontWeight={700}
                  color="black"
                >
                  آگهی ویژه
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
                  fontSize="12px"
                  fontWeight={500}
                  color="black"
                  width="386px"
                  textAlign="justify"
                  display="inline-flex"
                >
                  چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
                  روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط
                  فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود
                  ابزارهای کاربردی می باشد.
                </Typography>
              </TD>
              <TD>
                <Button
                  variant="contained"
                  sx={{ width: "108px", height: "32px" }}
                >
                  پرداخت
                </Button>
              </TD>
            </tr>
            <tr>
              <TD>
                <Typography
                  variant="subtitle1"
                  fontSize="16px"
                  fontWeight={700}
                  color="black"
                >
                  آگهی ویژه
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
                  fontSize="12px"
                  fontWeight={500}
                  color="black"
                  width="386px"
                  textAlign="justify"
                  display="inline-flex"
                >
                  چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
                  روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط
                  فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود
                  ابزارهای کاربردی می باشد.
                </Typography>
              </TD>
              <TD>
                <Button
                  variant="contained"
                  sx={{ width: "108px", height: "32px" }}
                >
                  پرداخت
                </Button>
              </TD>
            </tr>
            <tr>
              <TD>
                <Typography
                  variant="subtitle1"
                  fontSize="16px"
                  fontWeight={700}
                  color="black"
                >
                  آگهی ویژه
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
                  fontSize="12px"
                  fontWeight={500}
                  color="black"
                  width="386px"
                  textAlign="justify"
                  display="inline-flex"
                >
                  چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
                  روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط
                  فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود
                  ابزارهای کاربردی می باشد.
                </Typography>
              </TD>
              <TD>
                <Button
                  variant="contained"
                  sx={{ width: "108px", height: "32px" }}
                >
                  پرداخت
                </Button>
              </TD>
            </tr>
          </Table>
        </Box>
      </Grid>
    </Grid>
  );
};
