/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map(obj => console.log(obj));
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach( obj => console.log(obj));
}

function addData() {
  //Write your code here, just console.log
  let newDev = {id:4,name:"susan",age:"20",profession:"intern"};

  arr.push(newDev);
  console.log(newDev);
}

function removeAdmin() {
  //Write your code here, just console.log
  arr = arr.filter( obj => obj.profession != "admin");

  arr.forEach(obj => console.log(obj));
}

function concatenateArray() {
  //Write your code here, just console.log
  let anotherArr = [
    {id:5,name:"rohit",age:"24",profession:"developer"},
    {id:6,name:"mohit",age:"22",profession:"intern"},
    {id:7,name:"anam",age:"26",profession:"developer"}
  ];
  
  arr = arr.concat(anotherArr);

  arr.forEach( obj => console.log(obj));
}