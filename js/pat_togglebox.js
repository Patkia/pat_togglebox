//************************//
//      Pat Toggle Box    //
//      Version 1.0       //
//************************//

;( function ( $ ) {

	$.pat_togglebox = function ( options ) {

		var settings = $.extend( {
			hasPullRight: true // find pull right to toggle arrow class
		}, options );

		//init element variable
		var $pat_togglebox = $('.pat_togglebox');
		var $pat_togglebox_btn = $('.pat_togglebox .pat_togglebox_btn');
		var $pat_togglebox_content = $('.pat_togglebox .pat_togglebox_content');

		//init function
	    function initPatToggleBox()
	    {
	    	//$pat_ulmenu_sub_ul_a.css('margin-left', settings.subMenuMarginLeft + 'px');

            $pat_togglebox_btn.on('click', function(e) {
                e.preventDefault();

                $(this).parent().toggleClass('tap');

                if ( settings.hasPullRight )
                	$(this).find('.pat-toggle-pull-right').toggleClass('fa-sort-down fa-sort-up');
            });
	    }

      	initPatToggleBox();
		
	}; // End Pat ULMenu function.

} ) ( jQuery );