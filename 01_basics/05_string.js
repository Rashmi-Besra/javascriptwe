const name="Rashmi"
const repocount=50
// console.log(name+repocount+"value");  outdated

console.log("Hello my name is ${name} and my repo count is ${repocount}");

const gamename=new String('hitesh-hc-com')
console.log(gamename[0]);
console.log(gamename.__proto__);
console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(2));
console.log(gamename.indexOf('t'));

//go through mdn for more function in strings

const newString=gamename.substring(0,4)
console.log(newString);

const anotherString=gamename.slice(-8,4)
console.log(anotherString);

const newString1="  hitesh  "
console.log(newString1);
console.log(newString1.trim());

const url="https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'))

console.log(url.includes('sundar'))
console.log(gamename.split('-'));







