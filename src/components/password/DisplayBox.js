import React, { Fragment } from "react";

import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import FileCopyIcon from "@material-ui/icons/FileCopy";

const DisplayBox = ({ settings }) => {
  const { password } = settings;

  const copyPassword = async () => {
    try {
      await navigator.clipboard.writeText(password);
    } catch (err) {
      console.error();
    }
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
    </Fragment>
  );
};

export default DisplayBox;
