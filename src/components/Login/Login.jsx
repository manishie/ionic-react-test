import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonPage,
  IonRow,
} from "@ionic/react";
import "./login.scss";
import React, { Fragment, useContext, useEffect } from "react";
import { UserAuth } from "../../state/AuthContext";
import { AppContext } from "../../state/AppContext";
import { useHistory } from "react-router";

const Login = ({ loginType }) => {
  const { signInWithGoogle } = UserAuth();
  const { setLoginType } = useContext(AppContext);

  useEffect(() => {
    setLoginType(loginType);
  }, []);

  const history = useHistory();
  return (
    <Fragment>
      <IonPage id="main-content">
        <IonContent className="login ion-padding" fullscreen>
          <IonGrid classname="vertically-center">
            <IonRow className="ion-text-center">
              <IonCol>
                <IonButton
                  onClick={() => signInWithGoogle(history, "/dashboard")}
                >
                  {loginType} with Google
                </IonButton>
              </IonCol>
            </IonRow>
            <IonRow className="ion-text-center">
              <IonCol>
                there will also be a {loginType} with facebook button
              </IonCol>
            </IonRow>
            <IonRow className="ion-text-center">
              <IonCol>and a password {loginType} button</IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    </Fragment>
  );
};

export default Login;
