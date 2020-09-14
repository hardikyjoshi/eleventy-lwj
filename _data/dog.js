const fetch = require("node-fetch");

module.exports = async () => {
const result = await fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((json) => {
      console.log("json", json);
      return json;
    });
    console.log("result", result);
    return result.message
}