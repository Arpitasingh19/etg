function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
alert("Valid email address!");
document.form1.name.focus();
document.form1.password.focus();
return true;
}
else if(password.length<8)
{
alert("You have entered an invalid email address!");
 document.form1.name.focus();
 document.form1.password.focus();
return false;
}
}
