 //enabling fields
 function scrolled(s) {
    if(s.scrollHeight - s.scrollTop === s.clientHeight)
    {
        document.getElementById("defaultCheck1").disabled = false;
    }else{
     document.getElementById("defaultCheck1").disabled = true;
    }
}

function toggleSelect()
{
  var isChecked = document.getElementById("defaultCheck1").checked;
  document.getElementById("ime").disabled = !isChecked;
  document.getElementById("password").disabled = !isChecked;
  document.getElementById("email").disabled = !isChecked;
  document.getElementById("sub").disabled = !isChecked;
  document.getElementById("reset").disabled = !isChecked;

  document.getElementById("Textarea1").style.overflow = "hidden";



}
//local storage

function locstormake(){
 var ime = document.getElementById("ime").value;
 var password = document.getElementById("password").value;
 var email = document.getElementById("email").value;

 localStorage.setItem("ime", ime );
 localStorage.setItem("password", password );
 localStorage.setItem("email", email );

 }

//lock store get
     function localstorget (){
     var ime = localStorage.getItem("ime");
     var password = localStorage.getItem("password");
     var email = localStorage.getItem("email");


         document.getElementById("pText").innerHTML = ime + "  " + password + " " + email;
      }
      
      function onsub() {
var ime = document.getElementById("ime").value;
 var password = document.getElementById("password").value;
 var email = document.getElementById("email").value;
 if(ime==null || ime=="",password==null || password=="",email==null || email==""){
   
 }else{
   location.href = 'index.html';
 }
      }
//JQ login empty field checker
$(document).ready(function() {
$("#sub").click(function(e) {
e.preventDefault();
var name = $("#ime").val();
var pass = $("#password").val();
var email = $("#email").val();
if (!(name == '' || pass == '' || email == '')) {
$("#submitdata").empty();
$("#submitdata").append("Name: " + name + "<br/>Email: " + pass + "<br/>Message: " + msg);
} else {
alert("Molimo Vas popunite sva polja!");
}
});
});