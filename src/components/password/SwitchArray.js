//* Dependencies
import React from "react";

//* MUI comps, hooks, and icons
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import Switch from "@material-ui/core/Switch";

//* Exported component
export default function SwitchArray(props) {
  const [state, setState] = React.useState({
    checkedA: props.isUpper,
    checkedB: props.isLower,
    checkedC: props.isNumeric,
    checkedD: props.isSpecial,
  });

  const handleChangeUpper = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    props.setUpper(!state.checkedA);
  };

  const handleChangeLower = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    props.setLower(!state.checkedB);
  };

  const handleChangeNumeric = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    props.setNumeric(!state.checkedC);
  };

  const handleChangeSpecial = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    props.setSpecial(!state.checkedD);
  };


  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Switch
            defaultChecked={props.isUpper}
            checked={state.checkedA}
            onChange={handleChangeUpper}
            name="checkedA"
            color="secondary"
          />
        }
        label="Use upper case?"
      />
      <FormControlLabel
        control={
          <Switch
            defaultChecked={props.isLower}
            checked={state.checkedB}
            onChange={handleChangeLower}
            name="checkedB"
            color="secondary"
          />
        }
        label="Use lower case?"
      />
      <FormControlLabel
        control={
          <Switch
            defaultChecked={props.isNumeric}
            checked={state.checkedC}
            onChange={handleChangeNumeric}
            name="checkedC"
            color="secondary"
          />
        }
        label="Use numeric values?"
      />
      <FormControlLabel
        control={
          <Switch
            defaultChecked={props.isSpecial}
            checked={state.checkedD}
            onChange={handleChangeSpecial}
            name="checkedD"
            color="secondary"
          />
        }
        label="Use special characters?"
      />
    </FormGroup>
  );
}
