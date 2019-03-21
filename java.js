//enabling fields
function scrolled(s) {
  if (s.scrollHeight - s.scrollTop === s.clientHeight) {
    document.getElementById("defaultCheck1").disabled = false;
  } else {
    document.getElementById("defaultCheck1").disabled = true;
  }
}

function toggleSelect() {
  var isChecked = document.getElementById("defaultCheck1").checked;
  document.getElementById("ime").disabled = !isChecked;
  document.getElementById("password").disabled = !isChecked;

  document.getElementById("sub").disabled = !isChecked;
  document.getElementById("reset").disabled = !isChecked;

  document.getElementById("Textarea1").style.overflow = "hidden";
}
//local storage

function locstormake() {
  var ime = document.getElementById("ime").value;
  var password = document.getElementById("password").value;

  localStorage.setItem("ime", ime);
  localStorage.setItem("password", password);
}

//lock store get
function localstorget() {
  var ime = localStorage.getItem("ime");
  var password = localStorage.getItem("password");

  document.getElementById("pText").innerHTML = ime + "  " + password;
}

function onsub() {
  var ime = document.getElementById("ime").value;
  var password = document.getElementById("password").value;

  if ((ime == null || ime == "", password == null || password == "")) {
  } else {
    location.href = "naslovna.html";
  }
}
//JQ login empty field checker
$(document).ready(function() {
  $("#sub").click(function(e) {
    e.preventDefault();
    var name = $("#ime").val();
    var pass = $("#password").val();

    if (!(name == "" || pass == "" || email == "")) {
      $("#submitdata").empty();
      $("#submitdata").append("Name: " + name + pass + "<br/>Message: " + msg);
    } else {
      alert("Molimo Vas popunite sva polja!");
    }
  });
});
//index ucitava ls

function func1() {
  var ime = localStorage.getItem("ime");
  document.getElementById("welcome").innerHTML =
    "Dobro došao" + " " + ime + " " + "na naš sajt";
}

//kontakt ucitava ls
function func2() {
  var ime = localStorage.getItem("ime");

  document.getElementById("name").value = ime;
}

// funkcije za navigaciju na prvoj strani

function skok1() {
  window.location = "proizvodi.html";
}

function skok2() {
  window.location = "galerija.html";
}

function skok3() {
  window.location = "contact.html";
}
function skok4() {
  window.location = " not-found-page.html";
}
