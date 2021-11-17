$(document).ready(function(){
	$('#slider-01').slick({
        autoplay:true,
        autoplaySpeed:3200,
		arrows:false,
		dots:false,
        pauseOnDotsHover:true,
		slidesToShow:1,
		speed:800,
		responsive:[
			{
				breakpoint: 769,
				settings: {
					arrows:false,
				}
			},
			{
				breakpoint: 640,
				settings: {
                    arrows:false,
				}
			}
		]
	});

	$('#sl-02').slick({
        autoplay:false,
        // autoplaySpeed:3200,
		arrows:true,
		dots:false,
		fade: true,
		cssEase: 'linear',
        pauseOnDotsHover:true,
		slidesToShow:1,
		speed:350,
		responsive:[
			{
				breakpoint: 769,
				settings: {
					arrows:true,
				}
			},
			{
				breakpoint: 640,
				settings: {
                    arrows:true,
				}
			}
		]
	});
	$('#sl-03').slick({
        autoplay:false,
        // autoplaySpeed:3200,
		arrows:true,
		dots:false,
		fade: true,
		cssEase: 'linear',
        pauseOnDotsHover:true,
		slidesToShow:1,
		speed:350,
		responsive:[
			{
				breakpoint: 769,
				settings: {
					arrows:true,
				}
			},
			{
				breakpoint: 640,
				settings: {
                    arrows:true,
				}
			}
		]
	});
	$('#sl-04').slick({
        autoplay:false,
        // autoplaySpeed:3200,
		arrows:true,
		dots:false,
		fade: true,
		cssEase: 'linear',
        pauseOnDotsHover:true,
		slidesToShow:1,
		speed:350,
		responsive:[
			{
				breakpoint: 769,
				settings: {
					arrows:true,
				}
			},
			{
				breakpoint: 640,
				settings: {
                    arrows:true,
				}
			}
		]
	});
});
