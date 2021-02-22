//* Dependencies
import React from "react";

//* MUI comps, hooks, and icons
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

//* Exported component
const Buttons = (props) => {
  return (
    <ButtonGroup align="center" style={{ marginTop: "2rem" }}>
      <Button
        type="submit"
        variant="contained"
        color="secondary"
        onClick={props.generatePword}
      >
        Submit
      </Button>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        onClick={props.resetForm}
      >
        {" "}
        Clear
      </Button>
    </ButtonGroup>
  );
};

export default Buttons;
