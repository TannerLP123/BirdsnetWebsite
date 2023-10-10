import React, { Component } from 'react';
import "../css/Beerlist.css";

let localBreweries = [
  {
    id: 1,
    nameOfBrewery: "Edmond's Oast",
    city: "Charleston",
    state: "SC"
  },
  {
    id: 2,
    nameOfBrewery: "Westbrook",
    city: "Mount Plesant",
    state: "SC"
  },
  {
    id: 3,
    nameOfBrewery: "River Rat",
    city: "Columbia",
    state: "SC"
  },
  {
    id: 4,
    nameOfBrewery: "Seminar",
    city: "Florence",
    state: "SC"
  },
  {
    id: 5,
    nameOfBrewery: "Columbia Craft",
    city: "Columbia",
    state: "SC"
  }
]

class BeerList extends Component {
  render() {

    let localBrewMap = localBreweries.map((locals) => {
      return(
        <div key = {locals.id}>
          <h2>{locals.nameOfBrewery}</h2>
          <h4>{locals.city}, {locals.state}</h4>
        </div>
      )
    })

    return (
      <div className="beer-list">
      <h1 className = "beerList">Pick Your Beer Here:</h1>
      <img className = "beerListImg" src = "" alt = "A delicous looking beer" title = "a picture of a beer"/>
        <div className = "beerContainer">
          <ul className = "domestics">Domestics:
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

          <div className = "LocalsList">
            {localBrewMap}
          </div>
        </div>
      </div>
    );
  }
}

export default BeerList;