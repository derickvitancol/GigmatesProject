//FUNCTION TO GET THE USER DATA
function getUserData() {
    var personInfo = JSON.parse(window.localStorage.getItem("userDetails"))
}


//FUNCTION TO GET THE MUSIC GENRE FOR THE SELECT TAG 
function getGenres() {
    var xhr = $.ajax({
        type: "POST",
        url: "http://localhost/GigmatesService/Service1.svc/GetGenreList",
        contentType: "application/json; charset=utf-8",
        dataType: "json"

    }).done(function (data) {
        var genreList = data.GetGenreListResult;
        var genreSelect = document.getElementById("genreSelect");

        var genreList = JSON.parse(data.GetGenreListResult);
        for (var i = 0; i < Object.keys(genreList).length; i++) {
            var opt = document.createElement("option");
            opt.value = genreList[i].ID.toString();
            opt.textContent = genreList[i].Name.toString();
            genreSelect.appendChild(opt);

        }


    }
        ).fail(function (XMLHttpRequest, textStatus, errorThrown) {
            alert(XMLHttpRequest.status + ' ' + textStatus + ' ' + errorThrown.message)
        });
}

//FUNCTION CALLED ON MAINPAGE ONLOAD
function mainloadingFunctions() {
    getUserData();
    getGenres();
}