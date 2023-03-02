import {
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  Grid,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { PhotoAddBox } from "../surfaces/PhotoAddBox";
import { AddGroupMobile } from "./mobile/AddGroupMobile";

export const AddGroup = () => {
  const CustomTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: "white",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "white",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "#00A693",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
      },
    },
  });
  const CustomCheckbox = styled(Checkbox)({
    "& .MuiSvgIcon-root": { color: "white" },
  });
  const Title = styled(Typography)({
    fontSize: "16px",
    fontWeight: 500,
    color: "#00A693",
  });
  const Description = styled(Typography)({
    width: "618px",
    height: "220px",
    fontSize: "14px",
    fontWeight: 500,
    textAlign: "justify",
    lineHeight: "198%",
  });
  const Wrapper = styled(Grid)(({ theme }) => ({
    maxWidth: "1440px",
    margin: "0 auto",
    padding: "30px 0 40px 0",
    [theme.breakpoints.between("xs", "md")]: {
      display: "none",
    },
  }));
  return (
    <>
    <AddGroupMobile/>
    <Wrapper container>
      <Grid container direction="row" marginTop="120px">
        <Grid container direction="column" gap="50px" xs={6}>
          <Grid container gap="30px">
            <CustomTextField
              id="name"
              label="نام"
              variant="outlined"
              sx={{ width: "265px", height: "44px" }}
            />
            <CustomTextField
              id="group-name"
              label="آیدی گروه"
              variant="outlined"
              sx={{ width: "265px", height: "44px" }}
            />
          </Grid>
          <CustomTextField
            id="description"
            label="توضیحات"
            variant="outlined"
            multiline
            rows={10}
            maxRows={10}
            sx={{ width: "560px" }}
          />
          <Grid container direction="row">
            <Grid container gap="10px" direction="column" xs={4}>
              <Typography
                variant="caption"
                fontSize="16px"
                fontWeight={500}
                width="fit-content"
              >
                عکس گروه
              </Typography>
              <PhotoAddBox />
            </Grid>
            <Grid
              container
              direction="column"
              gap="12px"
              justifyContent="center"
              marginTop="28px"
              xs={6}
            >
              <FormGroup>
                <FormControlLabel
                  control={<CustomCheckbox />}
                  label="فقط مدیر آگهی بگذارد"
                />
                <FormControlLabel
                  control={<CustomCheckbox />}
                  label="همه اعضا آگهی بگذارند"
                />
              </FormGroup>
              <Divider sx={{ width: "240px", borderColor: "#00A693" }} />
              <FormGroup>
                <FormControlLabel
                  control={<CustomCheckbox />}
                  label="فقط مدیر عضو جدیدی دعوت کند"
                />
                <FormControlLabel
                  control={<CustomCheckbox />}
                  label="همه اعضا عضو جدیدی دعوت کنند"
                />
              </FormGroup>
            </Grid>
          </Grid>
          <Button
            variant="contained"
            size="medium"
            sx={{ width: "172px", height: "44px", alignSelf: "flex-end" }}
          >
            ایجاد گروه
          </Button>
        </Grid>
        <Grid container direction="column" gap="20px" xs={6}>
          <Grid container direction="column">
            <Title>توضیحات</Title>
            <Description>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </Description>
          </Grid>
          <Grid container direction="column">
            <Title>قوانین</Title>
            <Description>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </Description>
          </Grid>
        </Grid>
      </Grid>
    </Wrapper>
    </>
  );
};
