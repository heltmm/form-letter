$(document).ready(function(){
  $("#form").submit(function(event) {

    var nameInput = $("input#name").val();

    $(".name").append(nameInput);


    event.preventDefault();

    $("#letter").show();
  });
});
