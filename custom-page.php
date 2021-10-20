<?php
/**
 * Template Name: Custom Template
 */

get_header();
// get_sidebar();
?>
    <section id="primary" class="content-area col-sm-12 col-lg-8">
        <div id="main" class="site-main" role="main">
            <?php 
            $children = get_categories( array(
    'taxonomy'     => 'product_cat',
    'orderby'      => 'name',
    'pad_counts'   => false,
    'hierarchical' => 1,
    'hide_empty'   => false
) );

if ($children) {
  foreach ($children as $subcat) {
    echo '<h2><a href="' . esc_url(get_term_link($subcat, $subcat->taxonomy)) . '">' . // Display child taxonomy name
      $subcat->name . ' (' . $subcat->count . ')' . '</a></h2>' . $subcat->description; // Display child taxonomy item count
    $kategorie = $subcat->slug; // Set child category slug for each query of products
    $args = array(
      'post_type' => 'product',
      'product_cat' => $kategorie, 
    );
    $loop = new WP_Query($args);
    if ($loop->have_posts()) {
      while ($loop->have_posts()) : $loop->the_post(); ?>
        <h4><a href="<?php the_permalink() ?>" rel="bookmark" title="<?php the_title_attribute(); ?>"><?php the_title(); //Display product title ?></a></h4>
        <?php $product = wc_get_product(get_the_ID()); // get the WC_Product Object ?>
        <p><?php echo $product->get_price_html(); // Display product Price ?></p>
        <?php endwhile; ?><?php
                        } else {
                          echo __('No products found');
                        }
                        wp_reset_postdata(); // Reset Query
                          ?>
        <!--/.products-->
    <?php

  }
}

            ?>
        </div><!-- #main -->
    </section><!-- #primary -->

<?php
get_footer();
