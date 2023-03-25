//...gdy dokument się już załatuje w całości:
$(document).ready(function(){   
   //poczatek dokumentu   
   var scroll_start = 0;
   //pobranie elementu od ktorego zaczynamy zmianę
   var startchange = $('#modul_1');
   var navHeight = $("#navbar").height();
   var offset = startchange.offset();
   //funkcja zmiany
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top - navHeight) {
         $('#navbar').css('background-color', 'white');
         $('.hover-overline-animation').css('color', '#B7895B');
         $('.hover-overline-animation:after').css('background-color', '#B7895B');
         $(".logo").attr("src","imgs/logo_cresta_color.svg");
      } 
      else {
         $('#navbar').css('background-color', 'transparent');
         $('.hover-overline-animation').css('color', '#474747');
         $('.hover-overline-animation:after').css('background-color', '#B7895B');
         $(".logo").attr("src","imgs/logo_cresta_black.svg");
      }
   });

   var grafH = $(".infoText").outerHeight(true);
   $('.graf4').css('height', grafH);
   
   var grafH2 = $(".infoText2").outerHeight(true);
   $('.graf2').css('height', grafH2);

   var grafika_2 = $(".grafika_2").height()
   $('.wstawka').css('margin-top', grafika_2/2);

});

var firstval = 0;
var runSlider;

function Carousel() {
clearTimeout(runSlider);
    firstval += 2;
    parent = document.getElementById('container-carousel');
    parent.style.left = "-" + firstval + "px";
    if (!(firstval % 1)) {
        //setTimeout(Carousel, 3000);
        firstval = 0;
        var firstChild = parent.firstElementChild;
        parent.appendChild(firstChild);
        parent.style.left= 0;
        return;
    }
   //  runCarousel = setTimeout(Carousel, 10);
}

//Carousel();

function leftClick(){
firstval += 2;
    parent = document.getElementById('container-carousel');
    parent.style.left = "-" + firstval + "px";
    
    if (!(firstval % 1)) {
        
        firstval = 0;
        var firstChild = parent.firstElementChild;
        parent.appendChild(firstChild);
        parent.style.left= 0;
        return;
    }
    //runSlider = setTimeout(leftClick, 10);
}

function rightClick(){
firstval += 2;
    parent = document.getElementById('container-carousel');
    parent.style.left =  firstval + "px";
    
    if (!(firstval % 1)) {
        
        firstval = 0;
        var firstChild = parent.firstElementChild;
        parent.appendChild(firstChild);
        parent.style.left= 0;
        return;
    }
    //runSlider = setTimeout(rightClick, 10);
}

