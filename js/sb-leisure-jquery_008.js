function onYouTubePlayerAPIReady(){ytp.YTAPIReady||(ytp.YTAPIReady=!0,jQuery(document).trigger("YTAPIReady"))}var ytp=ytp||{};!function(jQuery,ytp){var nAgt=navigator.userAgent;if(!jQuery.browser){jQuery.browser={},jQuery.browser.mozilla=!1,jQuery.browser.webkit=!1,jQuery.browser.opera=!1,jQuery.browser.safari=!1,jQuery.browser.chrome=!1,jQuery.browser.msie=!1,jQuery.browser.ua=nAgt,jQuery.browser.name=navigator.appName,jQuery.browser.fullVersion=""+parseFloat(navigator.appVersion),jQuery.browser.majorVersion=parseInt(navigator.appVersion,10);var nameOffset,verOffset,ix;if(-1!=(verOffset=nAgt.indexOf("Opera")))jQuery.browser.opera=!0,jQuery.browser.name="Opera",jQuery.browser.fullVersion=nAgt.substring(verOffset+6),-1!=(verOffset=nAgt.indexOf("Version"))&&(jQuery.browser.fullVersion=nAgt.substring(verOffset+8));else if(-1!=(verOffset=nAgt.indexOf("MSIE")))jQuery.browser.msie=!0,jQuery.browser.name="Microsoft Internet Explorer",jQuery.browser.fullVersion=nAgt.substring(verOffset+5);else if(-1!=nAgt.indexOf("Trident")){jQuery.browser.msie=!0,jQuery.browser.name="Microsoft Internet Explorer";var start=nAgt.indexOf("rv:")+3,end=start+4;jQuery.browser.fullVersion=nAgt.substring(start,end)}else-1!=(verOffset=nAgt.indexOf("Chrome"))?(jQuery.browser.webkit=!0,jQuery.browser.chrome=!0,jQuery.browser.name="Chrome",jQuery.browser.fullVersion=nAgt.substring(verOffset+7)):-1!=(verOffset=nAgt.indexOf("Safari"))?(jQuery.browser.webkit=!0,jQuery.browser.safari=!0,jQuery.browser.name="Safari",jQuery.browser.fullVersion=nAgt.substring(verOffset+7),-1!=(verOffset=nAgt.indexOf("Version"))&&(jQuery.browser.fullVersion=nAgt.substring(verOffset+8))):-1!=(verOffset=nAgt.indexOf("AppleWebkit"))?(jQuery.browser.webkit=!0,jQuery.browser.name="Safari",jQuery.browser.fullVersion=nAgt.substring(verOffset+7),-1!=(verOffset=nAgt.indexOf("Version"))&&(jQuery.browser.fullVersion=nAgt.substring(verOffset+8))):-1!=(verOffset=nAgt.indexOf("Firefox"))?(jQuery.browser.mozilla=!0,jQuery.browser.name="Firefox",jQuery.browser.fullVersion=nAgt.substring(verOffset+8)):(nameOffset=nAgt.lastIndexOf(" ")+1)<(verOffset=nAgt.lastIndexOf("/"))&&(jQuery.browser.name=nAgt.substring(nameOffset,verOffset),jQuery.browser.fullVersion=nAgt.substring(verOffset+1),jQuery.browser.name.toLowerCase()==jQuery.browser.name.toUpperCase()&&(jQuery.browser.name=navigator.appName));-1!=(ix=jQuery.browser.fullVersion.indexOf(";"))&&(jQuery.browser.fullVersion=jQuery.browser.fullVersion.substring(0,ix)),-1!=(ix=jQuery.browser.fullVersion.indexOf(" "))&&(jQuery.browser.fullVersion=jQuery.browser.fullVersion.substring(0,ix)),jQuery.browser.majorVersion=parseInt(""+jQuery.browser.fullVersion,10),isNaN(jQuery.browser.majorVersion)&&(jQuery.browser.fullVersion=""+parseFloat(navigator.appVersion),jQuery.browser.majorVersion=parseInt(navigator.appVersion,10)),jQuery.browser.version=jQuery.browser.majorVersion}jQuery.browser.android=/Android/i.test(nAgt),jQuery.browser.blackberry=/BlackBerry|BB|PlayBook/i.test(nAgt),jQuery.browser.ios=/iPhone|iPad|iPod|webOS/i.test(nAgt),jQuery.browser.operaMobile=/Opera Mini/i.test(nAgt),jQuery.browser.kindle=/Kindle|Silk/i.test(nAgt),jQuery.browser.windowsMobile=/IEMobile|Windows Phone/i.test(nAgt),jQuery.browser.mobile=jQuery.browser.android||jQuery.browser.blackberry||jQuery.browser.ios||jQuery.browser.windowsMobile||jQuery.browser.operaMobile||jQuery.browser.kindle,jQuery.fn.CSSAnimate=function(a,b,c,d,e){function f(a){return a.replace(/([A-Z])/g,function(a){return"-"+a.toLowerCase()})}function g(a,b){return"string"!=typeof a||a.match(/^[\-0-9\.]+$/)?""+a+b:a}return jQuery.support.CSStransition=function(){var a=(document.body||document.documentElement).style;return void 0!==a.transition||void 0!==a.WebkitTransition||void 0!==a.MozTransition||void 0!==a.MsTransition||void 0!==a.OTransition}(),this.each(function(){var h=this,i=jQuery(this);h.id=h.id||"CSSA_"+(new Date).getTime();var j=j||{type:"noEvent"};if(h.CSSAIsRunning&&h.eventType==j.type)h.CSSqueue=function(){i.CSSAnimate(a,b,c,d,e)};else if(h.CSSqueue=null,h.eventType=j.type,0!==i.length&&a){if(h.CSSAIsRunning=!0,"function"==typeof b&&(e=b,b=jQuery.fx.speeds._default),"function"==typeof c&&(e=c,c=0),"function"==typeof d&&(e=d,d="cubic-bezier(0.65,0.03,0.36,0.72)"),"string"==typeof b)for(var k in jQuery.fx.speeds){if(b==k){b=jQuery.fx.speeds[k];break}b=jQuery.fx.speeds._default}if(b||(b=jQuery.fx.speeds._default),jQuery.support.CSStransition){j={"default":"ease","in":"ease-in",out:"ease-out","in-out":"ease-in-out",snap:"cubic-bezier(0,1,.5,1)",easeOutCubic:"cubic-bezier(.215,.61,.355,1)",easeInOutCubic:"cubic-bezier(.645,.045,.355,1)",easeInCirc:"cubic-bezier(.6,.04,.98,.335)",easeOutCirc:"cubic-bezier(.075,.82,.165,1)",easeInOutCirc:"cubic-bezier(.785,.135,.15,.86)",easeInExpo:"cubic-bezier(.95,.05,.795,.035)",easeOutExpo:"cubic-bezier(.19,1,.22,1)",easeInOutExpo:"cubic-bezier(1,0,0,1)",easeInQuad:"cubic-bezier(.55,.085,.68,.53)",easeOutQuad:"cubic-bezier(.25,.46,.45,.94)",easeInOutQuad:"cubic-bezier(.455,.03,.515,.955)",easeInQuart:"cubic-bezier(.895,.03,.685,.22)",easeOutQuart:"cubic-bezier(.165,.84,.44,1)",easeInOutQuart:"cubic-bezier(.77,0,.175,1)",easeInQuint:"cubic-bezier(.755,.05,.855,.06)",easeOutQuint:"cubic-bezier(.23,1,.32,1)",easeInOutQuint:"cubic-bezier(.86,0,.07,1)",easeInSine:"cubic-bezier(.47,0,.745,.715)",easeOutSine:"cubic-bezier(.39,.575,.565,1)",easeInOutSine:"cubic-bezier(.445,.05,.55,.95)",easeInBack:"cubic-bezier(.6,-.28,.735,.045)",easeOutBack:"cubic-bezier(.175, .885,.32,1.275)",easeInOutBack:"cubic-bezier(.68,-.55,.265,1.55)"},j[d]&&(d=j[d]);var l="",m="transitionEnd";jQuery.browser.webkit?(l="-webkit-",m="webkitTransitionEnd"):jQuery.browser.mozilla?(l="-moz-",m="transitionend"):jQuery.browser.opera?(l="-o-",m="otransitionend"):jQuery.browser.msie&&(l="-ms-",m="msTransitionEnd"),j=[];for(n in a)k=n,"transform"===k&&(k=l+"transform",a[k]=a[n],delete a[n]),"filter"===k&&(k=l+"filter",a[k]=a[n],delete a[n]),("transform-origin"===k||"origin"===k)&&(k=l+"transform-origin",a[k]=a[n],delete a[n]),"x"===k&&(k=l+"transform",a[k]=a[k]||"",a[k]+=" translateX("+g(a[n],"px")+")",delete a[n]),"y"===k&&(k=l+"transform",a[k]=a[k]||"",a[k]+=" translateY("+g(a[n],"px")+")",delete a[n]),"z"===k&&(k=l+"transform",a[k]=a[k]||"",a[k]+=" translateZ("+g(a[n],"px")+")",delete a[n]),"rotate"===k&&(k=l+"transform",a[k]=a[k]||"",a[k]+=" rotate("+g(a[n],"deg")+")",delete a[n]),"rotateX"===k&&(k=l+"transform",a[k]=a[k]||"",a[k]+=" rotateX("+g(a[n],"deg")+")",delete a[n]),"rotateY"===k&&(k=l+"transform",a[k]=a[k]||"",a[k]+=" rotateY("+g(a[n],"deg")+")",delete a[n]),"rotateZ"===k&&(k=l+"transform",a[k]=a[k]||"",a[k]+=" rotateZ("+g(a[n],"deg")+")",delete a[n]),"scale"===k&&(k=l+"transform",a[k]=a[k]||"",a[k]+=" scale("+g(a[n],"")+")",delete a[n]),"scaleX"===k&&(k=l+"transform",a[k]=a[k]||"",a[k]+=" scaleX("+g(a[n],"")+")",delete a[n]),"scaleY"===k&&(k=l+"transform",a[k]=a[k]||"",a[k]+=" scaleY("+g(a[n],"")+")",delete a[n]),"scaleZ"===k&&(k=l+"transform",a[k]=a[k]||"",a[k]+=" scaleZ("+g(a[n],"")+")",delete a[n]),"skew"===k&&(k=l+"transform",a[k]=a[k]||"",a[k]+=" skew("+g(a[n],"deg")+")",delete a[n]),"skewX"===k&&(k=l+"transform",a[k]=a[k]||"",a[k]+=" skewX("+g(a[n],"deg")+")",delete a[n]),"skewY"===k&&(k=l+"transform",a[k]=a[k]||"",a[k]+=" skewY("+g(a[n],"deg")+")",delete a[n]),"perspective"===k&&(k=l+"transform",a[k]=a[k]||"",a[k]+=" perspective("+g(a[n],"px")+")",delete a[n]),0>j.indexOf(k)&&j.push(f(k));var n=j.join(","),o=function(){i.off(m+"."+h.id),clearTimeout(h.timeout),i.css(l+"transition",""),"function"==typeof e&&e(i),h.called=!0,h.CSSAIsRunning=!1,"function"==typeof h.CSSqueue&&(h.CSSqueue(),h.CSSqueue=null)},p={};jQuery.extend(p,a),p[l+"transition-property"]=n,p[l+"transition-duration"]=b+"ms",p[l+"transition-delay"]=c+"ms",p[l+"transition-style"]="preserve-3d",p[l+"transition-timing-function"]=d,setTimeout(function(){i.one(m+"."+h.id,o),i.css(p)},1),h.timeout=setTimeout(function(){i.called||!e?(i.called=!1,h.CSSAIsRunning=!1):(i.css(l+"transition",""),e(i),h.CSSAIsRunning=!1,"function"==typeof h.CSSqueue&&(h.CSSqueue(),h.CSSqueue=null))},b+c+100)}else{for(var n in a)"transform"===n&&delete a[n],"filter"===n&&delete a[n],"transform-origin"===n&&delete a[n],"auto"===a[n]&&delete a[n];e&&"string"!=typeof e||(e="linear"),i.animate(a,b,e)}}})};var getYTPVideoID=function(a){var b,c;return a.indexOf("youtu.be")>0?(b=a.substr(a.lastIndexOf("/")+1,a.length),c=b.indexOf("?list=")>0?b.substr(b.lastIndexOf("="),b.length):null,b=c?b.substr(0,b.lastIndexOf("?")):b):a.indexOf("http")>-1?(b=a.match(/[\\?&]v=([^&#]*)/)[1],c=a.indexOf("list=")>0?a.match(/[\\?&]list=([^&#]*)/)[1]:null):(b=a.length>15?null:a,c=b?null:a),{videoID:b,playlistID:c}};jQuery.mbYTPlayer={name:"jquery.mb.YTPlayer",version:"2.8.1",author:"Matteo Bicocchi",defaults:{containment:"body",ratio:"auto",videoURL:null,playlistURL:null,startAt:0,stopAt:0,autoPlay:!0,vol:100,addRaster:!1,opacity:1,quality:"default",mute:!1,loop:!0,showControls:!0,showAnnotations:!1,showYTLogo:!0,stopMovieOnClick:!1,stopMovieOnBlur:!0,realfullscreen:!0,gaTrack:!0,optimizeDisplay:!0,onReady:function(){}},controls:{play:"P",pause:"p",mute:"M",unmute:"A",onlyYT:"O",showSite:"R",ytLogo:"Y"},locationProtocol:"https:",buildPlayer:function(options){return this.each(function(){var YTPlayer=this,$YTPlayer=jQuery(YTPlayer);YTPlayer.loop=0,YTPlayer.opt={},$YTPlayer.addClass("mb_YTPlayer");var property=$YTPlayer.data("property")&&"string"==typeof $YTPlayer.data("property")?eval("("+$YTPlayer.data("property")+")"):$YTPlayer.data("property");"undefined"!=typeof property&&"undefined"!=typeof property.vol&&(property.vol=0==property.vol?property.vol=1:property.vol),jQuery.extend(YTPlayer.opt,jQuery.mbYTPlayer.defaults,options,property),YTPlayer.isRetina=window.retina||window.devicePixelRatio>1;var isIframe=function(){var a=!1;try{self.location.href!=top.location.href&&(a=!0)}catch(b){a=!0}return a};YTPlayer.canGoFullScreen=!(jQuery.browser.msie||jQuery.browser.opera||isIframe()),YTPlayer.canGoFullScreen||(YTPlayer.opt.realfullscreen=!1),$YTPlayer.attr("id")||$YTPlayer.attr("id","video_"+(new Date).getTime());var playerID="mbYTP_"+YTPlayer.id;YTPlayer.isAlone=!1,YTPlayer.hasFocus=!0;var videoID=this.opt.videoURL?getYTPVideoID(this.opt.videoURL).videoID:$YTPlayer.attr("href")?getYTPVideoID($YTPlayer.attr("href")).videoID:!1,playlistID=this.opt.videoURL?getYTPVideoID(this.opt.videoURL).playlistID:$YTPlayer.attr("href")?getYTPVideoID($YTPlayer.attr("href")).playlistID:!1;YTPlayer.videoID=videoID,YTPlayer.playlistID=playlistID,YTPlayer.opt.showAnnotations=YTPlayer.opt.showAnnotations?"0":"3";var playerVars={autoplay:0,modestbranding:1,controls:0,showinfo:0,rel:0,enablejsapi:1,version:3,playerapiid:playerID,origin:"*",allowfullscreen:!0,wmode:"transparent",iv_load_policy:YTPlayer.opt.showAnnotations};document.createElement("video").canPlayType&&jQuery.extend(playerVars,{html5:1}),jQuery.browser.msie&&jQuery.browser.version<9&&(this.opt.opacity=1);var playerBox=jQuery("<div/>").attr("id",playerID).addClass("playerBox"),overlay=jQuery("<div/>").css({position:"absolute",top:0,left:0,width:"100%",height:"100%"}).addClass("YTPOverlay");if(YTPlayer.isSelf="self"==YTPlayer.opt.containment,YTPlayer.opt.containment="self"==YTPlayer.opt.containment?jQuery(this):jQuery(YTPlayer.opt.containment),YTPlayer.isBackground="body"==YTPlayer.opt.containment.get(0).tagName.toLowerCase(),!YTPlayer.isBackground||!ytp.backgroundIsInited){var isPlayer=YTPlayer.opt.containment.is(jQuery(this));if(YTPlayer.canPlayOnMobile=isPlayer&&0==jQuery(this).children().length,isPlayer?YTPlayer.isPlayer=!0:$YTPlayer.hide(),jQuery.browser.mobile&&!YTPlayer.canPlayOnMobile)return $YTPlayer.remove(),void 0;if(YTPlayer.opt.addRaster){var classN="dot"==YTPlayer.opt.addRaster?"raster-dot":"raster";overlay.addClass(YTPlayer.isRetina?classN+" retina":classN)}else overlay.removeClass(function(a,b){var c=b.split(" "),d=[];return jQuery.each(c,function(a,b){/raster-.*/.test(b)&&d.push(b)}),d.push("retina"),d.join(" ")});var wrapper=jQuery("<div/>").addClass("mbYTP_wrapper").attr("id","wrapper_"+playerID);if(wrapper.css({position:"absolute",zIndex:0,minWidth:"100%",minHeight:"100%",left:0,top:0,overflow:"hidden",opacity:0}),playerBox.css({position:"absolute",zIndex:0,width:"100%",height:"100%",top:0,left:0,overflow:"hidden"}),wrapper.append(playerBox),YTPlayer.opt.containment.children().not("script, style").each(function(){"static"==jQuery(this).css("position")&&jQuery(this).css("position","relative")}),YTPlayer.isBackground?(jQuery("body").css({boxSizing:"border-box"}),wrapper.css({position:"fixed",top:0,left:0,zIndex:0,webkitTransform:"translateZ(0)"}),$YTPlayer.hide()):"static"==YTPlayer.opt.containment.css("position")&&YTPlayer.opt.containment.css({position:"relative"}),YTPlayer.opt.containment.prepend(wrapper),YTPlayer.wrapper=wrapper,playerBox.css({opacity:1}),jQuery.browser.mobile||(playerBox.after(overlay),YTPlayer.overlay=overlay),YTPlayer.isBackground||overlay.on("mouseenter",function(){$YTPlayer.find(".mb_YTPBar").addClass("visible")}).on("mouseleave",function(){$YTPlayer.find(".mb_YTPBar").removeClass("visible")}),ytp.YTAPIReady)setTimeout(function(){jQuery(document).trigger("YTAPIReady")},100);else{jQuery("#YTAPI").remove();var tag=jQuery("<script></script>").attr({src:jQuery.mbYTPlayer.locationProtocol+"//www.youtube.com/player_api?v="+jQuery.mbYTPlayer.version,id:"YTAPI"});jQuery("head title").after(tag)}jQuery(document).on("YTAPIReady",function(){YTPlayer.isBackground&&ytp.backgroundIsInited||YTPlayer.isInit||(YTPlayer.isBackground&&YTPlayer.opt.stopMovieOnClick&&jQuery(document).off("mousedown.ytplayer").on("mousedown.ytplayer",function(a){var b=jQuery(a.target);(b.is("a")||b.parents().is("a"))&&$YTPlayer.pauseYTP()}),YTPlayer.isBackground&&(ytp.backgroundIsInited=!0),YTPlayer.opt.autoPlay="undefined"==typeof YTPlayer.opt.autoPlay?YTPlayer.isBackground?!0:!1:YTPlayer.opt.autoPlay,YTPlayer.opt.vol=YTPlayer.opt.vol?YTPlayer.opt.vol:100,jQuery.mbYTPlayer.getDataFromFeed(YTPlayer),jQuery(YTPlayer).on("YTPChanged",function(){return YTPlayer.isInit?void 0:(YTPlayer.isInit=!0,jQuery.browser.mobile&&YTPlayer.canPlayOnMobile?(new YT.Player(playerID,{videoId:YTPlayer.videoID.toString(),height:"100%",width:"100%",videoId:YTPlayer.videoID,events:{onReady:function(a){YTPlayer.player=a.target,playerBox.css({opacity:1}),YTPlayer.wrapper.css({opacity:YTPlayer.opt.opacity}),$YTPlayer.optimizeDisplay()},onStateChange:function(){}}}),void 0):(new YT.Player(playerID,{videoId:YTPlayer.videoID.toString(),playerVars:playerVars,events:{onReady:function(a){if(YTPlayer.player=a.target,!YTPlayer.isReady){YTPlayer.isReady=!0,YTPlayer.playerEl=YTPlayer.player.getIframe(),$YTPlayer.optimizeDisplay(),YTPlayer.videoID=videoID,jQuery(window).on("resize.YTP",function(){$YTPlayer.optimizeDisplay()}),YTPlayer.opt.showControls&&jQuery(YTPlayer).buildYTPControls();var b=YTPlayer.opt.startAt?YTPlayer.opt.startAt:1;YTPlayer.player.setVolume(0),jQuery(YTPlayer).muteYTPVolume(),jQuery.mbYTPlayer.checkForState(YTPlayer),YTPlayer.checkForStartAt=setInterval(function(){if(!jQuery.contains(document,YTPlayer))return jQuery(YTPlayer).playerDestroy(),void 0;var a=YTPlayer.player.getVideoLoadedFraction()>b/YTPlayer.player.getDuration();YTPlayer.player.getDuration()>0&&YTPlayer.player.getCurrentTime()>=b&&a?(clearInterval(YTPlayer.checkForStartAt),YTPlayer.player.setVolume(0),jQuery(YTPlayer).muteYTPVolume(),"function"==typeof YTPlayer.opt.onReady&&YTPlayer.opt.onReady(YTPlayer),YTPlayer.opt.mute||jQuery(YTPlayer).unmuteYTP(),YTPlayer.player.pauseVideo(),setTimeout(function(){YTPlayer.canTrigger=!0,YTPlayer.opt.autoPlay?($YTPlayer.playYTP(),$YTPlayer.css("background-image","none"),YTPlayer.wrapper.CSSAnimate({opacity:YTPlayer.isAlone?1:YTPlayer.opt.opacity},2e3)):YTPlayer.player.pauseVideo()},100)):(YTPlayer.player.playVideo(),YTPlayer.player.seekTo(b,!0));var c=jQuery.Event("YTPReady");jQuery(YTPlayer).trigger(c)},1e3);var c=jQuery.Event("YTPUnstarted");c.time=YTPlayer.player.time,YTPlayer.canTrigger&&jQuery(YTPlayer).trigger(c)}},onStateChange:function(event){if("function"==typeof event.target.getPlayerState){var state=event.target.getPlayerState();if(YTPlayer.state!=state){YTPlayer.state=state;var controls=jQuery("#controlBar_"+YTPlayer.id),eventType;switch(state){case-1:eventType="YTPUnstarted";break;case 0:eventType="YTPEnd";break;case 1:eventType="YTPStart",controls.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.pause),"undefined"!=typeof _gaq&&eval(YTPlayer.opt.gaTrack)&&_gaq.push(["_trackEvent","YTPlayer","Play",YTPlayer.videoTitle||YTPlayer.videoID.toString()]),"undefined"!=typeof ga&&eval(YTPlayer.opt.gaTrack)&&ga("send","event","YTPlayer","play",YTPlayer.videoTitle||YTPlayer.videoID.toString());break;case 2:eventType="YTPPause",controls.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);break;case 3:jQuery.browser.chrome||YTPlayer.player.setPlaybackQuality(YTPlayer.opt.quality),eventType="YTPBuffering",jQuery.browser.chrome||YTPlayer.player.setPlaybackQuality(YTPlayer.opt.quality),controls.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play),setTimeout(function(){controls.show(1e3)},2e3);break;case 5:eventType="YTPCued"}var YTPevent=jQuery.Event(eventType);YTPevent.time=YTPlayer.player.time,YTPlayer.canTrigger&&jQuery(YTPlayer).trigger(YTPevent)}}},onPlaybackQualityChange:function(a){var b=a.target.getPlaybackQuality(),c=jQuery.Event("YTPQualityChange");c.quality=b,jQuery(YTPlayer).trigger(c)},onError:function(a){150==a.data&&(console.log("Embedding this video is restricted by Youtube."),YTPlayer.isPlayList&&jQuery(YTPlayer).playNext()),2==a.data&&YTPlayer.isPlayList&&jQuery(YTPlayer).playNext(),"function"==typeof YTPlayer.opt.onError&&YTPlayer.opt.onError($YTPlayer,a)}}}),void 0))}))})}})},getDataFromFeed:function(a){jQuery.browser.msie&&jQuery.browser.version<=9?("auto"==a.opt.ratio?a.opt.ratio="16/9":a.opt.ratio,a.hasData||(a.hasData=!0,setTimeout(function(){jQuery(a).trigger("YTPChanged")},100))):(jQuery.getJSON(jQuery.mbYTPlayer.locationProtocol+"//gdata.youtube.com/feeds/api/videos/"+a.videoID+"?v=2&alt=jsonc",function(b){a.dataReceived=!0,a.videoData=b.data,jQuery(a).trigger("YTPChanged");var e=jQuery.Event("YTPData");e.prop={};for(var f in a.videoData)e.prop[f]=a.videoData[f];if(jQuery(a).trigger(e),a.videoTitle=a.videoData.title,"auto"==a.opt.ratio&&(a.opt.ratio=a.videoData.aspectRatio&&"widescreen"===a.videoData.aspectRatio?"16/9":"4/3"),!a.hasData&&(a.hasData=!0,a.isPlayer)){var g=a.videoData.thumbnail.hqDefault;a.opt.containment.css({background:"rgba(0,0,0,0.5) url("+g+") center center",backgroundSize:"cover"})}}),setTimeout(function(){a.dataReceived||a.hasData||(a.hasData=!0,jQuery(a).trigger("YTPChanged"))},1500))},getVideoData:function(){var a=this.get(0);return a.videoData},getVideoID:function(){var a=this.get(0);return a.videoID||!1},setVideoQuality:function(a){var b=this.get(0);jQuery.browser.chrome||b.player.setPlaybackQuality(a)},YTPlaylist:function(a,b,c){var d=this,e=d.get(0);return e.isPlayList=!0,b&&(a=jQuery.shuffle(a)),e.videoID||(e.videos=a,e.videoCounter=0,e.videoLength=a.length,jQuery(e).data("property",a[0]),jQuery(e).mb_YTPlayer()),"function"==typeof c&&jQuery(e).on("YTPChanged",function(){c(e)}),jQuery(e).on("YTPEnd",function(){jQuery(e).playNext()}),d},playNext:function(){var a=this.get(0);a.videoCounter++,a.videoCounter>=a.videoLength&&(a.videoCounter=0),jQuery(a.playerEl).css({opacity:0}),jQuery(a).changeMovie(a.videos[a.videoCounter])},playPrev:function(){var a=this.get(0);a.videoCounter--,a.videoCounter<0&&(a.videoCounter=a.videoLength-1),jQuery(a.playerEl).css({opacity:0}),jQuery(a).changeMovie(a.videos[a.videoCounter])},changeMovie:function(a){var b=this.get(0);b.opt.startAt=0,b.opt.stopAt=0,b.opt.mute=!0,a&&jQuery.extend(b.opt,a),b.videoID=getYTPVideoID(b.opt.videoURL).videoID,jQuery(b).pauseYTP();var c=jQuery.browser.msie?1e3:0;jQuery(b.playerEl).CSSAnimate({opacity:0},c),setTimeout(function(){var a=jQuery.browser.chrome?"default":b.opt.quality;jQuery(b).getPlayer().cueVideoByUrl(encodeURI(jQuery.mbYTPlayer.locationProtocol+"//www.youtube.com/v/"+b.videoID),1,a),jQuery(b).playYTP(),jQuery(b).one("YTPStart",function(){b.wrapper.CSSAnimate({opacity:b.isAlone?1:b.opt.opacity},1e3),jQuery(b.playerEl).CSSAnimate({opacity:1},c),b.opt.startAt&&b.player.seekTo(b.opt.startAt),jQuery.mbYTPlayer.checkForState(b),b.opt.autoPlay||jQuery(b).pauseYTP()}),b.opt.mute?jQuery(b).muteYTPVolume():jQuery(b).unmuteYTP()},c),b.opt.addRaster?b.overlay.addClass(b.isRetina?"raster retina":"raster"):b.overlay.removeClass("raster").removeClass("retina"),jQuery("#controlBar_"+b.id).remove(),b.opt.showControls&&jQuery(b).buildYTPControls(),jQuery.mbYTPlayer.getDataFromFeed(b),jQuery(b).optimizeDisplay()},getPlayer:function(){return jQuery(this).get(0).player},playerDestroy:function(){var a=this.get(0);ytp.YTAPIReady=!1,ytp.backgroundIsInited=!1,a.isInit=!1,a.videoID=null;var b=a.wrapper;b.remove(),jQuery("#controlBar_"+a.id).remove(),clearInterval(a.checkForStartAt),clearInterval(a.getState)},fullscreen:function(real){function RunPrefixMethod(a,b){for(var e,f,c=["webkit","moz","ms","o",""],d=0;d<c.length&&!a[e];){if(e=b,""==c[d]&&(e=e.substr(0,1).toLowerCase()+e.substr(1)),e=c[d]+e,f=typeof a[e],"undefined"!=f)return c=[c[d]],"function"==f?a[e]():a[e];d++}}function launchFullscreen(a){RunPrefixMethod(a,"RequestFullScreen")}function cancelFullscreen(){(RunPrefixMethod(document,"FullScreen")||RunPrefixMethod(document,"IsFullScreen"))&&RunPrefixMethod(document,"CancelFullScreen")}var YTPlayer=this.get(0);"undefined"==typeof real&&(real=YTPlayer.opt.realfullscreen),real=eval(real);var controls=jQuery("#controlBar_"+YTPlayer.id),fullScreenBtn=controls.find(".mb_OnlyYT"),videoWrapper=YTPlayer.isSelf?YTPlayer.opt.containment:YTPlayer.wrapper;if(real){var fullscreenchange=jQuery.browser.mozilla?"mozfullscreenchange":jQuery.browser.webkit?"webkitfullscreenchange":"fullscreenchange";jQuery(document).off(fullscreenchange).on(fullscreenchange,function(){var a=RunPrefixMethod(document,"IsFullScreen")||RunPrefixMethod(document,"FullScreen");a?(jQuery(YTPlayer).setVideoQuality("default"),jQuery(YTPlayer).trigger("YTPFullScreenStart")):(YTPlayer.isAlone=!1,fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT),jQuery(YTPlayer).setVideoQuality(YTPlayer.opt.quality),videoWrapper.removeClass("fullscreen"),videoWrapper.CSSAnimate({opacity:YTPlayer.opt.opacity},500),videoWrapper.css({zIndex:0}),YTPlayer.isBackground?jQuery("body").after(controls):YTPlayer.wrapper.before(controls),jQuery(window).resize(),jQuery(YTPlayer).trigger("YTPFullScreenEnd"))})}YTPlayer.isAlone?(real?cancelFullscreen():(videoWrapper.CSSAnimate({opacity:YTPlayer.opt.opacity},500),videoWrapper.css({zIndex:0})),fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT),YTPlayer.isAlone=!1):(real?(videoWrapper.css({opacity:0}),videoWrapper.addClass("fullscreen"),launchFullscreen(videoWrapper.get(0)),setTimeout(function(){videoWrapper.CSSAnimate({opacity:1},1e3),YTPlayer.wrapper.append(controls),jQuery(YTPlayer).optimizeDisplay(),YTPlayer.player.seekTo(YTPlayer.player.getCurrentTime()+.1,!0)},500)):videoWrapper.css({zIndex:1e4}).CSSAnimate({opacity:1},1e3),fullScreenBtn.html(jQuery.mbYTPlayer.controls.showSite),YTPlayer.isAlone=!0)},playYTP:function(){var a=this.get(0);if("undefined"!=typeof a.player){var b=jQuery("#controlBar_"+a.id),c=b.find(".mb_YTPPlaypause");c.html(jQuery.mbYTPlayer.controls.pause),a.player.playVideo(),a.wrapper.CSSAnimate({opacity:a.isAlone?1:a.opt.opacity},2e3),jQuery(a).on("YTPStart",function(){jQuery(a).css("background-image","none")})}},toggleLoops:function(){var a=this.get(0),b=a.opt;1==b.loop?b.loop=0:(b.startAt?a.player.seekTo(b.startAt):a.player.playVideo(),b.loop=1)},stopYTP:function(){var a=this.get(0),b=jQuery("#controlBar_"+a.id),c=b.find(".mb_YTPPlaypause");c.html(jQuery.mbYTPlayer.controls.play),a.player.stopVideo()},pauseYTP:function(){var a=this.get(0);a.opt;var c=jQuery("#controlBar_"+a.id),d=c.find(".mb_YTPPlaypause");d.html(jQuery.mbYTPlayer.controls.play),a.player.pauseVideo()},seekToYTP:function(a){var b=this.get(0);b.player.seekTo(a,!0)},setYTPVolume:function(a){var b=this.get(0);a||b.opt.vol||0!=b.player.getVolume()?!a&&b.player.getVolume()>0||a&&b.player.getVolume()==a?jQuery(b).muteYTPVolume():b.opt.vol=a:jQuery(b).unmuteYTP(),b.player.setVolume(b.opt.vol)},muteYTP:function(){var a=this.get(0);a.player.mute(),a.player.setVolume(0);var b=jQuery("#controlBar_"+a.id),c=b.find(".mb_YTPMuteUnmute");c.html(jQuery.mbYTPlayer.controls.unmute),jQuery(a).addClass("isMuted"),jQuery(a).trigger("YTPMuted")},unmuteYTP:function(){var a=this.get(0);a.player.unMute(),a.player.setVolume(a.opt.vol);var b=jQuery("#controlBar_"+a.id),c=b.find(".mb_YTPMuteUnmute");c.html(jQuery.mbYTPlayer.controls.mute),jQuery(a).removeClass("isMuted"),jQuery(a).trigger("YTPUnmuted")},manageYTPProgress:function(){var a=this.get(0),b=jQuery("#controlBar_"+a.id),c=b.find(".mb_YTPProgress"),d=b.find(".mb_YTPLoaded"),e=b.find(".mb_YTPseekbar"),f=c.outerWidth(),g=Math.floor(a.player.getCurrentTime()),h=Math.floor(a.player.getDuration()),i=g*f/h,j=0,k=100*a.player.getVideoLoadedFraction();return d.css({left:j,width:k+"%"}),e.css({left:0,width:i}),{totalTime:h,currentTime:g}},buildYTPControls:function(){var YTPlayer=this.get(0),data=YTPlayer.opt;if(data.showYTLogo=data.showYTLogo||data.printUrl,!jQuery("#controlBar_"+YTPlayer.id).length){var controlBar=jQuery("<span/>").attr("id","controlBar_"+YTPlayer.id).addClass("mb_YTPBar").css({whiteSpace:"noWrap",position:YTPlayer.isBackground?"fixed":"absolute",zIndex:YTPlayer.isBackground?1e4:1e3}).hide();YTPlayer.controlBar=controlBar;var buttonBar=jQuery("<div/>").addClass("buttonBar"),playpause=jQuery("<span>"+jQuery.mbYTPlayer.controls.play+"</span>").addClass("mb_YTPPlaypause ytpicon").click(function(){1==YTPlayer.player.getPlayerState()?jQuery(YTPlayer).pauseYTP():jQuery(YTPlayer).playYTP()}),MuteUnmute=jQuery("<span>"+jQuery.mbYTPlayer.controls.mute+"</span>").addClass("mb_YTPMuteUnmute ytpicon").click(function(){0==YTPlayer.player.getVolume()?jQuery(YTPlayer).unmuteYTP():jQuery(YTPlayer).muteYTP()}),idx=jQuery("<span/>").addClass("mb_YTPTime"),vURL=data.videoURL?data.videoURL:"";vURL.indexOf("http")<0&&(vURL=jQuery.mbYTPlayer.locationProtocol+"//www.youtube.com/watch?v="+data.videoURL);var movieUrl=jQuery("<span/>").html(jQuery.mbYTPlayer.controls.ytLogo).addClass("mb_YTPUrl ytpicon").attr("title","view on YouTube").on("click",function(){window.open(vURL,"viewOnYT")}),onlyVideo=jQuery("<span/>").html(jQuery.mbYTPlayer.controls.onlyYT).addClass("mb_OnlyYT ytpicon").on("click",function(){jQuery(YTPlayer).fullscreen(data.realfullscreen)}),progressBar=jQuery("<div/>").addClass("mb_YTPProgress").css("position","absolute").click(function(a){timeBar.css({width:a.clientX-timeBar.offset().left}),YTPlayer.timeW=a.clientX-timeBar.offset().left,controlBar.find(".mb_YTPLoaded").css({width:0});var b=Math.floor(YTPlayer.player.getDuration());YTPlayer.goto=timeBar.outerWidth()*b/progressBar.outerWidth(),YTPlayer.player.seekTo(parseFloat(YTPlayer.goto),!0),controlBar.find(".mb_YTPLoaded").css({width:0})}),loadedBar=jQuery("<div/>").addClass("mb_YTPLoaded").css("position","absolute"),timeBar=jQuery("<div/>").addClass("mb_YTPseekbar").css("position","absolute");progressBar.append(loadedBar).append(timeBar),buttonBar.append(playpause).append(MuteUnmute).append(idx),data.showYTLogo&&buttonBar.append(movieUrl),(YTPlayer.isBackground||eval(YTPlayer.opt.realfullscreen)&&!YTPlayer.isBackground)&&buttonBar.append(onlyVideo),controlBar.append(buttonBar).append(progressBar),YTPlayer.isBackground?jQuery("body").after(controlBar):(controlBar.addClass("inlinePlayer"),YTPlayer.wrapper.before(controlBar))}},checkForState:function(YTPlayer){var interval=YTPlayer.opt.showControls?10:1e3;clearInterval(YTPlayer.getState),YTPlayer.getState=setInterval(function(){if(!jQuery.contains(document,YTPlayer))return jQuery(YTPlayer).playerDestroy(),void 0;var prog=jQuery(YTPlayer).manageYTPProgress(),$YTPlayer=jQuery(YTPlayer),controlBar=jQuery("#controlBar_"+YTPlayer.id),data=YTPlayer.opt,startAt=YTPlayer.opt.startAt?YTPlayer.opt.startAt:1,stopAt=YTPlayer.opt.stopAt>YTPlayer.opt.startAt?YTPlayer.opt.stopAt:0;if(stopAt=stopAt<YTPlayer.player.getDuration()?stopAt:0,YTPlayer.player.time!=prog.currentTime){var YTPevent=jQuery.Event("YTPTime");YTPevent.time=YTPlayer.player.time,jQuery(YTPlayer).trigger(YTPevent)}if(YTPlayer.player.time=prog.currentTime,0==YTPlayer.player.getVolume()?$YTPlayer.addClass("isMuted"):$YTPlayer.removeClass("isMuted"),YTPlayer.opt.showControls&&(prog.totalTime?controlBar.find(".mb_YTPTime").html(jQuery.mbYTPlayer.formatTime(prog.currentTime)+" / "+jQuery.mbYTPlayer.formatTime(prog.totalTime)):controlBar.find(".mb_YTPTime").html("-- : -- / -- : --")),eval(YTPlayer.opt.stopMovieOnBlur)&&(document.hasFocus()?document.hasFocus()&&!YTPlayer.hasFocus&&-1!=YTPlayer.state&&0!=YTPlayer.state&&(YTPlayer.hasFocus=!0,$YTPlayer.playYTP()):1==YTPlayer.state&&(YTPlayer.hasFocus=!1,$YTPlayer.pauseYTP())),1==YTPlayer.player.getPlayerState()&&(parseFloat(YTPlayer.player.getDuration()-3)<YTPlayer.player.getCurrentTime()||stopAt>0&&parseFloat(YTPlayer.player.getCurrentTime())>stopAt)){if(YTPlayer.isEnded)return;if(YTPlayer.isEnded=!0,setTimeout(function(){YTPlayer.isEnded=!1},2e3),YTPlayer.isPlayList){clearInterval(YTPlayer.getState);var YTPEnd=jQuery.Event("YTPEnd");return YTPEnd.time=YTPlayer.player.time,jQuery(YTPlayer).trigger(YTPEnd),void 0}data.loop?YTPlayer.player.seekTo(startAt,!0):(YTPlayer.player.pauseVideo(),YTPlayer.wrapper.CSSAnimate({opacity:0},1e3,function(){var a=jQuery.Event("YTPEnd");if(a.time=YTPlayer.player.time,jQuery(YTPlayer).trigger(a),YTPlayer.player.seekTo(startAt,!0),!YTPlayer.isBackground){var b=YTPlayer.videoData.thumbnail.hqDefault;jQuery(YTPlayer).css({background:"rgba(0,0,0,0.5) url("+b+") center center",backgroundSize:"cover"})}}))}},interval)},formatTime:function(a){var b=Math.floor(a/60),c=Math.floor(a-60*b);return(9>=b?"0"+b:b)+" : "+(9>=c?"0"+c:c)}},jQuery.fn.toggleVolume=function(){var a=this.get(0);if(a)return a.player.isMuted()?(jQuery(a).unmuteYTP(),!0):(jQuery(a).muteYTP(),!1)},jQuery.fn.optimizeDisplay=function(){var a=this.get(0),b=a.opt,c=jQuery(a.playerEl),d={},e=a.wrapper;d.width=e.outerWidth(),d.height=e.outerHeight();var f=24,g=100,h={};b.optimizeDisplay?(h.width=d.width+d.width*f/100,h.height="16/9"==b.ratio?Math.ceil(9*d.width/16):Math.ceil(3*d.width/4),h.marginTop=-((h.height-d.height)/2),h.marginLeft=-(d.width*(f/2)/100),h.height<d.height&&(h.height=d.height+d.height*f/100,h.width="16/9"==b.ratio?Math.floor(16*d.height/9):Math.floor(4*d.height/3),h.marginTop=-(d.height*(f/2)/100),h.marginLeft=-((h.width-d.width)/2)),h.width+=g,h.height+=g,h.marginTop-=g/2,h.marginLeft-=g/2):(h.width="100%",h.height="100%",h.marginTop=0,h.marginLeft-=0),c.css({width:h.width,height:h.height,marginTop:h.marginTop,marginLeft:h.marginLeft})},jQuery.shuffle=function(a){for(var b=a.slice(),c=b.length,d=c;d--;){var e=parseInt(Math.random()*c),f=b[d];b[d]=b[e],b[e]=f}return b},jQuery.fn.YTPlayer=jQuery.mbYTPlayer.buildPlayer,jQuery.fn.YTPlaylist=jQuery.mbYTPlayer.YTPlaylist,jQuery.fn.playNext=jQuery.mbYTPlayer.playNext,jQuery.fn.playPrev=jQuery.mbYTPlayer.playPrev,jQuery.fn.changeMovie=jQuery.mbYTPlayer.changeMovie,jQuery.fn.getVideoID=jQuery.mbYTPlayer.getVideoID,jQuery.fn.getPlayer=jQuery.mbYTPlayer.getPlayer,jQuery.fn.playerDestroy=jQuery.mbYTPlayer.playerDestroy,jQuery.fn.fullscreen=jQuery.mbYTPlayer.fullscreen,jQuery.fn.buildYTPControls=jQuery.mbYTPlayer.buildYTPControls,jQuery.fn.playYTP=jQuery.mbYTPlayer.playYTP,jQuery.fn.toggleLoops=jQuery.mbYTPlayer.toggleLoops,jQuery.fn.stopYTP=jQuery.mbYTPlayer.stopYTP,jQuery.fn.pauseYTP=jQuery.mbYTPlayer.pauseYTP,jQuery.fn.seekToYTP=jQuery.mbYTPlayer.seekToYTP,jQuery.fn.muteYTP=jQuery.mbYTPlayer.muteYTP,jQuery.fn.unmuteYTP=jQuery.mbYTPlayer.unmuteYTP,jQuery.fn.setYTPVolume=jQuery.mbYTPlayer.setYTPVolume,jQuery.fn.setVideoQuality=jQuery.mbYTPlayer.setVideoQuality,jQuery.fn.manageYTPProgress=jQuery.mbYTPlayer.manageYTPProgress,jQuery.fn.getDataFromFeed=jQuery.mbYTPlayer.getVideoData,jQuery.fn.mb_YTPlayer=jQuery.fn.YTPlayer,jQuery.fn.muteYTPVolume=jQuery.mbYTPlayer.muteYTP,jQuery.fn.unmuteYTPVolume=jQuery.mbYTPlayer.unmuteYTP}(jQuery,ytp);