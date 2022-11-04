const addBtn = document.querySelector(".add")
const url1 = "https://pokeapi.co/api/v2/pokemon/";

addBtn.addEventListener("click", getPokemonData)


function getPokemonData(){
  let pokemonName = document.querySelector(".pokemon")
  let pokemon = pokemonName.value
  let toFetch = url1 + pokemon
  
  fetch(toFetch)
    .then(res => res.json())
    .then(json => {
      console.log(pokemon)
   console.log("Ability: " + json.abilities[0].ability.name)
  })
}
