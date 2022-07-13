window.addEventListener('DOMContentLoaded',(event) =>{
    const name = document.querySelector('#name');
    const error = document.querySelector('.name-error');
    name.addEventListener('input', function(){
        if (name.value.lenth == 0)
        {
            error.textContent = "";
        }
        try
        {
            (new EmployeeModel()).name = name.value;
            error.textContent = "";
        }
        catch(e)
        {
            error.textContent = e;
        }
    });
});