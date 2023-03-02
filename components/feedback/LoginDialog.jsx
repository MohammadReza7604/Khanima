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
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { PhoneNumber } from "../inputs/PhoneNumber";
import CloseIcon from "@mui/icons-material/Close";

export const LoginDialog = () => {
  const [open, setOpen] = useState(true);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Grid container>
      <Typography variant="h3S">Khanima</Typography>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth={"xl"}
        fullWidth={fullScreen}
        PaperProps={{
          sx: { width: "21%", height: "30%", borderRadius: "15px" },
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
              ورود
            </Typography>
          </Grid>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <PhoneNumber />
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
            ورود
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};
