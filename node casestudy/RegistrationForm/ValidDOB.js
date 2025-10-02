function ValidDOB(str){
    let span= document.getElementById("s5");
    str= document.getElementById("d").value;
    const dob= new Date(str);
    const todayDate= new Date();

    let flag= false;
    if(dob>todayDate){
        return false;
    }

    let age = todayDate.getFullYear() - dob.getFullYear();
    const m = todayDate.getMonth() - dob.getMonth();

    if (m < 0 || (m === 0 && todayDate.getDate() < dob.getDate())) {
        age--;
    }

    if (age >= 18) {
        span.innerHTML = "Valid DOB";
        span.style.color = "green";
        return true;
    } else {
        span.innerHTML = "Age must be 18 or older";
        span.style.color = "red";
        return false;
    }

}