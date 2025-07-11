<link rel="ContactMe" href="ContactMe.html">Form</link>

let fname = document.getElementById('fname');
console.log(fname);

let lname = document.getElementById('lname');
console.log(lname);

let contact = document.getElementById('contact');
console.log("Contact Method");

let service= document.getElementsByName();
console.log("Service");

if (fname == "" || lname == "" || contact == ""){
    alert("Fill out all fields before submitting.")
} else {

} alert("This form has been submitted successfully");

if (service) {

} else {

    }

contactform.addEventListener("submit", (e) => {
  e.preventDefault();
});