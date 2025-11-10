var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
!function(o){o(function(){var t=o(window);o("ul.dropdown-menu").parent().addClass("dropdown"),o("ul.dropdown-menu ul").parent().addClass("dropdown-submenu"),o("ul.nav li.dropdown a").addClass("dropdown-toggle"),o("ul.dropdown-menu li a").removeClass("dropdown-toggle"),o("a.dropdown-toggle").attr("data-toggle","dropdown"),setTimeout(function(){o(".bs-docs-sidenav").affix({offset:{top:function(){return t.width()<=980?290:210},bottom:270}}),o(".dropdown-toggle:not(:has(b.caret))").append('<b class="caret"></b>')},300),o(".add-on :checkbox").on("click",function(){var t=o(this),e=t.attr("checked")?"addClass":"removeClass";o(this).parents(".add-on")[e]("active")}),o("#gridSystem").length&&o("#gridSystem").tooltip({selector:'.show-grid > [class*="span"]',title:function(){return o(this).width()+"px"}}),o(".tooltip-demo").tooltip({selector:"a[data-toggle=tooltip]"}),o(".tooltip-test").tooltip(),o(".popover-test").popover(),o("a[data-toggle=popover]").popover().click(function(o){o.preventDefault()}),o("#fat-btn").click(function(){var t=o(this);t.button("loading"),setTimeout(function(){t.button("reset")},3e3)}),o("#myCarousel").carousel()})}(window.jQuery);
}