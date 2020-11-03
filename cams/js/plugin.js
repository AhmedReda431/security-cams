function myTest(){
    var fname         = document.forms["myFormTest"]["fname"];
    var lname         = document.forms["myFormTest"]["lname"];
    var emial         = document.forms["myFormTest"]["emial"];
    var address       = document.forms["myFormTest"]["address"];
    var tele          = document.forms["myFormTest"]["tele"];
    var password      = document.forms["myFormTest"]["password"];
    var fAlert        = document.getElementById("fnameAlert"),
        lAlert        = document.getElementById("lnameAlert"),
        emailAlert    = document.getElementById("emailAlert"),
        teleAlert     = document.getElementById("teleAlert"),
        addressAlert  = document.getElementById("addressAlert"),
        passAlert     = document.getElementById("passAlert");
    
    if(fname.value == " " || fname.value == "  " || fname.value == "   " || fname.value == "    "|| fname.value == "     "|| fname.value == "     ")
    {
        fAlert.style.display="block";
        fAlert.textContent="spaces not acepted in first name";
        fname.focus();
        return false;
    }else{
        fAlert.style.display="none";
    }
    
    if(fname.value.length <= 3)
    {
        fAlert.style.display="block";
        fAlert.textContent= "length must be more than 3 charachters";
        fname.focus();
        return false;
    }else{
        fAlert.style.display="none";
    }
    
    if(lname.value == " " || lname.value == "  " || lname.value == "   " || lname.value == "    "|| lname.value == "     "|| lname.value == "     ")
    {
        lAlert.style.display="block";
        lAlert.textContent="spaces not acepted in last name";
        lname.focus();
        return false;
    }else{
        lAlert.style.display="none";
    }
    
    if(lname.value.length <= 3)
    {
        lAlert.style.display="block";
        lAlert.textContent= "length must be more than 3 charachters";
        lname.focus();
        return false;
    }else{
        lAlert.style.display="none";
    }
        
    if(emial.value.indexOf(".com",0)<0)
    {
        emailAlert.style.display="block";
        emailAlert.textContent= "Enter correct email (emial must contain '.com')";
        emial.focus();
        return false;
    }else{
        emailAlert.style.display="none";
    }
    
    if(address.value == " " || address.value == "  " || address.value == "   " ||address.value == "    " ||address.value == "     ")
    {
        addressAlert.style.display="block";
        addressAlert.textContent= "Enter correct Address (with no spacess)";
        address.focus();
        return false;
    }
    
    if(address.value.length <10)
    {
        addressAlert.style.display="block";
        addressAlert.textContent= "Enter a Correct Address";
        address.focus();
        return false;
    }else{
        addressAlert.style.display="none";
    }
    
    if(tele.value == " " || tele.value == "  " || tele.value == "   " ||tele.value == "    " ||tele.value == "     ")
    {
        teleAlert.style.display="block";
        teleAlert.textContent= "enter phone number without spaces";
        tele.focus();
        return false;
    }
    
    if(tele.value.length <10)
    {
        teleAlert.style.display="block";
        teleAlert.textContent= "Enter the correct ph.no:";
        tele.focus();
        return false;
    }else{
       teleAlert.style.display="none"; 
    }

    return false;
    
}