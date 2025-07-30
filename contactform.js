document.addEventListener("DOMContentLoaded", function () {

const form = document.getElementById("contactform");
const fields = ["fname", "lname", "contact"];
const radioGroup = document.getElementsByName("service");

// Add real-time validation listeners
fields.forEach((fieldId) => {
const field = document.getElementById(fieldId);
field.addEventListener("input", () => validateField(field));
});

form.addEventListener("submit", function (event) {
event.preventDefault();
let isValid = true;

// Validate text fields
fields.forEach((fieldId) => {
const field = document.getElementById(fieldId);
if (!validateField(field)) {
isValid = false;
}
});

// Validate service selection
const serviceError = document.getElementById("serviceError");
const selectedService = Array.from(radioGroup).find(radio => radio.checked);
if (!selectedService) {
serviceError.textContent = "Please select a service.";
isValid = false;
} else {
serviceError.textContent = "";
}

if (isValid) {
alert(`Thank you, ${document.getElementById("fname").value.trim()}! Your request for "${selectedService.value}" has been received.`);
form.reset();
clearValidationStyles();
}
});

function validateField(field) {
const errorId = field.id + "Error";
let errorMessage = "";
const value = field.value.trim();

if (value === "") {
errorMessage = "This field is required.";
} else if (field.id === "contact" && !/^\S+@\S+\.\S+$/.test(value) && !/^\d{10,15}$/.test(value)) {
errorMessage = "Enter a valid email or phone number.";
}

const errorElem = document.getElementById(errorId);
if (errorMessage) {
errorElem.textContent = errorMessage;
field.classList.add("invalid");
field.classList.remove("valid");
return false;
} else {
errorElem.textContent = "";
field.classList.remove("invalid");
field.classList.add("valid");
return true;
}
}

function clearValidationStyles() {
fields.forEach((fieldId) => {
const field = document.getElementById(fieldId);
field.classList.remove("valid", "invalid");
});
}}