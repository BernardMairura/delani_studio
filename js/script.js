

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
});
