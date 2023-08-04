$(document).ready(function() {
    console.log("page ready");
    $("#form").submit(function(event){
        event.preventDefault();
        ajaxPost();

    });

    function ajaxPost(){

        var formData = {
            email : $("#email").val(),
            password: $("#password").val(),
        }

        $.ajax({
            type: "POST",
            contentType: "application/json",
            url : window.location +"api/login",
            data: JSON.stringify(formData),
            dataType : 'json',
            success :function(user1){
                console.log(user1);
                if (user1.valid == false){
                    $("#return").html("<p> "+
                    "User credentials do not match <br>"+
                    "Email:" + user1.email+ 
                    "<br>" +"valid:"+ user1.valid+ "</p>");
                }else{
                    $("#return").html("<p> " + "success <br>"
                    + "Email:" + user1.email+ "<br>"
                    +"valid:"+ user1.valid+ "</p>");
                }
            },
            error : function(e){
                alert("error")
                console.log("ERROR: ", e);
            }
        });
            resetData();
    }
        function resetData(){
            $("#email").val("");
            $("#password").val("");
        }


});
