import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Countriesinfo from "./Components/Countriesinfo";
import CountryInfo from "./Pages/CountryInfo";

import "./App.css";

function App() {
  //for theme color
  const [countries, setcountries] = useState([]);
  const [themecolor, setThemecolor] = useState(true);
  const [searchValue, setSearchvalue] = useState("");
  //const [description, setDescription] = useState("");

  function changecolor() {
    console.log("color change");
    setThemecolor(!themecolor);
  }

  // countries data
  useEffect(() => {
    const fetchData = async () => {
      var apiurl = `https://restcountries.com/v2/name/${searchValue}`;
      if (searchValue === "") {
        apiurl = "https://restcountries.com/v2/all";
      }
      let response = await fetch(apiurl);
      if (response.ok) {
        const json = await response.json();
        setcountries(json);
      }
    };
    fetchData();
  }, [searchValue]);

  //search value

  //
  function callback(val) {
    //console.log(val);

    setSearchvalue(val);
    console.log(searchValue);
  }

  return (
    <div className={themecolor ? "light-theme" : "dark-theme"}>
      <Switch>
        <Route exact path="/">
          <NavBar btn={changecolor} value={themecolor} />
          <Countriesinfo
            countriesData={countries}
            value={themecolor}
            parentCallback={callback}
          />
        </Route>

        <Route exact path="/information">
          <NavBar btn={changecolor} value={themecolor} />
          <CountryInfo />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
