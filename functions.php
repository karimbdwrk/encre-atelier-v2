<?php
function mytheme_add_woocommerce_support() {
    add_theme_support( 'woocommerce' );
    add_theme_support( 'title-tag' );
}

add_action( 'after_setup_theme', 'mytheme_add_woocommerce_support', 9999);

remove_action( 'woocommerce_before_main_content', 'woocommerce_output_content_wrapper', 10);
remove_action( 'woocommerce_after_main_content', 'woocommerce_output_content_wrapper_end', 10);
add_action('woocommerce_before_main_content', 'my_theme_wrapper_start', 10);
add_action('woocommerce_after_main_content', 'my_theme_wrapper_end', 10);

function my_theme_wrapper_start() {
    echo '<section id="primary" class="content-area col-12">';
    echo '<div id="main" class="site-main" role="main">';
}

function my_theme_wrapper_end() {
    echo '</div>';
    echo '</section>';
}

/* Chargement des styles du parent. */
add_action( 'wp_enqueue_scripts', 'wpchild_enqueue_styles' );
function wpchild_enqueue_styles()
{
    wp_enqueue_style('metropolis', get_stylesheet_directory_uri() . '/assets/fonts/Metropolis-SemiBold.woff');
    wp_enqueue_style('nunito-sans', 'https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700;800&display=swap');
    wp_enqueue_style('wpm-wp-bootstrap-starter-child-style', get_template_directory_uri() . '/style.css' );
    wp_enqueue_style('owlcarousel', get_stylesheet_directory_uri() . '/owlcarousel/assets/owl.carousel.min.css');
    wp_enqueue_style('owlcarousel-theme', get_stylesheet_directory_uri() . '/owlcarousel/assets/owl.theme.default.min.css');
    wp_enqueue_style('all.min.css', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css');
    wp_enqueue_style('zoom-img', get_stylesheet_directory_uri() . '/zoom-img/css/image-zoom.css');

    wp_enqueue_script('jQueryForm', 'https://cdnjs.cloudflare.com/ajax/libs/jquery.form/4.3.0/jquery.form.min.js');
    wp_enqueue_script('jQueryValidate', 'https://cdn.jsdelivr.net/npm/jquery-validation@1.19.3/dist/jquery.validate.min.js');
    wp_enqueue_script ('lazy', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js');
    wp_enqueue_script('owlcarousel-script', get_stylesheet_directory_uri() . '/owlcarousel/owl.carousel.min.js');
    wp_enqueue_script('animejs', get_stylesheet_directory_uri() . '/animejs/anime.min.js');
    wp_enqueue_script('zoom-img', get_stylesheet_directory_uri() . '/zoom-img/js/image-zoom.js');
    wp_enqueue_script('mobile-detect', 'https://cdnjs.cloudflare.com/ajax/libs/mobile-detect/1.4.5/mobile-detect.min.js');
    wp_enqueue_script('ajaxAddToCart', get_stylesheet_directory_uri() . '/assets/js/ajax-add-to-cart.js', array( 'jquery' ),'',true );
    wp_enqueue_script('custom', get_stylesheet_directory_uri() . '/assets/js/custom.js', array( 'jquery' ),'',true );
    wp_enqueue_script('customJquery', get_stylesheet_directory_uri() . '/assets/js/custom-jquery.js', array( 'jquery' ),'',true );
    // wp_enqueue_script( 'mobileDetect', get_stylesheet_directory_uri() . '/assets/js/mobiledetect.js', array( 'jquery' ),'',true );
}

add_action('wp_ajax_woocommerce_ajax_add_to_cart', 'woocommerce_ajax_add_to_cart');
add_action('wp_ajax_nopriv_woocommerce_ajax_add_to_cart', 'woocommerce_ajax_add_to_cart');
function woocommerce_ajax_add_to_cart()
{
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

add_filter('show_admin_bar', '__return_false');

function get_variation_id( $product, $variations = array() )
{
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

add_filter( 'woocommerce_product_variation_title_include_attributes', 'custom_product_variation_title', 10, 2 );
function custom_product_variation_title($should_include_attributes, $product)
{
    $should_include_attributes = false;
    return $should_include_attributes;
}

add_action( 'init', 'woocommerce_clear_cart_url' );
function woocommerce_clear_cart_url()
{
  global $woocommerce;
    
    if ( isset( $_GET['empty-cart'] ) ) {
        $woocommerce->cart->empty_cart();
    }
}

// To change add to cart text on single product page
add_filter( 'woocommerce_product_single_add_to_cart_text', 'woocommerce_custom_single_add_to_cart_text' ); 
function woocommerce_custom_single_add_to_cart_text()
{
    return __( 'Buy', 'woocommerce' ); 
}

add_action( 'woocommerce_before_shop_loop_item_title', 'add_on_hover_shop_loop_image' ) ; 
function add_on_hover_shop_loop_image()
{
    $image_id = wc_get_product()->get_gallery_image_ids()[0] ; 

    if ( $image_id ) {
        echo wp_get_attachment_image( $image_id, 520, 520 ) ;
    } else {  //assuming not all products have galleries set
        echo wp_get_attachment_image( wc_get_product()->get_image_id() ) ; 
    }
}

/**
 * @snippet       Add input field to products - WooCommerce
 */
 
// -----------------------------------------
// 1. Show custom input field above Add to Cart
 
/*add_action( 'woocommerce_before_add_to_cart_button', 'bbloomer_product_add_on', 9 );
 
function bbloomer_product_add_on() {
    $value = isset( $_POST['custom_text_add_on'] ) ? sanitize_text_field( $_POST['custom_text_add_on'] ) : '';
    echo '<div><label>Custom Text Add-On <abbr class="required" title="required">*</abbr></label><p><input name="custom_text_add_on" value="' . $value . '"></p></div>';
}*/
 
// -----------------------------------------
// 2. Throw error if custom input field empty
 
/*add_filter( 'woocommerce_add_to_cart_validation', 'bbloomer_product_add_on_validation', 10, 3 );
 
function bbloomer_product_add_on_validation( $passed, $product_id, $qty ){
   if( isset( $_POST['custom_text_add_on'] ) && sanitize_text_field( $_POST['custom_text_add_on'] ) == '' ) {
      wc_add_notice( 'Custom Text Add-On is a required field', 'error' );
      $passed = false;
   }
   return $passed;
}*/
 
// -----------------------------------------
// 3. Save custom input field value into cart item data
 
/*add_filter( 'woocommerce_add_cart_item_data', 'bbloomer_product_add_on_cart_item_data', 10, 2 );
 
function bbloomer_product_add_on_cart_item_data( $cart_item, $product_id ){
    if( isset( $_POST['custom_text_add_on'] ) ) {
        $cart_item['custom_text_add_on'] = sanitize_text_field( $_POST['custom_text_add_on'] );
    }
    return $cart_item;
}*/
 
// -----------------------------------------
// 4. Display custom input field value @ Cart
 
/*add_filter( 'woocommerce_get_item_data', 'bbloomer_product_add_on_display_cart', 10, 2 );
 
function bbloomer_product_add_on_display_cart( $data, $cart_item ) {
    if ( isset( $cart_item['custom_text_add_on'] ) ){
        $data[] = array(
            'name' => 'Custom Text Add-On',
            'value' => sanitize_text_field( $cart_item['custom_text_add_on'] )
        );
    }
    return $data;
}*/
 
// -----------------------------------------
// 5. Save custom input field value into order item meta
 
/*add_action( 'woocommerce_add_order_item_meta', 'bbloomer_product_add_on_order_item_meta', 10, 2 );
 
function bbloomer_product_add_on_order_item_meta( $item_id, $values ) {
    if ( ! empty( $values['custom_text_add_on'] ) ) {
        wc_add_order_item_meta( $item_id, 'Custom Text Add-On', $values['custom_text_add_on'], true );
    }
}*/
 
// -----------------------------------------
// 6. Display custom input field value into order table
 
/*add_filter( 'woocommerce_order_item_product', 'bbloomer_product_add_on_display_order', 10, 2 );
 
function bbloomer_product_add_on_display_order( $cart_item, $order_item ){
    if( isset( $order_item['custom_text_add_on'] ) ){
        $cart_item['custom_text_add_on'] = $order_item['custom_text_add_on'];
    }
    return $cart_item;
}*/
 
// -----------------------------------------
// 7. Display custom input field value into order emails
 
/*add_filter( 'woocommerce_email_order_meta_fields', 'bbloomer_product_add_on_display_emails' );
 
function bbloomer_product_add_on_display_emails( $fields ) { 
    $fields['custom_text_add_on'] = 'Custom Text Add-On';
    return $fields; 
}*/

add_filter( 'template_include', 'woocommerce_archive_template', 99 );
function woocommerce_archive_template( $template )
{

    if ( is_woocommerce() && is_archive() ) {
        $new_template = get_stylesheet_directory() . '/archive.php';
        if ( !empty( $new_template ) ) {
            return $new_template;
        }
    }

    return $template;
}

function my_theme_archive_title( $title )
{
    if ( is_category() ) {
        $title = single_cat_title( '', false );
    } elseif ( is_tag() ) {
        $title = single_tag_title( '', false );
    } elseif ( is_author() ) {
        $title = '<span class="vcard">' . get_the_author() . '</span>';
    } elseif ( is_post_type_archive() ) {
        $title = post_type_archive_title( '', false );
    } elseif ( is_tax() ) {
        $title = single_term_title( '', false );
    }
  
    return $title;
}
add_filter( 'get_the_archive_title', 'my_theme_archive_title' );

add_filter( 'woocommerce_pagination_args',  'custom_woo_pagination' );
function custom_woo_pagination( $args )
{
    $args['prev_text'] = '<i class="fa fa-angle-left"></i>';
    $args['next_text'] = '<i class="fa fa-angle-right"></i>';
    return $args;
}

// Change the Number of WooCommerce Products Displayed Per Page
add_filter( 'loop_shop_per_page', 'lw_loop_shop_per_page', 30 );
function lw_loop_shop_per_page( $products )
{
    $products = 9;
    return $products;
}

// Change the Number of Columns Displayed Per Page
add_filter( 'loop_shop_columns', 'lw_loop_shop_columns' );
function lw_loop_shop_columns( $columns )
{
    $columns = 3;
    return $columns;
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
function disable_embed()
{
    wp_dequeue_script( 'wp-embed' );
}
add_action( 'wp_footer', 'disable_embed' );

// Hide WordPress Version
remove_action( 'wp_head', 'wp_generator' ) ;

// Remove WLManifest Link
remove_action( 'wp_head', 'wlwmanifest_link' ) ;

// Disable Self Pingback
function disable_pingback( &$links )
{
    foreach ( $links as $l => $link )
        if ( 0 === strpos( $link, get_option( 'home' ) ) )
        unset($links[$l]);
}
add_action( 'pre_ping', 'disable_pingback' );

// Disable Heartbeat
add_action( 'init', 'stop_heartbeat', 1 );
function stop_heartbeat()
{
    wp_deregister_script('heartbeat');
}

// Disable Dashicons on Front-end
function wpdocs_dequeue_dashicon()
{
    if (current_user_can( 'update_core' )) {
        return;
    }
    wp_deregister_style('dashicons');
}
add_action( 'wp_enqueue_scripts', 'wpdocs_dequeue_dashicon' );

// Remove Jetpack CSS
add_filter ('jetpack_implode_frontend_css', '__return_false', 999);

// Disable the REST API
/*add_filter( 'rest_authentication_errors', 'wp_snippet_disable_rest_api' );
function wp_snippet_disable_rest_api( $access ) {
      return new WP_Error( 'rest_disabled', __('The WordPress REST API has been disabled.'), array( 'status' => rest_authorization_required_code()));
}

remove_action('wp_head', 'rest_output_link_wp_head');
remove_action( 'wp_head', 'wp_oembed_add_discovery_links');
remove_action( 'template_redirect', 'rest_output_link_header', 11 );*/

// Disable RSS feed
remove_action('wp_head', 'feed_links', 3);
remove_action('wp_head', 'feed_links_extra', 2);

// Disable jQuery Migrate
function dequeue_jquery_migrate( $scripts )
{
    if ( ! is_admin() && ! empty( $scripts->registered['jquery'] ) ) {
        $scripts->registered['jquery']->deps = array_diff(
            $scripts->registered['jquery']->deps,
            [ 'jquery-migrate' ]
        );
    }
}
add_action( 'wp_default_scripts', 'dequeue_jquery_migrate' );

add_action( 'wp_footer', 'ajax_fetch' );
function ajax_fetch() {
    ?>
    <script type="text/javascript" defer>
        var search_timeout = null

        function fetch(){
            jQuery('#form').keydown(function(e){
                if (e.keyCode === 13) {
                    e.preventDefault();
                } else {
                    clearTimeout(search_timeout);
                    search_timeout = setTimeout(function(){
                        $.ajax({ url: '/wp-admin/admin-ajax.php',
                            type: 'POST',
                            data: {
                                action: 'data_fetch',
                                keyword: jQuery('#keyword').val()
                            },
                            success: function(data) {
                                $('#datafetch').html( data );
                            }
                        });
                    }, 2000);
                }
            });
        }
    </script>
    <?php
}

/**
 * Fonction ajax pour récupérer les produits de façon dynamique.
 */
add_action('wp_ajax_data_fetch' , 'data_fetch');
add_action('wp_ajax_nopriv_data_fetch','data_fetch');
function data_fetch(){
    $the_query = new WP_Query(
        array(
            'posts_per_page' => 9,
            's' => esc_attr($_POST['keyword']),
            'post_type' => 'product',
        )
    );

    if( $the_query->have_posts() ) :
        echo '<div class="display-search-items">';
        while( $the_query->have_posts() ): $the_query->the_post();?>
            <?php $product = wc_get_product(get_the_ID());?>
            <div class="display-search-item">
                <a href="<?php the_permalink() ?>" rel="bookmark" title="<?php the_title_attribute(); ?>">
                    <img src="<?php echo wp_get_attachment_url( $product->get_image_id() ); ?>" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="" loading="lazy" width="520" height="578">
                    <h4 class="title"><?php the_title(); ?></h4>
                    <p class="price"><?php echo $product->get_price_html(); ?></p>
                </a>
            </div>
        <?php endwhile;
       echo '</div>';
        wp_reset_postdata();  
    endif;
    die();
}

add_filter( 'pre_get_document_title', 'my_document_title_parts', 9999);
function my_document_title_parts( $title ) {
    $site_title = get_bloginfo( 'name' );
    $category_name = get_the_archive_title();
    
    if ( is_archive() ) {
        $title = $site_title . ' | ' . $category_name;
    }

    return $title;
}
// NOTE: Try using a greater number as the callback priority, if the default (10) doesn't work

/**
 * Overwrite menu
 */
class WP_Bootstrap_Navwalker extends Walker_Nav_Menu
{
    public function start_lvl( &$output, $depth = 0, $args = null ) {
        if ( isset( $args->item_spacing ) && 'discard' === $args->item_spacing ) {
            $t = '';
            $n = '';
        } else {
            $t = "\t";
            $n = "\n";
        }
        $indent = str_repeat( $t, $depth );
        $classes = array( 'sub-menu' );
        $class_names = implode( ' ', apply_filters( 'nav_menu_submenu_css_class', $classes, $args, $depth ) );
        $class_names = $class_names ? ' class="' . esc_attr( $class_names ) . '"' : '';

        $output .= "{$n}{$indent}<div$class_names>{$n}";
    }

    public function end_lvl( &$output, $depth = 0, $args = null ) {
        if ( isset( $args->item_spacing ) && 'discard' === $args->item_spacing ) {
            $t = '';
            $n = '';
        } else {
            $t = "\t";
            $n = "\n";
        }
        $indent  = str_repeat( $t, $depth );
        $output .= "$indent</div>{$n}";
    }

    public function start_el( &$output, $item, $depth = 0, $args = null, $id = 0 ) {
        if ( isset( $args->item_spacing ) && 'discard' === $args->item_spacing ) {
            $t = '';
            $n = '';
        } else {
            $t = "\t";
            $n = "\n";
        }
        $indent = ( $depth ) ? str_repeat( $t, $depth ) : '';

        $classes   = empty( $item->classes ) ? array() : (array) $item->classes;
        $classes[] = 'menu-item-' . $item->ID;

        $args = apply_filters( 'nav_menu_item_args', $args, $item, $depth );

        $class_names = implode( ' ', apply_filters( 'nav_menu_css_class', array_filter( $classes ), $item, $args, $depth ) );
        $class_names = $class_names ? ' class="' . esc_attr( $class_names ) . '"' : '';

        $id = apply_filters( 'nav_menu_item_id', 'menu-item-' . $item->ID, $item, $args, $depth );
        $id = $id ? ' id="' . esc_attr( $id ) . '"' : '';

        $output .= $indent . '<div' . $id . $class_names . '>';

        $atts           = array();
        $atts['title']  = ! empty( $item->attr_title ) ? $item->attr_title : '';
        $atts['target'] = ! empty( $item->target ) ? $item->target : '';
        if ( '_blank' === $item->target && empty( $item->xfn ) ) {
            $atts['rel'] = 'noopener';
        } else {
            $atts['rel'] = $item->xfn;
        }
        $atts['href']         = ! empty( $item->url ) ? $item->url : '';
        $atts['aria-current'] = $item->current ? 'page' : '';

        $atts = apply_filters( 'nav_menu_link_attributes', $atts, $item, $args, $depth );

        $attributes = '';
        foreach ( $atts as $attr => $value ) {
            if ( is_scalar( $value ) && '' !== $value && false !== $value ) {
                $value       = ( 'href' === $attr ) ? esc_url( $value ) : esc_attr( $value );
                $attributes .= ' ' . $attr . '="' . $value . '"';
            }
        }

        $title = apply_filters( 'the_title', $item->title, $item->ID );

        $title = apply_filters( 'nav_menu_item_title', $title, $item, $args, $depth );

        $item_output  = $args->before;
        $item_output .= '<a' . $attributes . '>';
        $item_output .= $args->link_before . $title . $args->link_after;
        $item_output .= '</a>';
        $item_output .= $args->after;

        $output .= apply_filters( 'walker_nav_menu_start_el', $item_output, $item, $depth, $args );
    }

    public function end_el( &$output, $item, $depth = 0, $args = null ) {
        if ( isset( $args->item_spacing ) && 'discard' === $args->item_spacing ) {
            $t = '';
            $n = '';
        } else {
            $t = "\t";
            $n = "\n";
        }
        $output .= "</div>{$n}";
    }
}

add_action( 'pre_get_posts', 'my_change_sort_order'); 
function my_change_sort_order($query){
    if(is_archive()):
        // If you wanted it for the archive of a custom post type use: is_post_type_archive( $post_type )
        $query->set( 'order', 'DESC' );
        $query->set( 'orderby', 'date' );
  endif;    
};

function remove_unused_style_in_main_page() {
    global $wp_styles;

    if (is_front_page() || is_page(array('clothing', 'home', 'lab')) || is_archive()) {
        $remove_style = array(
            'wp-block-library',
            'wp-mediaelement',
            'wc-blocks-style',
            'yith-wcwl-main',
            'woo_sc_product_size_chart_css',
            'woo_sc_modal_css',
            'woocommerce-layout-inline',
            'woocommerce-smallscreen',
            'wpm-main',
            'zoom-img',
            'wp-embed',
            'flexible_shipping_notices',
            'metropolis',
            'nunito-sans',
            'all.min.css',
        );

        $remove_script = array(
            'woo_sc_modal_js',
            'ajaxAddToCart',
            'jQueryForm',
            'jQueryValidate',
            'zoom-img',
            'wp-bootstrap-starter-themejs',
            'wp-bootstrap-starter-skip-link-focus-fix',
            'jetpack-scan-show-notice',
            'jquery-blockui',
            //'eio-lazy-load'
        );

        foreach($remove_style as $handle) {
          wp_dequeue_style($handle);
          wp_deregister_script($handle);
          unset($wp_styles->registered[$handle]);
        }

        foreach($remove_script as $handle) {
          wp_dequeue_style($handle);
          wp_deregister_script($handle);
          unset($wp_styles->registered[$handle]);
        }
    }
}
add_filter( 'wp_enqueue_scripts', 'remove_unused_style_in_main_page', PHP_INT_MAX );

function remove_unused_style_in_static_page() {
    global $wp_styles;

    if (is_page(array('contact', /*'stockist',*/ 'shipping', 'returns-exchanges', 'mentions-legales', 'conditions-generales-de-vente'))) {
        $remove_style = array(
            'wp-block-library',
            'wp-mediaelement',
            'wc-blocks-style',
            'yith-wcwl-main',
            'woo_sc_product_size_chart_css',
            'woo_sc_modal_css',
            'woocommerce-layout-inline',
            'woocommerce-smallscreen',
            'wpm-main',
            'zoom-img',
            'wp-embed',
            'metropolis',
            'nunito-sans',
            'all.min.css',
            'flexible_shipping_notices',
        );

        $remove_script = array(
            'woo_sc_modal_js',
            'ajaxAddToCart',
           ' jQueryForm',
            'jQueryValidate',
            'zoom-img',
            'wp-bootstrap-starter-themejs',
            'wp-bootstrap-starter-skip-link-focus-fix'


        );

        foreach($remove_style as $handle) {
          wp_dequeue_style($handle);
          wp_deregister_script($handle);
          unset($wp_styles->registered[$handle]);
        }

        foreach($remove_script as $handle) {
          wp_dequeue_style($handle);
          wp_deregister_script($handle);
          unset($wp_styles->registered[$handle]);
        }
    }
}
add_filter( 'wp_enqueue_scripts', 'remove_unused_style_in_static_page', PHP_INT_MAX );

/**
 * Optimize WooCommerce Scripts
 * Remove WooCommerce Generator tag, styles, and scripts from non WooCommerce pages.
 */
/** Disable WooCommerce  Styles and Scripts*/
add_action( 'wp_enqueue_scripts', 'dequeue_woocommerce_styles_scripts', 99 );
function dequeue_woocommerce_styles_scripts() {
    if ( function_exists( 'is_woocommerce' ) ) {
        if ( ! is_woocommerce() && ! is_cart() && ! is_checkout() ) {
            # Styles
            wp_dequeue_style( 'woocommerce-general' );
            wp_dequeue_style( 'woocommerce-layout' );
            wp_dequeue_style( 'woocommerce-smallscreen' );
            wp_dequeue_style( 'woocommerce_frontend_styles' );
            wp_dequeue_style( 'woocommerce_fancybox_styles' );
            wp_dequeue_style( 'woocommerce_chosen_styles' );
            wp_dequeue_style( 'woocommerce_prettyPhoto_css' );
            # Scripts
            wp_dequeue_script( 'wc_price_slider' );
            wp_dequeue_script( 'wc-single-product' );
            wp_dequeue_script( 'wc-add-to-cart' );
            wp_dequeue_script( 'wc-cart-fragments' );
            wp_dequeue_script( 'wc-checkout' );
            wp_dequeue_script( 'wc-add-to-cart-variation' );
            wp_dequeue_script( 'wc-single-product' );
            wp_dequeue_script( 'wc-cart' );
            wp_dequeue_script( 'wc-chosen' );
            wp_dequeue_script( 'woocommerce' );
            wp_dequeue_script( 'prettyPhoto' );
            wp_dequeue_script( 'prettyPhoto-init' );
            wp_dequeue_script( 'jquery-blockui' );
            wp_dequeue_script( 'jquery-placeholder' );
            wp_dequeue_script( 'fancybox' );
            wp_dequeue_script( 'jqueryui' );
        }
    }
}


/**
 * disables some plugin style in the Admin Area
 */
function shapeSpace_disable_scripts_styles_admin_area() {
    wp_dequeue_style('jquery-ui-css');
}
add_action('admin_enqueue_scripts', 'shapeSpace_disable_scripts_styles_admin_area', 100);

/**
 * Allow Pods Templates to use shortcodes
 *
 * NOTE: Will only work if the constant PODS_SHORTCODE_ALLOW_SUB_SHORTCODES is
 * defined and set to true, which by default it IS NOT.
 */
add_filter( 'pods_shortcode', function( $tags )  {
    $tags[ 'shortcodes' ] = true;
    
    return $tags;
    
});