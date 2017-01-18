// JavaScript Document
	
	
$(document).ready(function(e) {
	 $('.btn-acc').click(function(){	
	 		if($(this).hasClass('close')){
				$(this).next().slideDown(1000);
				$(this).removeClass('close').addClass('open');
			} 
			else {
				$(this).next().slideUp(500);
				$(this).removeClass('open').addClass('close');
			}
			
	 });
	
});