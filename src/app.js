/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const excuse = document.getElementById("excuse");

  let who = ["Walter H. White", "Luffy", "Naruto", "Jesse"];
  let action = ["se comió", "hizo", "creó"];
  let what = ["la fruta gommu gomuu", "la meta", "cristal azul", "el rasengan"];
  let when = ["en el Going Merry", "en el laboratorio", "en Konoha"];

  let arr = [who, action, what, when];
  let str = "";

  for (let i = 0; i < arr.length; i++) {
    let random = Math.floor(Math.random() * arr[i].length);
    str += arr[i][random] + " ";
  }
  excuse.innerHTML = str;
};

// function generateExcuse() {
//   let who = ["Walter H. White", "Luffy", "Naruto", "Jesse"];
//   let action = ["se comió", "hizo", "creó"];
//   let what = ["la fruta gommu gomuu", "la meta", "cristal azul", "el rasengan"];
//   let when = ["en el Going Merry", "en el laboratorio", "en Konoha"];

//   let arr = [who, action, what, when];
//   let str = "";

//   for (let i = 0; i < arr.length; i++) {
//     let random = Math.floor(Math.random() * arr[i].length);
//     str += arr[i][random] + " ";
//   }
//   return str;
// }
