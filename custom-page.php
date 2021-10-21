<?php
/**
 * Template Name: Custom Template
 */
get_header();
?>


<section id="primary" class="content-area col-sm-12 col-lg-8">
  <div id="main" class="site-main" role="main">
    <ul class="cat-list">
      <li><a class="cat-list_item active" href="#!" data-slug="">All projects</a></li>

      <?php
        $categories = get_categories( array(
          'taxonomy'     => 'product_cat',
          'orderby'      => 'name',
          'pad_counts'   => false,
          'hierarchical' => 1,
          'hide_empty'   => false
        ));
        foreach($categories as $category) :
      ?>
        <li>
          <a class="cat-list_item" href="#!" data-slug="<?php echo $category->slug; ?>">
            <?= $category->name; ?>
          </a>
        </li>
      <?php endforeach; ?>
    </ul>

    <?php 
      $projects = new WP_Query([
        'post_type' => 'products',
        'posts_per_page' => 3,
        'order_by' => 'date',
        'order' => 'desc',
      ]);
    ?>

    <?php if($projects->have_posts()): ?>
      <ul class="project-tiles">
        <?php
          while($projects->have_posts()) : $projects->the_post();
            get_template_part('_components/product-list-item.php');
          endwhile;
        ?>
      </ul>
      <?php wp_reset_postdata(); ?>
    <?php endif; ?>
  </div><!-- #main -->
</section><!-- #primary -->

<?php
get_footer();
