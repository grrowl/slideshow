/*

SLIDESHOW
Tom McKenzie <http://chillidonut.com/> <https://github.com/grrowl/>

*/

;(function ($, window, document, undefined) {
	var pluginName = 'slideshow',
		defaults = {
			timeout: 4500,
			animDuration: 400,
			itemList: ''
		};
	
	function Plugin( element, options ) {
		this.element = jQuery(element);
		this.options = $.extend( {}, defaults, options) ;
        
        this._defaults = defaults;
        this._name = pluginName;
        
        this.init();
	}

	Plugin.prototype.init = function () {
		this.element.children().hide().first().show();
		this.currentIndex = 0;

		var thisObj = this;
		this.itemList = jQuery(this.options.itemList);
		var itemListHtml = '';
		for(var i=0; i<this.element.children().length; i++) {
			itemListHtml += '<li'+ (i == 0 ? ' class="active"' : '') +'></li>';
		}
		this.itemList.append(itemListHtml);
		this.itemList.children().click(function (ev) {
			ev.preventDefault();
			thisObj.showItem($(this).index());
		});

		this.tick();
	}

	// resets timeout
	Plugin.prototype.tick = function () {
		if (this.timeoutId)
			clearTimeout(this.timeoutId);

		var thisObj = this; // fix scope
		this.timeoutId = setTimeout(function () { 	
			thisObj.showItem.call(thisObj, (thisObj.currentIndex + 1) % thisObj.element.children().length); 
		}, this.options.timeout);
	}

	// scroll to next item
	Plugin.prototype.showItem = function (nextIndex) {
		if (nextIndex == this.currentIndex)
			return; // bail if we're already on this item

		if (jQuery(':animated', this.element).length)
			return; // bail if we're already mid-animation
		
		var children = this.element.children();
		var current = children.eq(Math.abs(this.currentIndex));
		this.currentIndex = nextIndex;
		var next = children.eq(Math.abs(this.currentIndex));

		current.css('z-index', 1);
		next.css('z-index', 2).hide()
			.fadeIn(this.options.animDuration, function () {
				current.hide();
			});
		
		this.itemList.children().removeClass('active').eq(this.currentIndex).addClass('active');
		
		this.tick();
	}

    // A really lightweight plugin wrapper around the constructor, 
    // preventing against multiple instantiations
    jQuery.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if (!jQuery.data(this, 'plugin_' + pluginName)) {
                jQuery.data(this, 'plugin_' + pluginName, new Plugin( this, options ));
            }
        });
    }

})(jQuery, window, document);