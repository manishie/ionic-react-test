import {
  IonButton,
  IonCheckbox,
  IonCol,
  IonContent,
  IonGrid,
  IonItem,
  IonItemGroup,
  IonPage,
  IonRow,
} from '@ionic/react';
import React, { Fragment, useContext } from 'react';
import './SearchFilters.scss';
import fields from '../../dummyData/providerFields.json';
import { useForm } from 'react-hook-form';
import { AppContext } from '../../state/AppContext';
import { useHistory } from 'react-router-dom';

const onSubmit = (data, setProviderFilters, history) => {
  setProviderFilters(data);
  console.log(data);
  console.log('pushing');
  history.push('/providers');
};
const SearchFilters = () => {
  // change structure of fields object so it matches react-hook-form default values structure (without changing original
  // fields object which is used later)
  let defaultFields = Object.assign({}, fields);
  Object.keys(defaultFields).forEach((item) => {
    defaultFields[item] = false;
  });

  const { setProviderFilters } = useContext(AppContext);
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: defaultFields,
    mode: 'onChange',
  });
  return (
    <IonPage id="main-content">
      <IonContent className="ion-padding" fullscreen>
        <IonGrid>
          <IonRow>
            <IonCol>
              <h1>Search Filters</h1>
            </IonCol>
          </IonRow>
          <IonItemGroup>
            <form
              onSubmit={handleSubmit((data) => {
                onSubmit(data, setProviderFilters, history);
              })}
            >
              {Object.keys(fields).map((field, index) => (
                <IonItem key={index}>
                  <IonCheckbox
                    name={field}
                    {...register(field)}
                    // onIonChange={(e) => {
                    //   setValue(field, e.target.checked);
                    // }}
                  >
                    {fields[field]}
                  </IonCheckbox>
                </IonItem>
              ))}
              <IonRow>
                <IonCol>
                  <IonButton type="submit">Match Me</IonButton>
                </IonCol>
              </IonRow>
            </form>
          </IonItemGroup>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default SearchFilters;
