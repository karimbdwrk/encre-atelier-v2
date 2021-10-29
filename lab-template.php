<?php
/**
 * Template Name: LAB Template
 */
get_header();
?>
<section id="primary" class="content-area col-sm-12">
  <div id="main" class="site-main" role="main">
    <div class="container-fluid lab-container fadeIn-1s">
        <div class="row">
            <div class="col-12 col-md-3 miror-container">
                <div id="miror"></div>
            </div>
    
            <div class="col-12 col-md-6">
                <?php echo do_shortcode('[products category="lab" limit="6" columns="2" orderby="date" order="DESC" paginate="true"]'); ?>
            </div>
    
            <div class="col-12 col-md-3 presentation-container">
                <div class="text-content">
                    <p>LE LAB EST CABINET D’EXPÉRIMENTATIONS, D’ESSAIS, ET DE PRODUITS UNIQUES DANS LEURS GENRES. DU MOBILIER VINTAGE, À LA POTERIE, EN PASSANT PAR LE TEXTILE, TOUTES LES CRÉATIONS SONT RETRAVAILLÉES À LA MAIN, PAR CHARLIE FARON ET SON ÉQUIPE.</p>
                </div>
            </div>
        </div>
    </div>
    
  </div><!-- #main -->
</section><!-- #primary -->

<?php
get_footer();
