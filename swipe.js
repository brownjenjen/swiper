function getReplacementString(str){
    return str.replace(/https?\:\/\/([^\s]*)/gi,function(match){
        return match.substring(0,50) + "..."
    });
 }
 function occurrences(string, subString, allowOverlapping) {

    string += "";
    subString += "";
    if (subString.length <= 0) return (string.length + 1);

    var n = 0,
        pos = 0,
        step = allowOverlapping ? 1 : subString.length;

    while (true) {
        pos = string.indexOf(subString, pos);
        if (pos >= 0) {
            ++n;
            pos += step;
        } else break;
    }
    return n;
}
 function in_array(needle, haystack, argStrict) {
    var key = '',
    strict = !! argStrict;
  if (strict) {
    for (key in haystack) {
      if (haystack[key] === needle) {
        return true;
      }
    }
  } else {
    for (key in haystack) {
      if (haystack[key] == needle) {
        return true;
      }
    }
  }

  return false;
}
var sites='';
var ua='';
$(document).ready(function() {
var adheader = document.getElementsByClassName("ad-header")[0];
if (typeof adheader !== 'undefined'){
_gaq.push(['_trackEvent','ADS|'+window.location.href, document.referrer, window.location.href+'|'+document.referrer]); 
}	
	
if(window.location.hostname.indexOf("tumblr.com") !== -1){
	$(".POSTS").remove();
	window.location.replace("http://www.news-junkies.com");
}
	
	
//_gaq.push(['_trackEvent','Load: '+ linkurl+'|'+document.title+'|'+arr['tumblelog']['name']+'|'+arr['posts'].length, window.location.href]); 
	//$("*").each(function() {
	//	var href = $(this).attr("href");
	//	var target = $(this).attr("target");
	//	var text = $(this).text();
	//	console.log(href);
	//	console.log(target);
	//	console.log(text);
var ad_min=[];
var ad_max=[];
var ad_height=[];
for(var i=0;i<3;i++){ 
var ad = $('.adsbygoogle').eq(i);
var position= ad.position();
var offset= ad.offset();   /*console.log(position);*/
if (typeof offset !== 'undefined'){
ad_min[i]=offset.top;
ad_max[i]=offset.top+ad.height();
ad_height[i]=ad.height();
console.log(offset.top+" "+ad.height());
}


}

	//$("div.CONTENT").css("background","none");
//$("div.FOOTER").css("background","none");
//$("div.CENTER a img").remove();
//$(".CAPTION p").css("font-size","12px").css("line-height","14px").css("text-align","center").css("color","#999");
var woher = '';
if(document.referrer.indexOf("i5-news") !== -1){woher="INT";}	
if(document.referrer.indexOf("i7-news") !== -1){woher="INT";}		
if(document.referrer.indexOf("i9-news") !== -1){woher="INT";}		
if(document.referrer.indexOf("a6-news") !== -1){woher="INT";}		
if(document.referrer.indexOf("a8-news") !== -1){woher="INT";}		
if(document.referrer.indexOf("a10-news") !== -1){woher="INT";}		
if(document.referrer.indexOf("s6-news") !== -1){woher="INT";}		
if(document.referrer.indexOf("jkmesh") !== -1){woher="INT";}			
if(document.referrer.indexOf("news-junkies") !== -1){woher="INT";}		
if(document.referrer.indexOf("ustravelapp") !== -1){woher="INT";}		
if(document.referrer.indexOf("news897") !== -1){woher="INT";}		

if(document.referrer.indexOf("msn") !== -1){woher="BI";}				
if(document.referrer.indexOf("yandex") !== -1){woher="YN";}			
if(document.referrer.indexOf("flipboard") !== -1){woher="FL";}		
if(document.referrer.indexOf("yahoo") !== -1){woher="YA";}	
if(document.referrer.indexOf("paper.li") !== -1){woher="PA";}	
if(document.referrer.indexOf("goo.gl") !== -1){woher="GO";}
if(document.referrer.indexOf("google") !== -1){woher="GO";}
if(document.referrer.indexOf("bing") !== -1){woher="BI";}	
if(document.referrer.indexOf("t.co") !== -1){woher="TW";}
if(document.referrer.indexOf("twitter") !== -1){woher="TW";}
if(document.referrer.indexOf("facebook") !== -1){woher="FB";}	
if(document.referrer.indexOf("pinterest") !== -1){woher="PI";}
if(document.referrer.indexOf("umblr.com") !== -1){woher="TU";}
if(document.referrer.indexOf("linkis") !== -1){woher="LI";}
if(document.referrer.indexOf("scoop") !== -1){woher="SC";}	
if(window.location.href.indexOf("tumblr.com") !== -1){woher="EXT";}

	
_gaq.push(['_trackEvent',woher+'|'+window.location.href, document.referrer, window.location.href+'|'+document.referrer]); 
woher='';
});


