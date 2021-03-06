//* Dependencies
import React, { useState } from "react";

//* MUI comps, hooks, and icons
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";

//* Exported component
function LengthSlider(props) {
  const [val, setVal] = useState([18]);

  const updateRange = (e, data) => {
    setVal(data);
    props.setPasswordLength(data)
  };

  return (
    <div>
      <Typography id="discrete-slider" gutterBottom>
        Length
      </Typography>
      <Slider
        value={val}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        color="secondary"
        step={1}
        onChange={updateRange}
        min={8}
        max={28}
      />
    </div>
  );
}

export default LengthSlider;
