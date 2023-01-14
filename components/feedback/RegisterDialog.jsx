import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { PhoneNumber, SinglePhoneNumber } from "../inputs/PhoneNumber";
import CloseIcon from "@mui/icons-material/Close";

export const RegisterDialog = () => {
  const [open, setOpen] = useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Grid>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth={"xs"}
        fullWidth
        PaperProps={{
          sx: { width: "20%", height: "25%", borderRadius: "15px" },
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
            <SinglePhoneNumber />
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
            ارسال کد
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};
