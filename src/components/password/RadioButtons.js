import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

export default function RadioButtons(props) {
  const [value, setValue] = React.useState(false);

  const handleChange = (event) => {
    event.preventDefault();
    setValue(event.target.value);
    props.setUpper(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Use upper case?</FormLabel>
      <RadioGroup
        aria-label="use-upper-case"
        name="gender1"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value={true} control={<Radio />} label="Yes" checked={props.isUpper ? true : false}/>
        <FormControlLabel value={false} control={<Radio />} label="No" checked={props.isUpper ? false : true} />
      </RadioGroup>
    </FormControl>
  );
}
