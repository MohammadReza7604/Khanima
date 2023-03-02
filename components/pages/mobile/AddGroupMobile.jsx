import {
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
import { PhotoAddBox } from "../../surfaces/PhotoAddBox";

export const AddGroupMobile = () => {
  const Wrapper = styled(Grid)(({ theme }) => ({
    width: "100%",
    height: "auto",
    background: "url(/images/back-mobile.png)",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  }));
  const CustomTextField = styled(TextField)({
    width: "166px",
    height: "20px",
    "& label.Mui-focused": {
      color: "white",
      fontSize: "",
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
    "& .MuiSvgIcon-root": { color: "white", width: "14px", height: "14px" },
  });
  const CustomFormControlLabel = styled(FormControlLabel)({
    "& .MuiFormControlLabel-label": {
      fontSize: "10px",
    },
  });
  const Title = styled(Typography)({
    fontSize: "12px",
    fontWeight: 700,
    color: "#00A693",
  });
  const Description = styled(Typography)({
    fontSize: "10px",
    fontWeight: 500,
    textAlign: "justify",
    lineHeight: "220%",
  });
  return (
    <Wrapper container>
      <Grid
        container
        direction="column"
        marginTop="70px"
        padding="20px 10px"
        gap="60px"
      >
        <Grid container direction="row" justifyContent="space-between">
          <CustomTextField id="name" label="نام" variant="outlined" />
          <CustomTextField
            id="group-name"
            label="آیدی گروه"
            variant="outlined"
          />
        </Grid>
        <CustomTextField
          id="description"
          label="توضیحات"
          variant="outlined"
          multiline
          rows={10}
          maxRows={10}
          sx={{ width: "100%" }}
        />
        <Grid container direction="row" marginTop="200px">
          <Grid container gap="10px" direction="column" xs={5}>
            <Typography
              variant="caption"
              fontSize="10px"
              fontWeight={500}
              width="fit-content"
            >
              عکس گروه
            </Typography>
            <PhotoAddBox style={{ width: "120px", height: "150px" }} />
          </Grid>
          <Grid
            container
            direction="column"
            gap="12px"
            justifyContent="center"
            marginTop="28px"
            xs={7}
          >
            <FormGroup>
              <CustomFormControlLabel
                control={<CustomCheckbox size="small" />}
                label="فقط مدیر آگهی بگذارد"
              />
              <CustomFormControlLabel
                control={<CustomCheckbox size="small" />}
                label="همه اعضا آگهی بگذارند"
              />
            </FormGroup>
            <Divider sx={{ width: "100%", borderColor: "#00A693" }} />
            <FormGroup>
              <CustomFormControlLabel
                control={<CustomCheckbox size="small" />}
                label="فقط مدیر عضو جدیدی دعوت کند"
              />
              <CustomFormControlLabel
                control={<CustomCheckbox size="small" />}
                label="همه اعضا عضو جدیدی دعوت کنند"
              />
            </FormGroup>
          </Grid>
        </Grid>
        <Grid container direction="column" gap="10px" padding="0 5px">
          <Title>توضیحات</Title>
          <Description>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد
          </Description>
        </Grid>
        <Grid container direction="column" gap="10px" padding="0 5px">
          <Title>قوانین</Title>
          <Description>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد
          </Description>
        </Grid>
      </Grid>
    </Wrapper>
  );
};
