<?php
/**
 * The template for displaying product content in the single-product.php template
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/content-single-product.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates
 * @version 3.6.0
 */

defined( 'ABSPATH' ) || exit;

global $product;

/**
 * Hook: woocommerce_before_single_product.
 *
 * @hooked woocommerce_output_all_notices - 10
 */
do_action( 'woocommerce_before_single_product' );

if ( post_password_required() ) {
	echo get_the_password_form(); // WPCS: XSS ok.
	return;
}
?>
<div id="product-<?php the_ID(); ?>" <?php wc_product_class( 'fadeIn-1s', $product ); ?>>

	<div class="summary entry-summary col-md-3">
		<?php
		/**
		 * Hook: woocommerce_single_product_summary.
		 *
		 * @hooked woocommerce_template_single_title - 5
		 * @hooked woocommerce_template_single_rating - 10
		 * @hooked woocommerce_template_single_excerpt - 15
		 * @hooked woocommerce_template_single_price - 20
		 * @hooked woocommerce_template_single_add_to_cart - 30
		 * @hooked woocommerce_template_single_meta - 40
		 * @hooked woocommerce_template_single_sharing - 50
		 * @hooked WC_Structured_Data::generate_product_data() - 60
		 */
		do_action( 'woocommerce_single_product_summary' );
		?>
		<!-- <div class="heart-cta">
			<svg xmlns="http://www.w3.org/2000/svg" width="16.352" height="14.942" viewBox="0 0 16.352 14.942">
				<path id="Tracé_14" data-name="Tracé 14" d="M88.982,147.276a4.366,4.366,0,0,0-3.806,2.227,4.366,4.366,0,0,0-3.806-2.227A4.62,4.62,0,0,0,77,151.928c0,6.061,8.176,10.29,8.176,10.29s8.176-4.229,8.176-10.29a4.62,4.62,0,0,0-4.37-4.652Zm0,0" transform="translate(-77 -147.276)" fill="#fa4825"/>
			</svg>
		</div> -->
		<div class="size-guide"><a href="#"><span class="lang_fr">Guide des tailles</span><span class="lang_en">Size Guide</span></a></div>
		<div class="kiss-cta">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 142.94 52.43">
				<defs>
					<style>
						.cls-1
						{
							fill:#fa4825;
						}
						.st0{fill:#FFFFFF;}
					</style>
				</defs>
				<g id="leftFace">
					<polygon class="st0 not-mobile" points="28.9,0 28.4,1.8 27.7,4.6 29.1,7.5 31.3,9.1 33,11 32.5,13.7 31.4,16.7 31.1,17.8 32.2,19.5 
						33.5,20.3 34.4,21.6 33.8,23.6 32.7,26.2 33.1,27.8 34.4,29.3 35.1,30.7 34.1,32.1 32.2,34.2 32.5,36.1 33.2,38 32.8,40.1 32,41.8 
						30.2,43.7 27.7,44.5 23.9,45.1 21.6,45.9 20.2,47.2 18.8,50.2 18.4,52.4 -0.1,52.4 -0.1,0 	"/>
					<path class="not-mobile" d="M27.9,0.5c-0.8,2.5-1.1,5.2,0.6,7.3c1.3,1.6,4.7,2.5,3.8,5.1c-0.7,1.8-2.6,3.6-1.8,5.7c0.4,0.8,1,1.5,1.8,1.9
						c1.1,0.7,2.1,1.3,1.2,2.6c-1,1.5-2.4,3.4-1,5.2c0.5,0.6,1.3,0.8,1.7,1.5c0.8,1.1-0.6,1.7-1.3,2.2c-0.8,0.6-1.3,1.4-1.5,2.3
						c-0.1,1,0.1,2,0.7,2.8c0.5,1,0.5,2.2-0.1,3.2c-0.4,1.2-1.2,2.3-2.3,3c-2.3,1.5-5.5,0.7-8,1.8s-3.5,4.2-3.9,6.7
						c-0.1,1,1.4,0.9,1.5,0c0.1-1.4,0.6-2.8,1.4-4c0.8-1.1,2-1.8,3.4-2c2.3-0.4,4.8-0.2,6.8-1.8c1.6-1.3,2.7-3.2,3-5.3
						c0-1-0.2-1.9-0.7-2.8c-0.3-0.5-0.4-1-0.4-1.5c0.2-0.6,0.6-1.2,1.2-1.5c1.3-0.9,2.5-2.3,1.4-4c-0.4-0.6-1.2-0.9-1.7-1.4
						c-1-1,0-2.4,0.7-3.3c1.2-1.6,1.3-3.2-0.4-4.5c-0.8-0.6-2.1-1-2.2-2c-0.2-1,0.8-2.4,1.3-3.2c1.1-2.1,1.1-4.1-0.9-5.6
						C31,8.1,29.7,7.4,29.1,6c-0.8-1.6-0.3-3.5,0.3-5.1C29.7,0,28.2-0.4,27.9,0.5z"/>
					<path class="not-mobile" d="M27,8.4c-0.1,0.3-0.3,0.6-0.4,0.9c-0.3,0.5-0.7,0.9-1.1,1.3c-1,0.8-2.2,1.1-3.5,1c-0.5-0.1-0.5,0.7,0,0.8
						c2.5,0.2,4.9-1.3,5.8-3.7C27.9,8.2,27.1,8,27,8.4z"/>
					<polygon class="st0 mobile" points="11,0 10.5,1.8 9.8,4.6 11.2,7.5 13.4,9.1 15.1,11 14.6,13.7 13.5,16.7 13.2,17.8 14.3,19.5 15.6,20.3 
						16.5,21.6 15.9,23.6 14.8,26.2 15.2,27.8 16.5,29.3 17.2,30.7 16.2,32.1 14.3,34.2 14.6,36.1 15.3,38 14.9,40.1 14.1,41.8 
						12.3,43.7 9.8,44.5 6,45.1 3.7,45.9 2.3,47.2 0.9,50.2 0.5,52.4 0,52.4 0,0 	"/>
					<path class="mobile" d="M10,0.5C9.2,3,8.9,5.7,10.6,7.8c1.3,1.6,4.7,2.5,3.8,5.1c-0.7,1.8-2.6,3.6-1.8,5.7c0.4,0.8,1,1.5,1.8,1.9
						c1.1,0.7,2.1,1.3,1.2,2.6c-1,1.5-2.4,3.4-1,5.2c0.5,0.6,1.3,0.8,1.7,1.5c0.8,1.1-0.6,1.7-1.3,2.2c-0.8,0.6-1.3,1.4-1.5,2.3
						c-0.1,1,0.1,2,0.7,2.8c0.5,1,0.5,2.2-0.1,3.2c-0.4,1.2-1.2,2.3-2.3,3c-2.3,1.5-5.5,0.7-8,1.8S0.3,49.2,0,51.7c-0.1,1,1.4,0.9,1.5,0
						c0.1-1.4,0.6-2.8,1.4-4c0.8-1.1,2-1.8,3.4-2c2.3-0.4,4.8-0.2,6.8-1.8c1.6-1.3,2.7-3.2,3-5.3c0-1-0.2-1.9-0.7-2.8
						c-0.3-0.5-0.4-1-0.4-1.5c0.2-0.6,0.6-1.2,1.2-1.5c1.3-0.9,2.5-2.3,1.4-4c-0.4-0.6-1.2-0.9-1.7-1.4c-1-1,0-2.4,0.7-3.3
						c1.2-1.6,1.3-3.2-0.4-4.5c-0.8-0.6-2.1-1-2.2-2s0.9-2.4,1.3-3.2c1.1-2.1,1.1-4.1-0.9-5.6c-1.2-0.8-2.5-1.5-3.1-2.9
						c-0.8-1.6-0.3-3.5,0.3-5.1C11.8,0,10.4-0.4,10,0.5z"/>
					<path class="mobile" d="M9.1,8.4C9,8.7,8.8,9,8.7,9.3C8.4,9.8,8,10.2,7.5,10.6c-1,0.8-2.2,1.1-3.5,1c-0.5-0.1-0.5,0.7,0,0.8
						c2.5,0.2,4.9-1.3,5.8-3.7C10,8.1,9.3,8,9.1,8.4z"/>
				</g>
				<g id="rightFace">
					<polygon class="st0 not-mobile" points="299.8,3.6 300.8,5.2 302.1,7.7 301.6,10.9 299.9,13 298.7,15.3 299.9,17.7 301.8,20.4 302.3,21.3 
						301.7,23.3 300.6,24.4 300.1,25.9 301.2,27.6 303,29.9 303,31.5 302.1,33.3 301.9,34.8 303.2,35.9 305.6,37.5 305.7,39.4 
						305.6,41.4 306.5,43.3 307.8,44.8 310,46.1 312.6,46.2 316.4,45.8 318.9,46 320.6,46.8 322.7,49.4 324,52.4 340,52.4 340,0 
						299.8,0 	"/>
					<path class="not-mobile" d="M299.6,4.6c0.9,1.4,1.8,3.1,1.5,4.8c-0.3,1.3-1,2.4-2,3.3c-1.2,1.4-1.8,2.9-0.8,4.6c0.8,1.3,3.5,2.8,3.2,4.5
						c-0.2,1-1.3,1.7-1.9,2.4c-0.6,0.7-0.8,1.6-0.5,2.5c0.5,1.5,3.9,2.6,3,4.5c-0.3,0.7-1.1,1.1-1.4,1.9c-0.3,0.9-0.1,1.8,0.5,2.5
						c0.6,0.5,1.3,0.9,2.1,1.1c0.7,0.2,1.3,0.8,1.5,1.6c0,0.7-0.1,1.3-0.3,2c-0.3,2.1,1.1,3.9,2.6,5.2c2.2,1.9,4.7,1.6,7.4,1.3
						c1.5-0.2,3.2-0.5,4.5,0.4c1.4,1,2.4,2.4,3,4c0.4,0.9,1.8,0.5,1.5-0.4c-0.9-2.2-2.3-4.5-4.6-5.3s-5,0.2-7.5,0.2
						c-1.4,0-2.7-0.6-3.7-1.6c-0.8-0.8-1.8-1.9-1.8-3.1c0-1,0.5-1.9,0.3-3c-0.2-1.1-0.9-1.9-1.9-2.4c-0.8-0.4-2.6-0.6-2.3-1.8
						c0.2-0.8,1.1-1.4,1.4-2.2c0.7-2-0.9-3.4-2.3-4.5c-1-0.8-0.9-1.5,0-2.5c0.7-0.6,1.3-1.5,1.7-2.4c0.4-1.9-1.1-3.2-2.2-4.4
						c-0.8-0.8-1.7-1.8-1.3-2.9c0.4-1.2,1.5-1.8,2.1-2.7c2-2.7,1.1-5.8-0.6-8.4C300.4,3,299.1,3.8,299.6,4.6L299.6,4.6z"/>
					<path class="not-mobile" d="M303.2,11.7c1.5,2.1,4.1,2.9,6.5,2.1c0.5-0.2,0.2-0.9-0.2-0.7c-2.1,0.7-4.4,0-5.7-1.8C303.5,10.8,302.9,11.2,303.2,11.7
						L303.2,11.7z"/>
					<polygon class="st0 mobile" points="119.1,2.9 120.1,4.5 121.4,7 120.9,10.2 119.2,12.3 118,14.6 119.2,17 121.1,19.7 121.6,20.6 
						121,22.6 119.9,23.7 119.4,25.2 120.5,26.9 122.3,29.2 122.3,30.8 121.4,32.6 121.2,34.1 122.5,35.2 124.9,36.8 125,38.7 
						124.9,40.7 125.8,42.6 127.1,44.1 129.3,45.4 131.9,45.5 135.7,45.1 138.2,45.3 139.9,46.1 142,48.7 143,50.7 143.5,50.6 142.9,0 
						119.1,0 	"/>
					<path class="mobile" d="M118.9,3.9c0.9,1.4,1.8,3.1,1.5,4.8c-0.3,1.3-1,2.4-2,3.3c-1.2,1.4-1.8,2.9-0.8,4.6c0.8,1.3,3.5,2.8,3.2,4.5
						c-0.2,1-1.3,1.7-1.8,2.4c-0.6,0.7-0.8,1.6-0.5,2.5c0.5,1.5,3.9,2.6,3,4.5c-0.3,0.7-1.1,1.1-1.3,1.9c-0.3,0.9-0.1,1.8,0.5,2.5
						c0.6,0.5,1.3,0.9,2.1,1.1c0.7,0.2,1.3,0.8,1.5,1.6c0,0.7-0.1,1.3-0.3,2c-0.3,2.1,1.1,3.9,2.6,5.2c2.2,1.9,4.7,1.6,7.4,1.3
						c1.5-0.2,3.2-0.5,4.6,0.4c1.4,1,2.4,2.4,3,4c0.4,0.9,1.8,0.5,1.4-0.4c-0.9-2.2-2.3-4.5-4.6-5.3s-5,0.2-7.5,0.2
						c-1.4,0-2.7-0.6-3.7-1.6c-0.8-0.8-1.8-1.9-1.8-3.1c0-1,0.5-1.9,0.3-3c-0.2-1.1-0.9-1.9-1.9-2.4c-0.8-0.4-2.6-0.6-2.3-1.8
						c0.2-0.8,1.2-1.4,1.4-2.2c0.7-2-0.9-3.4-2.3-4.5c-1-0.8-0.9-1.5,0-2.5c0.7-0.6,1.3-1.5,1.7-2.4c0.4-1.9-1.1-3.2-2.2-4.4
						c-0.8-0.8-1.7-1.8-1.3-2.9s1.5-1.8,2.1-2.7c2-2.7,1.2-5.8-0.6-8.4C119.7,2.4,118.4,3.1,118.9,3.9L118.9,3.9z"/>
					<path class="mobile" d="M122.5,11c1.5,2.1,4.1,2.9,6.5,2.1c0.4-0.2,0.2-0.9-0.2-0.7c-2.1,0.7-4.4,0-5.7-1.8C122.9,10.2,122.2,10.6,122.5,11
						L122.5,11z"/>
				</g>
				<!-- <g id="heart" data-name="Calque 3">
					<path id="Tracé_82" data-name="Tracé 82" class="cls-1" d="M73.77,16.72a5.8,5.8,0,0,0-5,2.94,5.77,5.77,0,0,0-5-2.94,6.11,6.11,0,0,0-5.78,6.15c0,8,10.83,13.63,10.83,13.63s10.82-5.6,10.82-13.63a6.1,6.1,0,0,0-5.78-6.15Z"/>
				</g> -->
			</svg>
			<svg id="heart" xmlns="http://www.w3.org/2000/svg" width="16.352" height="14.942" viewBox="0 0 16.352 14.942">
				<path id="Tracé_82" data-name="Tracé 82" class="cls-1" d="M73.77,16.72a5.8,5.8,0,0,0-5,2.94,5.77,5.77,0,0,0-5-2.94,6.11,6.11,0,0,0-5.78,6.15c0,8,10.83,13.63,10.83,13.63s10.82-5.6,10.82-13.63a6.1,6.1,0,0,0-5.78-6.15Z"/>
			</svg>
		</div>
		<!-- <button class="btn btn-light send-to-btn" data-toggle="modal" data-target="#loverModal"><i class="far fa-heart"></i>  Send to a lover</button> -->
		<div class="send-to-dropdown">
			<button class="btn btn-secondary dropdown-toggle send-to-btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				<i class="far fa-heart"></i>  Send to ...
			</button>
			<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
				<a class="dropdown-item" data-toggle="modal" data-target="#loverModal">Your lover</a>
				<a class="dropdown-item" data-toggle="modal" data-target="#loverModal">Your friend</a>
				<a class="dropdown-item" data-toggle="modal" data-target="#loverModal">Your mom</a>
				<a class="dropdown-item" data-toggle="modal" data-target="#loverModal">Your dad</a>
				<a class="dropdown-item" data-toggle="modal" data-target="#loverModal">Your ex</a>
				<a class="dropdown-item" data-toggle="modal" data-target="#loverModal">Your sugar daddy</a>
				<a class="dropdown-item" data-toggle="modal" data-target="#loverModal">Your grandparents</a>
			</div>
		</div>
	</div>
	<div class="col-md-9">
	<?php echo do_shortcode( '[yith_wcwl_add_to_wishlist]' ); ?>
		<div id="owlSlider">
			<button id="customNextBtn" class="btn btn-primary"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 407.436 407.436" style="enable-background:new 0 0 407.436 407.436;" xml:space="preserve"><polygon points="112.814,0 91.566,21.178 273.512,203.718 91.566,386.258 112.814,407.436 315.869,203.718 "/></svg></button>
		</div>
	</div>

	<?php
		/**
		 * Hook: woocommerce_before_single_product_summary.
		 *
		 * @hooked woocommerce_show_product_sale_flash - 10
		 * @hooked woocommerce_show_product_images - 20
		 */
		do_action( 'woocommerce_before_single_product_summary' );
	?>


</div>
<div class="container-fluid related-container">
	<div class="row">
		<div class="col-12">
			<h3 class="title">ARTICLES SIMILAIRES</h3>

			<?php
				/**
				 * Hook: woocommerce_after_single_product_summary.
				 *
				 * @hooked woocommerce_output_product_data_tabs - 10
				 * @hooked woocommerce_upsell_display - 15
				 * @hooked woocommerce_output_related_products - 20
				 */
				do_action( 'woocommerce_after_single_product_summary' );
			?>

		</div>
	</div>
</div>

<?php do_action( 'woocommerce_after_single_product' ); ?>
