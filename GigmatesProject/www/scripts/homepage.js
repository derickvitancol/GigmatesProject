$(document).ready(function () {

    $('#loginbtn').click(function ()
    {
        Type = "GET";
        Url = "http://localhost:51320/Service1.svc/derick";
        ContentType = "application/json; charset=utf-8";
        DataType = "json"; varProcessData = true;
        
        $.ajax({
            type: Type, //GET or POST or PUT or DELETE verb
            url: Url, // Location of the service,
            data: JSON.stringify({username:"derwil",password:"123456"}),
            contentType: "application/json;charset-uf8",
            DataType: DataType,
            success: function (data) {//On Successfull service call
                $("#loginbtn").text(data.derickResult + "124");
                alert(data.logPerson.Username + " " + data.logPerson.Password)
            }
            });
    });
});
