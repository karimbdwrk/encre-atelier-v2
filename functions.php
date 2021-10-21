<?php
/* Chargement des styles du parent. */
add_action( 'wp_enqueue_scripts', 'wpchild_enqueue_styles' );
function wpchild_enqueue_styles(){
    wp_enqueue_style( 'wpm-wp-bootstrap-starter-child-style', get_template_directory_uri() . '/style.css' );
}
function woocommerce_ajax_add_to_cart_js() {
  if (function_exists('is_product') && is_product()) {
      wp_enqueue_script('woocommerce-ajax-add-to-cart', 'http://encre-atelier.badwork.fr/wp-content/themes/wp-bootstrap-starter-child//js/ajax-add-to-cart.js', array('jquery'), '', true);
  }
}
add_action('wp_enqueue_scripts', 'woocommerce_ajax_add_to_cart_js', 99);

add_action('wp_ajax_woocommerce_ajax_add_to_cart', 'woocommerce_ajax_add_to_cart');
add_action('wp_ajax_nopriv_woocommerce_ajax_add_to_cart', 'woocommerce_ajax_add_to_cart');
        
function woocommerce_ajax_add_to_cart() {

    $product_id = apply_filters('woocommerce_add_to_cart_product_id', absint($_POST['product_id']));
    $quantity = empty($_POST['quantity']) ? 1 : wc_stock_amount($_POST['quantity']);
    $variation_id = absint($_POST['variation_id']);
    $passed_validation = apply_filters('woocommerce_add_to_cart_validation', true, $product_id, $quantity);
    $product_status = get_post_status($product_id);

    if ($passed_validation && WC()->cart->add_to_cart($product_id, $quantity, $variation_id) && 'publish' === $product_status) {

        do_action('woocommerce_ajax_added_to_cart', $product_id);

        if ('yes' === get_option('woocommerce_cart_redirect_after_add')) {
            wc_add_to_cart_message(array($product_id => $quantity), true);
        }

        WC_AJAX :: get_refreshed_fragments();
    } else {

        $data = array(
            'error' => true,
            'product_url' => apply_filters('woocommerce_cart_redirect_after_error', get_permalink($product_id), $product_id));

        echo wp_send_json($data);
    }

    wp_die();
}

//
add_filter('show_admin_bar', '__return_false');
//
function get_variation_id( $product, $variations = array() ) {
  $variation_id = null;
  $variations_normalized = array();

  if ( $product->is_type( 'variable' ) && $product->has_child() ) {
    if ( isset( $variations ) && is_array( $variations ) ) {
      // start by normalizing the passed variations
      foreach ( $variations as $key => $value ) {
        $key = str_replace( 'attribute_', '', wc_attribute_taxonomy_slug( $key ) ); // from get_attributes in class-wc-api-products.php
        $variations_normalized[ $key ] = strtolower( $value );
      }
      // now search through each product child and see if our passed variations match anything
      foreach ( $product->get_children() as $variation ) {
        $meta = array();
        foreach ( get_post_meta( $variation ) as $key => $value ) {
          $value = $value[0];
          $key = str_replace( 'attribute_', '', wc_attribute_taxonomy_slug( $key ) );
          $meta[ $key ] = strtolower( $value );
        }
        // if the variation array is a part of the $meta array, we found our match
        if ( $this->array_contains( $variations_normalized, $meta ) ) {
          $variation_id = $variation;
          break;
        }
      }
    }
  }

  return $variation_id;
}
//
define( 'WPCF7_LOAD_JS', false );
define( 'WPCF7_LOAD_CSS', false );
add_filter( 'wpcf7_load_js', '__return_false' );
add_filter( 'wpcf7_load_css', '__return_false' );
//
if ( function_exists( 'wpcf7_enqueue_scripts' ) ) {wpcf7_enqueue_scripts();}
if ( function_exists( 'wpcf7_enqueue_styles' ) ) {wpcf7_enqueue_styles();}
//
add_filter( 'woocommerce_product_variation_title_include_attributes', 'custom_product_variation_title', 10, 2 );
function custom_product_variation_title($should_include_attributes, $product){
    $should_include_attributes = false;
    return $should_include_attributes;
}
//
add_action( 'init', 'woocommerce_clear_cart_url' );
function woocommerce_clear_cart_url() {
  global $woocommerce;
    
    if ( isset( $_GET['empty-cart'] ) ) {
        $woocommerce->cart->empty_cart();
    }
}
//
add_action( 'woocommerce_before_shop_loop_item_title', 'add_on_hover_shop_loop_image' ) ; 
function add_on_hover_shop_loop_image() {
    $image_id = wc_get_product()->get_gallery_image_ids()[0] ; 

    if ( $image_id ) {
        echo wp_get_attachment_image( $image_id, 520, 520 ) ;
    } else {  //assuming not all products have galleries set
        echo wp_get_attachment_image( wc_get_product()->get_image_id() ) ; 
    }
}
add_filter( 'wc_stripe_hide_payment_request_on_product_page', '__return_true' );
// Remove Query Strings
function remove_cssjs_ver( $src ) {
    if( strpos( $src, '?ver=' ) )
     $src = remove_query_arg( 'ver', $src );
    return $src;
}
add_filter( 'style_loader_src', 'remove_cssjs_ver', 10, 2 );
add_filter( 'script_loader_src', 'remove_cssjs_ver', 10, 2 );
// Remove RSD Links
remove_action( 'wp_head', 'rsd_link' ) ;
// Disable Emoticons
remove_action('wp_head', 'print_emoji_detection_script', 7);
remove_action('wp_print_styles', 'print_emoji_styles');
remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
remove_action( 'admin_print_styles', 'print_emoji_styles' );
// Remove Shortlink
remove_action('wp_head', 'wp_shortlink_wp_head', 10, 0);
// Disable Embeds
function disable_embed(){
	wp_dequeue_script( 'wp-embed' );
}
add_action( 'wp_footer', 'disable_embed' );
// Disable XML-RPC
add_filter('xmlrpc_enabled', '__return_false');
// Hide WordPress Version
remove_action( 'wp_head', 'wp_generator' ) ;
// Remove WLManifest Link
remove_action( 'wp_head', 'wlwmanifest_link' ) ;
// Remove JQuery Migrate
/**
function deregister_qjuery() { 
 if ( !is_admin() ) {
 	wp_deregister_script('jquery');
 }
} 
add_action('wp_enqueue_scripts', 'deregister_qjuery');
**/
// Disable Self Pingback
function disable_pingback( &$links ) {
    foreach ( $links as $l => $link )
        if ( 0 === strpos( $link, get_option( 'home' ) ) )
        unset($links[$l]);
}
add_action( 'pre_ping', 'disable_pingback' );
// Disable Heartbeat
add_action( 'init', 'stop_heartbeat', 1 );
function stop_heartbeat() {
	wp_deregister_script('heartbeat');
}
// Disable Dashicons on Front-end
function wpdocs_dequeue_dashicon() {
	if (current_user_can( 'update_core' )) {
  	return;
  }
  wp_deregister_style('dashicons');
}
add_action( 'wp_enqueue_scripts', 'wpdocs_dequeue_dashicon' );
// Disable contact form 7 JS/CSS
// add_filter( 'wpcf7_load_js', '__return_false' );
// add_filter( 'wpcf7_load_css', '__return_false' );
/* Ajax Search */
// add the ajax fetch js
add_action( 'wp_footer', 'ajax_fetch' );
function ajax_fetch() {
?>
<script type="text/javascript">
function fetch(){
    jQuery.ajax({
        url: '<?php echo admin_url('admin-ajax.php'); ?>',
        type: 'post',
        data: { action: 'data_fetch', keyword: jQuery('#keyword').val() },
        success: function(data) {
            console.log(data);
            jQuery('#datafetch').html( data );
        }
    });
}
/**
 * Affichage résultat barre de recherche
 */
jQuery("input#keyword").keyup(function() {
	if (jQuery(this).val().length > 2) {
  	jQuery("#datafetch").show();
  } else {
  	jQuery("#datafetch").hide();
	}
});
/**
 * Filtre des pages internes
 */
jQuery('.cat-list_item').on('click', function() {
    let currentCategory = jQuery(this).attr('data-slug');
    let slugify = jQuery(this)['category_name'];

    jQuery('.cat-list_item').removeClass('active');
    jQuery(this).addClass('active');

    jQuery.ajax({
        type: 'POST',
        url: '/wp-admin/admin-ajax.php',
        dataType: 'html',
        data: {
            action: 'filter_data_fetch',
            category: currentCategory,
        },
        success: function(res) {
            console.log(slugify);
            jQuery('.result-tiles').html(res);
        }
    })
});
</script>
<?php
}
/**
 * Fonction ajax pour récupérer les produits de façon dynamique.
 * Utiliser de base pour la barre de recherche, mais voir s'il
 * est possible de l'utiliser aussi pour le filtre dans les pages internes.
 * TODO: Récupérer la catégorie depuis la variable currentCategory si possible ou trouver un moyen pour la transmettre au serveur.
 * Possible conflit avec la requête POST de la recherche ???
 */
add_action('wp_ajax_data_fetch' , 'data_fetch');
add_action('wp_ajax_nopriv_data_fetch','data_fetch');
function data_fetch(){
    $category = $_POST['category'];
    var_dump($category) . '<br>';

    $the_query = new WP_Query(
        array(
            'posts_per_page' => 3,
            's' => esc_attr($_POST['keyword']),
            'category_name' => $category,
            'post_type' => 'product'
        )
    );

    if( $the_query->have_posts() ) :
        echo '<ul>';

        while( $the_query->have_posts() ): $the_query->the_post(); ?>
            <div class="custom-display-items">
              <h4>
                <a
                  href="<?php the_permalink() ?>"
                  rel="bookmark"
                  title="<?php the_title_attribute(); ?>">
                  <?php the_title(); //Display product title ?>
                </a>

                <?php //$product = wc_get_product(get_the_ID()); // get the WC_Product Object ?>
                <p><?php //echo $product->get_price_html(); // Display product Price ?></p>
              </h4>
            </div>
        <?php endwhile;
       echo '</ul>';
        wp_reset_postdata();  
    endif;
    die();
}

add_action('wp_ajax_filter_data_fetch' , 'filter_data_fetch');
add_action('wp_ajax_nopriv_filter_data_fetch','filter_data_fetch');
function filter_data_fetch(){
    $category = $_POST['category'];

    $the_query = new WP_Query(
        array(
            'posts_per_page' => 3,
            'category_name' => 'sacs',
            'post_type' => 'product'
        )
    );
    var_dump($the_query);
    if( $the_query->have_posts() ) :
        echo '<ul>';
        while( $the_query->have_posts() ): $the_query->the_post();
            
            ?>
            <div class="custom-display-items">
              <h4>
                <a
                  href="<?php the_permalink() ?>"
                  rel="bookmark"
                  title="<?php the_title_attribute(); ?>">
                  <?php the_title(); //Display product title ?>
                </a>

                <?php //$product = wc_get_product(get_the_ID()); // get the WC_Product Object ?>
                <p><?php //echo $product->get_price_html(); // Display product Price ?></p>
              </h4>
            </div>
        <?php endwhile;
       echo '</ul>';
        wp_reset_postdata();  
    endif;
    die();
}
	// Get Script and Style IDs
	// Adds inline comment to your frontend pages
	// View source code near the <head> section
	// Lists only properly registered scripts
function shapeSpace_inspect_script_style() {
	global $wp_scripts, $wp_styles;
	
	echo "\n" .'<!--'. "\n\n";
	echo 'SCRIPT IDs:'. "\n";
	
	foreach($wp_scripts->queue as $handle) echo $handle . "\n";
		echo "\n" .'STYLE IDs:'. "\n";
	
	foreach($wp_styles->queue as $handle) echo $handle . "\n";	
		echo "\n" .'-->'. "\n\n";
}
add_action('wp_print_scripts', 'shapeSpace_inspect_script_style');
// Disable stylesheets & scripts
function shapeSpace_disable_scripts_styles() {
	// easy digital downloads
	if (is_page('clothing')) {
		wp_dequeue_script('jquery');
		wp_deregister_script('jquery');
		wp_dequeue_script('edd-password-meter-passfield-locales');
		wp_dequeue_script('edd-password-meter-passfield');
		wp_dequeue_script('edd-password-meter');
		
		wp_dequeue_style('edd-sl-styles');
		wp_dequeue_style('edd-password-meter-passfield');
		wp_dequeue_style('edd-password-meter');
	}
}