const form = document.querySelector('#my-form');
//Get element
const firstNameInput = form.querySelector('#name');
const phoneInput = form.querySelector('#phone');
const genderInput = form.querySelector('#gender');
const enquiryInput = form.querySelector('#Subject');
const emailInput = form.querySelector('#Email');


function Validate()
{
    
    const firstNameValue = firstNameInput.value.trim();
    const phoneValue = phoneInput.value.trim();
    const genderValue = genderInput.value;
    const enquiryValue = enquiryInput.value.trim();
    const emailValue =emailInput.value.trim();
   
    const nameRegex = /^[a-zA-Z]+$/; // Only accept letters
    const phoneRegex = /^\d+$/; // Only accept numbers
    const genderRegex = /^(Male|Female)$/i; // Accept Male or Female, case insensitive
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;// Validate email field
    let isValid = true; 

    document.getElementById("fn").style.color = "Red";
    document.getElementById("pn").style.color = "Red";
    document.getElementById("gd").style.color = "Red";
    document.getElementById("eq").style.color = "Red";

    //Detection firstName
    if (firstNameValue === '') {
        document.getElementById("fn").innerHTML = " Please enter your  name!";
        isValid = false;
    } else if (!nameRegex.test(firstNameValue)) {
        document.getElementById("fn").innerHTML = "Ensure that the input is all letters!";
        isValid = false;
    } else {
        document.getElementById("fn").innerHTML = "Right";document.getElementById("fn").style.color = "Green";}


    // Detection phone
    if (phoneValue === '') {
        document.getElementById("pn").innerHTML =(' Please enter your  number!');
        isValid = false;
    } else if (!phoneRegex.test(phoneValue)) {
        document.getElementById("pn").innerHTML =(' Ensure that all inputs are numbers!');
        isValid = false;
    } else {document.getElementById("pn").innerHTML =' Right';document.getElementById("pn").style.color = "Green";}

    //Detection email
    if (emailValue == "" || pattern.test(emailValue) == false) {
        document.getElementById("En").innerHTML =(' Please enter your email !');document.getElementById("En").style.color = "Red";
        isValid = false;
     
    } else {
    document.getElementById("En").innerHTML = "Right";document.getElementById("En").style.color = "Green";}

    // Detection gender
    if (genderValue === '') {
        document.getElementById("gd").innerHTML = 'Please choose your gender!';
        isValid = false;
    } else if (!genderRegex.test(genderValue)) {
        document.getElementById("gd").innerHTML = 'Choose Gender!';
        isValid = false;
    } else {document.getElementById("gd").innerHTML = 'Gender:Right ';document.getElementById("gd").style.color = "Green";}

    // Detection enquiry
    if (enquiryValue === '') {
        document.getElementById("eq").innerHTML = ' Please enter your subject!';
        isValid = false;
    } else if (enquiryValue.split(/\s+/).length > 150) {
        document.getElementById("eq").innerHTML = ' Must be within 130 words!';
        isValid = false;
    } else {document.getElementById("eq").innerHTML = 'Right';document.getElementById("eq").style.color = "Green";}

}
