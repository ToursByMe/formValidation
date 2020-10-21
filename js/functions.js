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

//search form
const searchField = document.getElementById('mySearch');

//addevent
searchField.addEventListener('focus', cleanUp);
searchField.addEventListener('keyup', longWord);
searchField.addEventListener('keyup', warningUp);


//SEARCH Funtions
function cleanUp(){

    searchField.classList.remove('is-invalid');
    searchField.classList.remove('is-valid');
    searchField.value = "";
}

function longWord(){

    console.log('Search works');
    
    let noWhite = searchField.value.trim();

    //length str
    if (noWhite.length <= 3 ) {
        searchField.classList.add('is-invalid');
        console.log(searchField.value.length + " "+ 'invalid');
    } else {
        searchField.classList.remove('is-invalid');
        searchField.classList.add('is-valid');
        console.log(searchField.value.length + " "+ 'valid');

    } 
 
}

function warningUp(){

    (searchField.value.length <=3) ?
     document.getElementById('status4').innerHTML =  "Field must have more than three words!" :
     document.getElementById('status4').innerHTML =  "" ;

}

//VALIDATION FUNCTION
document.getElementById("labelCheck").textContent = "You must read and check the policies";
    //Documentacion
    //https://www.w3schools.com/jsref/coll_doc_forms.asp

//contador
let acumErrores = 0;

//declaration of form
const form = document.getElementById('myForm');

//main function
function myValidation() {

    form.classList.remove('is-invalid');

    //to be used by all functions
let inputUser = document.forms["myForm"]["inputUser"];
let inputPassword = document.forms["myForm"]["inputPassword"];
let repeatPasswrord = document.forms["myForm"]["repeatPassword"]
let inputEmail = document.forms["myForm"]["inputEmail"];
let inputProvince = document.forms["myForm"]["inputProvince"];
let inputCity = document.forms["myForm"]["inputCity"];
let inputZip = document.forms["myForm"]["inputZip"];
let gridCheck = document.forms["myForm"]["gridCheck"];
    
//USERNAME
 //boolean
 let numCheck = noOnlyNum(inputUser.value);

 //USERNAME
 if (inputUser.value == "") {

   inValid(inputUser);
   
   document.getElementById("errorUser").textContent = "No empty fields allowed";
  
   acumErrores ++;

} else if (numCheck) {

   inValid(inputUser);
   
   document.getElementById("errorUser").textContent = "No only numbers allowed";
  
   acumErrores ++;

} else {

   isValid(inputUser);
   
   document.getElementById("okUser").textContent = "Properly done";

}

    //MAIL
	if(inputEmail.value == "") {
        
        inValid(inputEmail);
        
        document.getElementById("errorEmail").textContent = "No empty fields allowed";
        
        acumErrores ++;

    }else if(!validar_email(inputEmail.value)){

        inValid(inputEmail);
        
        document.getElementById("errorEmail").textContent = "No right mail format";
        
        acumErrores ++;

	} else {

        isValid(inputEmail);
        
        document.getElementById("okEmail").textContent = "Properly done";

    }

         //PASSWORD
    //check noonly numbers
    let mailBoolean = noOnlyNum(inputPassword.value);

    if(inputPassword.value == "") {
        
        inValid(inputPassword);
        
        document.getElementById("errorPassword").textContent = "No empty fields allowed";
        
        acumErrores ++;

    } else if (inputPassword.value.length <= 6) {

        inValid(inputPassword);
        
        document.getElementById("errorPassword").textContent = "Password must have more than 6 characters";
        
        acumErrores ++;

    } else if(mailBoolean) {

        inValid(inputPassword);
        
        document.getElementById("errorPassword").textContent = "Password must have numbers AND letters";
        
        acumErrores ++;

    } else {

        isValid(inputPassword);
            
        document.getElementById("okPassword").textContent = "Right password format";

    }

      //REPEAT PASS
      if (repeatPasswrord.value == ""){
        
        inValid(repeatPasswrord);
        
        document.getElementById("errorPassword2").textContent = "No empty fields allowed";
        
        acumErrores ++;
    } else if (repeatPasswrord.value !== inputPassword.value) {

        inValid(repeatPasswrord);
        
        document.getElementById("errorPassword2").textContent = "Password doesn't match";
        
        acumErrores ++;
    } else {

        isValid(repeatPasswrord);
        
        document.getElementById("okPassword2").textContent = "Passwords match";
    }

    
    //COUNTY FIELD
    if(inputProvince.value == "") {

        inValid(inputProvince);
        
        document.getElementById("errorProvince").textContent = "No empty fields allowed";
        
        acumErrores ++;

    }  else {

        isValid(inputProvince);
        
        document.getElementById("okProvince").textContent = "Properly done";

    }

        //check not only number
        let noNumber = noOnlyNum(inputCity.value);

        //CITY NAME
        if(inputCity.value == "") {
    
            inValid(inputCity);
            
            document.getElementById("errorCity").textContent = "No empty fields allowed";
            
            acumErrores ++;
    
        } else if(noNumber){
    
            inValid(inputCity);
            
            document.getElementById("errorCity").textContent = "There no such city";
            
            acumErrores ++;
    
        } else {
    
            inputCity.value = capitalize(inputCity.value);
    
            isValid(inputCity);
            
            document.getElementById("okCity").textContent = "Properly done";
    
        }

        
     //check not only number
    noNumber = noOnlyNum(inputZip.value);

     //POSTAL CODE
	if(inputZip.value == "" || inputZip.value.length != 5) {
        
        inValid(inputZip);
        
        document.getElementById("errorZip").textContent = "No a proper zip code | Empty field";
        
        acumErrores ++;

	} else if(!noNumber){

        inValid(inputZip);
        
        document.getElementById("errorZip").textContent = "Code must be a number";

        acumErrores ++;

    } else if( inputZip.value.length == 5) {

        isValid(inputZip);
        
        document.getElementById("okZip").textContent = "Properly done";
    }
//tick box
    if(!gridCheck.checked) {
        
        
        inValid(gridCheck);
        
        document.getElementById("errorCheck").textContent = "You must accept the privacy policy";
        
        document.getElementById("labelCheck").textContent = "You must read the policies";
        
        acumErrores ++;
        
	} else {

        isValid(gridCheck);

        document.getElementById("okCheck").textContent = "Policies accepted";
        
        document.getElementById("labelCheck").textContent = "I read and understood the policies";
    }

    //STOP
    
    if (acumErrores > 0){
        return false;
    }else{
		return true;
	}


}

//clean me Ismael all of it
//form.addEventListener('focus', () => myValidation(), true);
    
    //boolean til the end all is false!!!!!
    //don't you dare to place and else as HAVE to return true
    //https://www.yourhtmlsource.com/javascript/formvalidation.html
    

//add green lights
form.addEventListener('keyup', () => myValidation(), true);

//form.addEventListener('blur', () => myValidation(), true);

/*Como Ismael te pidió esta mañana, con el addEvent apuntamos a la función directamente
 * WARNING
 * form.addEventListener('keyup', myValidation()); NO FUNCIONA
 * PREGUNTAR A ISMAEL
 */

//recursive functions
//validar mail
function validar_email(email) {
	var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email) ? true : false;
}

//INVALID
function inValid(field){
    field.classList.remove("is-valid");
    field.classList.add("is-invalid");
}
//VALID
function isValid(field){
    field.classList.remove("is-invalid");
    field.classList.add("is-valid");
}

//Capitalize
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
  
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

 function noOnlyNum(num) {
      //CHECK NUMBERS IN NAME
    let noNum = /^[0-9]*$/;
    //boolean
    return noNum.test(num) ? true : false;
 }
//modal cookies jquery
//when document ready do ...
/* $(document).ready(() => {
    $('#cookiesModal').modal('show');
}); */

//jquery target _blank
$('#myForm').attr('target', '_blank');

//scroll view
ScrollReveal().reveal('.aboutMe', {delay: 300});
ScrollReveal().reveal('.services', {delay: 300});
ScrollReveal().reveal('.works', {delay: 300});
//ScrollReveal().reveal('.contactMe', {delay: 300});
ScrollReveal().reveal('.myFooter', {delay: 300});


/***************************DOCUMENTACIÓN************************* */
//FOCUS/BLUR
//https://javascript.info/focus-blur
//https://developer.mozilla.org/en-US/docs/Web/API/HTMLOrForeignElement/blur

//a revisar
//https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/checkValidity









