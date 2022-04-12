
const fetchAllCharacters = () =>
    fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(page => page.results)

function getLivingHumans(characters) {
    return characters.filter( character => character.status === "Alive" )
}

function getCharacterNames(characters) {
    return characters.map( char => char.name)
}

function getNameAndOrigin(characters){
    return characters.map(char => ({ name: char.name, origin: char.origin.name}) )
}

// open index.html in browser and check the JS console to see the results
fetchAllCharacters().then(characters => {
    console.log(getLivingHumans(characters))
    console.log(getCharacterNames(characters))
    console.log(getNameAndOrigin(characters))
})


