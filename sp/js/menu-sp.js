// =======================================================================
// ナビゲーションアイコン
// =======================================================================

// アコーディオンメニュー
// jQueryデザインブック
var h1 = $('header').outerHeight();

$(window).load(function(e) {
  var hash1= location.hash;
  var $root = $('html, body');
  
  if(hash1!=""){  
   var top01 = $(hash1).offset();
   $('html,body').animate({ scrollTop:top01.top-h1}, 200);  
  }
});


// アイコンをクリックしたら
$('.navBtn, #close-btn, .nav a').click(function() {
		$('header').toggleClass('navOpen'); // class付与/削除
		$('#wrap').toggleClass('fixed'); // コンテンツを固定/解除
		$('.overlay').toggle(); // オーバーレイ表示/非表示

		// スマホナビゲーションがヘッダーに被らないようにする
		var headerH = $('header').outerHeight();
		if ($('header').hasClass('navOpen')) {
				$('header nav').css('marginTop', headerH + 'px'); //ヘッダーの高さ分マージンを付ける
		}
});

// オーバーレイをクリックしたら
$('.overlay').click(function() {
		$(this).fadeOut(300); // オーバーレイ非表示
		$('header').removeClass('navOpen'); // class削除
		$('#wrap').removeClass('fixed'); // 固定解除
});



$(function($){
 $(function(){
  $('a[href^="#"]').click(function(){
   if ( $( $(this).attr('href') ).length ) {
    var p = $( $(this).attr('href') ).offset();
    if(p.top <= h1){
     $('html,body').animate({ scrollTop: p.top-h1 }, 200);
    }
    else{
     $('html,body').animate({ scrollTop: p.top-h1 }, 200);
    }
    
   }
   return false;
  });
 });
})(jQuery);
