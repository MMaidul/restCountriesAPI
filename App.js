const loadCountriesJSON = () => {
    fetch(`https://restcountries.com/v2/all`)
        .then(res => res.json())
        .then(data => displayCountries(data))
}


const displayCountries = (countries) => {
    countries.forEach(country => {
        const { name, flags, capital, population, area } = country;
        const languages = country.languages;
        const parent = document.getElementById('row');
        const div = document.createElement('div');
        div.className = 'col-md-4';
        div.innerHTML = `
         <h2>${name}</h2>
          <img src=${flags.png} alt="" class="img-fluid img-height">
         <p class="mt-3">Capital: ${capital}</p>
         <p>Population: ${population}<p>
         <p>Area: ${area}</p>
         <p>Languages: ${languages.map(lg => lg.name)}<p>
        `;
        parent.appendChild(div);


    });
}

loadCountriesJSON();

