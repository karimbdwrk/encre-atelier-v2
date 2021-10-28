/**
 * [description]
 * @param  {[type]} [description]
 * @param  {[type]} success [description]
 * @param  {[type]} error [description]
 * @return {[type]} [description]
 */
jQuery('.input_search').keyup(function() {
  jQuery.ajax({
    url: '/wp-admin/admin-ajax.php',
    type: 'POST',
    data: {
      action: 'data_fetch',
      keyword: jQuery('#keyword').val()
    },
    success: function(res) {
    	console.log(res);
      jQuery('#datafetch').html(res);
    },
    error: function(XMLHttpRequest, textStatus, errorThrown) {
      console.log( XMLHttpRequest );
      console.log( textStatus );
      console.log( errorThrown );
      
      jQuery('#datafetch').html("No items found. ");
    }
  });
});

/**
 * [description]
 * @param  input [description]
 * @return boolean [description]
 */
jQuery("input#keyword").keyup(function() {
  if (jQuery(this).val().length > 2) {
    jQuery("#datafetch").show();
  } else {
    jQuery("#datafetch").hide();
    }
});

/**
 * [description]
 * @param link [description]
 * @param success [description]
 * @param error [description]
 * @return res [description]
 */
jQuery('.cat-list_item').on('click', function() {
  jQuery('.cat-list_item').removeClass('active');
  jQuery(this).addClass('active');

  jQuery.ajax({
    type: 'POST',
    url: '/wp-admin/admin-ajax.php',
    dataType: 'html',
    data: {
      action: 'filter_products',
      category: jQuery(this).data('slug'),
    },
    success: function(res) {
      console.log(res);
      jQuery('.product-results').fadeOut().queue(function(n) {
        jQuery(this).html(res.response);
        n();
      }).fadeIn();
    },
    error: function( XMLHttpRequest, textStatus, errorThrown ) {
      console.log( MLHttpRequest );
      console.log( textStatus );
      console.log( errorThrown );
      
      jQuery('.product-results').fadeOut().queue(function(n) {
        jQuery(this).html("Aucun produit trouvé !!");
        n();
      }).fadeIn();
    }
  })
});
