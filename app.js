//variables
var genBtn = document.getElementById("genBtn")
var genBox = document.getElementById("genBox");
var passLength = document.getElementById("passLength");
var numYN = document.getElementById("num");
var specYN = document.getElementById("spec");

var alphaChar = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numChar = '0123456789';
var specChar = '!@#$%^&*';


//Func to generate random password

// Func to Copy Password
function copyGen(){
    document.getElementById("genBox").querySelector();
    document.execCommand("Copy");
    alert("Your randomly generated password has been copied to your clipboard")
}