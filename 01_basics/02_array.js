const marvel_heros=["thor","Iornman","spiderman"]
const dc_hero=["superman","flash","batman"]

marvel_heros.push(dc_hero)
console.log(marvel_heros);
const allheros=marvel_heros.concat(dc_hero);
console.log(allheros);

const all_new_heros=[...marvel_heros, ...dc_hero]
console.log(all_new_heros);
const anotherarr=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real=anotherarr.flat(Infinity)
