import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonPage,
  IonRow,
} from '@ionic/react';

import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <IonPage id="main-content">
      <IonContent className="ion-padding" fullscreen>
        <IonGrid>
          <IonRow className="ion-text-center">
            <IonCol>
              <h1>Home</h1>
            </IonCol>
          </IonRow>
          <IonRow className="ion-text-center">
            <IonCol>
              <Link to="/search/filters">
                <IonButton>Provider Search</IonButton>
              </Link>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
