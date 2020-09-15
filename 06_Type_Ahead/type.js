const endpoint =
  'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

const cities = [];

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

async function fetchdata() {
  const resp = await fetch(endpoint);
  const citiesData = await resp.json();

  cities.push(...citiesData);
}

function findMatches(wordToMatch, citiesList) {
  return citiesList.filter(place => {
    const regex = new RegExp(wordToMatch, 'gi');
    return place.city.match(regex) || place.state.match(regex);
  });
}

function displayMatches(e) {
  const searchingValue = e.target.value;
  const matchArray = findMatches(searchingValue, cities);
  const html = matchArray
    .map(place => {
      const regex = new RegExp(searchingValue, 'gi');
      const cityName = place.city.replace(
        regex,
        `<span class="hl">${searchingValue}</span>`
      );
      const stateName = place.state.replace(
        regex,
        `<span class="hl">${searchingValue}</span>`
      );
      return `
    <li>
      <span class="name">${cityName}, ${stateName}</span>
      <span class="population">${numberWithCommas(place.population)}</span>
    </li>
    `;
    })
    .join('');

  suggestions.innerHTML = html;
}

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);

fetchdata();
