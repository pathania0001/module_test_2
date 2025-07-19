/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  arr.filter(employee =>employee.profession === "developer")
  .map( employee => console.log("Developers :",employee))
}

function PrintDeveloperbyForEach() {
  arr.forEach( employee =>  employee.profession === "developer" && console.log("Developers :",employee));
}

function addData() {
 const newEmployee =  {id:4,name:"susan",age:"20",profession:"intern"} 
 const isExist = arr.some( employee => employee.id === newEmployee.id)
 if(isExist){
  console.log("Already Existed")
  return;
 }
 arr.push(newEmployee);
 console.log("Updated Array :",arr);
}

function removeAdmin() {
  const newArray = arr.filter( employee => employee.profession !== "admin")
  console.log("Updated Array :",newArray);
  return newArray;
}

function concatenateArray() {
   const newEmployees = [
    { id: 5, name: "Rajat", age: "24", profession: "Software Engineer" },
    { id: 6, name: "Anoop", age: "25", profession: "developer" },
    { id: 7, name: "Vineet", age: "24", profession: "tester" }
  ];

  const Updated = arr.concat(newEmployees);
  console.log("Updated :",Updated);
  return Updated;
}
