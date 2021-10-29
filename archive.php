<?
/**
 * The template for displaying archive pages
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package WP_Bootstrap_Starter
 */

get_header('shop');
?>

<section id="primary" class="content-area col-sm-12">
	<div id="main" class="site-main" role="main">
		<? if ( have_posts() ) : ?>
			<header class="page-header">
				<?
					the_archive_title( '<h1 class="page-title">', '</h1>' );
					the_archive_description( '<div class="archive-description">', '</div>' );
				?>
			</header><!-- .page-header -->

			<div class="container-fluid clothing-container fadeIn-1s">
        		<div class="row">
					<div class="col-12 col-md-9">
						<ul class="products columns-3">
							<? while ( have_posts() ) : the_post();
								get_template_part( 'content', get_post_format() );
							endwhile; ?>
						</ul>

						<p class="archive-pagination"><? echo woocommerce_pagination(); ?></p>
					</div>

					<div class="col-12 col-md-3 miror-container">
		                <div id="miror"></div>
		            </div>
		        </div>
		    </div>

		<? else :

			get_template_part( 'template-parts/content', 'none' );

		endif; ?>
	</div><!-- #main -->
</section><!-- #primary -->

<?php
get_footer('shop');
?>
