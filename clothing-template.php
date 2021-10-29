<?php
/**
 * Template Name: CLOTHING Template
 */
get_header();
?>
<section id="primary" class="content-area col-sm-12">
  <div id="main" class="site-main" role="main">
    <div class="container-fluid clothing-container fadeIn-1s">
        <div class="row">
            <div class="col-12 col-md-9">
                <?php echo do_shortcode('[products category="clothing" columns="3" limit="9" orderby="date" order="DESC" paginate="true"]');?>
            </div>
            <div class="col-12 col-md-3 miror-container">
                <div id="miror"></div>
            </div>
        </div>
    </div>
  </div><!-- #main -->
</section><!-- #primary -->

<?php
get_footer();
?>
<div class="col-10">
    <pre><?php echo do_shortcode('[activeplugins]'); ?></pre>
</div>