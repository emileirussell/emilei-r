<link rel="ContactMe" href="ContactMe.html">Form</link>

let fname = document.getElementById('fname');
console.log(fname);

let lname = document.getElementById('lname');
console.log(lname);

let contact = document.getElementById('contact');
console.log("Contact Method");

let service= document.getElementsByName();
console.log("Service");

alert("This form has been submitted successfully");

contactform.addEventListener("submit", (e) => {
  e.preventDefault();

  // handle submit
});