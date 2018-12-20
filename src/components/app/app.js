import React, { Component } from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorBoundry from "../error-boundry";

import Row from "../row/row";
import ItemDetails, { Record } from "../item-details/item-details";
import SwapiService from "../../services/swapi-service";
import DummySwapiService from "../../services/dummy-swapi-service";
import { SwapiServiseProvider } from "../swapi-service-context";

import "./app.css";

import {
  PersonList,
  StarshipList,
  PlanetList,
  PersonDetails,
  PlanetDetails,
  StarshipDetails
} from "../sw-components";

export default class App extends Component {
  swapiService = new DummySwapiService();

  state = {
    showRandomPlanet: true
  };

  toggleRandomPlanet = () => {
    this.setState(state => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      };
    });
  };

  render() {
    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

    const {
      getPerson,
      getStarship,
      getPersonImage,
      getStarshipImage,
      getAllPeople,
      getAllPlanets
    } = this.swapiService;

    const personDetails = (
      <ItemDetails itemId={11} getData={getPerson} getImageUrl={getPersonImage}>
        <Record field="gender" label="Gender" />
        <Record field="birthYear" label="BirthYear" />
        <Record field="eyeColor" label="Eye Color" />
      </ItemDetails>
    );

    const starshipDetails = (
      <ItemDetails
        itemId={5}
        getData={getStarship}
        getImageUrl={getStarshipImage}
      >
        <Record field="model" label="Model" />
        <Record field="length" label="Length" />
        <Record field="costInCredits" label="Cost" />
      </ItemDetails>
    );

    return (
      <ErrorBoundry>
        <SwapiServiseProvider value={this.swapiService}>
          <div className="stardb-app">
            <Header />
            <PersonDetails itemId={11} />
            <PlanetDetails itemId={11} />
            <StarshipDetails itemId={11} />
            <PersonList />
            <StarshipList />
            <PlanetList />

            {/* <Row left={personDetails} right={starshipDetails} /> */}
          </div>
        </SwapiServiseProvider>
      </ErrorBoundry>
    );
  }
}
