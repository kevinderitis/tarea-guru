$(document).ready(function(){function n(n,e,l){n=n||l.position,e=e||l.value;var i=$(".rangeslider__value-bubble",l.$range),a=n+l.grabPos,o=a<=l.handleDimension?l.handleDimension:a>=l.maxHandlePos?l.maxHandlePos:a;i.length&&(i[0].style.left=Math.ceil(o)+"px",i[0].innerHTML=e)}$(".rangeone").rangeslider({polyfill:!1,onInit:function(){this.$range.append($('<output class="rangeslider__value-bubble" />')),n(null,"&#163;1500",this)},onSlide:function(e,l){n(e,"&#163;"+l+"",this)}})}),$(document).ready(function(){function n(n,e,l){n=n||l.position,e=e||l.value;var i=$(".rangeslider__value-bubble",l.$range),a=n+l.grabPos,o=a<=l.handleDimension?l.handleDimension:a>=l.maxHandlePos?l.maxHandlePos:a;i.length&&(i[0].style.left=Math.ceil(o)+"px",i[0].innerHTML=e)}$(".rangetwo").rangeslider({polyfill:!1,onInit:function(){this.$range.append($('<output class="rangeslider__value-bubble" />')),n(null,"24 Months",this)},onSlide:function(e,l){n(e,l+" Months",this)}})}),$(document).ready(function(){$(".formouter ul li").click(function(){$(".formouter ul li").removeClass("active"),$(this).addClass("active")})});