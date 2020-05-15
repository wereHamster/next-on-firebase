import React from "react";
import firebase from "firebase";

export default () => {
  const [name, setName] = React.useState("");
  React.useEffect(() => {
    setName(firebase.app().name);
  });
  
  return <div>Firebase App Name: {name}</div>;
};
