import React from 'react';
import "../css/Beerlist.css";

const BeerList = () => {
  return (
    <>
      <h1 class = "beerList">Pick Your Beer Here:</h1>
      <img class = "beerListImg" src = "" alt = "A delicous looking beer" title = "a picture of a beer"/>
      <div class = "beerContainer">
        <ul class = "domestics">Domestics:
          <li>Michelob Ultra</li>
          <li>Budweiser</li>
          <li>Bud Light</li>
          <li>Miller Light</li>
          <li>Coors Banquet</li>
          <li>Coors Light</li>
          <li>Natural Light</li>
          <li>Yeingling</li>
          <li>Amstel</li>
          <li>Dos Equis</li>
          <li>Pabst Blue Ribbon</li>
        </ul>

        <ul class = "locals">Local Brewery's:
          <li>Edmond's Oast Brewing Co.....Charleston, SC</li>
          <li>Westbrook Brewing Co.....Mount Pleasant, SC</li>
          <li>River Rat Brewing Co.....Columbia, SC</li>
          <li>Seminar Brewing Co.....Florence, SC</li>
          <li>Columbia Craft Brewing Co.....Columbia, SC</li>
        </ul>
      </div>
    </>
  )
}

export default BeerList