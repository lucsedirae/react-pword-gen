//* Dependencies
import React, { Fragment } from "react";

//* MUI comps, hooks, and icons
import Typography from "@material-ui/core/Typography";

//* Exported component
const Header = () => {
  return (
    <Fragment>
      <Typography variant="h4" align="center">
        Password Generator
      </Typography>
    </Fragment>
  );
};

export default Header;
