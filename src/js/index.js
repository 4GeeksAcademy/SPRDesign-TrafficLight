//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));

document.getElementById('colorChangeBtn').addEventListener('click', function() {
    // Obtener los elementos de los círculos
    var circleRed = document.querySelector('.red');
    var circleYellow = document.querySelector('.yellow');
    var circleGreen = document.querySelector('.green');
  
    // Cambiar la clase de los círculos a lila
    circleRed.classList.add('lila');
    circleYellow.classList.add('lila');
    circleGreen.classList.add('lila');
  });
  