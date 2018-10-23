function numCheck(){
    var numGallons;

    // stores user entered data into numGallons
    numGallons = document.getElementById("GallonsRequested").value;
    numGallons = parseFloat(numGallons).toFixed(2);

    if(isNaN(numGallons)){
        // alert("Please enter required field: Requested Gallons");
        console.log("Please enter required field: Requested Gallons");
    }
    else{
        console.log("Number of requested Gallons is: " + numGallons);     
    }
}

function dateCheck(){
    var userDate;

    userDate = document.getElementById("DeliveryDate").value;

    userDate = (moment(userDate).format("MM/DD/YYYY"));
    
    if(userDate == ""){
        // alert("Please enter required field: Delivery Date");
        console.log("Please enter required field: Delivery Date");
    }
    else{
        console.log("Date entered is: " + userDate);
    }
}

function locationCheck(){
    var location = document.getElementById("deliveryLocation");

    if(location == ""){
        // alert("Please enter required field: Delivery Location");
        console.log("Please enter required field: Delivery Location");
    }
    else{
        console.log("Delivery Location: " + location);
    }
}
function nameCheck(){
    var name = document.getElementById("deliveryName").value;
    if(/^[A-Za-z\s]+$/.test(name) == true){
        console.log("Delivery Name is: " + name);
     }
     else if(name == ""){
        // alert("Please enter required field: Delivery Contact Person Name");
        console.log("Please enter required field: Delivery Contact Person Name");
    }
     else{
        // alert("Invalid name input. No special characters or numbers allowed!");
        console.log("Invalid name input. No special characters or numbers allowed!");
     }
   
}

function emailCheck(){
    var email = document.getElementById("deliveryEmail").value;
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) == true){
        console.log("Delivery Email is: " + email);
    }
    else if(email == ""){
        // alert("Please enter required field: Delivery Contact Person Email");
        console.log("Please enter required field: Delivery Contact Person Email");
    }
    else{
        // alert("You have entered an invalid email address!");
        console.log("You have entered an invalid email address!");
    }
    
}

function phoneCheck(){
    var phone = document.getElementById("deliveryPhone").value;
    if(/^\d{10}$/.test(phone) == true){
        console.log("Delivery Phone is: " + phone);
    }
    else if(phone == ""){
        // alert("Please enter required field: Delivery Contact Person Phone");
        console.log("Please enter required field: Delivery Contact Person Phone");
    }
    else{
        // alert("You have entered an invalid phone number!");
        console.log("You have entered an invalid phone number!");
    }

}



function requestQuote(){
    console.log("Console to validate input: \n");
    numCheck();
    dateCheck();
    nameCheck();
    phoneCheck();
    emailCheck();

}

