(function($){
    $('form.variations_form').on('show_variation', function(event, data){
        console.log( data.variation_id );      // The variation Id  <===  <===

        console.log( data.attributes );        // The variation attributes
        console.log( data.availability_html ); // The formatted stock status
        console.log( data.dimensions );        // The dimensions data
        console.log( data.dimensions_html );   // The formatted dimensions
        console.log( data.display_price );     // The raw price (float)
        console.log( data.display_regular_price ); // The raw regular price (float)
        console.log( data.image );             // The image data
        console.log( data.image_id );          // The image ID (int)
        console.log( data.is_downloadable );   // Is downloadable (boolean)
        console.log( data.is_in_stock );       // Is in stock (boolean)
        console.log( data.is_purchasable );    // Is purchasable (boolean)
        console.log( data.is_sold_individually ); // Is sold individually (yes or no)
        console.log( data.is_virtual );        // Is vistual (boolean)
        console.log( data.max_qty );           // Max quantity (int)
        console.log( data.min_qty );           // Min quantity (int)
        console.log( data.price_html );        // Formatted displayed price
        console.log( data.sku );               // The variation SKU
        console.log( data.variation_description ); // The variation description
        console.log( data.variation_is_active );   // Is variation active (boolean)
        console.log( data.variation_is_visible );  // Is variation visible (boolean)
        console.log( data.weight );            // The weight (float)
        console.log( data.weight_html );       // The formatted weight

        console.log( data );
    });
})(jQuery);