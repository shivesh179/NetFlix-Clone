// document.getElementsById('navbar').style.background="red";
window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
// if (document.body.scrollTop > 420 || document.documentElement.scrollTop > 420) {
//     alert("tere");
//     $('.navbar').class('background-color','red');
// // document.getElementsByClassName("navbar").style.background = "#2E5894";

// } else {
// //    document.getElementsByClassName("navbar").style.background = "transparent";

// }
// }

// $(document).ready(function(){
//     $(document).scroll(function(){
//         if($(this).scrollTop() > 210)
//         alert("he");
//             $('.navbar').animate({backgroundColor: 'rgba(255,255,255,.9)'}, 1000);
//     });
// });
// $(document).ready(function () {
//     var scroll_pos = 0;
//     $("*").scroll(function () {
//         scroll_pos = $(this).scrollTop();
//         if (scroll_pos > 210) {
//             $("#navbar").css('background-color', '#1A1A1A');
//         } else {
//             $("#navbar").css('background-color', 'red');
//         }
//         console.log(scroll_pos);
//     });
// });

// function myFunction() {
//     if (document.body.scrollTop > 420 || document.documentElement.scrollTop > 420) {
//         //     alert("tere");
//             $('.navbar').class('background-color','red');
//         // document.getElementsByClassName("navbar").style.background = "#2E5894";
        
//         } else {
//         //    document.getElementsByClassName("navbar").style.background = "transparent";
        
//         }
// }
// myFunction();
// $(document).ready((e)=> {
//     $(window).scroll(function() {
//       if (this.scrollY > -20) {
//           alert("hello");
//         // $('.navbar').addClass("sticky");
//       } else {
//         // $('.navbar').removeClass("sticky");
//       }
//     });
// });
function scrollFunction() {
    if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
        // alert("tere");
        // $('.navbar').class('background-color','red');
    document.getElementById("navbar").style.background = "#212529";
    
    } else {
       document.getElementById("navbar").style.background = "transparent";
    
    }
}