window.addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector('#name');
    const textError = document.querySelector('.name-error');
    name.addEventListener('input', function() {
        if(name.value.length == 0) {
            textError.textContent = "";
            return;
        }
        try {
            (new EmployeeModel()).name = name.value;
            textError.textContent = "";
        } catch (e) {
            textError.textContent = e;
        }
    });
});

function save()
{
    let employeePayrollData = createEmployeePayroll();
    createAndUpdateStorage(employeePayrollData);
}

function createEmployeePayroll()
{
    let employeePayrollData = new EmployeeModel();
    employeePayrollData._name = document.getElementById("name").value;;
    employeePayrollData._profilePic = getSelectedValues('[name=profile]').pop();
    employeePayrollData._gender = getSelectedValues('[name=gender]').pop();
    employeePayrollData._department = getSelectedValues('[name=department]');
    employeePayrollData._salary = document.getElementById("salary").value;
    employeePayrollData._note = document.getElementById("notes").value;
    let date = document.getElementById("day").value + document.getElementById("month").value + document.getElementById("year").value;
    employeePayrollData._startDate = new Date(Date.parse(date));
    return employeePayrollData;
}

const getSelectedValues = (propertyValue) =>{
    let allItems = document.querySelectorAll(propertyValue);
    let selectedItems = [];
    allItems.forEach(item =>{
        if(item.checked)
        {
            selectedItems.push(item.value);
        }
    });
    return selectedItems;
}
// Saving Employee model to local storage.

 function createAndUpdateStorage(employeePayrollData) 
 {
     let employeePayrollList = JSON.parse(localStorage.getItem("EmployeePayrollList"));

     if (employeePayrollList != undefined) 
     {
         employeePayrollList.push(employeePayrollData);
     }
     else 
     {
         employeePayrollList = [employeePayrollData];
     }
     alert(employeePayrollList.toString());
     localStorage.setItem("EmployeePayrollList", JSON.stringify(employeePayrollList));
 }

// UC5:- Ability to reset the form on clicking reset  
const resetForm = () => {
    setValue('#name','');
    unsetSelectedValues('[name=profile]');
    unsetSelectedValues('[name=gender]');
    unsetSelectedValues('[name=department]');
    setValue('#salary', '');
    setValue('#notes', '');
    setValue('#day', '1');
    setValue('#month', 'January');
    setValue('#year', '2022');
}
const unsetSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    allItems.forEach(item => { item.checked = false; });
}
const setTextValue = (id, value) => {
    const element = document.querySelector(id);
    element.textContent = value;
}
const setValue = (id, value) => {
    const element = document.querySelector(id);
    element.value = value;
}