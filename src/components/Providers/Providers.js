import {
  IonCol,
  IonContent,
  IonGrid,
  IonImg,
  IonItem,
  IonPage,
  IonRow,
} from "@ionic/react";
import React, { Fragment, useContext } from "react";
import data from "../../dummyData/providers.json";
import fields from "../../dummyData/providerFields.json";
import { shuffle } from "lodash";
import "./Providers.scss";
import { Link } from "react-router-dom";
import { AppContext } from "../../state/AppContext";
import { filter, matches } from "lodash";

const Providers = () => {
  let page = 0;
  let pageCount = 10;

  // filter data
  const { providerFilters } = useContext(AppContext);
  // first remove all false values; we only want to match for true values
  for (const property in providerFilters) {
    if (!providerFilters[property]) delete providerFilters[property];
  }
  console.log("yo");
  return (
    <Fragment>
      <IonPage id="main-content">
        <IonContent className="ion-padding" fullscreen>
          <IonGrid>
            <IonRow>
              <IonCol>
                <h1>Providers</h1>
              </IonCol>
            </IonRow>

            {shuffle(filter(data, matches(providerFilters)))
              .slice(page, pageCount)
              .map((row) => (
                <IonItem key={row.email} routerLink={"/provider/" + row.id}>
                  <IonImg
                    className="headshot"
                    src={"/assets/headshots/" + row.image + ".jpg"}
                    alt={row.firstName + " " + row.lastName}
                  />
                  <div>
                    <div>{row.firstName + " " + row.lastName}</div>
                  </div>
                </IonItem>
              ))}
          </IonGrid>
        </IonContent>
      </IonPage>
    </Fragment>
  );
};

export default Providers;
