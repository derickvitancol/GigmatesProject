function load() {
    document.addEventListener("deviceready", onDeviceReady, false);
}
function onDeviceReady() {
   
}

function onPause() {
    // TODO: This application has been suspended. Save application state here.
}

function onResume() {
    // TODO: This application has been reactivated. Restore application state here.
}


document.getElementById("proceedButton").addEventListener("click", RegisterClicked);
function RegisterClicked() {
    //Type = "POST";
    //Url = "http://localhost:51320/Service1.svc/derick";
    //ContentType = "application/json; charset=utf-8";
    //DataType = "json"; varProcessData = true;

    $.ajax({

        type: "POST", //GET or POST or PUT or DELETE verb
        url: "http://localhost:51320/Service1.svc/Register", // Location of the service,
        data: JSON.stringify({
            Firstname: "derick",
            Lastname: "wilzon",
            Username: "derwil",
            Password: "123456",
            Gender: 1,
            Age: 12,
            Type: 1

        }),
        contentType: "application/json;charset-uf8",
        DataType: "json",
        success: function (data)
        {//On Successfull service call
            alert(data + " row affected.")
        }
    });
}

//$(document).ready(function () {
//    $("#proceedButton").click(function ()
//    {

        
//        //var NewPersonInfo = {
//        //    firstname: document.getElementById("FirstnameBox").value,
//        //    lastname: document.getElementById("LastnameBox").value,
//        //    username: document.getElementById("UsernameBox").value,
//        //    password: document.getElementById("PasswordBox").value,
//        //    address: document.getElementById("AddressBox").value,
//        //    gender: document.getElementById("GenderBox").value,
//        //    age: document.getElementById("AgeBox").value,
//        //    usertype: document.getElementById("UserTypebox").value,
//        //}
        
//        Type = "POST";
//        Url = "http://localhost:51320/Service1.svc/derick";
//        ContentType = "application/json; charset=utf-8";
//        DataType = "json"; varProcessData = true;

//        $.ajax({
//            //var NewPersonInfo = {
//            //    Firstname: "derick",
//            //    Lastname: "wilzon",
//            //    Username: "derwil",
//            //    Password: "123456",
//            //    Gender: 1,
//            //    Age: 12,
//            //    Type: 1

//            //} 
//            type: Type, //GET or POST or PUT or DELETE verb
//            url: Url, // Location of the service,
//            data: JSON.stringify({
//                Firstname: "derick",
//                Lastname: "wilzon",
//                Username: "derwil",
//                Password: "123456",
//                Gender: 1,
//                Age: 12,
//                Type: 1

//            } ),
//            contentType: "application/json;charset-uf8",
//            DataType: DataType,
//            success: function (data) {//On Successfull service call
                
//                alert(data+" row affected.")
//            }
//        });
//    });
//});