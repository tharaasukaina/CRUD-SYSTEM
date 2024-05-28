
var age = document.getElementById('age');
var department = document.getElementById('department');
var salary = document.getElementById('salary');
var employeName=document.getElementById('employeName');
var addbtn = document.getElementById('click');
var data = document.getElementById('data');
var inputs = document.getElementsByClassName('inputs');
var employees = [];
var btndelete = document.getElementById('btndelete');
var currentIndex = 0;
if (localStorage.getItem("EmployeeList") == null) {
    var employees = [];
}
else {
    var employees = JSON.parse(localStorage.getItem("EmployeeList"));

    displayEmployee();
}
addbtn.onclick = function () {
    if (addbtn.innerHTML == 'Update Employee') {
        UpdateEmployee ();
       
    }
    else {
        addEmployee();
    }
    displayEmployee();
    clearForm();
}
function addEmployee() {
    var employee = {
        employeName: employeName.value,
        age: age.value,
        department: department.value,
        salary: salary.value,
    }

    employees.push(employee);
    localStorage.setItem("EmployeeList", JSON.stringify(employees));

}
function displayEmployee() {
    var result = '';
    for (var i = 0; i < employees.length; i++) {
        result += `<tr> 
               <td> ${i} </td> 
               <td>${employees[i].employeName} </td> 
               <td>${employees[i].age} </td> 
               <td>${employees[i].department} </td> 
               <td>${employees[i].salary} </td>    
               <td><button class="update" onclick=getEmployeeData(${i})> Update </button></td>  
               <td><button class="delete" onclick="deleteEmployee(${i})"> Delete </button></td>  

               </tr> `;
    }
    data.innerHTML = result;
}
function clearForm() {
    for (var i = 0; i < inputs.length; i++)
        inputs[i].value = '';
}
function deleteEmployee(index) {
    employees.splice(index, 1);
    localStorage.setItem('EmployeeList', JSON.stringify(employees));
    displayEmployee();
}
btndelete.onclick = function () {
    localStorage.removeItem('EmployeeList');
    employees = [];
    data.innerHTML = ' ';
}
function search(y) {
    var result = '';
    for (var i = 0; i < employees.length; i++) {
        if (employees[i].employeName.toLowerCase().includes(y.toLowerCase())) {
            result += `<tr> 
               <td> ${i} </td> 
               <td>${employees[i].employeName} </td> 
               <td>${employees[i].age} </td> 
               <td>${employees[i].department} </td> 
               <td>${employees[i].salary} </td>    
               <td><button class="update"> Update </button></td>  
               <td><button class="delete" onclick="deleteEmployee(${i})"> Delete </button></td>  

               </tr> `;
        }
    }
    data.innerHTML = result;
}
function getEmployeeData(index) {
    var employee = employees[index];
    employeName.value = employee.employeName;
    age.value = employee.age;
    department.value = employee.department;
    salary.value = employee.salary;
    addbtn.innerHTML ="Update Employee";
    currentIndex = index;
}
function UpdateEmployee() {
    var updatedEmployeeName = document.getElementById('employeName').value;
    var employee = {
        employeName:employeName.value,
        age:age.value,
        department:department.value,
        salary:salary.value
    };
    employees[currentIndex] = employee;
    employees[currentIndex].employeName=employee.employeName;
    employees[currentIndex].age = employee.age;
    employees[currentIndex].department = employee.department;
    employees[currentIndex].salary = employee.salary;


    localStorage.setItem('EmployeeList', JSON.stringify(employees));

}

