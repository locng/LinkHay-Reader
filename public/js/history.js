/*
 GNU Affero General Public License version 3 {@link http://www.gnu.org/licenses/agpl-3.0.html}
 GNU Affero General Public License version 3 {@link http://www.gnu.org/licenses/agpl-3.0.html}
*/
if(typeof window.console!=="object"||typeof window.console.emulated==="undefined"){if(typeof window.console!=="object"||!(typeof window.console.log==="function"||typeof window.console.log==="object")){window.console={};window.console.log=window.console.debug=window.console.warn=window.console.trace=function(){};window.console.error=function(){for(var c="An error has occured. More information will be available in the console log.",a=0;a<arguments.length;++a){if(typeof arguments[a]!=="string")break;
c+="\n"+arguments[a]}if(typeof Error!=="undefined")throw Error(c);else throw c;}}else{if(typeof window.console.debug==="undefined")window.console.debug=function(){for(var c=["console.debug:"],a=0;a<arguments.length;a++)c.push(arguments[a]);window.console.log.apply(window.console,c)};if(typeof window.console.warn==="undefined")window.console.warn=function(){for(var c=["console.warn:"],a=0;a<arguments.length;a++)c.push(arguments[a]);window.console.log.apply(window.console,c)};if(typeof window.console.error===
"undefined")window.console.error=function(){for(var c=["console.error"],a=0;a<arguments.length;a++)c.push(arguments[a]);window.console.log.apply(window.console,c)};if(typeof window.console.trace==="undefined")window.console.trace=function(){window.console.error.apply(window.console,["console.trace does not exist"])}}window.console.emulated=true}
(function(c){if(c.History)window.console.warn("$.History has already been defined...");else{c.History={options:{debug:false},state:"",$window:null,$iframe:null,handlers:{generic:[],specific:{}},extractHash:function(a){return a.replace(/^[^#]*#/,"").replace(/^#+|#+$/,"")},getState:function(){return c.History.state},setState:function(a){var b=c.History;a=b.extractHash(a);b.state=a;return b.state},getHash:function(){return c.History.extractHash(window.location.hash||location.hash)},setHash:function(a){a=
c.History.extractHash(a);if(typeof window.location.hash!=="undefined"){if(window.location.hash!==a)window.location.hash=a}else if(location.hash!==a)location.hash=a;return a},go:function(a){var b=c.History;a=b.extractHash(a);var d=b.getHash(),f=b.getState();if(a!==d)b.setHash(a);else{a!==f&&b.setState(a);b.trigger()}return true},hashchange:function(){var a=c.History,b=a.getHash();a.go(b);return true},bind:function(a,b){var d=c.History;if(b){if(typeof d.handlers.specific[a]==="undefined")d.handlers.specific[a]=
[];d.handlers.specific[a].push(b)}else{b=a;d.handlers.generic.push(b)}return true},trigger:function(a){var b=c.History;if(typeof a==="undefined")a=b.getState();var d,f,g,e;if(typeof b.handlers.specific[a]!=="undefined"){e=b.handlers.specific[a];d=0;for(f=e.length;d<f;++d){g=e[d];g(a)}}e=b.handlers.generic;d=0;for(f=e.length;d<f;++d){g=e[d];g(a)}return true},construct:function(){var a=c.History;c(document).ready(function(){a.domReady()});return true},configure:function(a){var b=c.History;b.options=
c.extend(b.options,a);return true},domReadied:false,domReady:function(){var a=c.History;if(!a.domRedied){a.domRedied=true;a.$window=c(window);a.$window.bind("hashchange",this.hashchange);setTimeout(a.hashchangeLoader,200);return true}},nativeSupport:function(a){a=a||c.browser;var b=a.version,d=parseInt(b,10),f=b.split(/[^0-9]/g);b=parseInt(f[0],10);var g=parseInt(f[1],10);f=parseInt(f[2],10);var e=false;if((a.msie||0)&&d>=8)e=true;else if((a.webkit||0)&&d>=528)e=true;else if(a.mozilla)if(b>1)e=true;
else{if(b===1)if(g>9)e=true;else if(g===9)if(f>=2)e=true}else if(a.opera)if(b>10)e=true;else if(b===10)if(g>=60)e=true;return e},hashchangeLoader:function(){var a=c.History;if(a.nativeSupport())a.getHash()&&a.$window.trigger("hashchange");else{var b;if(c.browser.msie){a.$iframe=c('<iframe id="jquery-history-iframe" style="display: none;"></$iframe>').prependTo(document.body)[0];a.$iframe.contentWindow.document.open();a.$iframe.contentWindow.document.close();var d=false;b=function(){var f=a.getHash(),
g=a.getState(),e=a.extractHash(a.$iframe.contentWindow.document.location.hash);if(g!==f){if(!d){a.$iframe.contentWindow.document.open();a.$iframe.contentWindow.document.close();a.$iframe.contentWindow.document.location.hash=f}d=false;a.$window.trigger("hashchange")}else if(g!==e){d=true;a.setHash(e)}}}else b=function(){var f=a.getHash();a.getState()!==f&&a.$window.trigger("hashchange")};setInterval(b,200)}return true}};c.History.construct()}})(jQuery);
