let objParent={
    name:"rudresh",
    age:21,
}
let objChild={};
objChild.__proto__=objParent;
objChild.name="shede";
console.log(objChild);
console.log(objParent);
console.log('mofo');