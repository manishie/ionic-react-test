import {
  IonCheckbox,
  IonCol,
  IonContent,
  IonGrid,
  IonImg,
  IonPage,
  IonRow,
} from '@ionic/react';
import React, { Fragment } from 'react';
import data from '../../dummyData/providers.json';
import fields from '../../dummyData/providerFields.json';
import { find } from 'lodash';
import './Provider.scss';
import { useParams } from 'react-router-dom';

const Provider = () => {
  const routeParams = useParams();
  const row = find(data, (x) => x.id.toString() === routeParams.id);

  return (
    <IonPage id="main-content">
      <IonContent className="ion-padding" fullscreen>
        <IonGrid>
          <IonRow>
            <IonCol>
              <h1>{row.firstName + ' ' + row.lastName}</h1>
            </IonCol>
          </IonRow>
          {row && (
            <>
              <IonRow>
                <IonCol>
                  <IonImg
                    className="headshot"
                    src="http://placebeard.it/g/200/200"
                    alt={row.firstName + ' ' + row.lastName}
                  />
                </IonCol>
              </IonRow>
              {Object.keys(fields).map((field, index) => {
                return (
                  <IonRow key={index}>
                    <IonCol>
                      <IonCheckbox disabled checked={row[field]} />
                      &nbsp;&nbsp;&nbsp;{field}
                    </IonCol>
                  </IonRow>
                );
              })}
            </>
          )}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Provider;
