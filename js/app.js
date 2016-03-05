
$(window).scroll(function (event) {
   	delegateScroll();
});

delegateScroll();
function delegateScroll() {
	$('section').each(function(index){
		if(isScrolledIntoView('#sec'+index) && ! $('#sec'+index).hasClass('finish')) {
			bringElems('#sec'+index);
		}
	});
}

function bringElems(section) {
	$(section).addClass('finish');
	$(section+' .anim').each(function(index){
		setTimeout(function(){
			$(section+' .anim_'+index).addClass('fadeInDown animated');
		},1000*index);
	});
}

function isScrolledIntoView(elem)
{
    var $elem = $(elem);
    var $window = $(window);

    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();

    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$('.slider').slick({
	infinite:false,
	dots:false,
	arrows:false,
	speed:200,
	slidesToShow: 1
});


$('.slider-arrow').on('click', function(e){
	e.preventDefault();
	var func = $(this).data('func');
	$('.slider').slick(func);
});
