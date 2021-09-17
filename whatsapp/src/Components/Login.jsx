import { Button } from "@material-ui/core";
import React from "react";
import { LogCont, LoginCont, LoginText } from "./Loginstyle";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actiontypes } from "./reducer";

function Login() {


  // The dispatch function retrieves the user object on login with gmail account.
    const [{}, dispatch] = useStateValue()

    //The signin method to login with google using firebase authentication.
  const signin = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
          dispatch({
              type: actiontypes.SET_USER,
              user:result.user
          })
      })
      .catch((error) => alert(error.message));
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
