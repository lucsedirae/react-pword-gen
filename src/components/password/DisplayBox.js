//* Dependencies
import React, { Fragment } from "react";

//* MUI comps, hooks, and icons
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

//* Exported component
const DisplayBox = ({ settings }) => {
  const [open, setOpen] = React.useState(false);
  const { password } = settings;

  const copyPassword = async () => {
    try {
      await navigator.clipboard.writeText(password);
    } catch (err) {
      console.error();
    }
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Fragment>
      <Typography variant="h6" align="center" display="inline">
        Your password:
        <br />
        {password}
      </Typography>
      {password !== "Click submit to generate password" ? (
        <IconButton onClick={copyPassword}>
          <FileCopyIcon />
        </IconButton>
      ) : (
        " "
      )}
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <MuiAlert onClose={handleClose} severity="success">
          Copied!
        </MuiAlert>
      </Snackbar>
    </Fragment>
  );
};

export default DisplayBox;
