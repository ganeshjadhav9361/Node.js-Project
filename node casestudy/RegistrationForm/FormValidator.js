function validateForm(event) {
    let name = document.getElementById("n").value.trim();
    let email = document.getElementById("e").value.trim();
    let contact = document.getElementById("c").value.trim();
    let dob = document.getElementById("d").value;

    ValidName(name);
    ValidEmail(email);
    ValidContact(contact);
    ValidDOB(dob);

    let s1 = document.getElementById("s1").innerText;
    let s2 = document.getElementById("s2").innerText;
    let s3 = document.getElementById("s3").innerText;
    let s5 = document.getElementById("s5").innerText;

    if (s1 !== "Valid" || s2 !== "Valid" || s3 !== "Valid" || s5 !== "Valid DOB") {
        alert("Form has errors. Please fix them before submitting.");
        event.preventDefault(); // ❌ Prevent form submission
    }
}
