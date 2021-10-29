<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WP_Bootstrap_Starter
 */

if(!is_page_template( 'blank-page.php' ) && !is_page_template( 'blank-page-with-container.php' )): ?>
			</div><!-- .row -->
		</div><!-- .container -->
	</div><!-- #content -->
    <?php get_template_part( 'footer-widget' ); ?>
	<div class="container-fluid owl-references-container">
		<div class="row">
			<div class="col-12">
				<div id="owlRefs" class="owl-carousel owl-theme">
					<div class="item">
						<p>SEEN IN</p>
					</div>
					<div class="item">
						<img src="https://encre-atelier.com/wp-content/uploads/2021/04/69tiny.png" alt="">
					</div>
					<div class="item">
						<img src="https://encre-atelier.com/wp-content/uploads/2021/04/Konbinitiny.png" alt="">
					</div>
					<div class="item">
						<img src="https://encre-atelier.com/wp-content/uploads/2021/04/Paulettetiny.png" alt="">
					</div>
					<div class="item">
						<img src="https://encre-atelier.com/wp-content/uploads/2021/04/Tribunetiny.png" alt="">
					</div>
					<div class="item">
						<img src="https://encre-atelier.com/wp-content/uploads/2021/04/Journaldudesigntiny.png" alt="">
					</div>
					<div class="item">
						<img src="https://encre-atelier.com/wp-content/uploads/2021/04/Paperboystiny.png" alt="">
					</div>
					<div class="item">
						<img src="https://encre-atelier.com/wp-content/uploads/2021/04/Hypebeasttiny.png" alt="">
					</div>
					<div class="item">
						<img src="https://encre-atelier.com/wp-content/uploads/2021/04/Fudgetiny.png" alt="">
					</div>
					<div class="item">
						<img src="https://encre-atelier.com/wp-content/uploads/2021/04/ELLEtiny.png" alt="">
					</div>
					<div class="item">
						<img src="https://encre-atelier.com/wp-content/uploads/2021/04/Madametiny.png" alt="">
					</div>
					<div class="item">
						<img src="https://encre-atelier.com/wp-content/uploads/2021/04/Fashiontiny.png" alt="">
					</div>
					<div class="item">
						<img src="https://encre-atelier.com/wp-content/uploads/2021/04/IDtiny.png" alt="">
					</div>
					<div class="item">
						<img src="https://encre-atelier.com/wp-content/uploads/2021/04/KALTBLUTtiny.png" alt="">
					</div>
					<div class="item">
						<img src="https://encre-atelier.com/wp-content/uploads/2021/04/LOBStiny.png" alt="">
					</div>
				</div>
			</div>
		</div>
	</div>
	<footer id="colophon" class="site-footer <?php echo wp_bootstrap_starter_bg_class(); ?>" role="contentinfo">
		<div class="container-fluid">
			<div class="row">
				<div class="col-12 reseaux-sociaux">
					<a href="https://www.facebook.com/encreclothes" target="blank_"><i class="fab fa-facebook-f"></i></a>
					<a href="https://www.instagram.com/encre_atelier" target="blank_"><i class="fab fa-instagram"></i></a>
				</div>
				<a class="cart-contents d-none" href="<?php echo wc_get_cart_url(); ?>" title="<?php _e( 'View your shopping cart' ); ?>"><?php echo sprintf ( _n( '%d item', '%d items', WC()->cart->get_cart_contents_count() ), WC()->cart->get_cart_contents_count() ); ?></a>
			</div>
			<div class="row justify-content-center links-footer">
				<div class="col-12 col-sm-2 ministere-culture">
					<img src="https://encre-atelier.com/wp-content/themes/wp-bootstrap-starter-child/assets/icons/ministere-culture.svg" alt="">
				</div>
				<div class="col-10 col-sm-8 text-center lang_fr">
					<a href="https://encre-atelier.com/fr/contact" >Contact</a><span class="sep"> | </span>
					<a href="https://encre-atelier.com/fr/stockist" >Stockist</a><span class="sep"> | </span>
					<a href="https://encre-atelier.com/fr/shipping/">Shipping & Handling</a><span class="sep"> | </span>
					<a href="https://encre-atelier.com/fr/returns-exchanges/">Returns & Exchanges</a><span class="sep"> | </span>
					<a href="https://encre-atelier.com/fr/mentions-legales/"><span class="lang_fr">Mentions Légales</span><span class="lang_en">Legal Notice</span></a><span class="sep"> | </span>
					<a href="https://encre-atelier.com/fr/conditions-generales-de-vente/"><span class="lang_fr">Conditions Générales</span><span class="lang_en">Terms & Conditions</span></a><span class="sep"> | </span>
					<a href="#"><span class="lang_fr">Politique de confidentialité</span><span class="lang_en">Privacy policy</span></a>
				</div>
				<div class="col-10 col-sm-8 text-center lang_en">
					<a href="https://encre-atelier.com/en/contact" >Contact</a><span class="sep"> | </span>
					<a href="https://encre-atelier.com/en/stockist" >Stockist</a><span class="sep"> | </span>
					<a href="https://encre-atelier.com/en/shipping/">Shipping & Handling</a><span class="sep"> | </span>
					<a href="https://encre-atelier.com/en/returns-exchanges/">Returns & Exchanges</a><span class="sep"> | </span>
					<a href="https://encre-atelier.com/en/mentions-legales/"><span class="lang_fr">Mentions Légales</span><span class="lang_en">Legal Notice</span></a><span class="sep"> | </span>
					<a href="https://encre-atelier.com/en/conditions-generales-de-vente/"><span class="lang_fr">Conditions Générales</span><span class="lang_en">Terms & Conditions</span></a><span class="sep"> | </span>
					<a href="#"><span class="lang_fr">Politique de confidentialité</span><span class="lang_en">Privacy policy</span></a>
				</div>
				<div class="col-sm-2 d-none d-sm-block"></div>
				<button id="lang_footer" class="btn btn-default" >
					<span class="lang_fr">En</span><span class="lang_en">Fr</span>
				</button>
			</div>
		</div>
		<div class="container pt-3 pb-3 d-none">
            <div class="site-info">
                &copy; <?php echo date('Y'); ?> <?php echo '<a href="'.home_url().'">'.get_bloginfo('name').'</a>'; ?>
                <span class="sep"> | </span>
                <a class="credits" href="https://afterimagedesigns.com/wp-bootstrap-starter/" target="_blank" title="WordPress Technical Support" alt="Bootstrap WordPress Theme"><?php echo esc_html__('Bootstrap WordPress Theme','wp-bootstrap-starter'); ?></a>

            </div><!-- close .site-info -->
		</div>
		<div class="container" id="consoleResult"></div>
	</footer><!-- #colophon -->

	<!-- Modal SEARCH -->
	<div class="modal fade" id="searchModal" tabindex="-1" aria-labelledby="searchModal" aria-hidden="true" data-backdrop="static" keyboard="false" >
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<div class="container">
						<div class="row">
							<div class="col-12">
								<button type="button" class="close" data-dismiss="modal" aria-label="Close">
									<i class="fas fa-times"></i>
								</button>
							</div>
						</div>
					</div>
				</div>
				<div class="modal-body">
					<div class="container">
						<div class="row">
							<div class="col-12">
								<!-- <img src="http://encre-atelier.com/wp-content/uploads/2021/02/rechercher-cover.png"> -->
								<div class="search_bar">
							        <form id="form" action="/" method="get" autocomplete="off">
							            <input type="text" name="s" placeholder="RECHERCHER" id="keyword" class="input_search" onkeyup="fetch()">
							            <button>
							                Search
							            </button>
							        </form>
							        <div class="search_result" id="datafetch"></div>
							    </div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- Modal CAROUSEL ZOOM PRODUCT -->
	<div class="modal fade" id="zoomProductModal" tabindex="-1" aria-labelledby="zoomProductModal" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-body">
					<div class="container-fluid">
						<div class="row modal-heading">
							<div class="col-2">
								<img class="logo-modal" src="https://encre-atelier.com/wp-content/uploads/2021/04/encre-black.svg">
							</div>
							<div class="col-10">
								<button type="button" class="close" data-dismiss="modal" aria-label="Close">
									<i class="fas fa-times"></i>
								</button>
							</div>
						</div>
					</div>
					<div class="container">
						<div class="row justify-content-center">
							<div class="col-12 col-md-8">
								<div id="zoomProductCarousel"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- Modal SEND TO A LOVER -->
	<div class="modal fade" id="loverModal" tabindex="-1" aria-labelledby="loverModal" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered">
			<div class="modal-content">
				<div class="modal-body">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
					<script>
						//jQuery('#loverModal div.wpcf7 > form').wpcf7InitForm();
					</script>
					<?php echo do_shortcode( '[RM_Form id="1"]' ); ?>
					<div class="submit-custom">
						<button class="btn btn-primary" id="submitCustom">Envoyer</button>
						<div class="kiss-div">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 142.94 52.43">
								<defs>
									<style>
										.cls-1{fill:#fa4825;}
									</style>
								</defs>
								<g id="leftFace" data-name="Calque 1">
									<path d="M10,.52C9.2,3,8.9,5.67,10.61,7.8c1.3,1.63,4.73,2.52,3.76,5.08-.69,1.84-2.62,3.59-1.76,5.71a4.19,4.19,0,0,0,1.83,1.87c1.1.69,2.07,1.28,1.17,2.59-1,1.51-2.43,3.38-1,5.17.46.6,1.32.84,1.74,1.45.76,1.1-.57,1.66-1.26,2.21a4.18,4.18,0,0,0-1.54,2.26,4.24,4.24,0,0,0,.69,2.77,3.4,3.4,0,0,1-.08,3.22,6.38,6.38,0,0,1-2.3,3c-2.33,1.45-5.47.69-8,1.85S.33,49.15,0,51.72c-.12,1,1.38.94,1.5,0a9,9,0,0,1,1.39-4,4.89,4.89,0,0,1,3.4-2c2.31-.44,4.84-.24,6.8-1.76a8.56,8.56,0,0,0,3-5.26,5,5,0,0,0-.7-2.75A2.52,2.52,0,0,1,15,34.41a2.83,2.83,0,0,1,1.2-1.52c1.29-.94,2.55-2.28,1.44-4-.43-.65-1.16-.9-1.69-1.43-1-1,0-2.38.66-3.27,1.19-1.58,1.29-3.19-.43-4.45-.76-.56-2.05-1-2.25-2s.85-2.35,1.34-3.25c1.14-2.11,1.12-4.1-.92-5.59C13.17,8.06,11.86,7.37,11.22,6c-.75-1.6-.29-3.49.26-5.08C11.79,0,10.35-.39,10,.52Z"/>
									<path d="M9.1,8.4a5.37,5.37,0,0,1-.43.87,5,5,0,0,1-1.14,1.29,5,5,0,0,1-3.48,1c-.48-.05-.47.7,0,.75A5.67,5.67,0,0,0,9.82,8.6C10,8.15,9.26,8,9.1,8.4Z"/>
								</g>
								<g id="rightFace" data-name="Calque 2">
									<path d="M118.93,3.94c.92,1.39,1.83,3.06,1.54,4.8a6.94,6.94,0,0,1-2,3.32c-1.19,1.37-1.81,2.93-.83,4.62.77,1.32,3.48,2.83,3.17,4.53-.19,1-1.31,1.66-1.85,2.42a2.75,2.75,0,0,0-.51,2.49c.53,1.55,3.87,2.59,3,4.52-.33.71-1.07,1.14-1.35,1.91a2.59,2.59,0,0,0,.49,2.5,5.12,5.12,0,0,0,2.08,1.08,2.22,2.22,0,0,1,1.5,1.59,8.32,8.32,0,0,1-.3,2c-.29,2.11,1.09,3.92,2.64,5.25,2.23,1.91,4.66,1.64,7.38,1.27,1.5-.21,3.2-.45,4.55.39a8.17,8.17,0,0,1,3,4c.36.88,1.81.49,1.45-.4-.86-2.15-2.34-4.53-4.65-5.34s-5,.2-7.47.21a5,5,0,0,1-3.67-1.61c-.78-.78-1.8-1.91-1.8-3.07,0-1,.48-1.94.34-3A3.5,3.5,0,0,0,123.76,35c-.75-.43-2.56-.58-2.29-1.83.17-.82,1.15-1.37,1.44-2.18.71-2-.92-3.38-2.26-4.5-1-.84-.94-1.5,0-2.48a5.82,5.82,0,0,0,1.65-2.4c.44-1.85-1.07-3.19-2.23-4.38-.75-.77-1.71-1.75-1.3-2.93s1.46-1.83,2.08-2.71c2-2.74,1.15-5.8-.59-8.41-.53-.8-1.83-.05-1.29.76Z"/>
									<path d="M122.47,11A5.68,5.68,0,0,0,129,13.07c.45-.16.25-.88-.2-.72a4.94,4.94,0,0,1-5.68-1.78c-.27-.39-.92,0-.65.38Z"/>
								</g>
							</svg>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
<?php endif; ?>
	</div><!-- #page -->
		<div id="rotateScreen">
			<div class="container">
				<div class="row">
					<div class="col-6">
						<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
						<path d="M351.68,53.653c69.653,33.067,119.68,100.8,127.253,181.013h32C500.053,103.253,390.187,0,256,0
						c-4.8,0-9.387,0.427-14.187,0.747L323.2,82.133C323.2,82.133,351.68,53.653,351.68,53.653z M218.24,37.227
						c-12.48-12.48-32.747-12.48-45.227,0L37.227,173.013c-12.48,12.48-12.48,32.747,0,45.227l256.427,256.427
						c12.48,12.48,32.747,12.48,45.227,0L474.667,338.88c12.48-12.48,12.48-32.747,0-45.227L218.24,37.227z M316.373,452.053
						L59.84,195.627L195.627,59.84l256.427,256.427L316.373,452.053z M160.32,458.347C90.667,425.28,40.64,357.547,33.067,277.333h-32
						C11.947,408.747,121.813,512,256,512c4.8,0,9.387-0.427,14.187-0.747L188.8,429.867L160.32,458.347L160.32,458.347z"/>
						</svg>
					</div>
					
					<div class="col-6"><p class="h1">ROTATE<br>YOUR<br>DEVICE<p></div>
				</div>
			</div>
		</div>

		<button id="krimo" class="btn btn-warning d-none">RETOUR</button>

		<?php wp_footer(); ?>
	</body>
</html>
