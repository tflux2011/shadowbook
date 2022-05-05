const { NODE_ENV = "" } = process.env;

const environment = NODE_ENV.toLowerCase();

const apiUrl = "http://192.168.22.44:7070/";
//   window.location.hostname === "isaadmin.tractionapps.co"
//     ? "https://tractionisa-prod.herokuapp.com"
//     : "https://tractionisa-stage.herokuapp.com";

export { environment, apiUrl };
