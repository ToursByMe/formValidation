"use strict"

    //class

class txtRotate {

    constructor(el, toRotate, period){
        this.toRotate   = toRotate;
        this.el         = el;
        this.loopNum    = 0;
        this.period     = parseInt(period, 10) || 2000;
        this.txt        = "";
        this.isDeleting = false;
        this.tick();

    }
    get thistoRotate() {
        return this.toRotate;
    }
    get thisEl() {
        return this.el;
    }
    get thisloopNum() {
        return this.loopNum;
    }
    get thisPeriod() {
        return this.period;
    }
    get thisTxt() {
        return this.txt;
    }
    get thisIsDeleting() {
        return this.isDeleting;
    }

    tick() {

    let i = this.loopNum % this.toRotate.length;
    let fullTxt = this.toRotate[i];


    //conditionals
    if(this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    //pintame moreno
    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    let that = this;
    //time writing
    let delta = 300 - Math.random() * 200;

    //conditionals
    if(this.isDeleting) { delta /= 2;}

    if(!this.isDeleting && this.txt === fullTxt) {

        delta = this.period;

        this.isDeleting = true;

    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        //waiting time between words
        delta = 350;
    }

    //timer
    setTimeout(function() {

        that.tick();
    }, delta);
}
};

function changeWords() {
    let arrWords = document.getElementsByClassName('txt-rotate');

    //loopthrough the arr
    for (let i = 0; i < arrWords.length; i++){

        let changingWords = arrWords[i].getAttribute('data-rotate');
        let period = arrWords[i].getAttribute('data-period');

        if (changingWords) {

            new txtRotate(arrWords[i], JSON.parse(changingWords), period);
        }
    }
}
changeWords();
/*************************Validation exercise****************************************/

//validation form

//getters
//const form
const form = document.getElementById('contactFormOne');
//const mail
const mail = document.getElementById('mail');

//counter
let counter = 0;


//contact button
const button1     = document.getElementById('sendButton');

//links to open contact
const contactLink = document.querySelectorAll('myLinks');

//contact
const contactForm = document.getElementById('myForm');
const contactForm1 = document.getElementById('registerForm');

//search
const button2     = document.getElementById('button2');
const searchField = document.getElementById('mySearch');

//addevent
button1.addEventListener('click', checkForm);
searchField.addEventListener('keyup', longWord);
searchField.addEventListener('keyup', warningUp)

//FORM functions
function checkForm (){

    //clean
    cleanStatus();

   //name
   checkName();

   //mail
   checkMail();

}

//SEARCH Funtions
function longWord(){

    console.log('Search works');

    cleanStatus();

    let noWhite = searchField.value.trim();

    //length str
    if (noWhite.length <= 3 ) {
        searchField.classList.add('is-invalid');
        console.log(searchField.value.length + " "+ 'invalid');
    } else {
        searchField.classList.remove('is-invalid')
        searchField.classList.add('is-valid');
        console.log(searchField.value.length + " "+ 'valid');

    } 
 
}

function warningUp(){
    (searchField.value.length <=3) ?
    search = document.getElementById('status4').innerHTML =  "Field must have more than three words you fool!" :
    search = document.getElementById('status4').innerHTML =  "" ;

}

//VALIDATION FUNCTION
document.getElementById("labelCheck").textContent = "You must read and check the policies";

//get info from forms

//ismael
const inputPassword  = document.forms["myForm"]["inputPassword"];
const repeatPassword = document.forms["myForm"]["repeatPassword"];
const inputUser      = document.forms["myForm"]["inputUser"];
const inputEmail     = document.forms["myForm"]["inputEmail"];
const inputProvince  = document.forms["myForm"]["inputProvince"];
const inputCity      = document.forms["myForm"]["inputCity"];
const inputZip       = document.forms["myForm"]["inputZip"];
const gridCheck      = document.forms["myForm"]["gridCheck"];
//llamada a todos los form
//[cual de ellos][el input implicado]
	//let inputEmail = document.forms["myForm"]["inputEmail"];
    //let inputEmail = document.getElementById('inputEmail');
    //Ismael different way of taking data
    //Documentacion
    //https://www.w3schools.com/jsref/coll_doc_forms.asp

//my own form
const fieldName = document.forms["contactFormOne"]["fieldName"];
const fieldMail = document.forms["contactFormOne"]["fieldMail"];

//MAIN FUNCTION

//check names global
/* function checkNames(str) {

    console.log('names global works');

//Not Only Numbers
let checkPass = /^[0-9]*$/;

} */

function myValidation() {

    console.log('validation works');
    
    //remove red light traffic
	cleanStatus();
    //Ismael code revised for green lights

    checkMail();

//Not Only Numbers
    let checkPass = /^[0-9]*$/;
    let nameUser = inputUser.value;

//make boolean for username check number
    let userBool = checkPass.test(nameUser) ? true : false;

    let userObj = {
        case1 : (nameUser == ""),
        case2 : userBool
    }
    switch (true) {

        case userObj.case1:
        
        inputUser.classList.add("is-invalid");
        
        document.getElementById("errorUser").textContent = "No empty field allowed";
        
        counter ++;

            break;
    
        case userObj.case2:
        
        inputUser.classList.add("is-invalid");
        
        document.getElementById("errorUser").textContent = "Username can't be ONLY numbers";
        
        counter ++;

            break;
    
        default:
        
        inputUser.classList.remove("is-invalid");
        
        inputUser.classList.add("is-valid");
        
        document.getElementById("okUser").textContent = "Properly done";

            break;
    }

    //Password
    let fieldPass = inputPassword.value;

    //not only numbers
    let bool = (checkPass.test(fieldPass)) ? true : false;

    //switch password
    let passObj = {
        case1: (fieldPass == ""),
        case2: (fieldPass.length <= 6),
        case3: (bool),
    }
    switch (true) {

        case (passObj.case1):
 
        inputPassword.classList.add("is-invalid");
        
        document.getElementById("errorPassword").textContent = "No empty field allowed";
        
        counter ++;

            break;
    
        case (passObj.case2):

        inputPassword.classList.add("is-invalid");
        
        document.getElementById("errorPassword").textContent = "Password must have more than 6 characters";
        
        counter ++;

            break;
    
        case (passObj.case3):

        inputPassword.classList.add("is-invalid");
        
        document.getElementById("errorPassword").textContent = "Password can't have only numbers";
        
        counter ++;

            break;
    
        default:
            
        inputPassword.classList.remove("is-invalid");
            
        inputPassword.classList.add("is-valid");
            
        document.getElementById("okPassword").textContent = "Right password format";

            break;
    }

    //switch repeat Password
    let repeatPass = repeatPassword.value;

    //objct repeat
    let repeatObj = {
        case1 : (repeatPass == ""),
        case2 : (repeatPass !== fieldPass)
    }

    switch (true) {
        case (repeatObj.case1):
            
        repeatPassword.classList.add("is-invalid");
        
        document.getElementById("errorPassword2").textContent = "No empty field allowed";
        
        counter ++;
            
            break;
    
        case (repeatObj.case2):
        
        repeatPassword.classList.add("is-invalid");
        
        document.getElementById("errorPassword2").textContent = "Password doesn't match";
        
        counter ++;
            
            break;
    
        default:
        
        repeatPassword.classList.remove("is-invalid");
        
        repeatPassword.classList.add("is-valid");
        
        document.getElementById("okPassword2").textContent = "Passwords match";

            break;
    }

    //switch mail
    let mailLine = inputEmail.value;

    //obj mail
    let mailObj = {

        case1 : (mailLine == ""),
        case2 : (!checkValidity(mailLine)),

    }

    switch (true) {

        case mailObj.case1:
              
        inputEmail.classList.add("is-invalid");
        
        document.getElementById("errorEmail").textContent = "No empty field allowed";
        
        counter ++;
            
            break;
    
        case mailObj.case2:
       
        inputEmail.classList.add("is-invalid");
        
        document.getElementById("errorEmail").textContent = "Not right mail format";
       
        counter ++;
            
            break;
    
        default:
        
        inputEmail.classList.remove("is-invalid");
        
        inputEmail.classList.add("is-valid");
        
        document.getElementById("okEmail").textContent = "Right mail format";

            break;
    }

    //prueba obj switch

    //Provincies
    //look up for api
    if(inputProvince.value == "") {
		inputProvince.classList.add("is-invalid");
		document.getElementById("errorProvince").textContent = "Mandatory field";
		counter ++;
	} else {
        
        inputProvince.classList.remove("is-invalid");
        inputProvince.classList.add("is-valid");
		document.getElementById("errorProvince").textContent = "Properly done";

    }
    
    //City
	if(inputCity.value == "") {
		inputCity.classList.add("is-invalid");
		document.getElementById("errorCity").textContent = "Mandatory field";
		counter ++;
	} else {
        
        inputCity.classList.remove("is-invalid");
        inputCity.classList.add("is-valid");
		document.getElementById("errorCity").textContent = "Properly done";

    }
    
//ZIP CODE
    let postalCode = inputZip.value;

    let codeObj = {

        case1 : (postalCode == ""),
        case2 : (postalCode.length != 5)
    }
    console.log(postalCode.length);
    switch (true) {

        case codeObj.case1:
        
        inputZip.classList.add("is-invalid");
        
        document.getElementById("errorZip").textContent = "Mandatory field";
        
        counter ++;
            
            break;
    
        case codeObj.case2:
        
        inputZip.classList.add("is-invalid");
        
        document.getElementById("errorZip").textContent = "Zip code number error";
        
        counter ++;
            
            break;
    
        default:
        
        inputZip.classList.remove("is-invalid");
        
        inputZip.classList.add("is-valid");
        
        document.getElementById("okZip").textContent = "Properly done";

            break;
    }
    
    //Privace Policy
	if(!gridCheck.checked) {

        gridCheck.classList.add("is-valid");
        document.getElementById("okCheck").textContent = "";
        
		gridCheck.classList.add("is-invalid");
        document.getElementById("errorCheck").textContent = "Accept the policies";
        document.getElementById("labelCheck").textContent = "You must read and check the policies";
        counter ++;
        
	}else {
        
        gridCheck.classList.remove("is-invalid");
        gridCheck.classList.add("is-valid");
		document.getElementById("okCheck").textContent = "Policies accepted";
		document.getElementById("labelCheck").textContent = "I read and understood the policies";

    }

    //if there is an error ...
   return returnMe(counter);
      
}

//clean me Ismael all of it
form.addEventListener('blur', (event) => {
	console.log(event);
	if(event.target.value!='') event.target.classList.remove('is-invalid');
}, true);

//recursive functions

//stop me
function returnMe(num) {

    console.log('returnMe works');

    if (num > 0){
        return false;
    }else{
		return true;
	}
}

//clean fields with id only contact
const cleanStatus = () => {

    console.log('clean works')
    
    document.getElementById('status').innerHTML = "";
    document.getElementById('status2').innerHTML = "";
    document.getElementById('mySearch').innerHTML = "";
    form.classList.remove('is-invalid');
}


//checkname
function checkName() {
    console.log('checkName works');
  //get everything you fool
  let name    = document.getElementById('name').value;  
  let redFlag = document.getElementById('name');

  form.classList.remove('is-invalid')


  //let's check your body
  if (name == "") {

    redFlag.classList.add('is-invalid');
    document.getElementById('status').innerHTML =  "Field must have a name";
    
  } else {

      redFlag.classList.remove('is-invalid');
      redFlag.classList.add('is-valid');
      document.getElementById('status1').innerHTML =  "All seems correct";
      //name;
      
  }
  //return name;
}

//check Mail
function checkMail(){

    console.log('checkMail works');

    form.classList.remove('is-invalid')

    //conditionals


    if(mail.value == "") {
		mail.classList.add("is-invalid");
		document.getElementById("status2").textContent = "Field must have a mail";
        
    }else if(!checkValidity(mail.value)){
		mail.classList.add("is-invalid");
		document.getElementById("status2").textContent = "Not a right mail format";
		
	} else {
        mail.classList.add("is-valid");
        document.getElementById("status3").textContent = "All good. Well done";
    }
}

//empty mail
function fillMail() {
   //add invalid to work
   mail.classList.add('is-invalid');

   //tell me the true
   let textMail = document.getElementById('status2').innerHTML = "You must type an email you fool!";

    return textMail;
}
function checkValidity(email) {

    let regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    
	return regex.test(email) ? true : false;
}

//add classes
function addClasses(truth) {

     //add invalid to work
     if (truth == false){

        mail.classList.add('is-invalid');
     } 

        mail.classList.add('is-valid');
     

}
//show year
function thisYear() {

    //get me dear mine
let today = document.getElementById('thisYear');

//const year
const showYear = () => new Date().getUTCFullYear();

//print
today.innerHTML = showYear();

}
thisYear();

//burger menu

 document.querySelector('.menu-btn').addEventListener('click', () => {

    document.querySelector('.nav-menu').classList.toggle('show');
 });

//modal cookies jquery
//when document ready do ...
/* $(document).ready(() => {
    $('#cookiesModal').modal('show');
}); */

//jquery target _blank
$('#contactFormOne').attr('target', '_blank');
$('#myFormId').attr('target', '_blank');

//scroll view
ScrollReveal().reveal('.aboutMe', {delay: 300});
ScrollReveal().reveal('.services', {delay: 300});
ScrollReveal().reveal('.works', {delay: 300});
//ScrollReveal().reveal('.contactMe', {delay: 300});
ScrollReveal().reveal('.myFooter', {delay: 300});


/**************************************************** */




