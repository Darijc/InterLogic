window.$ = jQuery;
window.jQuery = jQuery;

//Реалізаія лічильника 
const buttonNumber = document.querySelector('#buttonCountNumber').value;
let buttonCountPlus = document.getElementById("buttonCountPlus");
let buttonCountMinus = document.getElementById("buttonCountMinus");
let count = document.getElementById("buttonCountNumber");
let number = document.getElementById('buttonCountNumber').value;

$(buttonCountPlus).on('click', function() {
  if (number <= 14) {
   number++;
   count.innerHTML = number;
   document.getElementById('buttonCountNumber').value = number;
   console.log('додали');
   console.log(number);
  } else {
    alert ('Завеликий букет !');
  };
});

$(buttonCountMinus).on('click', function() {
  if (number >= 2) {
    number--;
    count.innerHTML = number;
    document.getElementById('buttonCountNumber').value = number;
    console.log('відняли');
    console.log(number);
  } else {
    alert ('В букеті не буде квітів !');
  };
});

// к блоку slider-container підключаємо наступний код (initializator): 
$(document).ready(function () {
  const flowersSlider = new Swiper('.flower-slider', {
    // Параметри слайдера
    loop: true,
    slidesPerView: 6,
  
    // Підключаем стрілки
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // настройки адаптивної верстки 
    breakpoints: {
      320: {
        slidesPerView: 2,
      },
      480: {
        slidesPerView: 3,
      },
      576: {
        slidesPerView: 4,
      },
      //when windows width is >= 992 (lowel then)
      992: {
        slidesPerView: 6,
      }
    } 
  
  });
  
  const reviewsSlider = new Swiper('.reviews-slider', {
    // Параметри слайдера
    loop: true,
    slidesPerView: 1,
  
    // Підключаем стрілки
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });
  //Відгук - 1
  $("#review-1").on('click', function() {

    $.fancybox.open([
      {
        src  : 'img/reviews/review-1.jpg',
        opts : {
          caption : 'First caption',
          thumb   : 'img/reviews/review-1.jpg'
        }
      },
      {
        src  : 'img/reviews/review-2.jpg',
        opts : {
          caption : 'Second caption',
          thumb   : 'img/reviews/review-2.jpg'
        }
      }
    ], {
      loop : true,
      thumbs : {
        autoStart : true
      }
    });
  
  });
  //Відгук - 2
  $("#review-2").on('click', function() {

    $.fancybox.open([
      {
        src  : 'img/reviews/review-3.jpg',
        opts : {
          caption : 'First caption',
          thumb   : 'img/reviews/review-3.jpg'
        }
      }
    ], {
      loop : true,
      thumbs : {
        autoStart : true
      }
    });
  
  });
  //Відгук - 3
  $("#review-3").on('click', function() {

    $.fancybox.open([
      {
        src  : 'img/reviews/review-5.jpg',
        opts : {
          caption : 'First caption',
          thumb   : 'img/reviews/review-5.jpg'
        }
      },
      {
        src  : 'img/reviews/review-4.jpg',
        opts : {
          caption : 'First caption',
          thumb   : 'img/reviews/review-4.jpg'
        }
      },
      {
        src  : 'img/reviews/review-6.jpg',
        opts : {
          caption : 'Second caption',
          thumb   : 'img/reviews/review-6.jpg'
        }
      }
    ], {
      loop : true,
      thumbs : {
        autoStart : true
      }
    });
  
  });
  
});

/*function changeImage() {
    document.getElementById("white-rose").onclick = function(){ 
     // this.style.img = 'img/flowers/flower1.png';
     document.getElementById("card-rose").style.src = 'img/flowers/flower2.png'
    }
}*/

/*$(function(){

  alert('jQuery працює');
  
  });
*/
// Карточка з розами
$(document).ready(function(){
   $("input:radio[name=color-rose]").on('click', function(){
     var value = $(this).val();
     var image_name;
     if(value == 'white-rose'){
       image_name = "img/flowers/flower1-1.png";
      }
      else if(value == 'beige-rose'){
        image_name = "img/flowers/flower1-2.png";
      }
      else if(value == 'pink-rose'){
        image_name = "img/flowers/flower1-3.png";
      }
      else if(value == 'red-rose'){
        image_name = "img/flowers/flower1.png";
      }
        $('#card-rose').attr('src', image_name);
   });
});

// Карточка з ліліями 
$(document).ready(function(){
  $("input:radio[name=color-lil]").on('click', function(){
    var value = $(this).val();
    var image_name;
    if(value == 'white-1-lil'){
      image_name = "img/flowers/flower2-1.png";
     }
     else if(value == 'yellow-lil'){
       image_name = "img/flowers/flower2-2.png";
     }
     else if(value == 'pink-1-lil'){
      image_name = "img/flowers/flower2.png";
    }
     else if(value == 'jam-lil'){
       image_name = "img/flowers/flower2-3.png";
     }
       $('#card-lil').attr('src', image_name);
  });
});
// Карточка з астрами 
$(document).ready(function(){
  $("input:radio[name=color-ast]").on('click', function(){
    var value = $(this).val();
    var image_name;
    if(value == 'white-2'){
      image_name = "img/flowers/flower3.png";
     }
     else if(value == 'beige-1'){
      image_name = "img/flowers/flower3-1.png";
    }
     else if(value == 'blue-1'){
       image_name = "img/flowers/flower3-2.png";
     }
       $('#card-astr').attr('src', image_name);
  });
});
// Карточка з Бузком 
$(document).ready(function(){
  $("input:radio[name=color-busok]").on('click', function(){
    var value = $(this).val();
    var image_name;
    if(value == 'violet'){
      image_name = "img/flowers/flower4.png";
     }
     else if(value == 'blue'){
       image_name = "img/flowers/flower4-1.png";
     }
       $('#card-busok').attr('src', image_name);
  });
});
$(document).ready(function(){
  $("input:radio[name=color-gerb]").on('click', function(){
    var value = $(this).val();
    var image_name;
    if(value == 'white-3'){
      image_name = "img/flowers/flower5-1.png";
     }
     else if(value == 'yellow-1'){
       image_name = "img/flowers/flower5.png";
     }
     else if(value == 'pink-2'){
      image_name = "img/flowers/flower5-3.png";
    }
     else if(value == 'beige-2'){
       image_name = "img/flowers/flower5-2.png";
     }
       $('#card-gerb').attr('src', image_name);
  });
});
// Карточка з Нарцисом 
$(document).ready(function(){
  $("input:radio[name=color-nar]").on('click', function(){
    var value = $(this).val();
    var image_name;
    if(value == 'white-4'){
      image_name = "img/flowers/flower7.png";
     }
     else if(value == 'blue-2'){
       image_name = "img/flowers/flower7-1.png";
     }
       $('#card-nar').attr('src', image_name);
  });
});
// Карточка з Орхідеєю
$(document).ready(function(){
  $("input:radio[name=color-orh]").on('click', function(){
    var value = $(this).val();
    var image_name;
    if(value == 'white-5'){
      image_name = "img/flowers/flower6-1.png";
     }
     else if(value == 'beige-3'){
       image_name = "img/flowers/flower6-3.png";
     }
     else if(value == 'pink-3'){
      image_name = "img/flowers/flower6.png";
    }
    else if(value == 'violet-1'){
      image_name = "img/flowers/flower6-2.png";
    }
       $('#card-orh').attr('src', image_name);
  });
});
$(document).ready(function(){
  $("input:radio[name=color-tul]").on('click', function(){
    var value = $(this).val();
    var image_name;
    if(value == 'beige-4'){
      image_name = "img/flowers/flower8-1.png";
     }
     else if(value == 'violet-2'){
       image_name = "img/flowers/flower8-3.png";
     }
     else if(value == 'yellow-2'){
      image_name = "img/flowers/flower8-2.png";
    }
    else if(value == 'red-2'){
      image_name = "img/flowers/flower8.png";
    }
       $('#card-tul').attr('src', image_name);
  });
});