import { Route } from "react-router-dom";
import React from "react";

import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

import "./App.scss";

import Dashboard from "./components/Home/Home";

import { IonReactRouter } from "@ionic/react-router";
import Providers from "./components/Providers/Providers";
import Provider from "./components/Provider/Provider";
import SearchFilters from "./components/SearchFilters/SearchFilters";

setupIonicReact();

const App = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route exact path="/search/filters">
            <SearchFilters />
          </Route>
          <Route exact path="/providers">
            <Providers />
          </Route>
          <Route exact path="/provider/:id">
            <Provider />
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
