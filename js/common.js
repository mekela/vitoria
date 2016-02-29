$(document).ready(function() {
	//fancybox
	$('.fancybox').fancybox({
		helpers: {
			overlay: {
				locked: false
			}
		}
	});

	//bxslider
	$('.bxslider').bxSlider({
	  nextSelector: '#slider-next',
	  prevSelector: '#slider-prev',
	  captions: true,
	  auto: true
	});

	$('.product_block a.button.fancybox').click(function(){
		$('.modal_order h6').text($(this).attr('data-name'));
	});

	//wow
	new WOW().init();

	//scroll 
	$('.menu li a, .tobottom a').on('click',function(){
		$('html,body').animate({scrollTop:$($(this).attr('href')).offset().top-55},800);
		return false;
	});

	//timer
	var today=new Date();
	  var y = today.getFullYear();
	  var m = today.getMonth() + 1;
	  var d = (today.getDate());
	  var h = 23-today.getHours();
	  var mi = 59-today.getMinutes();
	  var s = 59-today.getSeconds();
    if((d%2)==0){
       var tl2 = new Date(y+'/'+m+'/'+d+' 23:59:59');
    }else{
           if((d%1)==0){
			var tl2 = new Date(y+'/'+m+'/'+(d+1)+' 23:59:59');
           }
        }
    


	var countdown = new Countdown({
		selector: '.timer_item',
		msgBefore: "Скоро будет акция",
		msgAfter: "Акция закончилась!",
		msgPattern: "<span>{days}</span> <span>{hours}</span>  <span>{minutes}</span> <span>{seconds}</span>",
		dateStart: new Date('2014/01/01 10:00'),
		dateEnd: tl2,
		onStart: function() {
			//console.log('Акция!');
		},
		onEnd: function() {
			//console.log('Кончилася!');
		}
	});



	/* - - - - - - - - - - - - - -   valid  - - - - - - - - - - - - - - - - */
	$('.send_button').click(function(){
     var parentClass=$(this).attr('rel');
	 var paramsFancy={
	    'scrolling':0,
	    'autoScale': true,
	    'transitionIn': 'elastic',
	    'transitionOut': 'elastic',
	    'speedIn': 500,
	    'speedOut': 300,
	    'autoDimensions': true,
	    'centerOnScroll': true,
	    'href' : '#thanks',
	    'padding' : '0',
	    'height' : 'auto',
	    helpers: {
	            overlay: {
	              locked: false
	            }
	        }
	    };
	    validate=1;
	    validate_msg='';
	    form=$('#'+$(this).attr('rel'));
	     jQuery.each(form.find('.validate'), function(key, value) {
	        if($(this).val()==''){
	        	validate_msg+=$(this).attr('title')+'\n';validate=0;
	            $(this).focus();
	            $(this).addClass('red_input');
	        }else{
	            $(this).removeClass('red_input');
	        }
	    });
	    if(validate==1){
	        $.ajax({
	            url: 'ajax.php',
	            data: 'action=send_form&'+form.serialize(),
	            success: function(data){
	                $.fancybox.open(paramsFancy);
	                $('.validate').val('');
	            }
	        });
	        
	    }else{
	        /*alert(validate_msg);*/
	    } 
	});

	function product(){
		var productWrap = 0;
		$('.product_wrap').each(function(){
			var $block = $(this),
				$child = $block.find('.product_block'),
				strongHeight = 0,
				dlHeight = 0,
				bHeight = 0;
			var strongHeightMass = new Array(),
				dlHeightMass = new Array(),
				bHeightMass = new Array();
			strongHeightMass[productWrap] = new Array();
			dlHeightMass[productWrap] = new Array();
			bHeightMass[productWrap] = new Array();

			for (var i = 0; i < $child.length; i++) {

				thisStrongHeight = $child.eq(i).find('strong').height();
				strongHeightMass[productWrap][i] = thisStrongHeight;

				thisDlHeight = $child.eq(i).find('dl').height();
				dlHeightMass[productWrap][i] = thisDlHeight;

				thisBHeight = $child.eq(i).find('dl+b').height();
				bHeightMass[productWrap][i] = thisBHeight;
			}

			strongHeight = Math.max.apply(Math, strongHeightMass[productWrap]);
			dlHeight = Math.max.apply(Math, dlHeightMass[productWrap]);
			bHeight = Math.max.apply(Math, bHeightMass[productWrap]);

			$child.find('strong').css('height', strongHeight);
			$child.find('dl').css('height', dlHeight);
			$child.find('dl+b').css('height', bHeight);

			//console.log(dlHeight + ' ');

			productWrap++;
		});
	};
	product();
	$(window).resize(function(){
		product();
	});


	

});

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 200) {
        $(".menu").addClass("fixed");
    } else {
        $(".menu").removeClass("fixed");
    }
});