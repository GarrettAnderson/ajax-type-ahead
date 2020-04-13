const endpoint =
  'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'

const cities = []

fetch(endpoint).then((res) => res.json()).then((data) => cities.push(...data))

function findMatches(wordsToMatch, cities) {
  return cities.filter((place) => {
    // here we need to figure out if the city or state matches what we searched
    console.log(place)
    const regex = new RegExp(wordToMatch, 'gi')
    return place.city.match(regex) || place.state.match(regex)
  })
}

function displayMatch() {
  console.log(this.value)
}
