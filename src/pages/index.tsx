import React from "react";
import firebase from "firebase";

export default () => {
  return <div>Firebase App Name: {firebase.app().name}</div>;
};
