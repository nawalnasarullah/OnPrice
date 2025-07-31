import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useGoogleLoginMutation } from "../redux/api/authApi";
import { useNavigate } from "react-router-dom";

function GoogleLogIn() {

  const navigate = useNavigate();

  const [googleLogin] = useGoogleLoginMutation();
  return (
    <>
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        console.log('cr', credentialResponse);
        const token = credentialResponse.credential;
       googleLogin(token);
        const decoded = jwtDecode(token);
        console.log("User Info: ", decoded);
        navigate("/home")
      }}
      onError={() => {
        console.log("Login Failed");
      }}
    />
    </>
  );
}

export default GoogleLogIn;
