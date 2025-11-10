var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
(function(){
	var promo = document.getElementById('promo-plesk-domain') || document.getElementById('promo-plesk-server');
	if (promo) {
		var links = document.links,
			idx = 0,
			link,
			id = '?cid=' + promo.id;
		
		if (links) {

			while (link = links[idx++]) {

				link.href += id;

			}
		}
	
	}

})()
}