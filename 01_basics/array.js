//arrays

const arr=[0,1,2,3,4,5]
const myhe=["shaktiman","naagraj"]
const myarr= new Array(1,2,3,4)
console.log(myarr[0]);

//Array
arr.push(6)
arr.pop()

arr.unshift(9) //shifts the elemetsand put the 9 at the 1st position
console.log(arr);
arr.shift()
console.log(arr.includes(9));
console.log(arr.indexOf(-9));
const newarr=arr.join()
console.log(newarr); //binds the array and make the array string

//slice,splice

console.log("A",arr);
 const myarr1=arr.slice(1,3) //last 3 is not included

 console.log(myarr1);
 console.log("B",arr)

 const myn2=arr.splice(1,3)  //includes 3 but the originak array got changed the orignal array will become[4,5,6]
 console.log("C",arr);       //the myn2=[1,2,3]
 console.log(myn2);

 
 





