import { Button } from "@material-ui/core";
import React from "react";
import { LogCont, LoginCont, LoginText } from "./Loginstyle";
import {auth, provider} from './firebase';

function Login() {
  const signin = () => {

    auth.SignInWithPopup(provider)
  };
  return (
    <LoginCont>
      <LogCont>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png"
          alt="whatsapp"
        />
        <LoginText>
          <h1>Sign in to Whatsapp</h1>
        </LoginText>

        <Button type="submit" onClick={signin}>
          SignIn with Google
        </Button>
      </LogCont>
    </LoginCont>
  );
}

export { Login };
