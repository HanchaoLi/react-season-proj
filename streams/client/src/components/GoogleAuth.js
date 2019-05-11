import React from "react";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        clientId:
          "712623396894-n12u7717g4hct8mnbuqc26o1uj3f0cot.apps.googleusercontent.com",
        scope: "email"
      });
    });
  }

  render() {
    return <div>google auth</div>;
  }
}

export default GoogleAuth;
