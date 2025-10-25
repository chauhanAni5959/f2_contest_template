/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  arr.map((employee) => {
    if(employee.profession ==="developer"){
      console.log(employee);
    }
  })
 
  
}

function PrintDeveloperbyForEach() {
  arr.forEach((employee) =>{
    if(employee.profession === "developer"){
      console.log(employee);
    }
  })
}

function addData() {
  let newEmp = {id:4, name:"Ankit", age:"22",profession:"Data Analyst" };
  arr.push(newEmp);
  console.log(arr);

}

function removeAdmin() {
  let filteredArr = arr.filter((employee) => employee.profession !== "admin");
  console.log(filteredArr);
}

function concatenateArray() {
  let newArr = [
    {id:4, name:"Deepak", age: "28", profession:"MIS"},
    {id: 5, name: "Nishant", age: "23", profession:"MIS 2"},
    {id:6, name:"Akshay Sharma", age:"21",profession:"Circle MIS" }
  ];
  let concatenatedArr = arr.concat(newArr);
  console.log(concatenateArr);
  
}



