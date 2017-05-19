$(document).ready(function(){
  $('.staffSections  img, #NakovImg').mouseenter(function(){
    $(this).prev().css('display','inline-block');
  }).mouseleave(function(){
    $(this).prev().css('display','none');
  });
});

$(document).ready(function(){
  let num = 0;
  $('#buttonTrainings').click(function(){
    function pase() {
      if (num <= 3) {
       num++;
       $('#container')
      .animate({opacity: 0.4})
      .css({background: "url('imgs/thunder.jpg') no-repeat center center fixed",backgroundSize: 'cover'})
      .delay(250)
      .animate({opacity: 0.7});
     }else {
       $('#container').css({background: 'none'}).animate({opacity: 1.0});
       num = 0;
       clearInterval(interval);
     }
    }
    let interval = setInterval(pase, 1000);
  });
});

$(document).ready(function(){
 $('.mainNindjas').click(function(){
  let src = $(this).attr('src');
  $(this).fadeToggle(400, function(){
   switch (src) {
    case 'imgs/htmlNindja2.png':
       $(this).attr('src','imgs/htmlNindjaSwords.png').fadeIn(400).finish();
        break;
    case 'imgs/htmlNindjaSwords.png':
        $(this).attr('src','imgs/htmlNindja2.png').fadeIn(400).finish();
        break;
    case 'imgs/cssNindja.png':
       $(this).attr('src','imgs/cssNindjaWeapon.png').fadeIn(400).finish();
       break;
    case 'imgs/cssNindjaWeapon.png':
       $(this).attr('src','imgs/cssNindja.png').fadeIn(400).finish();
       break;
    case 'imgs/javaScriptNindja.png':
      $(this).attr('src','imgs/javaScriptNindjaWeapon2.png').fadeIn(400).finish();
     break;
    case 'imgs/javaScriptNindjaWeapon2.png':
      $(this).attr('src','imgs/javaScriptNindja.png').fadeIn(400).finish();
      break;
      case 'imgs/phpNindja.png':
        $(this).attr('src','imgs/phpNindjaWeapon.png').fadeIn(400).finish();
       break;
     case 'imgs/phpNindjaWeapon.png':
        $(this).attr('src','imgs/phpNindja.png').fadeIn(400).finish();
        break;
     case 'imgs/judge.png':
          $(this).attr('src','imgs/judgeWeapon.png').fadeIn(400).finish();
         break;
     case 'imgs/judgeWeapon.png':
          $(this).attr('src','imgs/judge.png').fadeIn(400).finish();
          break;
      case 'imgs/work/reptile.png':
           $(this).attr('src','imgs/work/reptileWeapon.png').fadeIn(400).finish();
           break;
      case 'imgs/work/reptileWeapon.png':
           $(this).attr('src','imgs/work/reptile.png').fadeIn(400).finish();
           break;
      case 'imgs/work/ermak.png':
           $(this).attr('src','imgs/work/ermakWeapon.png').fadeIn(400).finish();
           break;
      case 'imgs/work/ermakWeapon.png':
           $(this).attr('src','imgs/work/ermak.png').fadeIn(400).finish();
           break;
   default:
    }
   });
  });
 });

$(document).ready(function(){
    $('#scorpionNinja').click(function () {
        if($('#subZeroNinja').attr('src') == 'imgs/work/zero.png') {
            $('#subZeroNinja').css({opacity: 0}).attr('src', 'imgs/work/zeroBurn.png').animate({opacity: 1});
        }else{
            $('#subZeroNinja').attr('src', 'imgs/work/zero.png');
        }
    });

    $('#subZeroNinja').click(function () {
        if($('#scorpionNinja').attr('src') == 'imgs/work/scorpion.png') {
            $('#scorpionNinja').css({opacity: 0}).attr('src', 'imgs/work/scorpionFrozen2.png').animate({opacity: 1});
        }else{
            $('#scorpionNinja').attr('src', 'imgs/work/scorpion.png');
        }
    });

    /*case 'imgs/work/scorpion.png':
    if($('#subZeroNinja').attr('src') == 'imgs/work/zero.png') {
        $('#subZeroNinja').attr('src', 'imgs/work/zeroBurn.png');
    }else{
        $('#subZeroNinja').attr('src', 'imgs/work/zero.png');
    }
    break;*/
});
