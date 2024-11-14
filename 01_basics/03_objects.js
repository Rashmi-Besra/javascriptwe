// singleton
//apne tarah ka sirf ek object

//object literals
//Object.create

const mysym=Symbol("key1")

const jsuser={
    name: "Hitesh",
    "full name": "Hitesh choudhary",  //you can't give in by dot method
    [mysym]: "mykey1",
    age:    20,
    location: "Jamshedpur",
    email:"rashmi@gmail.com",
    isloggedin: false,
    lastlogindays: ["Monday","Saturday"]
}

// console.log(jsuser.email)
// console.log(jsuser["email"])
// console.log(jsuser[mysym]);
// Object.freeze(jsuser)
//function and variables are treated same

jsuser.greeting=function(){
    console.log("Hello Js user");
}
jsuser.greeting2=function(){
    console.log('Hello Js user, ${this.name}');
}
console.log(jsuser.greeting2());