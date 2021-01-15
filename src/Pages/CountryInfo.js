import React, { useState, useEffect } from "react";
//import { useLocation } from "react-router-dom";

function CountryInfo() {
  const [information, setInformation] = useState({});

  useEffect(() => {
    var locallist = localStorage.getItem("data");
    var getData = JSON.parse(locallist);
    setInformation(getData);
    console.log(information);
  }, []);

  return (
    <div className="info_container">
      <div className="left">
        <div className="left-flag">
          <img src={information.flag} alt={information.flag} />
        </div>
      </div>
      <div className="right">
        <div className="info">
          <h2>{information.nativeName}</h2>
          <p>
            Native Name: <span>{information.nativeName}</span>
          </p>
          <p>
            Region: <span>{information.region}</span>
          </p>
          <p>
            Capital: <span>{information.capital}</span>
          </p>

          <p>
            Population: <span>{information.population}</span>
          </p>
          <p>
            Top Level Domain: <span>{information.topLevelDomain}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CountryInfo;
