import React, { Fragment, useState } from "react";

import Container from "@material-ui/core/Container";
import Buttons from "./Buttons";
import Header from "../layout/Header";
import DisplayBox from "./DisplayBox";
import SettingsBox from "./SettingsBox";
import { Typography } from "@material-ui/core";

const PwordBox = () => {
  const [settings, setSettings] = useState({
    passwordLength: 18,
    isUpper: true,
    isLower: true,
    isNumeric: true,
    isSpecial: true,
    password: "Click submit to generate password",
  });

  function setPasswordLength(length) {
    setSettings({ ...settings, passwordLength: length });
  }

  function setUpper(boolVal) {
    setSettings({ ...settings, isUpper: boolVal });
  }

  function setLower(boolVal) {
    setSettings({ ...settings, isLower: boolVal });
  }

  function setNumeric(boolVal) {
    setSettings({ ...settings, isNumeric: boolVal });
  }

  function setSpecial(boolVal) {
    setSettings({ ...settings, isSpecial: boolVal });
  }

  function setPassword(pword) {
    setSettings({ ...settings, password: pword });
  }

  function shuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    //* While there remain elements to shuffle...
    while (0 !== currentIndex) {
      //* Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      //* And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  function generatePword() {
    let tempArray = [];

    const specialChars = "!@#$%^&*()?-_=+/][}{`~";
    let characterRandomizer = 0;

    while (tempArray.length < settings.passwordLength) {
      characterRandomizer = Math.floor(Math.random() * 4);

      if (characterRandomizer === 0 && settings.isUpper === true) {
        tempArray.push(
          String.fromCharCode(Math.floor(Math.random() * 26) + 65)
        );
      } else if (characterRandomizer === 1 && settings.isLower === true) {
        tempArray.push(
          String.fromCharCode(Math.floor(Math.random() * 26) + 97)
        );
      } else if (characterRandomizer === 2 && settings.isNumeric === true) {
        tempArray.push(
          String.fromCharCode(Math.floor(Math.random() * 10) + 48)
        );
      } else if (characterRandomizer === 3 && settings.isSpecial === true) {
        tempArray.push(
          specialChars[Math.floor(Math.random() * specialChars.length)]
        );
      }
    }

    shuffle(tempArray);
    
    setPassword(tempArray);
  }

  function resetForm() {
    setSettings({
      ...settings,
      password: "Click submit to generate password",
    });
  }

  //* Returns JSX to DOM
  return (
    <div className="paper">
      <Container>
        <Header />
        <SettingsBox
          settings={settings}
          setPasswordLength={setPasswordLength}
          setUpper={setUpper}
          setLower={setLower}
          setNumeric={setNumeric}
          setSpecial={setSpecial}
        />
        <Typography align="center">
          {!settings.isUpper &&
          !settings.isUpper &&
          !settings.isNumeric &&
          !settings.isSpecial ? (
            <Typography color="secondary" variant="h5" align="center">
              Please choose at least one parameter
            </Typography>
          ) : (
            <Fragment>
              <DisplayBox settings={settings}  />
              <br />
              <Buttons generatePword={generatePword} resetForm={resetForm} />
            </Fragment>
          )}
        </Typography>
      </Container>
    </div>
  );
};

export default PwordBox;
