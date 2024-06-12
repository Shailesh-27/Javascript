const marvel_heros = ["thor", "Ironman"," spiderman"]
const dc_heros = ["batman", "flash"," superman"]

marvel_heros.push(dc_heros)

console.log(marvel_heros)
console.log(marvel_heros[3][2])

const allHeros =  marvel_heros.concat(dc_heros)
console.log(allHeros)

const allNewHeros = [...marvel_heros,...dc_heros]

// console.log(allNewHeros);

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = anotherArray.flat(1)
const real_another_array2 = anotherArray.flat(Infinity)


console.log(real_another_array);
console.log(real_another_array2);


console.log(Array.isArray('Shailesh'))
console.log(Array.from('Shailesh'))
console.log(Array.from({name:'Shailesh'})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));




