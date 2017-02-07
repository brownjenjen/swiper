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
	
var user='';
var userip='';
var count=0;
/*
$.ajax({ url: '//freegeoip.net/json/',async:true, type: 'POST', dataType: 'jsonp', success: function(location) 
{ 
var ip = location.ip; 
var country_code = location.country_code; 
var country_name = location.country_name; 
var region_code = location.region_code; 
var region_name = location.region_name; 
var city = location.city; 
var zip_code = location.zip_code; 
var time_zone = location.time_zone; 
var latitude = location.latitude; 
var longitude = location.longitude; 
var metro_code= location.metro_code; 
var timestamp = Number(new Date());
user = ip+"|"+country_code+"|"+country_name+"|"+region_code+"|"+region_name+"|"+city+"|"+zip_code+"|"+time_zone+"|"+latitude+"|"+metro_code+"|"+timestamp+"|";
if(ip!=userip){userip=ip;}
//_gaq.push(['_trackEvent','IP|'+ip, user, window.location.href+'|'+document.referrer]); 
//console.log(ip, user, window.location.href+'|'+document.referrer);
}});
*/
    var getSelectorComponents = function($el) {
        var components = [];
        
        var id = $el.attr('id');
        if (typeof(id)!='undefined' && /[^\s]/.test(id)) {
            components.push('#'+id);
        }

        var classes = $el.attr('class');
        if (typeof(classes)!='undefined' && /[^\s]/.test(classes)) {
            classes = '.' + classes.split(/\s+/).join(' .');
            components = components.concat( classes.split(' ') );
        }

        components.push($el[0].tagName);
        return components;
    };
    var getSelectorFromComponents = function(components) {
        return components[components.length-1] + components.slice(0, -1).join('');
    };

var getPointerEvent = function(event) {
    return event.originalEvent.targetTouches ? event.originalEvent.targetTouches[0] : event;
};


var last, diff;
var lastEvent='';
var $touchArea = $("body");
var touchStarted = false,    currX = 0,    currY = 0,    cachedX = 0,    cachedY = 0;
var lastX=0;var lastY=0;
var move_str='';
var nodeName='';
var ads=-1;
var done=0;
var param='';
var track='';
var settings_str='';
var scrollPercent=0;

	//	$("*").click(function(event) { // when someone clicks these links
$touchArea.on('touchstart mousedown', function(event){
         event.preventDefault();
         event.stopPropagation();
    var pointer = getPointerEvent(event);
    cachedX  =  currX = pointer.pageX;
    cachedY  = currY  = pointer.pageY;
touchStarted = true;

  
			var href = $(event.target).closest("div.swiper-slide").find("a.article").attr("href");
			var term = $(event.target).closest("div.swiper-slide").find("div.term").text();
			var time = $(event.target).closest("div.swiper-slide").find("time.timeago").text();
			var tag =  $("ul.TAGS li a").text();
			var title = $("h2.title").text();
			var text = $(event.target).text();
			var type = event.type;
			var width = $(document).width();
			var height = $(document).height();
			var percent = height/100;
			var percent2 = +parseInt(pointer.pageY/percent);
			//var x= event.clientX;
			//var y= event.clientY;
		        nodeName=event.target.nodeName;	
/* */
var selectedTag = 'cdo-selected';
$('.'+selectedTag).removeClass(selectedTag).css('box-shadow', 'none');
var $target = $(event.target).css('box-shadow', '0 0 0 0 rgba(255,100,0,0)');
var path = [];
$target.parents().each(function() {path.push( getSelectorComponents( $(this) ) );});path.splice(0, 0, getSelectorComponents($target));
var uniqueContextPath = [];
var i = 0;
        var $context = $(document.body);
        while (path.length > 0 && i < path.length) {

            var $testQuery;
            // find the nearest parent that has a unique selector (within any previously determined context, otherwise within the DOM)
            for (i = 0; i < path.length; i++) {
                $testQuery = $(getSelectorFromComponents(path[i]), $context);
                if ($testQuery.length == 1) {
                    break;
                }
            }
            if (i < path.length) {
                $context = $testQuery;
                uniqueContextPath.push(path[i]);
                path.splice(i, path.length);
                // reset i to make sure we repeat the loop
                i = 0;
            }

        }

        var contextSelector = $(uniqueContextPath).map(function() { return getSelectorFromComponents(this); }).get().join(' ');
       // console.log( contextSelector );
       // console.log( $(contextSelector).length );
        $target.addClass(selectedTag);

/* */		
if ( last ) {diff = event.timeStamp - last;}else{diff = event.timeStamp;}
track = title+'|'+term+'|'+time+'|'+contextSelector+'|'+href+'|'+window.location.href+'|'+tag+'|'+document.referrer+'|'+ua+'|';
//if(lastEvent!="touchstart" && (lastX!=parseInt(pointer.pageY) || lastY!=parseInt(pointer.pageX))){
count++;
if(pointer.pageY>ad_min[0] && pointer.pageY<ad_max[0]){ads=0;}
if(pointer.pageY>ad_min[1] && pointer.pageY<ad_max[1]){ads=1;}
if(pointer.pageY>ad_min[2] && pointer.pageY<ad_max[2]){ads=2;}

if(ads!=-1)
{
move_str = "INS"+ ads+" "+ad_height[ads]+" "+parseInt(ad_min[ads])+" "+parseInt(ad_max[ads])+" ["+scrollPercent+"%] "+percent2+"% |"+window.location.href+"|"+contextSelector+"|"+parseInt(pointer.pageX)+"|"+parseInt(pointer.pageY)+"|"+width+"|"+height+"|"+parseInt(event.timeStamp)+"|"+userip+"|Touchstarted|"+event.type+"|,"+move_str;
param="INS"+ ads+"|"+window.location.href+"|"+document.referrer+"|"+screen.width+"|"+screen.height+"|"+contextSelector;
_gaq.push(['_trackEvent',param,move_str ,track+"||"+user+"||TOUCHSTART||"+scrollPercent+"%"]); 	
}
//var occu = occurrences(text, "adsbygoogle");
//if(nodeName=='INS'){var name='INS';} else {var name=occu+'|ADS';}


//_gaq.push(['_trackEvent',window.location.href+"|"+screen.width+"|"+screen.height+"|"+name,move_str ,track+"||"+user+"||"+occu]); 



lastX=parseInt(pointer.pageX);
lastY=parseInt(pointer.pageY);
    last = event.timeStamp;
     lastEvent="touchstart";
  // console.log("touchstart|"+pointer.pageX+"|"+pointer.pageY);
//}
//_gaq.push(['_trackEvent',window.location.hostname,tag+"|"+parseInt(cachedX)+"|"+parseInt(cachedY)+"|"+width+"("+screen.width+")|"+height+"("+screen.height+")|"+type ,track+"||"+user]); 
setTimeout(function (){
if ((cachedX === currX) && !touchStarted && (cachedY === currY)) {


if(ads!=-1)
{
move_str = "INS"+ ads+" "+ad_height[ads]+" "+parseInt(ad_min[ads])+" "+parseInt(ad_max[ads])+" ["+scrollPercent+"%] "+scrollPercent+"% |"+window.location.href+"|"+contextSelector+"|"+parseInt(pointer.pageX)+"|"+parseInt(pointer.pageY)+"|"+width+"|"+height+"|"+parseInt(event.timeStamp)+"|"+userip+"|Tap|"+event.type+"|," +move_str;	
param="INS"+ ads+"|"+window.location.href+"|"+document.referrer+"|"+screen.width+"|"+screen.height+"|"+contextSelector;	
_gaq.push(['_trackEvent',param,move_str ,track+"||"+user+"||TAP||"+scrollPercent+"%"]); 
}
//console.log("tap|"+pointer.pageX+"|"+pointer.pageY);
//_gaq.push(['_trackEvent',window.location.href+"|"+screen.width+"|"+screen.height,move_str ,track+"||"+user]); 
 lastEvent="tap";
 
	
}
    },200);

ads=-1;	
});


$touchArea.on('touchend mouseup touchcancel', function(event){
         event.preventDefault();
         event.stopPropagation();
    var pointer = getPointerEvent(event);
    lastX = pointer.pageX;
    lastY  = pointer.pageY;
	  touchStarted = false;
	  
			var href = $(event.target).closest("div.swiper-slide").find("a.article").attr("href");
			var term = $(event.target).closest("div.swiper-slide").find("div.term").text();
			var time = $(event.target).closest("div.swiper-slide").find("time.timeago").text();
			var tag =  $("ul.TAGS li a").text();
			var title = $("h2.title").text();
			var text = $(event.target).text();
			var type = event.type;
			var width = $(document).width();
			var height = $(document).height();
			var percent = height/100;
			var percent2 = +parseInt(pointer.pageY/percent);
	
	/* */
var selectedTag = 'cdo-selected';
$('.'+selectedTag).removeClass(selectedTag).css('box-shadow', 'none');
var $target = $(event.target).css('box-shadow', '0 0 0 0 rgba(255,100,0,0)');
var path = [];
$target.parents().each(function() {path.push( getSelectorComponents( $(this) ) );});path.splice(0, 0, getSelectorComponents($target));
var uniqueContextPath = [];
 var i = 0;
        var $context = $(document.body);
        while (path.length > 0 && i < path.length) {

            var $testQuery;
            // find the nearest parent that has a unique selector (within any previously determined context, otherwise within the DOM)
            for (i = 0; i < path.length; i++) {
                $testQuery = $(getSelectorFromComponents(path[i]), $context);
                if ($testQuery.length == 1) {
                    break;
                }
            }
            if (i < path.length) {
                $context = $testQuery;
                uniqueContextPath.push(path[i]);
                path.splice(i, path.length);
                // reset i to make sure we repeat the loop
                i = 0;
            }

        }

        var contextSelector = $(uniqueContextPath).map(function() { return getSelectorFromComponents(this); }).get().join(' ');
      //  console.log( contextSelector );
      //  console.log( $(contextSelector).length );
        $target.addClass(selectedTag);

/* */


			//var x= event.clientX;
			//var y= event.clientY;
			nodeName=event.target.nodeName;	
if(pointer.pageY>ad_min[0] && pointer.pageY<ad_max[0]){ads=0;}
if(pointer.pageY>ad_min[1] && pointer.pageY<ad_max[1]){ads=1;}
if(pointer.pageY>ad_min[2] && pointer.pageY<ad_max[2]){ads=2;}			
			
track = title+'|'+term+'|'+time+'|'+contextSelector+'|'+href+'|'+window.location.href+'|'+tag+'|'+document.referrer+'|'+ua+'|';

if(ads!=-1)
{
move_str ="INS"+ ads+" "+ad_height[ads]+" "+parseInt(ad_min[ads])+" "+parseInt(ad_max[ads])+" ["+scrollPercent+"%] "+percent2+"% |"+window.location.href+"|"+contextSelector+"|"+parseInt(pointer.pageX)+"|"+parseInt(pointer.pageY)+"|"+width+"|"+height+"|"+parseInt(event.timeStamp)+"|"+userip+"|Touchended|"+event.type+"|," +move_str;
param="INS"+ ads+"|"+window.location.href+"|"+document.referrer+"|"+screen.width+"|"+screen.height+"|"+contextSelector;
_gaq.push(['_trackEvent',param,move_str ,track+"||"+user+"||TOUCHEND||"+scrollPercent+"%"]); 
}
//var occu = occurrences(text, "adsbygoogle");
//if(nodeName=='INS'){var name='INS';} else {var name=occu+'|ADS';}
//_gaq.push(['_trackEvent',window.location.href+"|"+screen.width+"|"+screen.height+"|"+name,move_str ,track+"||"+user+"||"+occu]); 

//console.log("touchend|"+pointer.pageX+"|"+pointer.pageY);
lastEvent="touchend";
	ads=-1;
});


$touchArea.on('touchmove mousemove', function(event){
         event.preventDefault();
         event.stopPropagation();
    var pointer = getPointerEvent(event);
  currX = pointer.pageX;
   currY  = pointer.pageY;

			var href = $(event.target).closest("div.swiper-slide").find("a.article").attr("href");
			var term = $(event.target).closest("div.swiper-slide").find("div.term").text();
			var time = $(event.target).closest("div.swiper-slide").find("time.timeago").text();
			var tag =  $("ul.TAGS li a").text();
			var title = $("h2.title").text();
			var text = $(event.target).text();
			var type = event.type;
			var width = $(document).width();
			var height = $(document).height();
			//var x= event.clientX;
			//var y= event.clientY;
			var percent = height/100;
			var percent2 = +parseInt(pointer.pageY/percent);
			nodeName=event.target.nodeName;	
			
/* */
var selectedTag = 'cdo-selected';
$('.'+selectedTag).removeClass(selectedTag).css('box-shadow', 'none');
var $target = $(event.target).css('box-shadow', '0 0 0 0 rgba(255,100,0,0)');
var path = [];
$target.parents().each(function() {path.push( getSelectorComponents( $(this) ) );});path.splice(0, 0, getSelectorComponents($target));
var uniqueContextPath = [];
 var i = 0;
        var $context = $(document.body);
        while (path.length > 0 && i < path.length) {

            var $testQuery;
            // find the nearest parent that has a unique selector (within any previously determined context, otherwise within the DOM)
            for (i = 0; i < path.length; i++) {
                $testQuery = $(getSelectorFromComponents(path[i]), $context);
                if ($testQuery.length == 1) {
                    break;
                }
            }
            if (i < path.length) {
                $context = $testQuery;
                uniqueContextPath.push(path[i]);
                path.splice(i, path.length);
                // reset i to make sure we repeat the loop
                i = 0;
            }

        }

        var contextSelector = $(uniqueContextPath).map(function() { return getSelectorFromComponents(this); }).get().join(' ');
       // console.log( contextSelector );
      //  console.log( $(contextSelector).length );
        $target.addClass(selectedTag);

/* */	
			
track = title+'|'+term+'|'+time+'|'+contextSelector+'|'+href+'|'+window.location.href+'|'+tag+'|'+document.referrer+'|'+ua+'|';
//if(touchStarted && lastEvent!='swiping' &&  (lastX!=parseInt(pointer.pageX) || lastY!=parseInt(pointer.pageY)))   
//{
/*
if(pointer.pageY>ad_min[0] && pointer.pageY<ad_max[0]){ads=0;}
if(pointer.pageY>ad_min[1] && pointer.pageY<ad_max[1]){ads=1;}
if(pointer.pageY>ad_min[2] && pointer.pageY<ad_max[2]){ads=2;}
if(ads!=-1)
{
*/
move_str = "["+scrollPercent+"%] "+percent2+"% |"+window.location.href+"|"+contextSelector+"|"+parseInt(pointer.pageX)+"|"+parseInt(pointer.pageY)+"|"+width+"|"+height+"|"+parseInt(event.timeStamp)+"|"+userip+"|Swiping|"+event.type+"|," + move_str;
//param="INS"+ ads+"|"+window.location.href+"|"+document.referrer+"|"+screen.width+"|"+screen.height+"|"+contextSelector;
//_gaq.push(['_trackEvent',param,move_str ,track+"||"+user+"||SWIPING||"+scrollPercent+"%"]); 	
//}
//var occu = occurrences(text, "adsbygoogle");
//if(nodeName=='INS'){var name='INS';} else {var name=occu+'|ADS';}

//	_gaq.push(['_trackEvent',window.location.href+"|"+screen.width+"|"+screen.height+"|"+name,move_str ,track+"||"+user+"||"+occu]); 
//console.log("swiping|"+pointer.pageX+"|"+pointer.pageY);
lastEvent="swiping";
lastX=parseInt(pointer.pageX);
lastY==parseInt(pointer.pageY);
ads=-1;
//}
	
});

  
     var IsDuplicateScrollEvent = 0;
 
        $(document).ready(function () {
            SetupGoogleAnalyticsTrackEvents();
        });
 
        function SetupGoogleAnalyticsTrackEvents()
        {
            TrackEventsForMinimumPageScroll();
        }
 
        function TrackEventsForMinimumPageScroll()
        {
           $(window).scroll(function(){
           scrollPercent = GetScrollPercent();
            
             if(scrollPercent > 90)
             {
               if(IsDuplicateScrollEvent == 0)
               { 
                 IsDuplicateScrollEvent = 1;
//             
       
               }
             }
           }); 
        }
 
        function GetScrollPercent()
        {
             var bottom = $(window).height() + $(window).scrollTop();
             var height = $(document).height();
 
             return Math.round(100*bottom/height);
        }
                                 
  
 

/*
window.addEventListener("beforeunload", function(event) {
if(done!=1){	
_gaq.push(['_trackEvent',param,move_str ,track+"||"+user+"||beforeunload||"+scrollPercent+"%"]); 
done=1;
}
});
window.addEventListener("pagehide", function(event) {
if(done!=1){	
_gaq.push(['_trackEvent',param,move_str ,track+"||"+user+"||pagehide||"+scrollPercent+"%"]); 
done=1;
}
});
window.addEventListener("popstate", function(event) {
if(done!=1){	
_gaq.push(['_trackEvent',param,move_str ,track+"||"+user+"||popstate||"+scrollPercent+"%"]); 
done=1;
}
});
window.addEventListener("unload", function(event) {
if(done!=1){	
_gaq.push(['_trackEvent',param,move_str ,track+"||"+user+"||unload||"+scrollPercent+"%"]); 
done=1;
}
});
*/
		 
});


