$(document).ready(function(){
	//меню навигация, переход по ссылкам на странице
	$('.nav').singlePageNav();

	//слайдер партнеров
	$('.partners-slider.active').slick({
		dots: true,
		arrows: true,
		slidesToShow: 6,
		slidesToScroll: 6,
		autoplay: false,
		infinite: true,
		responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2,
		        arrows: false
		      }
		    }
		  ]
	});
	
	//слайдер с айфоном
	$('.tracker__slider').slick({
		infinite: true,
		centerMode: true,
		centerPadding: '337px',
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					centerMode: false,
					infinite: false
				}
			}
		]
	});

	//слaйдер будущее
	$('.features__slider').slick({
		infinite: true,
		centerMode: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					centerMode: false,
					infinite: false
				}
			}
		]
	});
	
	//слайдеры с участниками команды с описанием
	$('#team-0').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		dots: true,
		responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        arrows: false
		      }
		    }
		  ]
    });
		
	//бургер в меню
	
	$('.burger').click(function(){
		if('none' == $('.menu').css('display')){
			$('.menu').css('display', 'flex');
		} else {
			$('.menu').css('display', 'none');
		}
	});
	
	//выпадающая строка в форме 
	
	$('.partnership__select').click(function(){
		if('none' == $('.partnership__options').css('display')){
			$('.partnership__options').css('display', 'flex');
		} else {
			$('.partnership__options').css('display', 'none');
		}
	});
	
	
	// смена текста в выпадающей строке
	
	$('.partnership__options a').click(function(){
		let type = $(this).html();
		$('#type__text').html(type);
		$('#type').val(type);
	});
	
	
	
	// раскрытие биографии в команда
	$('.team__person p a').click(function(){
		if($(this).parent().hasClass('opened')){
			$(this).parent().removeClass('opened');
			$(this).html('read more');
			$(this).parent().find('span').css('display', 'none');
			$(this).parent().css('height', '162px');
			$(this).parent().parent().css('height', '350px');
			$(this).parent().css('overflow', 'visible');
			$(this).parent().parent().css('overflow', 'visible');
		} else {
			$(this).parent().addClass('opened');
			$(this).html('close');
			$(this).parent().find('span').css('display', 'inline');
			$(this).parent().css('height', 'auto');
			$(this).parent().parent().css('height', 'auto');
			$(this).parent().css('overflow', 'visible');
			$(this).parent().parent().css('overflow', 'visible');
		}
	});
	
	// переключатель меню партнеров
	$('.tabs-partners a').click(function(){
		$('.tabs-partners a').removeClass("active");
		$(this).addClass("active");
		$('.partners-slider').removeClass("active");
		let tab_id = $(this).data("id");
		$("#ps-"+tab_id).addClass("active");
		$("#ps-"+tab_id).not('.slick-initialized').slick({
			dots: true,
			arrows: true,
			slidesToShow: 6,
			slidesToScroll: 6,
			autoplay: false,
			infinite: true,
			responsive: [
			    {
			      breakpoint: 768,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 2,
			        arrows: false
			      }
			    }
			  ]
		});
	});
	
	//переключатель меню участников
	$(".team__tabs a").click(function(){
		$(".team__tabs a").removeClass("active");
		$(this).addClass("active");
		$(".team__slider").removeClass("active");
		let tab_id = $(this).data("id");
		$("#team-"+tab_id).addClass("active");
		if (tab_id == 0 || tab_id == 1) {
			$('#team-' + tab_id).not('.slick-initialized').slick({
				infinite: true,
				slidesToShow: 3,
				slidesToScroll: 3,
				dots: true,
				responsive: [
				    {
					    breakpoint: 768,
					    settings: {
				        slidesToShow: 1,
				        slidesToScroll: 1,
				        arrows: false
				      }
				    }
		  ]
    		});
		} else {
			$('#team-' + tab_id).not('.slick-initialized').slick({
				slidesToShow: 4,
				slidesToScroll: 4,
				dots: true,
				responsive: [
					{
						breakpoint: 768,
						settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						arrows: false
		      		}
		    	}
		  ]
			});
		}
	});
	
	//переключатель меню ответов на вопросы
	$(".faq__tabs a").click(function(){
		$(".faq__tabs a").removeClass("active");
		$(this).addClass("active");
		$(".faq__block").removeClass("active");
		let tab_id = $(this).data("id");
		$("#faq-"+tab_id).addClass("active");
	});
	
	//расскрывает ответы на вопросы 
	$(".faq__box").click(function(){
		if("none" == $(this).find("p").css("display")){
			$(this).find("p").css("display", "flex");
			$(this).css("background", "#fff");
			$(this).find(".faq__arrow").removeClass("arrow-down").addClass("arrow-up");
		} else {
			$(this).find("p").css("display", "none");
			$(this).css("background", "#F6F6F6");
			$(this).find(".faq__arrow").removeClass("arrow-up").addClass("arrow-down");
		}
	});
	
	$("#subscribe1").submit(function(event){
  		event.preventDefault();
  		if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test($('#subscribe_email1').val())){
			$.get("/ajax/subscribe.php?email="+$('#subscribe_email1').val(), function(data){
				$('#subscribe1').remove();
				$('.subscribe1_result').html('Thank you!');
			});
		} else {
			$('#subscribe_email1').addClass('error');
		}
	});
	
	$("#subscribe2").submit(function(event){
  		event.preventDefault();
  		if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test($('#subscribe_email2').val())){
			$.get("/ajax/subscribe.php?email="+$('#subscribe_email2').val(), function(data){
				$('#subscribe2').remove();
				$('.subscribe2_result').html('Thank you!');
			});
		} else {
			$('#subscribe_email2').addClass('error');
		}
	});
	
	$("#orderForm").submit(function(event){
		event.preventDefault();
		if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test($('#orderEmail').val())){
			$.post("/ajax/order.php", $("#orderForm").serialize(), function(data){
				$('#orderForm').html('Thank you');
			});
		} else {
			$('#orderEmail').addClass('error');
		}
	});
});

(function () {
  // General Functions
  var app, fnAddEventListener, fnRequestAnimationFrame;

  fnRequestAnimationFrame = function (fnCallback) {
    var fnAnimFrame;
    fnAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (fnCallback) {
      window.setTimeOut(fnCallback, 1000 / 60);
    };
    fnAnimFrame(fnCallback);
  };

  // Add Event Listener
  fnAddEventListener = function (o, sEvent, fn) {
    if (o.addEventListener) {
      o.addEventListener(sEvent, fn, false);
    } else {
      o['on' + sEvent] = fn;
    }
  };

  app = function () {
    var Particle, ctxRender, fAngle, fCosAngle, fMaxAX, fMaxAY, fMaxAZ, fPI, fSinAngle, fStartVX, fStartVY, fStartVZ, fVX, fnACos, fnCos, fnMax, fnMin, fnNextFrame, fnRender, fnRnd, fnRnd2, fnSetSize, fnSin, fnSwapList, gui, h, iProjSphereX, iProjSphereY, iRadiusSphere, nBody, oBuffer, oDoc, oRadGrad, oRender, w;
    // General Elements
    oDoc = document;
    nBody = oDoc.body;
    // Shortcuts
    fPI = Math.PI;
    fnMax = Math.max;
    fnMin = Math.min;
    fnRnd = Math.random;
    fnRnd2 = function () {
      return 2.0 * fnRnd() - 1.0;
    };
    fnCos = Math.cos;
    fnACos = Math.acos;
    fnSin = Math.sin;
    // Sphere Settings
    iRadiusSphere = 200;
    iProjSphereX = 0;
    iProjSphereY = 0;
    // Particle Settings
    fMaxAX = 0.1;
    fMaxAY = 0.1;
    fMaxAZ = 0.1;
    fStartVX = 0.001;
    fStartVY = 0.001;
    fStartVZ = 0.001;
    fAngle = 0.0;
    fSinAngle = 0.0;
    fCosAngle = 0.0;
    window.iFramesToRotate = 1000.0;
    window.iPerspective = 525;
    window.iNewParticlePerFrame = 10;
    window.fGrowDuration = 1.0; //скорость анимации
    window.fWaitDuration = 500.0; //задержка перед улетанием точек
    window.fShrinkDuration = 250.0;
    window.aColor = [255, 255, 255];
    fVX = 2.0 * fPI / window.iFramesToRotate;
    oRadGrad = null;
    ctxRender = nCanvasRender.getContext('2d');
    oRender = {
      pFirst: null };

    oBuffer = {
      pFirst: null };

    w = h = 0;
    // gets/sets size
    fnSetSize = function () {
	    nCanvasRender.width = w = 450;
		nCanvasRender.height = h = 450;
	  iProjSphereX = w / 2;
      iProjSphereY = h / 2;
      return {
        w: w,
        h: h };

    };
    fnSetSize();

    // window.onresize
    fnAddEventListener(window, 'resize', fnSetSize);
    fnSwapList = function (p, oSrc, oDst) {
      if (p != null) {
        // remove p from oSrc
        if (oSrc.pFirst === p) {
          oSrc.pFirst = p.pNext;
          if (p.pNext != null) {
            p.pNext.pPrev = null;
          }
        } else {
          p.pPrev.pNext = p.pNext;
          if (p.pNext != null) {
            p.pNext.pPrev = p.pPrev;
          }
        }
      } else {
        // create new p
        p = new Particle();
      }
      p.pNext = oDst.pFirst;
      if (oDst.pFirst != null) {
        oDst.pFirst.pPrev = p;
      }
      oDst.pFirst = p;
      p.pPrev = null;
      return p;
    };
    Particle = function () {

      // Particle
      class Particle {
        fnInit() {
          this.fAngle = fnRnd() * fPI * 2;
          this.fForce = fnACos(fnRnd2());
          this.fAlpha = 0;
          this.bIsDead = false;
          this.iFramesAlive = 0;
          this.fX = iRadiusSphere * fnSin(this.fForce) * fnCos(this.fAngle);
          this.fY = iRadiusSphere * fnSin(this.fForce) * fnSin(this.fAngle);
          this.fZ = iRadiusSphere * fnCos(this.fForce);
          this.fVX = fStartVX * this.fX;
          this.fVY = fStartVY * this.fY;
          this.fVZ = fStartVZ * this.fZ;
          this.fGrowDuration = window.fGrowDuration + fnRnd2() * (window.fGrowDuration / 4.0);
          this.fWaitDuration = window.fWaitDuration + fnRnd2() * (window.fWaitDuration / 4.0);
          this.fShrinkDuration = window.fShrinkDuration + fnRnd2() * (window.fShrinkDuration / 4.0);
          this.fAX = 0.0;
          this.fAY = 0.0;
          this.fAZ = 0.0;
        }

        fnUpdate() {
          if (this.iFramesAlive > this.fGrowDuration + this.fWaitDuration) {
            this.fVX += this.fAX + fMaxAX * fnRnd2();
            this.fVY += this.fAY + fMaxAY * fnRnd2();
            this.fVZ += this.fAZ + fMaxAZ * fnRnd2();
            this.fX += this.fVX;
            this.fY += this.fVY;
            this.fZ += this.fVZ;
          }
          this.fRotX = fCosAngle * this.fX + fSinAngle * this.fZ;
          this.fRotZ = -fSinAngle * this.fX + fCosAngle * this.fZ;
          this.fRadiusCurrent = Math.max(0.01, window.iPerspective / (window.iPerspective - this.fRotZ));
          this.fProjX = this.fRotX * this.fRadiusCurrent + iProjSphereX;
          this.fProjY = this.fY * this.fRadiusCurrent + iProjSphereY;
          this.iFramesAlive += 1;
          if (this.iFramesAlive < this.fGrowDuration) {
            this.fAlpha = this.iFramesAlive * 1.0 / this.fGrowDuration;
          } else if (this.iFramesAlive < this.fGrowDuration + this.fWaitDuration) {
            this.fAlpha = 1.0;
          } else if (this.iFramesAlive < this.fGrowDuration + this.fWaitDuration + this.fShrinkDuration) {
            this.fAlpha = (this.fGrowDuration + this.fWaitDuration + this.fShrinkDuration - this.iFramesAlive) * 1.0 / this.fShrinkDuration;
          } else {
            this.bIsDead = true;
          }
          if (this.bIsDead === true) {
            fnSwapList(this, oRender, oBuffer);
          }
          this.fAlpha *= fnMin(1.0, fnMax(0.5, this.fRotZ / iRadiusSphere));
          this.fAlpha = fnMin(1.0, fnMax(0.0, this.fAlpha));
        }}

      ;

      // Current Position
      Particle.prototype.fX = 0.0;

      Particle.prototype.fY = 0.0;

      Particle.prototype.fZ = 0.0;

      // Current Velocity
      Particle.prototype.fVX = 0.0;

      Particle.prototype.fVY = 0.0;

      Particle.prototype.fVZ = 0.0;

      // Current Acceleration
      Particle.prototype.fAX = 0.0;

      Particle.prototype.fAY = 0.0;

      Particle.prototype.fAZ = 0.0;

      // Projection Position
      Particle.prototype.fProjX = 0.0;

      Particle.prototype.fProjY = 0.0;

      // Rotation
      Particle.prototype.fRotX = 0.0;

      Particle.prototype.fRotZ = 0.0;

      // double linked list
      Particle.prototype.pPrev = null;

      Particle.prototype.pNext = null;

      Particle.prototype.fAngle = 0.0;

      Particle.prototype.fForce = 0.0;

      Particle.prototype.fGrowDuration = 0.0;

      Particle.prototype.fWaitDuration = 0.0;

      Particle.prototype.fShrinkDuration = 0.0;

      Particle.prototype.fRadiusCurrent = 0.0;

      Particle.prototype.iFramesAlive = 0;

      Particle.prototype.bIsDead = false;

      return Particle;

    }.call(this);
    fnRender = function () {
      var iCount, p;
      ctxRender.fillStyle = "#FBD15E";
      ctxRender.fillRect(0, 0, w, h);
      p = oRender.pFirst;
      iCount = 0;
      while (p != null) {
        ctxRender.fillStyle = "rgba(" + window.aColor.join(',') + ',' + p.fAlpha.toFixed(4) + ")";
        ctxRender.beginPath();
        ctxRender.arc(p.fProjX, p.fProjY, p.fRadiusCurrent, 0, 2 * fPI, false);
        ctxRender.closePath();
        ctxRender.fill();
        p = p.pNext;
        iCount += 1;
      }
    };
    fnNextFrame = function () {
      var iAddParticle, iCount, p, pNext;
      fAngle = (fAngle + fVX) % (2.0 * fPI);
      fSinAngle = fnSin(fAngle);
      fCosAngle = fnCos(fAngle);
      iAddParticle = 0;
      iCount = 0;
      while (iAddParticle++ < window.iNewParticlePerFrame) {
        p = fnSwapList(oBuffer.pFirst, oBuffer, oRender);
        p.fnInit();
      }
      p = oRender.pFirst;
      while (p != null) {
        pNext = p.pNext;
        p.fnUpdate();
        p = pNext;
        iCount++;
      }
      fnRender();
      return fnRequestAnimationFrame(function () {
        return fnNextFrame();
      });
    };
    fnNextFrame();
    window.app = this;
  };

  fnAddEventListener(window, 'load', app);
}).call(this);