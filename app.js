
$(function() {

  var loader = 0;

    // $('#menu').hide();
    // $('#vid01').hide();
    // $('#vid02').hide();
    // $('#vid03').hide();

    $('#attractor').click(function() {
        loader = 1;
        $(this).fadeOut(750);
        setTimeout(function() { 
            $('#menu').fadeIn();
        }, 1000);
      });

      $('#info').click(function() {
        $(this).fadeOut(750);
        setTimeout(function() { 
          $('#name').fadeIn();
      }, 1000);
      });



      $('.bm01').click(function() {
        $('.mb01').fadeOut(250).fadeIn(250).fadeOut(250).fadeIn(250).fadeOut(250).fadeIn(250).fadeOut(250).fadeIn(250);
        setTimeout(function() { 
          $('#menu').fadeOut(750);
      }, 1250);
        setTimeout(function() { 
            $('#locating__faults').fadeIn();
        }, 2000);
      });
      $('.bm02').click(function() {
        $('.mb02').fadeOut(250).fadeIn(250).fadeOut(250).fadeIn(250).fadeOut(250).fadeIn(250).fadeOut(250).fadeIn(250);
        setTimeout(function() { 
          $('#menu').fadeOut(750);
      }, 1250);
        setTimeout(function() { 
            $('#diagnosing__faults').fadeIn();
        }, 2000);
      });
      $('.bm03').click(function() {
        $('.mb03').fadeOut(250).fadeIn(250).fadeOut(250).fadeIn(250).fadeOut(250).fadeIn(250).fadeOut(250).fadeIn(250);
        setTimeout(function() { 
          $('#menu').fadeOut(750);
      }, 1250);
        setTimeout(function() { 
            $('#choosing__tools').fadeIn();
            $('.ci__gameply__info').addClass('animate__animated animate__bounce')
        }, 2000);
        setTimeout(function() { 
            $('.ci__gameply__info').addClass('op__on');
        }, 5500);
      });
      $('.bm04').click(function() {
        $('.mb04').fadeOut(250).fadeIn(250).fadeOut(250).fadeIn(250).fadeOut(250).fadeIn(250).fadeOut(250).fadeIn(250);
        $('.btn__confirm__day__container').hide();
        setTimeout(function() { 
          $('#menu').fadeOut(750);
      }, 1250);
        setTimeout(function() { 
            $('#weather').fadeIn();
        }, 2000);
        setTimeout(function() { 
          $('.btn__confirm__day__container').fadeIn(500).addClass('animate__animated animate__slideInUp');
      }, 3000);
      });
      $('.bm05').click(function() {
        $('.mb05').fadeOut(250).fadeIn(250).fadeOut(250).fadeIn(250).fadeOut(250).fadeIn(250).fadeOut(250).fadeIn(250);
        setTimeout(function() { 
          $('#menu').fadeOut(750);
      }, 1250);
        setTimeout(function() { 
            $('#buddyeq__check').fadeIn();
        }, 2000);
      });
      $('.bm06').click(function() {
        $('.mb06').fadeOut(250).fadeIn(250).fadeOut(250).fadeIn(250).fadeOut(250).fadeIn(250).fadeOut(250).fadeIn(250);
        setTimeout(function() { 
          $('#menu').fadeOut(750);
      }, 1250);
        setTimeout(function() { 
            $('#headoffshore').fadeIn();
        }, 2000);
      });

      
      $('.btn__home').click(function() {
        $('section').fadeOut(750);
        setTimeout(function() { 
          $('#menu').fadeIn();
      }, 1000);
      });

      
      //Idle timeout
      $(function() {
        $(document).idleTimer(120000); //1 minute 60000
      
        $(document).on( "idle.idleTimer", function(event, elem, obj){
          //console.log("timed out");
      
          if(loader == 1){
            var ice = function(){
              location.reload();
            };
            setTimeout(ice, 500);
          }
      
        });
      });


  // NAME MENU

  // GSAP draggable
  // Each Dial controls letters & numbers which log out rotation of dial
  // on it's end position. See console logs.
  // Adds selected letter to username box.

  gsap.registerPlugin(Draggable);
  
  let alphabet = ['start', 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  let numbers = ['1','2','3','4','5','6','7','8','9','0']

  var userCharButtonClicks = 0;
  console.log(userCharButtonClicks);

  var chars = "";
  var numbs = "";

  Draggable.create(dial, {
    type:"rotation",
    inertia: true,
    throwProps:true,
    edgeResistance:0.85,
    bounds: {minRotation: 0, maxRotation: 260},
    snap: function(value) {
      return Math.round((value / 10) * 10)
    },
    onDrag: function() {
      $(".btn__select").removeClass("op__on pe__none");
      var dial = document.querySelectorAll(".dial");
      var curRotation = gsap.getProperty("#dial", "rotation");
      // On dial rotation highlight letter 
      // + 7 to account for alphabet [start] array space
      // log 10deg rotation for each letter
      //console.log(curRotation);
      if (curRotation >= 7 && curRotation <= 15) {
        chars = "a";
        $('path.d.alpha.letter-A').addClass('active');
        $('.alpha').not('path.d.alpha.letter-A').removeClass('active');
        //navHighlight();
      } else if (curRotation >= 15 && curRotation <= 25) {
        chars = "b";
        $('path.d.alpha.letter-B').addClass('active');
        $('.alpha').not('path.d.alpha.letter-B').removeClass('active');
      } else if (curRotation >= 25 && curRotation <= 35) {
        chars = "c";
        $('path.d.alpha.letter-C').addClass('active');
        $('.alpha').not('path.d.alpha.letter-C').removeClass('active');
      } else if (curRotation >= 35 && curRotation <= 45) {
        chars = "d";
        $('path.d.alpha.letter-D').addClass('active');
        $('.alpha').not('path.d.alpha.letter-D').removeClass('active');
      } else if (curRotation >= 45 && curRotation <= 55) {
        chars = "e";
        $('path.d.alpha.letter-E').addClass('active');
        $('.alpha').not('path.d.alpha.letter-E').removeClass('active');
      } else if (curRotation >= 55 && curRotation <= 65) {
        chars = "f";
        $('path.d.alpha.letter-F').addClass('active');
        $('.alpha').not('path.d.alpha.letter-F').removeClass('active');
      } else if (curRotation >= 65 && curRotation <= 75) {
        chars = "g";
        $('path.d.alpha.letter-G').addClass('active');
        $('.alpha').not('path.d.alpha.letter-G').removeClass('active');
      } else if (curRotation >= 75 && curRotation <= 85) {
        chars = "h";
        $('path.d.alpha.letter-H').addClass('active');
        $('.alpha').not('path.d.alpha.letter-H').removeClass('active');
      } else if (curRotation >= 85 && curRotation <= 95) {
        chars = "i";
        $('path.d.alpha.letter-I').addClass('active');
        $('.alpha').not('path.d.alpha.letter-I').removeClass('active');
      } else if (curRotation >= 95 && curRotation <= 105) {
        chars = "j";
        $('path.d.alpha.letter-J').addClass('active');
        $('.alpha').not('path.d.alpha.letter-J').removeClass('active');
      } else if (curRotation >= 105 && curRotation <= 115) {
        chars = "k";
        $('path.d.alpha.letter-K').addClass('active');
        $('.alpha').not('path.d.alpha.letter-K').removeClass('active');
      } else if (curRotation >= 115 && curRotation <= 125) {
        chars = "l";
        $('path.d.alpha.letter-L').addClass('active');
        $('.alpha').not('path.d.alpha.letter-L').removeClass('active');
      } else if (curRotation >= 125 && curRotation <= 135) {
        chars = "m";
        $('path.d.alpha.letter-M').addClass('active');
        $('.alpha').not('path.d.alpha.letter-M').removeClass('active');
      } else if (curRotation >= 135 && curRotation <= 145) {
        chars = "n";
        $('path.d.alpha.letter-N').addClass('active');
        $('.alpha').not('path.d.alpha.letter-N').removeClass('active');
      } else if (curRotation >= 145 && curRotation <= 155) {
        chars = "o";
        $('path.d.alpha.letter-O').addClass('active');
        $('.alpha').not('path.d.alpha.letter-O').removeClass('active');
      } else if (curRotation >= 155 && curRotation <= 165) {
        chars = "p";
        $('path.d.alpha.letter-P').addClass('active');
        $('.alpha').not('path.d.alpha.letter-P').removeClass('active');
      } else if (curRotation >= 165 && curRotation <= 175) {
        chars = "q";
        $('path.d.alpha.letter-Q').addClass('active');
        $('.alpha').not('path.d.alpha.letter-Q').removeClass('active');
      } else if (curRotation >= 175 && curRotation <= 185) {
        chars = "r";
        $('path.d.alpha.letter-R').addClass('active');
        $('.alpha').not('path.d.alpha.letter-R').removeClass('active');
      } else if (curRotation >= 185 && curRotation <= 195) {
        chars = "s";
        $('path.d.alpha.letter-S').addClass('active');
        $('.alpha').not('path.d.alpha.letter-S').removeClass('active');
      } else if (curRotation >= 195 && curRotation <= 205) {
        chars = "t";
        $('path.d.alpha.letter-T').addClass('active');
        $('.alpha').not('path.d.alpha.letter-T').removeClass('active');
      } else if (curRotation >= 205 && curRotation <= 215) {
        chars = "u";
        $('path.d.alpha.letter-U').addClass('active');
        $('.alpha').not('path.d.alpha.letter-U').removeClass('active');
      } else if (curRotation >= 215 && curRotation <= 225) {
        chars = "v";
        $('path.d.alpha.letter-V').addClass('active');
        $('.alpha').not('path.d.alpha.letter-V').removeClass('active');
      } else if (curRotation >= 225 && curRotation <= 235) {
        chars = "w";
        $('path.d.alpha.letter-W').addClass('active');
        $('.alpha').not('path.d.alpha.letter-W').removeClass('active');
      } else if (curRotation >= 235 && curRotation <= 245) {
        chars = "x";
        $('path.d.alpha.letter-X').addClass('active');
        $('.alpha').not('path.d.alpha.letter-X').removeClass('active');
      } else if (curRotation >= 245 && curRotation <= 255) {
        chars = "y";
        $('path.d.alpha.letter-Y').addClass('active');
        $('.alpha').not('path.d.alpha.letter-Y').removeClass('active');
      } else if (curRotation >= 255 && curRotation <= 265) {
        chars = "z";
        $('path.d.alpha.letter-Z').addClass('active');
        $('.alpha').not('path.d.alpha.letter-Z').removeClass('active');
      }

    },
    onDragEnd: function() {
      let end = Math.round(this.endRotation/10)
      console.log(alphabet[end], end);


      function navHighlight() {
        $('.active').next().css( "fill", "red" ).addClass('sub__active');
        $('.active').prev().css( "fill", "red" ).addClass('sub__active');
  
        $('.sub__active').prev().addClass('l__highlight');
        $('.sub__active').next().addClass('l__highlight');
      }

      // // var letters = document.querySelectorAll('.alpha');
      // // Array.from(letters).forEach(letters => {
      // //     e.target.classList.toggle('active');
      // // });

      // function addActiveClassToAlpha() {
      //   if(event.target.classList.contains('.alpha')) {
      //     event.target.classList.toggle('active');
      // }

      



    }
  
  });

  Draggable.create(dial2, {
    type:"rotation",
    inertia: true,
    throwProps:true,
    edgeResistance:0.85,
    bounds: {minRotation: 0, maxRotation: 100},
    snap: function(value) {
      return Math.round((value / 10) * 10)
    },
    onDrag: function() {
      var dial2 = document.querySelectorAll(".dial2");
      var curRotation2 = gsap.getProperty("#dial2", "rotation");
      //console.log(curRotation2);
      // log 10deg rotation for each number
      if (curRotation2 >= 0 && curRotation2 <= 10) {
        numbs = "1";
        $('path.d.number.number__01').addClass('active');
        $('.number').not('path.d.number.number__01').removeClass('active');
        //navHighlight();
      } else if (curRotation2 >= 10 && curRotation2 <= 20) {
        numbs = "2";
        $('path.d.number.number__02').addClass('active');
        $('.number').not('path.d.number.number__02').removeClass('active');
      } else if (curRotation2 >= 20 && curRotation2 <= 30) {
        numbs = "3";
        $('path.d.number.number__03').addClass('active');
        $('.number').not('path.d.number.number__03').removeClass('active');
      } else if (curRotation2 >= 30 && curRotation2 <= 40) {
        numbs = "4";
        $('path.d.number.number__04').addClass('active');
        $('.number').not('path.d.number.number__04').removeClass('active');
      } else if (curRotation2 >= 40 && curRotation2 <= 50) {
        numbs = "5";
        $('path.d.number.number__05').addClass('active');
        $('.number').not('path.d.number.number__05').removeClass('active');
      } else if (curRotation2 >= 50 && curRotation2 <= 60) {
        numbs = "6";
        $('path.d.number.number__06').addClass('active');
        $('.number').not('path.d.number.number__06').removeClass('active');
      } else if (curRotation2 >= 60 && curRotation2 <= 70) {
        numbs = "7";
        $('path.d.number.number__07').addClass('active');
        $('.number').not('path.d.number.number__07').removeClass('active');
      } else if (curRotation2 >= 70 && curRotation2 <= 80) {
        numbs = "8";
        $('path.d.number.number__08').addClass('active');
        $('.number').not('path.d.number.number__08').removeClass('active');
      } else if (curRotation2 >= 80 && curRotation2 <= 90) {
        numbs = "9";
        $('path.d.number.number__09').addClass('active');
        $('.number').not('path.d.number.number__09').removeClass('active');
      } else if (curRotation2 >= 90 && curRotation2 <= 100) {
        numbs = "0";
        $('path.d.number.number__00').addClass('active');
        $('.number').not('path.d.number.number__00').removeClass('active');
      }
    },
    onDragEnd: function() {
      let end = Math.round(this.endRotation/10)
      console.log(numbers[end], end);
    }
  });

  //AL FIX
  $('.btn__select').click(function() {
    userCharButtonClicks++;
    nameProgress();
  });

  $('.btn__name__back').click(function() {
    $('.btn__begin').addClass('btn__begin__not__active');
    console.log(userCharButtonClicks);
    if (userCharButtonClicks === 1) {
      userCharButtonClicks = 0;
      $('.ucs__01').html("&nbsp;")
      // $(this).addClass('pe__none');
    } 
    if (userCharButtonClicks === 2) {
      userCharButtonClicks--;
      $('.ucs__02').html("&nbsp;")
    }
    if (userCharButtonClicks === 3) {
      userCharButtonClicks--;
      $('.ucs__03').html("&nbsp;")
      $('.number__container').fadeOut();
      $('.dial2').fadeOut();
      $('.letter__container').fadeIn();
      $('.dial').fadeIn();
    } 
    if (userCharButtonClicks === 4) {
      userCharButtonClicks--;
      $('.ucs__04').html("&nbsp;")
    } 
    if (userCharButtonClicks === 5) {
      userCharButtonClicks--;
      $('.btn__select').removeClass('pe__none');
      $('.ucs__05').html("&nbsp;")
    }
    //nameProgress();
  });

  function nameProgress() {
    console.log(userCharButtonClicks);
    if (userCharButtonClicks === 1) {
      $('.ucs__01').html(chars)
    } 
    if (userCharButtonClicks === 2) {
      $('.ucs__02').html(chars)
    }
    if (userCharButtonClicks === 3) {
      $('.ucs__03').html(chars)
      $('.letter__container').fadeOut();
      $('.dial').fadeOut();
      $('.number__container').fadeIn();
      $('.dial2').fadeIn();
    } 
    if (userCharButtonClicks === 4) {
      $('.ucs__04').html(numbs)
    } 
    if (userCharButtonClicks === 5) {
      $('.ucs__05').html(numbs)
      $('.btn__select').addClass('pe__none');
      $('.btn__begin').removeClass('btn__begin__not__active');
    }
  }

  $('.btn__begin').click(function() {  
    $('#name').fadeOut(750);
    setTimeout(function() { 
        $('#menu').fadeIn();
    }, 1000);
  });

  //
  // LOCATING FAULTS
  // 

  var correctTurbineCounter = 0;

  $('.map').draggable({
      containment: [-700, -822, 0, 0], scroll: false,
      //containment: [-1500, -1622, 0, 0], scroll: false,
      drag: function(event, ui) {
          var position = ui.position;
      }
  });
  $('.turbine__bb1').click(function() {  
    $('.bb1').fadeIn(750);
  });
  $('.turbine__bb2').click(function() {  
    $('.bb2').fadeIn(750);
  });
  $('.turbine__bb3').click(function() {  
    $('.bb3').fadeIn(750);
  });
  $('.turbine__bb4').click(function() {  
    $('.bb4').fadeIn(750);
  });
  $('.turbine__bb5').click(function() {  
    $('.bb5').fadeIn(750);
  });
  $('.turbine__bb6').click(function() {  
    $('.bb6').fadeIn(750);
  });
  $('.turbine__bb7').click(function() {  
    $('.bb7').fadeIn(750);
  });
  $('.turbine__bb8').click(function() {  
    $('.bb8').fadeIn(750);
  });
  $('.turbine__bb9').click(function() {  
    $('.bb9').fadeIn(750);
  });
  $('.turbine__bb10').click(function() {  
    $('.bb10').fadeIn(750);
  });
  $('.turbine__bb11').click(function() {  
    $('.bb11').fadeIn(750);
  });
  $('.turbine__bb12').click(function() {  
    $('.bb12').fadeIn(750);
  });
  $('.turbine__bb13').click(function() {  
    $('.bb13').fadeIn(750);
  });
  $('.turbine__bb14').click(function() {  
    $('.bb14').fadeIn(750);
  });
  $('.turbine__bb15').click(function() {  
    $('.bb15').fadeIn(750);
  });
  $('.turbine__bb16').click(function() {  
    $('.bb16').fadeIn(750);
  });
  $('.tc__bb1').click(function() {  
    $('.bb1').fadeOut(750);
  });
  $('.tc__bb2').click(function() {  
    $('.bb2').fadeOut(750);
  });
  $('.tc__bb3').click(function() {  
    $('.bb3').fadeOut(750);
  });
  $('.tc__bb4').click(function() {  
    $('.bb4').fadeOut(750);
  });
  $('.tc__bb5').click(function() {  
    $('.bb5').fadeOut(750);
  });
  $('.tc__bb5r').click(function() {  
    $('.bb5__repaired').fadeOut(750);
  });
  $('.tc__bb6').click(function() {  
    $('.bb6').fadeOut(750);
  });
  $('.tc__bb7').click(function() {  
    $('.bb7').fadeOut(750);
  });
  $('.tc__bb8').click(function() {  
    $('.bb8').fadeOut(750);
  });
  $('.tc__bb9').click(function() {  
    $('.bb9').fadeOut(750);
  });
  $('.tc__bb10').click(function() {  
    $('.bb10').fadeOut(750);
  });
  $('.tc__bb10').click(function() {  
    $('.bb10__reboot').fadeOut(750);
  });
  $('.tc__bb11').click(function() {  
    $('.bb11').fadeOut(750);
  });
  $('.tc__bb12').click(function() {  
    $('.bb12').fadeOut(750);
  });
  $('.tc__bb12r').click(function() {  
    $('.bb12__repaired').fadeOut(750);
  });
  $('.tc__bb13').click(function() {  
    $('.bb13').fadeOut(750);
  });
  $('.tc__bb14').click(function() {  
    $('.bb14').fadeOut(750);
  });
  $('.tc__bb15').click(function() {  
    $('.bb15').fadeOut(750);
  });
  $('.tc__bb16').click(function() {  
    $('.bb16').fadeOut(750);
  });


  $('.tbr__bb5').click(function() { 
    $('.bb5').fadeOut();
    $('.bb5__repaired').fadeIn(500); 
    $(this).addClass('pe__none');
    correctTurbineCounter++;
    console.log('Youve correctly guessed: ' + correctTurbineCounter + ' turbines');
    $('.bb5').fadeOut(750);
    $('.update__faulty__turbs__number').html(correctTurbineCounter);
    loop();
    setInterval(loop,2500);
     function loop(){
        $('.turblight__bb5').fadeOut(250).fadeIn(250).fadeOut(250).fadeIn(250).fadeOut(250).fadeIn(250).fadeOut(250).fadeIn(250);
    }
    if (correctTurbineCounter === 2) {
      $('#locating__faults').addClass('pe__none');
      $('.mb01').removeClass('btn__play').addClass('complete')
      $('.bm01').css('background', 'rgba(25, 25, 45, 0.8)').addClass('pe__none')
      $('.faulty__turbs__number').fadeOut(250).fadeIn(250).fadeOut(250).fadeIn(250).fadeOut(250).fadeIn(250).fadeOut(250).fadeIn(250);
      $('.mb02').removeClass('btn__lock').addClass('btn__play');
      $('.bm02').removeClass('pe__none');
        setTimeout(function() { 
          $('.lf__modal__overlay').fadeIn();
      }, 3000); 
      setTimeout(function() { 
        console.clear();
        $('#locating__faults').fadeOut();
        setTimeout(function() { 
          $('#menu').fadeIn();
        }, 2000); 
    }, 6000); 
    }
  });
  $('.tbr__bb12').click(function() {  
    $('.bb12').fadeOut();
    $('.bb12__repaired').fadeIn(500);
    $(this).addClass('pe__none');
    correctTurbineCounter++;
    console.log('Youve correctly guessed: ' + correctTurbineCounter + ' turbines');
    $('.bb12').fadeOut(750);
    $('.update__faulty__turbs__number').html(correctTurbineCounter);
    loop();
    setInterval(loop,2500);
     function loop(){
        $('.turblight__bb12').fadeOut(250).fadeIn(250).fadeOut(250).fadeIn(250).fadeOut(250).fadeIn(250).fadeOut(250).fadeIn(250);
    }
    if (correctTurbineCounter === 2) {
      $('#locating__faults').addClass('pe__none');
      $('.mb01').removeClass('btn__lock').addClass('complete')
      $('.bm01').css('background', 'rgba(25, 25, 45, 0.8)').addClass('pe__none')
      $('.faulty__turbs__number').fadeOut(250).fadeIn(250).fadeOut(250).fadeIn(250).fadeOut(250).fadeIn(250).fadeOut(250).fadeIn(250);
      $('.mb02').removeClass('btn__lock').addClass('btn__play');
      $('.bm02').removeClass('pe__none');
        setTimeout(function() { 
          $('.lf__modal__overlay').fadeIn();
      }, 3000); 
      setTimeout(function() { 
        console.clear();
        $('#locating__faults').fadeOut();
        setTimeout(function() { 
          $('#menu').fadeIn();
        }, 2000); 
    }, 6000); 
    }
  });

  $('.tbr__bb10').click(function() { 
    $('.bb10 ').fadeOut();
    $('.bb10__reboot').fadeIn(500);
    setTimeout(function() { 
      $('.turblight__bb10').addClass('green__fill').fadeOut(250).fadeIn(250).fadeOut(250).fadeIn(250).fadeOut(250).fadeIn(250).fadeOut(250).fadeIn(250);
    }, 1000); 
    // loop();
    // setInterval(loop,2500);
    //  function loop(){
    //     $('.turblight__bb10').fadeOut(250).fadeIn(250).fadeOut(250).fadeIn(250).fadeOut(250).fadeIn(250).fadeOut(250).fadeIn(250);
    // }
  });






  //
  // CHOOSING TOOLS
  //

    // Assign Tool to var
    var saw = $('.saw');
    var tape = $('.tape');
    var brush = $('.brush');
    var ratchet = $('.ratchet');
    var ak = $('.allen__key');
    var oil = $('.oil');
    var flask = $('.flask');
    var hammer = $('.hammer');
    var spanner = $('.spanner');
    var screw = $('.screw');

    var correctToolNumber = 6;


      var dropArea = $(".drop__zone");
      var overlapThreshold = "0%";
      var droppables = $('.drag');


      // $(".drag").mouseenter(function(){
      //   $('.drop__zone').addClass('dz__border__bottom')
      // }).mouseleave(function(){
      //   $('.drop__zone').removeClass('dz__border__bottom')
      // });

      function onDrop(dropped) {
        gsap.fromTo(dropped, {opacity:1}, {duration: 0.1, opacity:1, yoyo:true});
      }

      Draggable.zIndex = 1000;
      
      Draggable.create(".drag", {
        edgeResistance:0.80,
        bounds: "#choosing__tools",
        zIndex: 9099,
        onDrag: function(e) {
          $(this.target).addClass("drag__active");
          if ($(".hammer").hasClass("drag__active")) {
            $('.hammer').addClass("shadow__hammer");
          }
          if ($(".ratchet").hasClass("drag__active")) {
            $('.ratchet').addClass("shadow__ratchet");
          }
          if ($(".saw").hasClass("drag__active")) {
            $(".saw").addClass("shadow__saw");
          }
          if ($(".tape").hasClass("drag__active")) {
            $(".tape").addClass("shadow__tape");
          }
          if ($(".brush").hasClass("drag__active")) {
            $(".brush").addClass("shadow__brush");
          }
          if ($(".allen__key").hasClass("drag__active")) {
            $(".allen__key").addClass("shadow__ak");
          }
          if ($(".oil").hasClass("drag__active")) {
            $(".oil").addClass('shadow__oil');
          }
          if ($(".flask").hasClass("drag__active")) {
            $(".flask").addClass('shadow__flask');
          }
          if ($(".spanner").hasClass("drag__active")) {
            $(".spanner").addClass('shadow__spanner');
          }
          if ($(".screw").hasClass("drag__active")) {
            $(".screw").addClass('shadow__screw');
          }
        },
        onDragEnd: function(e) {
        $(this.target).removeClass("drag__active"); 

        if (hammer) {
          $('.hammer').removeClass("shadow__hammer");
        }
        if (ratchet) {
          $('.ratchet').removeClass("shadow__ratchet");
        }
        if (saw) {
          $('.saw').removeClass("shadow__saw");
        }
        if (tape) {
          $('.tape').removeClass("shadow__tape");
        }
        if (brush) {
          $('.brush').removeClass("shadow__brush");
        }
        if (ak) {
          $('.allen__key').removeClass("shadow__ak");
        }
        if (flask) {
          $('.oil').removeClass("shadow__oil");
        }
        if (spanner) {
          $('.spanner').removeClass("shadow__spanner");
        }
        if (screw) {
          $('.screw').removeClass("shadow__screw");
        }

        //$('.shadow').hide();

        onDrop(this.target);
        if (this.hitTest(dropArea, overlapThreshold)) {
          $('.ci__gameply__info').hide();
          if (this.hitTest(hammer)) {
            var overlapThreshold = "50%";
            //$(this.target).fadeIn();
            $('.dz__bg').addClass('red__flash');
            setTimeout(function() { 
              $('.dz__bg').removeClass('red__flash');
            }, 250);
            setTimeout(function() { 
              $('.dz__bg').addClass('red__flash');
            }, 500);
            setTimeout(function() { 
              $('.dz__bg').removeClass('red__flash');
            }, 750);
            $(this.target).fadeIn();
            console.log("hammer!")
            gsap.to(this.target, {
              x: 0,
              y: 0
            });
         
              $('.tool__info').addClass('card__hammer');
              $('.tool__info').removeClass('card__allen__key card__brush card__oil card__ratchet card__saw card__screw card__flask card__spanner card__tape');
              $('.drag').not($(this)).removeClass('drag__active');
              $('.tool__info').css('background', 'url(assets/06_choosing_tools/cards/1x/hammer.png)');  
            console.log(correctToolNumber);
            gsap.to(this.target, {
              x: 0,
              y: 0
            });
          }
        }
        if (this.hitTest(dropArea, overlapThreshold)) {
          if(this.hitTest) {
            $(this.target).fadeIn();
            console.log(correctToolNumber);
            console.log("your correct tool number is: " + correctToolNumber);
            // gsap.to(this.target, {
            //   x: 0,
            //   y: 0
            // });

          // correct answers

          if(this.hitTest(ratchet)) {
            console.log('ratchet');
            $(this.target).fadeOut();
            //$('.drop__zone').addClass('dz__border__bottom');
            correctToolNumber--;
            console.log("your correct tool number is: " + correctToolNumber);
            $('.tool__number').text(correctToolNumber);
            $('.tool__info').addClass('card__ratchet');
            $('.drag').not($(this)).removeClass('drag__active');
            $('.tool__info').removeClass('card__screw');
            $('.tool__info').removeClass('card__allen__key card__hammer card__oil card__brush card__saw card__screw card__flask card__spanner card__tape');
            // $('.tool__info').css('background', 'url(assets/06_choosing_tools/cards/1x/ratchet.png)'); 
            
          }

          if(this.hitTest(ak)) {
            $(this.target).fadeOut();
            correctToolNumber--;
            console.log("your correct tool number is: " + correctToolNumber);
            $('.tool__number').text(correctToolNumber);
            $('.tool__info').addClass('card__allen__key');
            $('.drag').not($(this)).removeClass('drag__active');
            // $('.tool__info').css('background', 'url(assets/06_choosing_tools/cards/1x/allen-key.png)');  
            $('.tool__info').removeClass('card__brush card__hammer card__oil card__ratchet card__saw card__screw card__flask card__spanner card__tape');
          }
            if(this.hitTest(oil)) {
              $(this.target).fadeOut();
              correctToolNumber--;
              console.log("your correct tool number is: " + correctToolNumber);
              $('.tool__number').text(correctToolNumber);
              $('.tool__info').addClass('card__oil');
              $('.tool__info').removeClass('card__allen__key card__hammer card__brush card__ratchet card__saw card__screw card__flask card__spanner card__tape');
              $('.drag').not($(this)).removeClass('drag__active');
              // $('.tool__info').css('background', 'url(assets/06_choosing_tools/cards/1x/oil.png)'); 
            }
            if(this.hitTest(flask)) {
              $(this.target).fadeOut();
              correctToolNumber--;
              console.log("your correct tool number is: " + correctToolNumber);
              $('.tool__number').text(correctToolNumber);
              $('.tool__info').addClass('card__flask');
              $('.drag').not($(this)).removeClass('drag__active');
              $('.tool__info').removeClass('card__allen__key card__hammer card__oil card__ratchet card__saw card__brush card__screw card__spanner card__tape');
              // $('.tool__info').css('background', 'url(assets/06_choosing_tools/cards/1x/soup.png)'); 
            }
            if(this.hitTest(spanner)) {
              $(this.target).fadeOut();
              correctToolNumber--;
              console.log("your correct tool number is: " + correctToolNumber);
              $('.tool__number').text(correctToolNumber);
              $('.tool__info').addClass('card__spanner');
              $('.drag').not($(this)).removeClass('drag__active');
              $('.tool__info').removeClass('card__allen__key card__hammer card__oil card__ratchet card__saw card__brush card__flask card__tape card__screw');
              // $('.tool__info').css('background', 'url(assets/06_choosing_tools/cards/1x/spanner.png)'); 
            }
            if(this.hitTest(screw)) {
              $(this.target).fadeOut();
              correctToolNumber--;
              console.log("your correct tool number is: " + correctToolNumber);
              $('.tool__number').text(correctToolNumber);
              $('.tool__info').addClass('card__screw');
              $('.drag').not($(this)).removeClass('drag__active');
              $('.tool__info').removeClass('card__allen__key card__hammer card__oil card__ratchet card__saw card__brush card__flask card__spanner card__tape');
              // $('.tool__info').css('background', 'url(assets/06_choosing_tools/cards/1x/screwdrivers.png)');
            }

            // Wrong answers
            if(this.hitTest(brush)) {
              $(this.target).fadeIn();
              console.log("brush!")
              gsap.to(this.target, {
                x: 0,
                y: 0
              });
              
              $('.dz__bg').addClass('red__flash');
              setTimeout(function() { 
                $('.dz__bg').removeClass('red__flash');
              }, 250);
              setTimeout(function() { 
                $('.dz__bg').addClass('red__flash');
              }, 500);
              setTimeout(function() { 
                $('.dz__bg').removeClass('red__flash');
              }, 750);
              $('.tool__info').addClass('card__brush');
              $('.tool__info').addClass('card__brush');
              $('.tool__info').removeClass('card__allen__key card__hammer card__oil card__ratchet card__saw card__screw card__flask card__spanner card__tape');
              $('.drag').not($(this)).removeClass('drag__active');
              // $('.tool__info').css('background', 'url(assets/06_choosing_tools/cards/1x/brush.png)'); 

            } 
            if(this.hitTest(tape)) {
              $(this.target).fadeIn();
              console.log("tape!")
              gsap.to(this.target, {
                x: 0,
                y: 0
              });
              $('.dz__bg').addClass('red__flash');
              setTimeout(function() { 
                $('.dz__bg').removeClass('red__flash');
              }, 250);
              setTimeout(function() { 
                $('.dz__bg').addClass('red__flash');
              }, 500);
              setTimeout(function() { 
                $('.dz__bg').removeClass('red__flash');
              }, 750);
            $('.tool__info').addClass('card__tape');
            $('.drag').not($(this)).removeClass('drag__active');
            $('.tool__info').removeClass('card__allen__key card__hammer card__oil card__ratchet card__saw card__brush card__flask card__spanner card__screw');
            // $('.tool__info').css('background', 'url(assets/06_choosing_tools/cards/1x/tape.png)'); 
            } 
            if(this.hitTest(saw)) {
              $(this.target).fadeIn();
              console.log("saw!")
              gsap.to(this.target, {
                x: 0,
                y: 0
              });
              $('.dz__bg').addClass('red__flash');
              setTimeout(function() { 
                $('.dz__bg').removeClass('red__flash');
              }, 250);
              setTimeout(function() { 
                $('.dz__bg').addClass('red__flash');
              }, 500);
              setTimeout(function() { 
                $('.dz__bg').removeClass('red__flash');
              }, 750);
              $('.tool__info').addClass('card__saw');
              $('.drag').not($(this)).removeClass('drag__active');
              $('.tool__info').removeClass('card__allen__key card__hammer card__oil card__ratchet card__brush card__screw card__flask card__spanner card__tape');
              // $('.tool__info').css('background', 'url(assets/06_choosing_tools/cards/1x/saw.png)'); 
            } 
            if(this.hitTest(hammer)) {

              }
            } 
        }
        else {
          TweenLite.to(this.target, 0.2, {
            x: 0,
            y: 0,
            scaleX:1,
            scaleY:1
          });
        }

          if ($(".hammer").hasClass("drag__active")) {
            $('.tool__info').addClass('card__hammer');
            $('.tool__info').removeClass('card__allen__key card__brush card__oil card__ratchet card__saw card__screw card__flask card__spanner card__tape');
            $('.drag').not($(this)).removeClass('drag__active');
            // $('.tool__info').css('background', 'url(assets/06_choosing_tools/cards/1x/hammer.png)');  
          }

          if (correctToolNumber <= 0) {
            $('#choosing__tools').addClass('pe__none');
            $('.mb03').removeClass('btn__lock').addClass('complete')
            $('.bm03').css('background', 'rgba(25, 25, 45, 0.8)').addClass('pe__none')
            $(".tool__number").fadeOut(250).fadeIn(250).fadeOut(250).fadeIn(250).fadeOut(250).fadeIn(250).fadeOut(250).fadeIn(250);
            // $(".hammer").fadeOut(250).fadeIn(250).fadeOut(250).fadeIn(250).fadeOut(250).fadeIn(250).fadeOut(250).fadeIn(250);
            // $(".tape").fadeOut(250).fadeIn(250).fadeOut(250).fadeIn(250).fadeOut(250).fadeIn(250).fadeOut(250).fadeIn(250);
            // $(".brush").fadeOut(250).fadeIn(250).fadeOut(250).fadeIn(250).fadeOut(250).fadeIn(250).fadeOut(250).fadeIn(250);
            // $(".saw").fadeOut(250).fadeIn(250).fadeOut(250).fadeIn(250).fadeOut(250).fadeIn(250).fadeOut(250).fadeIn(250);
            $(".bag").fadeOut(250).fadeIn(250).fadeOut(250).fadeIn(250).fadeOut(250).fadeIn(250).fadeOut(250).fadeIn(250);
            $('.mb04').removeClass('btn__lock').addClass('btn__play');
            $('.bm04').removeClass('pe__none');
            setTimeout(function() { 
              $('.modal__overlay').fadeIn();
            }, 2500);
            setTimeout(function() { 
              $('#choosing__tools').fadeOut(750);
              $('.modal__overlay').fadeOut(750);
              console.clear();
            }, 5500);
            setTimeout(function() { 
                $('#menu').fadeIn()
            }, 6500);
          }
      }
    
      });


  // END CHOOSING TOOLS


  // Weather Check 

  $('.btn__confirm__day__tue').hide();
  $('.btn__confirm__day__wed').hide();

  $('.mon').click(function() {  

    $('.btn__confirm__day__container').removeClass('animate__slideOutDown');
    $('.btn__confirm__day__container').fadeIn(1000).addClass('animate__slideInUp');
    $('.warning__tue').fadeOut()

    $('.border').removeClass('border__none');
    $('.mon').removeClass('mon__02 mon__03').addClass('mon__01').fadeIn(500);
    $('.tue').removeClass('tue__02 tue__03').addClass('tue__01').fadeIn(500);
    $('.wed').removeClass('wed__02 wed__03').addClass('wed__01').fadeIn(500);
    $('.temperature').removeClass('temp__02 temp__03').addClass('temp__01');
    $('.wind').removeClass('wind__02 wind__03').addClass('wind__01');
    $('.windspeed').removeClass('windspeed__02 windspeed__03').addClass('windspeed__01');
    $('.visability').removeClass('visa__02 visa__03').addClass('visa__01');
    $('.waveheight').removeClass('wave__02 wave__03').addClass('wave__01');

    $('.temptool__grid').hide()
    setTimeout(function() { 
      $('.temptool__grid').fadeIn()
  }, 100);

    $('.btn__confirm__day__mon').show();
    $('.btn__confirm__day__tue').hide();
    $('.btn__confirm__day__wed').hide();

    $('.confirm__day__text').html("Monday");


  });

  $('.btn__confirm__day__mon').click(function() { 
    $('.weather__technician__img').attr('src', 'assets/07_weather/gif/Skipper-Confused.gif');
    $('.btn__confirm__day__container').fadeOut(1000).addClass('animate__slideOutDown');
    $('.btn__confirm__day__container').removeClass('animate__slideInUp');
    $('.warning__mon').removeClass('animate__slideOutDown');
    $('.warning__mon').fadeIn(1000).addClass('animate__animated animate__slideInUp');
  //   setTimeout(function() { 
  //     $('.warning__mon').fadeOut(1000).addClass('animate__slideOutDown');
  //     $('.btn__confirm__day__container').removeClass('animate__slideOutDown');
  //     $('.btn__confirm__day__container').fadeIn(1000).addClass('animate__slideInUp');
  // }, 3000);
   });


  $('.tue').click(function() { 
    
    $('.btn__confirm__day__container').removeClass('animate__slideOutDown');
    $('.btn__confirm__day__container').fadeIn(1000).addClass('animate__slideInUp');
    $('.warning__mon').fadeOut()

    $('.border').addClass('border__none');
    $('.wed__border').removeClass('border__none');
    $('.mon').removeClass('mon__01 mon__03').addClass('mon__02')
    $('.tue').removeClass('tue__01 tue__03').addClass('tue__02');
    $('.wed').removeClass('wed__01 wed__03').addClass('wed__02');
    $('.temperature').removeClass('temp__01 temp__03').addClass('temp__02');
    $('.wind').removeClass('wind__01 wind__03').addClass('wind__02');
    $('.windspeed').removeClass('windspeed__01 windspeed__03').addClass('windspeed__02');
    $('.visability').removeClass('visa__01 visa__03').addClass('visa__02');
    $('.waveheight').removeClass('wave__01 wave__03').addClass('wave__02');

    $('.temptool__grid').hide()
    setTimeout(function() { 
      $('.temptool__grid').fadeIn()
  }, 100);

    $('.btn__confirm__day__tue').show();
    $('.btn__confirm__day__mon').hide();
    $('.btn__confirm__day__wed').hide();

    $('.confirm__day__text').html("Tuesday");

  });

  $('.btn__confirm__day__tue').click(function() { 
    console.log("tues!");
    $('.weather__technician__img').attr('src', 'assets/07_weather/gif/Skipper-Grumpy.gif');
    $('.btn__confirm__day__container').fadeOut(1000).addClass('animate__animated animate__slideOutDown');
    $('.btn__confirm__day__container').removeClass('animate__slideInUp');
    $('.warning__tue').removeClass('animate__slideOutDown');
    $('.warning__tue').fadeIn(1000).addClass('animate__animated animate__slideInUp');
  //   setTimeout(function() { 
  //     $('.warning__tue').fadeOut(1000).addClass('animate__slideOutDown');
  //     $('.btn__confirm__day__container').removeClass('animate__slideOutDown');
  //     $('.btn__confirm__day__container').fadeIn(1000).addClass('animate__slideInUp');
  // }, 3000);
   });


  $('.wed').click(function() {  

    $('.btn__confirm__day__container').removeClass('animate__slideOutDown');
    $('.btn__confirm__day__container').fadeIn(1000).addClass('animate__slideInUp');
    $('.warning__mon').fadeOut();
    $('.warning__tue').fadeOut();

    $('.border').addClass('border__none');
    $('.tue__border').removeClass('border__none');
    $('.mon').removeClass('mon__01 mon__02').addClass('mon__03')
    $('.tue').removeClass('tue__01 tue__02').addClass('tue__03');
    $('.wed').removeClass('wed__01 wed__02').addClass('wed__03');
    $('.temperature').removeClass('temp__01 temp__02').addClass('temp__03');
    $('.wind').removeClass('wind__01 wind__02').addClass('wind__03');
    $('.windspeed').removeClass('windspeed__01 windspeed__02').addClass('windspeed__03');
    $('.visability').removeClass('visa__01 visa__02').addClass('visa__03');
    $('.waveheight').removeClass('wave__01 wave__02').addClass('wave__03');

    $('.btn__confirm__day__mon').hide();
    $('.btn__confirm__day__tue').hide();
    $('.btn__confirm__day__wed').show();

    $('.temptool__grid').hide()
    setTimeout(function() { 
      $('.temptool__grid').fadeIn()
  }, 100);

    $('.confirm__day__text').html("Wednesday");

  });

  $('.btn__confirm__day__wed').click(function() { 
    $('#weather').addClass('pe__none');
    $('.weather__technician__img').attr('src', 'assets/07_weather/gif/Skipper-Thumbs-Up.gif');
    $('.btn__confirm__day__container').fadeOut(1000).addClass('animate__slideOutDown');
    $('.btn__confirm__day__container').removeClass('animate__slideInUp');
    $('.correct__wed').removeClass('animate__slideOutDown');
    $('.correct__wed').fadeIn(1000).addClass('animate__animated animate__slideInUp');
    $('.mb04').removeClass('btn__lock').addClass('complete')
    $('.bm04').css('background', 'rgba(25, 25, 45, 0.8)').addClass('pe__none');
    $('.mb05').removeClass('btn__lock').addClass('btn__play')
    $('.bm05').removeClass('pe__none');
    setTimeout(function() { 
      $('#weather').fadeOut(1000);
  
  }, 3000);
    setTimeout(function() { 
      $('#menu').fadeIn();
  }, 4000);
   });


    // Buddy EQ Check

    // Set equipment counter
    var buddyEqCounter = 0;

    $('.suncream__highlight').hide();
    $('.sunglasses__highlight').hide();
    $('.hardhat__highlight').hide();
    $('.harness__highlight').hide();
    $('.safety__glasses__highlight').hide();
    $('.safety__boots__highlight').hide();
    $('.gloves__highlight').hide();
    $('.radio__highlight').hide();


    $('.mo__budeq').hide();

    function buddyEqCounterCongratsMessage() {
      if (buddyEqCounter === 8) {
        $('.mb05').removeClass('btn__lock').addClass('complete')
        $('.bm05').css('background', 'rgba(25, 25, 45, 0.8)').addClass('pe__none')
        $('.mb06').removeClass('btn__lock').addClass('btn__play');
        $('.bm06').removeClass('pe__none');
        // $('.highlight').addClass('pulse');
        setTimeout(function() { 
          $('.mo__budeq').fadeIn();
        }, 2000); 
        setTimeout(function() { 
          $('#buddyeq__check').fadeOut();
          console.clear()
          setTimeout(function() { 
            $('#menu').fadeIn();
          }, 1000); 
      }, 6000); 
      }
    }

    // On click highlight equipment and update hold button
    $('.btn__sunglasses').click(function() { 
      buddyEqCounter++;
      console.log('You EQ count is: ' + buddyEqCounter);
      buddyEqCounterCongratsMessage();
      $('.btn__eq01').addClass('animate__animated animate__flipOutY');
      $('.sunglasses__highlight').fadeIn();
      setTimeout(function() { 
          $('.btn__eq01').removeClass('eq__hold animate__flipOutY').addClass('eq__sunglasses animate__flipInY');
          $('.btn__sunglasses').addClass('pe__none');
      }, 500); 
    });
    $('.btn__harness').click(function() { 
      buddyEqCounter++;
      console.log('You EQ count is: ' + buddyEqCounter);
      buddyEqCounterCongratsMessage()
      $('.btn__eq02').addClass('animate__animated animate__flipOutY');
      $('.harness__highlight').fadeIn();
      setTimeout(function() { 
          $('.btn__eq02').removeClass('eq__hold animate__flipOutY').addClass('eq__harness animate__flipInY');
          $('.btn__harness').addClass('pe__none');
      }, 500); 
    });
    $('.btn__suncream').click(function() { 
      buddyEqCounter++;
      console.log('You EQ count is: ' + buddyEqCounter);
      buddyEqCounterCongratsMessage()
      $('.btn__eq03').addClass('animate__animated animate__flipOutY');
      $('.suncream__highlight').fadeIn();
      setTimeout(function() { 
        $('.btn__eq03').removeClass('eq__hold animate__flipOutY').addClass('eq__suncream animate__flipInY');
        $('.btn__suncream').addClass('pe__none');
    }, 500); 
    });
    $('.btn__safety__glasses').click(function() { 
      buddyEqCounter++;
      console.log('You EQ count is: ' + buddyEqCounter);
      buddyEqCounterCongratsMessage()
      $('.btn__eq04').addClass('animate__animated animate__flipOutY');
      $('.safety__glasses__highlight').fadeIn();
      setTimeout(function() { 
          $('.btn__eq04').removeClass('eq__hold animate__flipOutY').addClass('eq__safety__glasses animate__flipInY');
          $('.btn__safety__glasses').addClass('pe__none');
      }, 500); 
    });
    $('.btn__safety__boots').click(function() { 
      buddyEqCounter++;
      console.log('You EQ count is: ' + buddyEqCounter);
      $('.btn__eq05').addClass('animate__animated animate__flipOutY');
      buddyEqCounterCongratsMessage()
      $('.safety__boots__highlight').fadeIn();
      setTimeout(function() { 
          $('.btn__eq05').removeClass('eq__hold animate__flipOutY').addClass('eq__safety__boots animate__flipInY');
          $('.btn__safety__boots').addClass('pe__none');
      }, 500); 
    });
    $('.btn__radio').click(function() { 
      buddyEqCounter++;
      console.log('You EQ count is: ' + buddyEqCounter);
      buddyEqCounterCongratsMessage()
      $('.btn__eq06').addClass('animate__animated animate__flipOutY');
      $('.radio__highlight').fadeIn();
      setTimeout(function() { 
          $('.btn__eq06').removeClass('eq__hold animate__flipOutY').addClass('eq__radio animate__flipInY');
          $('.btn__radio').addClass('pe__none');
      }, 500); 
    });
    $('.btn__gloves').click(function() { 
      buddyEqCounter++;
      console.log('You EQ count is: ' + buddyEqCounter);
      buddyEqCounterCongratsMessage()
      $('.btn__eq07').addClass('animate__animated animate__flipOutY');
      $('.gloves__highlight').fadeIn();
      setTimeout(function() { 
          $('.btn__eq07').removeClass('eq__hold animate__flipOutY').addClass('eq__gloves animate__flipInY');
          $('.btn__gloves').addClass('pe__none');
      }, 500); 
    });
    $('.btn__hardhat').click(function() { 
      buddyEqCounter++;
      console.log('You EQ count is: ' + buddyEqCounter);
      buddyEqCounterCongratsMessage()
      $('.btn__eq08').addClass('animate__animated animate__flipOutY');
      $('.hardhat__highlight').fadeIn();
      setTimeout(function() { 
          $('.btn__eq08').removeClass('eq__hold animate__flipOutY').addClass('eq__hardhat animate__flipInY');
          $('.btn__hardhat').addClass('pe__none');
      }, 500); 
    });

    // DIAGNOSING FAULTS

    var faultO4D367 = true;
    var faultO2E821 = false;

    var faultHotspotO4D367 = false;
    var faultHotspotO2E821 = false;

    var fault01Complete = false;
    var fault02Complete = false;

    // Hide cards and lines on page load
    $('.hc01').hide();
    $('.hl01').hide();
    $('.hc02').hide();
    $('.hl02').hide();
    $('.hc03').hide();
    $('.hl03').hide();
    $('.hc04').hide();
    $('.hl04').hide();

    $('.hotspot01').click(function() { 
      $('.hc01').fadeIn();
      $('.hc01').addClass('animate__animated animate__fadeInUp');
      $('.hl01').fadeIn(1500);
    });
    $('.btn__close__hl01').click(function() { 
      $('.hc01').removeClass('animate__fadeInUp');
      $('.hc01').fadeOut(500);
    });

    $('.hotspot02').click(function() { 
      $('.hc02').fadeIn();
      $('.hc02').addClass('animate__animated animate__fadeInUp');
      $('.hl02').fadeIn(1500);
    });
    $('.btn__close__hl02').click(function() { 
      $('.hc02').removeClass('animate__fadeInUp');
      $('.hc02').fadeOut(500);
    });
    $('.hotspot03').click(function() { 
      $('.hc03').fadeIn();
      $('.hc03').addClass('animate__animated animate__fadeInUp');
      $('.hl03').fadeIn(2000);
    });
    $('.btn__close__hl03').click(function() { 
      $('.hc03').removeClass('animate__fadeInUp');
      $('.hc03').fadeOut(500);
    });
    $('.hotspot04').click(function() { 
      $('.hc04').fadeIn();
      $('.hc04').addClass('animate__animated animate__fadeInUp');
      $('.hl04').fadeIn(2000);
    });
    $('.btn__close__hl04').click(function() { 
      $('.hc04').removeClass('animate__fadeInUp');
      $('.hc04').fadeOut(500);
    });

    function flipFoundCards01() {
      $('.fc01').addClass("animate__animated animate__flipOutY");
      setTimeout(function() { 
        $('.fc01').removeClass("animate__flipOutY").addClass("animate__flipInY");
        $('.fc01').css('background', 'url("assets/05_diagnosing_faults/SVG/fault01_foundcard.svg")');
        $('.fc01').addClass('pe__none');
        //$('.btn__repair__hl01').addClass('pe__none');
        faultO2E821 = true;
        faultO4D367 = false;
        setTimeout(function() { 
          $('.fc01').removeClass('fault__card__border');
          $('.fc02').removeClass('fc__opacity').addClass('fault__card__border');
          faultO2E821 = true;
          faultO4D367 = false;
      }, 1000); 
    }, 500); 
    } 
    function flipFoundCards02() {
      $('.fc02').addClass("animate__animated animate__flipOutY");
      setTimeout(function() { 
        $('.fc02').removeClass("animate__flipOutY").addClass("animate__flipInY");
        $('.fc02').css('background', 'url("assets/05_diagnosing_faults/SVG/fault02_foundcard.svg")');
        $('.fc02').addClass('pe__none');
        $('.btn__repair__hl01').addClass('pe__none');

        setTimeout(function() { 
          $('.fc02').removeClass('fault__card__border');
          $('.fc01 .fc02').removeClass('fc__opacity');
      }, 1000); 
    }, 500); 
    } 

    function completeDFMessage() {
      $('.fc01').removeClass('fc__opacity fault__card__border');
      $('.fc02').removeClass('fc__opacity fault__card__border');
      $('.mb02').removeClass('btn__play').addClass('complete')
      $('.bm02').css('background', 'rgba(25, 25, 45, 0.8)').addClass('pe__none')
      $('.mb03').removeClass('btn__lock').addClass('btn__play');
      $('.bm03').removeClass('pe__none');
      setTimeout(function() { 
        $('.fc01').fadeOut(250).fadeIn(250).fadeOut(250).fadeIn(250).fadeOut(250).fadeIn(250).fadeOut(250).fadeIn(250);
        $('.fc02').fadeOut(250).fadeIn(250).fadeOut(250).fadeIn(250).fadeOut(250).fadeIn(250).fadeOut(250).fadeIn(250);
    }, 1500); 
      setTimeout(function() { 
        $('.hotspot').fadeOut();
        $('.hotspot__card').fadeOut();
        $('.df__modal__overlay').fadeIn(500);
    }, 3000); 
    setTimeout(function() { 
      console.clear();
      $('#diagnosing__faults').fadeOut();

      setTimeout(function() { 
        $('#menu').fadeIn();
      }, 1000); 
  }, 6000); 
    }

    $('.fc01').click(function() { 
      $(this).addClass('fault__card__border').removeClass('fc__opacity');
      $('.fault__card').not(this).removeClass('fault__card__border');
      $('.fc02').addClass('fc__opacity');
      faultO4D367 = true;

      if ( faultO4D367 === true && faultHotspotO4D367 === true ) {
        console.log("Rotor bearings fault has been correctly found!")
        fault01Complete = true;
        flipFoundCards01()
        if (fault01Complete == true && fault02Complete == true) {
          completeDFMessage()
        }
      }
    });

    $('.fc02').click(function() { 
      $(this).addClass('fault__card__border').removeClass('fc__opacity');
      $('.fault__card').not(this).removeClass('fault__card__border');
      $('.fc01').addClass('fc__opacity');
      faultO2E821 = true;

      if ( faultO2E821 === true && faultHotspotO2E821 === true ) {
        console.log("Gearbox fault has been correctly found!")
        fault02Complete = true;
        flipFoundCards02()

        if (fault01Complete == true && fault02Complete == true) {
          completeDFMessage()
        }
      }
    });

    // $('.btn__repair').click(function() { 
    //   $(this).addClass('pe__none');
    //   setTimeout(function() { 
    //     $(this).removeClass('pe__none');
    // }, 1000); 
    // });

    $('.btn__repair__hl01').click(function() { 
      faultHotspotO4D367 = true;
      faultHotspotO2E821 = false;

      if ( faultO2E821 === true ) {
        $('.fc02').addClass("animate__animated animate__flipOutY");
        setTimeout(function() { 
          $('.fc02').removeClass("animate__flipOutY").addClass("animate__flipInY");
          $('.fc02').css('background', 'url("assets/05_diagnosing_faults/SVG/Incorrect_faultcode02.svg")');
      }, 500); 
        setTimeout(function() { 
          $('.fc02').removeClass("animate__flipInY").addClass("animate__flipOutY");
      }, 2500); 
        setTimeout(function() { 
          $('.fc02').css('background', 'url("assets/05_diagnosing_faults/SVG/SVG/faultcard02.svg")');
          $('.fc02').removeClass("animate__flipOutY").addClass("animate__flipInY");
      }, 3000); 
      }

      if ( faultO4D367 === true && faultHotspotO4D367 === true ) {
        console.log("Rotor bearings fault has been correctly found!")
        fault01Complete = true;
        flipFoundCards01();

        if (fault01Complete == true && fault02Complete == true) {
          completeDFMessage()
        }
      }
    });
    $('.btn__repair__hl02').click(function() { 
      faultHotspotO4D367 = false;
      faultHotspotO2E821 = false;
      if ( faultO4D367 === true ) {
        $('.fc01').addClass("animate__animated animate__flipOutY");
        setTimeout(function() { 
          $('.fc01').removeClass("animate__flipOutY").addClass("animate__flipInY");
          $('.fc01').css('background', 'url("assets/05_diagnosing_faults/SVG/Incorrect_faultcode01.svg")');
      }, 500); 
        setTimeout(function() { 
          $('.fc01').removeClass("animate__flipInY").addClass("animate__flipOutY");
      }, 2500); 
        setTimeout(function() { 
          $('.fc01').css('background', 'url("assets/05_diagnosing_faults/SVG/SVG/faultcard01.svg")');
          $('.fc01').removeClass("animate__flipOutY").addClass("animate__flipInY");
      }, 3000); 
      } else if ( faultO2E821 === true ) {
        $('.fc02').addClass("animate__animated animate__flipOutY");
        setTimeout(function() { 
          $('.fc02').removeClass("animate__flipOutY").addClass("animate__flipInY");
          $('.fc02').css('background', 'url("assets/05_diagnosing_faults/SVG/Incorrect_faultcode02.svg")');
      }, 500); 
        setTimeout(function() { 
          $('.fc02').removeClass("animate__flipInY").addClass("animate__flipOutY");
      }, 2500); 
        setTimeout(function() { 
          $('.fc02').css('background', 'url("assets/05_diagnosing_faults/SVG/SVG/faultcard02.svg")');
          $('.fc02').removeClass("animate__flipOutY").addClass("animate__flipInY");
      }, 3000); 
      }

    });
    $('.btn__repair__hl03').click(function() { 
      faultHotspotO4D367 = false;
      faultHotspotO2E821 = false;
      if ( faultO4D367 === true ) {
        $('.fc01').addClass("animate__animated animate__flipOutY");
        setTimeout(function() { 
          $('.fc01').removeClass("animate__flipOutY").addClass("animate__flipInY");
          $('.fc01').css('background', 'url("assets/05_diagnosing_faults/SVG/Incorrect_faultcode01.svg")');
      }, 500); 
        setTimeout(function() { 
          $('.fc01').removeClass("animate__flipInY").addClass("animate__flipOutY");
      }, 2500); 
        setTimeout(function() { 
          $('.fc01').css('background', 'url("assets/05_diagnosing_faults/SVG/SVG/faultcard01.svg")');
          $('.fc01').removeClass("animate__flipOutY").addClass("animate__flipInY");
      }, 3000); 
      } else if ( faultO2E821 === true ) {
        $('.fc02').addClass("animate__animated animate__flipOutY");
        setTimeout(function() { 
          $('.fc02').removeClass("animate__flipOutY").addClass("animate__flipInY");
          $('.fc02').css('background', 'url("assets/05_diagnosing_faults/SVG/Incorrect_faultcode02.svg")');
      }, 500); 
        setTimeout(function() { 
          $('.fc02').removeClass("animate__flipInY").addClass("animate__flipOutY");
      }, 2500); 
        setTimeout(function() { 
          $('.fc02').css('background', 'url("assets/05_diagnosing_faults/SVG/SVG/faultcard02.svg")');
          $('.fc02').removeClass("animate__flipOutY").addClass("animate__flipInY");
      }, 3000); 
      }
    });
    $('.btn__repair__hl04').click(function() { 
      faultHotspotO4D367 = false;
      faultHotspotO2E821 = true;

      if ( faultO2E821 === true && faultHotspotO2E821 === true ) {
        console.log("Gearbox fault has been correctly found!")
        fault02Complete = true;
        flipFoundCards02()
        if (fault01Complete == true && fault02Complete == true) {
          completeDFMessage()
        }
      }

      if ( faultO4D367 === true ) {
        $('.fc01').addClass("animate__animated animate__flipOutY");
        setTimeout(function() { 
          $('.fc01').removeClass("animate__flipOutY").addClass("animate__flipInY");
          $('.fc01').css('background', 'url("assets/05_diagnosing_faults/SVG/Incorrect_faultcode01.svg")');
      }, 500); 
        setTimeout(function() { 
          $('.fc01').removeClass("animate__flipInY").addClass("animate__flipOutY");
      }, 2500); 
        setTimeout(function() { 
          $('.fc01').css('background', 'url("assets/05_diagnosing_faults/SVG/SVG/faultcard01.svg")');
          $('.fc01').removeClass("animate__flipOutY").addClass("animate__flipInY");
      }, 3000); 
      }
    });
    

}); // End Jqeury