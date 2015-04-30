(function($) {
	'use strict';
	window.CSS = typeof CSS != 'undefined' ? CSS : {};

	var $search = $('.search');

	CSS.WS = {
		init: function() {
			this._events();
		},
		_events: function() {
			var _this = this;
			$('body').on('click', function(e) {
				if($(e.target).hasClass('search-item')) {
					$search.addClass('-open');
				} else {
					$search.removeClass('-open');
				}
			});
		}
	}


	$(document).ready(function() {
		CSS.WS.init();

	});


}(jQuery));
