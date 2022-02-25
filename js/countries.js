const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountry(data))
}
loadCountries()

const displayCountry = (countries) => {
    const countryContainer = document.getElementById('all-country');
    countries.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('country')
        div.innerHTML = `
            <img width="100" src="${country.flags.svg}" />
            <h3>${country.name.common.toUpperCase()}</h3>
            <p>${country.capital}</p>
            <button onclick="loadCountryDetail('${country.name.common}')">Show Details</button>
        `
        countryContainer.appendChild(div)
    });
}


const loadCountryDetail = (name) => {
    const url = `https://restcountries.com/v3.1/name/'${name}'`
    fetch(url)
        .then(res => res.json())
        .then(name => showCountryDetail(name[0]))
}

const showCountryDetail = (details) => {
    const countryDetail = document.getElementById('country-detail');
    countryDetail.innerHTML = `
        <div class='details'>
            <img width="400" src="${details.flags.svg}" />
            <h3>${details.name.common.toUpperCase()}</h3>
            <p>Capital: ${details.capital}</p>
            <p>Population: ${details.population}</p>
            <p>Region: ${details.region}</p>
        </div>
    `
}