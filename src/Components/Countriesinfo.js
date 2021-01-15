import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Countriesinfo({ countriesData, value, parentCallback, country }) {
  console.log(countriesData);
  const history = useHistory();
  console.log(history);
  const [selectedCountry, setselectedCountry] = useState("All");
  const [inputValue, setInputValue] = useState("");
  // const [countrydescription, setCountrydescription] = useState("");
  function optionChange(event) {
    var selectvalue = event.target.value;
    //console.log(selectvalue);
    setselectedCountry(selectvalue);
  }

  function submitbtn() {
    parentCallback(inputValue);
  }
  function getCountryDescription(data) {
    localStorage.setItem("data", JSON.stringify(data));
    history.push("/information");
    console.log(data);
    <h1></h1>;
  }

  return (
    <>
      <div className="top-container">
        <div className="inputField">
          <input
            className="input_field"
            type="text"
            placeholder="Search Country"
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                submitbtn();
              }
            }}
          />
        </div>
        <div className="select_container">
          <select
            className="select"
            onChange={optionChange}
            value={selectedCountry}
          >
            <option value="All">All</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </div>
      <div className="card-component">
        {countriesData.map((listItem, _id) => {
          // console.log(listItem);
          return (
            (listItem.region === selectedCountry ||
              selectedCountry === "All") && (
              <div className={value ? "card-wrapper" : "darkCard"} key={_id}>
                <div className="img-container">
                  <img src={listItem.flag} alt={listItem.flag} />
                </div>
                <div
                  className="text-container"
                  onClick={() => getCountryDescription(listItem)}
                >
                  <h4>{listItem.name}</h4>
                  <p>Population : {listItem.population}</p>
                  <p>Region : {listItem.region}</p>
                  <p>Capital : {listItem.capital}</p>
                </div>
              </div>
            )
          );
        })}
      </div>
    </>
  );
}

export default Countriesinfo;
