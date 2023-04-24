function cart() {
  alert("This function is not available right now..!")
}

function validateForm(){
  var firstName = document.forms["form"]["fname"].value;
  var lastName = document.forms["form"]["lname"].value;
  var email = document.forms["form"]["email"].value;
  var phonenum = document.forms["form"]["number"].value;
  var message = document.forms["form"]["message"].value;

  if(firstName == "" || lastName == "" || email == "" || phonenum == "" || message == "")
  {
    alert("Empty Fields are Present! Please Enter the Values..");
  }
  else
  {
    alert("Thank You for your Feedback!");
  }
}