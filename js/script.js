

/* const name=document.getElementById("username")
const email=document.getElementById("email")
const message=document.getElementById("msg")
const errorElement=document.getElementById("error")

FormData.addEventListener("submit",(e)=>{
   

let messages=[]
if (name.value=== "" || name.value===null)

e.preventDefault(){
    messages.push("name is required")
}
}) */

$(document).ready(function(){
/*1st */
$("#design").click(function(){
    $(".designW").toggle();  
});

$("#design").click(function(){
    $(".design_icon").toggle();  
});

/* 2nd */
$("#dev").click(function(){
    $(".devW").toggle();
});

$("#dev").click(function(){
    $(".dev_icon").toggle();
});

/* 3rd */
$("#product").click(function(){
    $(".productW").toggle();
});

$("#product").click(function(){
    $(".product_icon").toggle();
});
/*$(".column").hover(function(){
    $(this).css( "opacity", "0");
    }, function(){
    $(this).css("transform", function(){
        $(this).css("transition",".5s ease")
    });
  });*/

 /* $( ".row" ).hover(
    function() {
      $( this ).addtext( "hover" );
    }, function() {
      $( this ).removecolumn( "hover" );
    }
  ); */

  $(".container").hover(
    function() {
        
        $(this).find("img").css("opacity", "0.3")
        $(this).find(".text").css("opacity", "1")
    }
  );
  /*.container:hover .image {
  opacity: 0.3;
}
   $( this ).addClass( "hover" );
    }, function() {
      $( this ).removeClass( "hover" );
.container:hover .middle {
  opacity: 1;
} */


});

/* .middle {
    transition: .5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
  }

  .text {
    background-color: #4CAF50;
    color: white;
    font-size: 16px;
    padding: 16px 32px;
  }
  */



const form=document.getElementById("form");



form.addEventListener("submit", (e)=>{
    e.preventDefault();
    let nm = $("#username").val();
    alert(nm+ "!" + "we have received your message. Thank you fro reaching out to us. ");
})






