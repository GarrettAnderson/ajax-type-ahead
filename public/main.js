/* ==========================
      GARRETT ANSWER
   ========================== */

 const endpoint =
   'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'

 const cities = []
 // let cities = []

 fetch(endpoint)
    .then(c => c.json())
    .then(data => {
      console.log(data)
      cities.push(...data)
    })

  /* ==== NOTE ==== */
      // use below then statement to add data to cities array ONLY possible if let cities NOT const
      // .then( data => {
      //       console.log(data)
      //       cities = data
      //     })

      // .push() will normally add array of cities as ONE item in the array.catch
      // ex: cities.push(data, 1, 3, 4) returns [ [...], 1, 3, 5 ]
      // use the spread operater when pushing data to return array with each city per index [ [], [], ... ,[]]
      // OR could just change array above to let citites instead of const array cities.data
  /* ==== END NOTE ==== */

let search = document.querySelector('.search')
  console.log(search)

let citiesUIList = document.querySelector('.suggestions')
  console.log(citiesUIList)

let regex = ''
let searchStr = ''
// let li = document.createElement('li')


function addCityToUI(filteredCity) {
  filteredCity.map(x => {
      // console.log(regex)

      let li = document.createElement('li')

      // console.log(li)

      let cityName = x.city.replace(regex,`<span class='highlight'>${searchStr}</span>`)
      let stateName = x.state.replace(regex, `<span class='highlight'>${searchStr}</span>`)
      let pop = parseInt(x.population).toLocaleString()
      console.log(pop)

      li.innerHTML = `
      <span class="name">${cityName}, ${stateName}</span>
      <span class="population">${pop}</span>
      `

      let listItem = citiesUIList.appendChild(li)

      // splitStr.map(s => {
      //
      // })
      // let repo = []
      // repo.push(`${li}`)
      // console.log(repo)
      //
      // for (let i = 0; i < listItem.length; i++) {
      //   return listItem[i]
      // }

  })



    if (filteredCity !== 'no resutls') {
      console.log('pass')
    } else {
      console.log('fail')
    }

}


function filterCity(e) {

      // console.log('searching')
      // console.log(e.target.value)
      searchStr = e.target.value
      // console.log(searchStr)
      citiesUIList.innerHTML = ''
      // let pattern = searchStr.split('').map(x => {
      //   console.log(`(?=.*${x})`)
      //   return `(?=.*${x})`
      // }).join('')

      // console.log(pattern)
      // console.log(cities)

      regex = new RegExp(`${searchStr}`, 'gi')
      // console.log(regex)


      let filteredCities = cities.filter(c => {
         // console.log(c.city.includes(searchStr))
         // console.log(c.state.includes(searchStr))

        // console.log(c.city + ' is a ' + typeof c.city)
        let cityLC = c.city.toLowerCase()
        let stateLC = c.state.toLowerCase()
          // return cityLC.includes(searchStr.toLowerCase())
          return cityLC.match(regex) || stateLC.match(regex)
      })

      console.log(filteredCities)
      //
      // filteredCities.map(c => {
      //   console.log(c)
      //   if (c.city.includes())
      // })

        if (filteredCities.length > 0) {
          console.log(filteredCities)
          addCityToUI(filteredCities)
        } else {
          console.log("no results")
        }



            //
            // let including = current.city.includes(e.target.value)
            // console.log(including)

            // let matches = document.querySelector('.suggestions')
            // console.log(matches)
            //
            // if (including !== false) {
            //   console.log(matches)
            //   let l = document.createElement('li')
            //   console.log(l)
            //
            //   matches.appendChild(l).innerHTML = (`${current.city}`)
            //
            //   let ltext = document.createTextNode(`${current.city}`)
            //   // let ltext = (`${current.city}`)
            //   console.log(ltext)
            //   console.log(matches)
            //
            // } else {
            //   console.log('name doesnt include search')
            //   return current.city
            // }
    // })
  }

search.addEventListener('keyup', filterCity)

    // document.addEventListener("DOMContentLoaded", () => {
    //   filterCity
    // })

    // document.addEventListener("DOMContentLoaded", function() {
    //   filterCity()
    // })


    // search.addEventListener('keyup', filterCity)



/* ==========================
      WES BOS ANSWER
   ========================== */

// const endpoint =
//   'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'
//
// const cities = []
//
// fetch(endpoint).then((res) => res.json()).then((data) => cities.push(...data))
//
// function findMatches(wordsToMatch, cities) {
//   return cities.filter((place) => {
//     // here we need to figure out if the city or state matches what we searched
//     console.log(place)
//     const regex = new RegExp(wordsToMatch, 'gi')
//     return place.city.match(regex) || place.state.match(regex)
//   })
// }
//
// function numberWithCommas(x) {
//   return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
// }
//
// function displayMatch() {
//   const matchArray = findMatches(this.value, cities)
//   // console.log(matchArray)
//   const html = matchArray
//     .map((place) => {
//       const regex = new RegExp(this.value, 'gi')
//       const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`)
//       const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`)
//
//       return `
//       <li>
//         <span class="name">${cityName}, ${stateName}</span>
//         <span class="population">${numberWithCommas(place.population)}</span>
//       </li>
//     `
//     })
//     .join('')
//   suggestions.innerHTML = html
// }
//
// const searchInput = document.querySelector('.search')
// const suggestions = document.querySelector('.suggestions')
//
// searchInput.addEventListener('change', displayMatch)
// searchInput.addEventListener('keyup', displayMatch)
