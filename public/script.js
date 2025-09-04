const { response } = require("express");

fetch("https://v6.exchangerate-api.com/v6/5ecd5d2bb673b49196b90730/latest/USD")
.then(response => console.log(response))
.catch(error => console.error(error))