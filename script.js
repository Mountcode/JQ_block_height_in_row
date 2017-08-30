$(document).ready(function(){

	function rowHeight(row_item){
		if ( $(row_item).length ){
			var 
				blockHeight = 0,
				from_top = $(row_item).offset().top,
				data_row = 1;

			$(row_item).each(function(){
				if($(this).offset().top == from_top){
					$(this).attr('data-row',data_row);
					if($(this).outerHeight() > blockHeight){
						blockHeight = $(this).outerHeight();
					}
				}
				else{
					from_top = $(this).offset().top;
					blockHeight = $(this).outerHeight();
					data_row++
					$(this).attr('data-row',data_row);
				}

				$(row_item +'[data-row='+data_row+']').css('height', blockHeight);
				$(this).find('.block_hdr').html(blockHeight);
			});
		}
	}

	setTimeout(function() {
		rowHeight('.inset');
	}, 100);

	$('.inset').fadeIn('slow')
})