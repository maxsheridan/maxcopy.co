/*! jQuery Mousewheel 3.1.13 */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e:e(jQuery)}(function(a){var u,r,e=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],t="onwheel"in window.document||9<=window.document.documentMode?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],f=Array.prototype.slice;if(a.event.fixHooks)for(var n=e.length;n;)a.event.fixHooks[e[--n]]=a.event.mouseHooks;var d=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var e=t.length;e;)this.addEventListener(t[--e],i,!1);else this.onmousewheel=i;a.data(this,"mousewheel-line-height",d.getLineHeight(this)),a.data(this,"mousewheel-page-height",d.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var e=t.length;e;)this.removeEventListener(t[--e],i,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(e){var t=a(e),e=t["offsetParent"in a.fn?"offsetParent":"parent"]();return e.length||(e=a("body")),parseInt(e.css("fontSize"),10)||parseInt(t.css("fontSize"),10)||16},getPageHeight:function(e){return a(e).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};function i(e){var t,n=e||window.event,i=f.call(arguments,1),o=0,l=0,s=0,h=0;if((e=a.event.fix(n)).type="mousewheel","detail"in n&&(s=-1*n.detail),"wheelDelta"in n&&(s=n.wheelDelta),"wheelDeltaY"in n&&(s=n.wheelDeltaY),"wheelDeltaX"in n&&(l=-1*n.wheelDeltaX),"axis"in n&&n.axis===n.HORIZONTAL_AXIS&&(l=-1*s,s=0),o=0===s?l:s,"deltaY"in n&&(o=s=-1*n.deltaY),"deltaX"in n&&(l=n.deltaX,0===s&&(o=-1*l)),0!==s||0!==l)return 1===n.deltaMode?(o*=t=a.data(this,"mousewheel-line-height"),s*=t,l*=t):2===n.deltaMode&&(o*=t=a.data(this,"mousewheel-page-height"),s*=t,l*=t),h=Math.max(Math.abs(s),Math.abs(l)),(!r||h<r)&&c(n,r=h)&&(r/=40),c(n,h)&&(o/=40,l/=40,s/=40),o=Math[1<=o?"floor":"ceil"](o/r),l=Math[1<=l?"floor":"ceil"](l/r),s=Math[1<=s?"floor":"ceil"](s/r),d.settings.normalizeOffset&&this.getBoundingClientRect&&(h=this.getBoundingClientRect(),e.offsetX=e.clientX-h.left,e.offsetY=e.clientY-h.top),e.deltaX=l,e.deltaY=s,e.deltaFactor=r,e.deltaMode=0,i.unshift(e,o,l,s),u&&window.clearTimeout(u),u=window.setTimeout(w,200),(a.event.dispatch||a.event.handle).apply(this,i)}function w(){r=null}function c(e,t){return d.settings.adjustOldDeltas&&"mousewheel"===e.type&&t%120==0}a.fn.extend({mousewheel:function(e){return e?this.on("mousewheel",e):this.trigger("mousewheel")},unmousewheel:function(e){return this.off("mousewheel",e)}})});

/*! Control */
$(document).ready(function() {
    function handleMouseWheel(e, delta) {
        if ($(window).width() > 1024) {
            // Apply horizontal scrolling for screens above 1024px wide
            this.scrollLeft -= (delta * 2);
            e.preventDefault();
        }
        // For screens below 1025px, allow default vertical scrolling behavior
    }
    // Check if the screen width is above 1024 pixels
    if ($(window).width() > 1024) {
        // Apply mousewheel function only for screens above 1024px wide
        $('html, body, *').on('mousewheel', handleMouseWheel);
    }
    // Refresh the event handler on window resize
    $(window).on('resize', function() {
        if ($(window).width() > 1024) {
            // Reapply mousewheel function for screens above 1024px wide
            $('html, body, *').off('mousewheel').on('mousewheel', handleMouseWheel);
        } else {
            // Remove mousewheel function for screens below 1025px wide
            $('html, body, *').off('mousewheel');
        }
    });
});