import "./style.css";
import templateCL from "./templateCountryList.hbs";
import templateLL from "./templateLanguagesCountryList.hbs";

const refs = {
  input: document.querySelector(".name"),
  ul: document.querySelector(".country")
};

// fetch(`https://restcountries.eu/rest/v2/name/${name}`);

refs.input.addEventListener("input", e => {
  getCountry(e.target.value);
});
// console.log(input);
const getCountry = name => {
  return fetch(`https://restcountries.eu/rest/v2/name/${name}`).then(data =>
    data.json().then(data =>
      data.map(item => {
        templateCL.item;
      })
    )
  );
};
