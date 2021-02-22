import React from "react";
import styled from "styled-components";

import LengthSlider from "./LengthSlider";
import SwitchArray from "./SwitchArray";

const SwitchesContainer = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
  padding: 1rem;
`;

const SliderContainer = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
  padding: 1rem;
`;

const SettingsBox = (props) => {
  const { isUpper, isLower, isNumeric, isSpecial } = props.settings;

  return (
    <div>
      <SliderContainer>
        <LengthSlider
          settings={props.settings}
          setPasswordLength={props.setPasswordLength}
        />
      </SliderContainer>

      <SwitchesContainer>
        <SwitchArray
          isUpper={isUpper}
          isLower={isLower}
          isNumeric={isNumeric}
          isSpecial={isSpecial}
          setUpper={props.setUpper}
          setLower={props.setLower}
          setNumeric={props.setNumeric}
          setSpecial={props.setSpecial}
        />
      </SwitchesContainer>
    </div>
  );
};

export default SettingsBox;
