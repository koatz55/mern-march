const pokémon = Object.freeze([
        { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
        { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
        { "id": 9,   "name": "Blastoise",  "types": ["water"] },
        { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
        { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
        { "id": 23,  "name": "Ekans",      "types": ["poison"] },
        { "id": 24,  "name": "Arbok",      "types": ["poison"] },
        { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
        { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
        { "id": 52,  "name": "Meowth",     "types": ["normal"] },
        { "id": 63,  "name": "Abra",       "types": ["psychic"] },
        { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
        { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
        { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
        { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
        { "id": 98,  "name": "Krabby",     "types": ["water"] },
        { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
        { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
        { "id": 133, "name": "Eevee",      "types": ["normal"] },
        { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
        { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
        { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
        { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
    ]);
    
const bListPkmn = pokémon.filter( p => p.name[0] === "B" );

const pkmnIds = pokémon.map(p => p.id);

console.log(bListPkmn);
// Dose not give much info
console.log(bListPkmn[0]);
// Gives 1st pokemon in list
console.log("Pokémon divisible by 3");
const pkDivBy3 = pokémon.filter(p => p.id%3 == 0)
for(let i = 0; i< pkDivBy3.length; i++){
console.log(pkDivBy3[i])}

console.log("Pokémon that are fire types");
// const firePkmn = pokémon.filter( p => p.types.filter(t => t[0] === "f"));
// const firePkmn = pokémon.filter(t => t[0] === "f"); returns null
// const firePkmn = pokémon.types.filter(t => t[0] === "f"); error
// const firePkmn = pokémon.filter( p => p.types == "fire"); close but only contains single types
// const firePkmn = pokémon.filter( p => p.types === "fire"); null
// const firePkmn = pokémon.filter( p => p.types <= "fire");
const firePkmn = pokémon.filter( p => p.types[0] == "fire" || p.types[1] == "fire");
for(let i = 0; i< firePkmn.length; i++){ 
    console.log(firePkmn[i]);
}

console.log("Dual type pokémon");
const DualTypePkmn = pokémon.filter( p => p.types.length == 2); 
//=== will work too?
// const DualTypePkmn = pokémon.filter( p => p.types[1] != null);
// ^ will also work
for(let i = 0; i < DualTypePkmn.length; i++){
    console.log(DualTypePkmn[i]);
}
// console.log(pokémon[0].types.length == 2);
// console.log(DualTypePkmn[1]);
const pknmNames = pokémon.map(p => p.name);
console.log("Pokémon names");
console.log(pknmNames);

console.log("Pokémon ids greater than 99");
const over99Pknm = pokémon.filter(p => p.id > 99);
for(let i = 0; i < over99Pknm.length; i++){
console.log(over99Pknm[i]);
}

console.log("Pure Poison PoKémon");
const purePoisonPkmn = pokémon.filter(p => p.types[0] == "poison" && p.types[1] == null);
for(let i = 0; i < purePoisonPkmn.length; i++){
    console.log(purePoisonPkmn[i]);
}

console.log("Dual Flying PoKémon");
const DualFlyingPkmn = pokémon.filter(p => p.types[0] == "flying" || p.types[1] == "flying" && p.types[1] != null ) ;
for(let i = 0; i < DualFlyingPkmn.length; i++){
    console.log(DualFlyingPkmn[i]);
}

console.log("Normal pokémon count");
const normalPkmn = pokémon.filter(p => p.types[0] == "normal" || p.types[1] == "normal");
let normalPkmnCount = normalPkmn.length;
console.log(normalPkmnCount);
