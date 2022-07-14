function AddEmployee()
{
    let name = document.getElementById("name").value;
    let profile = document.getElementById("profile").value;
    let gender = document.getElementById("gender").value;
    let department = document.getElementById("dept").value;
    let salary = document.getElementById("salary").value;
    let day = document.getElementById("day").value;
    let month = document.getElementById("month").value;
    let year = document.getElementById("year").value;
    let date = day+month+year;
    let note = document.getElementById("notes").value;

    localStorage.setItem("Name",name);
    localStorage.setItem("Profile",profile);
    localStorage.setItem("Gender",gender);
    localStorage.setItem("Department",department);
    localStorage.setItem("Salary",salary);
    localStorage.setItem("Date",date);
    localStorage.setItem("Note",note);
}

