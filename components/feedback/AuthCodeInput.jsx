import React, { useRef, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  IconButton,
  InputAdornment,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import AuthCode from "react-auth-code-input";
import classes from "./style.module.css";

export const AuthCodeInput = () => {
  const AuthInputRef = useRef(null);
  const [open, setOpen] = useState(true);
  const [result, setResult] = useState();
  const handleOnChange = (res) => {
    setResult(res);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Grid container>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth={"xs"}
        fullWidth
        PaperProps={{
          sx: { width: "24%", height: "28%", borderRadius: "15px" },
        }}
      >
        <DialogTitle id="alert-dialog-title">
          <Grid container justifyContent="center">
            <IconButton
              xs={4}
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                "&:hover": {
                  backgroundColor: "white",
                },
              }}
            >
              <CloseIcon
                sx={{ color: "black", width: "24px", height: "24px" }}
              />
            </IconButton>
            <Typography color="black" fontSize="16px" fontWeight={700}>
              ثبت‌نام
            </Typography>
          </Grid>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Grid container direction="column" alignItems="center" gap="28px">
              <TextField
                sx={{
                  width: "140px",
                  direction: "rtl",
                  fontWeight: 700,
                  alignSelf: "end",
                }}
                value="+98 922 056 2339"
                id="input-phone-number-user"
                InputProps={{
                  readOnly: true,
                  endAdornment: (
                    <InputAdornment position="start">
                      <EditIcon sx={{ width: "20px", height: "20px" }} />
                    </InputAdornment>
                  ),
                }}
                variant="standard"
              />
              <AuthCode
                allowedCharacters="numeric"
                ref={AuthInputRef}
                onChange={handleOnChange}
                length={5}
                inputClassName={classes.input}
              />
              <Link href="#" underline="none">
                ارسال مجدد
              </Link>
            </Grid>
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ justifyContent: "center" }}>
          <Button
            variant="contained"
            onClick={handleClose}
            sx={{
              width: "124px",
              height: "40px",
              fontWeight: 700,
              fontSize: "18px",
              boxShadow: "4px 4px 26px rgba(0, 0, 0, 0.2)",
            }}
          >
            ثبت نام
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};
