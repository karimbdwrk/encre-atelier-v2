<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WP_Bootstrap_Starter
 */

?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-195957052-1"></script>
    <script defer>
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-195957052-1');
    </script>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, user-scalable=no">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="profile" href="http://gmpg.org/xfn/11">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

<?php 

    // WordPress 5.2 wp_body_open implementation
    if ( function_exists( 'wp_body_open' ) ) {
        wp_body_open();
    } else {
        do_action( 'wp_body_open' );
    }

?>

<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'wp-bootstrap-starter' ); ?></a>
    <?php if(!is_page_template( 'blank-page.php' ) && !is_page_template( 'blank-page-with-container.php' )): ?>
	<header id="masthead" class="site-header navbar-static-top <?php echo wp_bootstrap_starter_bg_class(); ?>" role="banner">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="blue-banner tickerwrapper">
                        <ul class="list">
                            <!-- <li class="item">
                                <p>-30%&nbsp;SUR&nbsp;TOUT&nbsp;NOTRE&nbsp;E-SHOP&nbsp;JUSQU'À&nbsp;DIMANCHE&nbsp;19H&nbsp;AVEC&nbsp;LE&nbsp;CODE&nbsp;PROMO&nbsp;<b>SHOP30</b>.</p>
                            </li> -->
                            <li class="item">
                                <p>FRANCE : FREE SHIPPING FOR ORDERS OVER 100€</p>
                            </li>
                            <li class="item">
                                <p>EU : FREE SHIPPING FOR  ORDERS OVER 150€</p>
                            </li>
                            <li class="item">
                                <p>REST OF THE WORLD : FREE SHIPPING FOR  ORDERS OVER 200€</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-4 col-sm-2 logo-container">
                    <a href="/">
                        <img src="https://encre-atelier.com/wp-content/uploads/2021/04/encre-black.svg">
                    </a>
                </div>
                <div class="col-8 col-md-10 nav-container">
                    <nav class="navbar">

                        <?php
                        wp_nav_menu(array(
                        'theme_location'    => 'primary',
                        'container'       => 'div',
                        'container_id'    => 'main-nav',
                        'container_class' => 'navbar-collapse justify-content-center',
                        'menu_id'         => false,
                        'menu_class'      => 'navbar-nav',
                        'depth'           => 3,
                        'fallback_cb'     => 'wp_bootstrap_navwalker::fallback',
                        'walker'          => new wp_bootstrap_navwalker()
                        ));
                        ?>

                    </nav>
                    <div class="buttons">
                    <?php echo do_shortcode( '[yith_wcwl_wishlist]' ); ?>
                        <a href="/favoris" class="btn btn-wishlist">
                            <!-- <img src="http://encre-atelier.badwork.fr/wp-content/themes/wp-bootstrap-starter-child/icons/coeur.svg" class="wishlist-svg"/> -->
                            <svg class="wishlist-svg" xmlns="http://www.w3.org/2000/svg" width="35" height="30" viewBox="0 0 80 70">
                                <path id="heart-path" data-name="Tracé 44" d="M0,23.91C-.26,12.77,5.31,4.49,13.26,1.38A20.34,20.34,0,0,1,35.73,6.71c2.22,2.34,3,2,5-.11,6-6.32,13.58-8.09,22-5.28a20.9,20.9,0,0,1,13.74,19,32.9,32.9,0,0,1-5.93,18.64c-7.6,11.4-18.33,19.58-30.37,26.39a3.67,3.67,0,0,1-4.07,0C24.35,58.66,13.87,50.68,6.3,39.67,2.44,34.06.06,28,0,23.91" fill="#d10000"/>
                            </svg>
                        </a>
                        <button type="button" class="btn btn-recherche" data-toggle="modal" data-target="#searchModal">
                            <img src="https://encre-atelier.com/wp-content/uploads/2021/03/eye-close.svg" class="search-svg"/>
                        </button>
                        <a href="#" class="btn btn-panier xoo-wsc-cart-trigger">
                            <!-- <img src="https://encre-atelier.com/wp-content/uploads/2021/03/eye-close.svg" class="panier-svg"/> -->
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49.95 49.95" class="face-no-smile">
                                <g id="faceCart" class="empty" data-name="face-no-smile">
                                    <path class="face-bg" d="M33.34,1.43A25,25,0,0,0,3.53,37.88,25.27,25.27,0,0,0,29.8,49.51,25.25,25.25,0,0,0,50,25,25.31,25.31,0,0,0,33.34,1.43Z"/>
                                    <path d="M33.34,1.43A25,25,0,0,0,3.53,37.88,25.27,25.27,0,0,0,29.8,49.51,25.25,25.25,0,0,0,50,25,25.31,25.31,0,0,0,33.34,1.43Zm-.8,44.21A22.24,22.24,0,0,1,8,39,22,22,0,0,1,29.33,3.42,22.23,22.23,0,0,1,47,25,22.21,22.21,0,0,1,32.54,45.64Z"/>
                                    <path d="M16.74,20a3.24,3.24,0,0,0,.88-.06,1.61,1.61,0,0,0,.29-.09,4.11,4.11,0,0,0,.57-.25,2.65,2.65,0,0,0,.68-.57,3.19,3.19,0,0,0,.64-1.08A2.69,2.69,0,0,0,20,17a2.85,2.85,0,0,0-.13-.86,2.9,2.9,0,0,0-.36-.78,3.8,3.8,0,0,0-.82-.83,3.08,3.08,0,0,0-.75-.37A2.67,2.67,0,0,0,17,14a1.07,1.07,0,0,0-.25,0,4.28,4.28,0,0,0-.61.09,3,3,0,0,0-1.43.89,3.43,3.43,0,0,0-.59,1,3.06,3.06,0,0,0-.17.85,3,3,0,0,0,.08.89,2.82,2.82,0,0,0,.33.78,2.91,2.91,0,0,0,.52.65,2.79,2.79,0,0,0,.69.49,5.25,5.25,0,0,0,.55.22A3.23,3.23,0,0,0,16.74,20Z"/>
                                    <path d="M28.37,19.51a2.91,2.91,0,0,0,.52.65,2.79,2.79,0,0,0,.69.49,5.25,5.25,0,0,0,.55.22,3.26,3.26,0,0,0,1.49,0,1.61,1.61,0,0,0,.29-.09,4.11,4.11,0,0,0,.57-.25,2.65,2.65,0,0,0,.68-.57,3.19,3.19,0,0,0,.64-1.08A2.69,2.69,0,0,0,34,18a2.85,2.85,0,0,0-.13-.86,2.9,2.9,0,0,0-.36-.78,3.8,3.8,0,0,0-.82-.83,3.08,3.08,0,0,0-.75-.37A2.67,2.67,0,0,0,31,15a1.07,1.07,0,0,0-.25,0,4.28,4.28,0,0,0-.61.09,3,3,0,0,0-1.43.89,3.43,3.43,0,0,0-.59,1,3.06,3.06,0,0,0-.17.85,3,3,0,0,0,.08.89A2.82,2.82,0,0,0,28.37,19.51Z"/>
                                    <path class="no-smile" d="M27.36,28c-5.62.36-10,4.83-11.36,10.09a1.51,1.51,0,0,0,2.9.8c1.05-4,4.33-7.74,8.7-7.9a8,8,0,0,1,5.32,1.84,12.55,12.55,0,0,1,1.64,1.62l.22.27.1.13c.09.13.19.26.28.4,1.05,1.61,3.65.11,2.59-1.51C35.5,30.29,31.57,27.72,27.36,28Z"/>
                                    <path class="smile" d="M26.59,39.93c5.61-.36,10-4.84,11.35-10.1a1.5,1.5,0,0,0-2.89-.8c-1.06,4-4.33,7.75-8.71,7.91A8,8,0,0,1,21,35.09a12,12,0,0,1-1.65-1.62l-.22-.27-.09-.12-.28-.41c-1.05-1.61-3.65-.1-2.59,1.52C18.45,37.63,22.37,40.2,26.59,39.93Z"/>
                                </g>
                            </svg>
                            <div id="nbr"><?php echo wc()->cart->get_cart_contents_count(); ?></div>
                        </a>
                    </div>
                    <div class="black-banner">
                        <div class="tickerwrapper-2">
                            <ul class="list">
                                <li class="item">
                                    <p>After a childhood spent in the United States,</p>
                                </li>
                                <li class="item">
                                    <p>being a teenager in Lyon, shortened higher education,</p>
                                </li>
                                <li class="item">
                                    <p>and a growing passion for tattoos,</p>
                                </li>
                                <li class="item">
                                    <p>I decided to jump into a project combining textile and tattoos.</p>
                                </li>
                                <li class="item">
                                    <p>I wanted the thread to replace the ink,</p>
                                </li>
                                <li class="item">
                                    <p>the textile to become the skin and the needle to follow the hand movement just as the tattooist would sting the drawing line.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container d-none">
            <div class="row">
                <div class="col-7 col-md-3">
                    <button class="btn navigation-mobile d-md-none" type="button" data-toggle="modal" data-target="#menuModal">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 38">
                            <g id="burger-menu-groupe" data-name="Calque 2">
                                <g id="Calque_1-2" data-name="Calque 1">
                                    <circle id="clothingDot" cx="3.5" cy="3.5" r="3.5"/>
                                    <circle id="homeDot" cx="3.5" cy="13.5" r="3.5"/>
                                    <circle id="labDot" cx="3.5" cy="24.5" r="3.5"/>
                                    <circle id="aboutDot" cx="3.5" cy="34.5" r="3.5"/>
                                </g>
                            </g>
                        </svg>
                    </button>
                    <div class="logoContainer">
                        <!-- <a href="https://encre-atelier.com/fr" class="header-logo lang_fr">Encré.</a>
                        <a href="https://encre-atelier.com/en" class="header-logo lang_en">Encré.</a> -->
                        <a href="https://encre-atelier.com/fr" class="header-logo lang_fr">
                            <img src="https://encre-atelier.com/wp-content/uploads/2021/04/encre-black.svg">
                        </a>
                        <a href="https://encre-atelier.com/en" class="header-logo lang_en">
                            <img src="https://encre-atelier.com/wp-content/uploads/2021/04/encre-black.svg">
                        </a>
                        <p id="subheader-logo">&nbsp;</p>
                    </div>
                </div>
                <div class="col-1 col-md-6 d-none d-sm-block">

                </div>
                <div class="col-2 col-md-2">
                    <div class="search-link text-right">
                        <!-- Button trigger modal -->
                        <button type="button" class="btn btn-recherche" data-toggle="modal" data-target="#searchModal">
                            <img src="https://encre-atelier.com/wp-content/uploads/2021/03/eye-close.svg" class="search-svg"/>
                        </button>
                    </div>
                </div>
                <div class="col-2 col-md-1">
                    <div class="header-cart text-right">
                        <span id="badgeCart"></span>
                        <a href="https///encre-atelier.com/fr/cart" class="btn lang_fr">
                            <svg class="panier-svg" xmlns="http://www.w3.org/2000/svg" width="41.855" height="43.849" viewBox="0 0 41.855 43.849">
                                <g id="Groupe_208" data-name="Groupe 208" transform="translate(-1739.145 -90.291)">
                                    <g id="Tracé_2" data-name="Tracé 2" transform="translate(1739.145 100.258)" fill="none">
                                    <path d="M2.529,0H39.248l2.607,33.882H0Z" stroke="none"/>
                                    <path d="M 4.385108947753906 1.999996185302734 L 2.154830932617188 31.88241577148438 L 39.6949462890625 31.88241577148438 L 37.39557647705078 1.999996185302734 L 4.385108947753906 1.999996185302734 M 2.528820037841797 -3.814697265625e-06 L 39.24760055541992 -3.814697265625e-06 L 41.85475921630859 33.88241577148438 L 0 33.88241577148438 L 2.528820037841797 -3.814697265625e-06 Z" stroke="none" fill="#000"/>
                                    </g>
                                    <g id="Soustraction_1" data-name="Soustraction 1" transform="translate(1747.149 90.291)" fill="none">
                                    <path d="M25.845,11.959H0A12.7,12.7,0,0,1,4.054,3.475a12.989,12.989,0,0,1,21.791,8.482Z" stroke="none"/>
                                    <path d="M 23.48784065246582 9.958898544311523 C 22.21307754516602 5.35752010345459 17.9284782409668 1.999998807907104 12.92341899871826 1.999998807907104 C 10.12105846405029 1.999998807907104 7.454988956451416 3.044058799743652 5.416318893432617 4.939848899841309 C 3.931335926055908 6.32074499130249 2.881961584091187 8.055333137512207 2.356542348861694 9.958898544311523 L 23.48784065246582 9.958898544311523 M 25.84527969360352 11.95889854431152 L 25.84342956542969 11.95889854431152 L -1.106872559830663e-06 11.95889854431152 C 0.2154488861560822 8.717808723449707 1.65592885017395 5.705558776855469 4.05436897277832 3.475238800048828 C 6.464308738708496 1.234188795089722 9.614078521728516 -1.204681439048727e-06 12.92341899871826 -1.204681439048727e-06 C 19.7228889465332 -1.204681439048727e-06 25.39878845214844 5.25217866897583 25.84515953063965 11.95706844329834 L 25.84527969360352 11.95889854431152 Z" stroke="none" fill="#000"/>
                                    </g>
                                    <path id="Tracé_14" data-name="Tracé 14" d="M88.982,147.276a4.366,4.366,0,0,0-3.806,2.227,4.366,4.366,0,0,0-3.806-2.227A4.62,4.62,0,0,0,77,151.928c0,6.061,8.176,10.29,8.176,10.29s8.176-4.229,8.176-10.29a4.62,4.62,0,0,0-4.37-4.652Zm0,0" transform="translate(1674.896 -37.547)" fill="#fa4825"/>
                                </g>
                            </svg>
                        </a>
                        <a href="https///encre-atelier.com/en/cart" class="btn lang_en">
                            <svg class="panier-svg" xmlns="http://www.w3.org/2000/svg" width="41.855" height="43.849" viewBox="0 0 41.855 43.849">
                                <g id="Groupe_208" data-name="Groupe 208" transform="translate(-1739.145 -90.291)">
                                    <g id="Tracé_2" data-name="Tracé 2" transform="translate(1739.145 100.258)" fill="none">
                                    <path d="M2.529,0H39.248l2.607,33.882H0Z" stroke="none"/>
                                    <path d="M 4.385108947753906 1.999996185302734 L 2.154830932617188 31.88241577148438 L 39.6949462890625 31.88241577148438 L 37.39557647705078 1.999996185302734 L 4.385108947753906 1.999996185302734 M 2.528820037841797 -3.814697265625e-06 L 39.24760055541992 -3.814697265625e-06 L 41.85475921630859 33.88241577148438 L 0 33.88241577148438 L 2.528820037841797 -3.814697265625e-06 Z" stroke="none" fill="#000"/>
                                    </g>
                                    <g id="Soustraction_1" data-name="Soustraction 1" transform="translate(1747.149 90.291)" fill="none">
                                    <path d="M25.845,11.959H0A12.7,12.7,0,0,1,4.054,3.475a12.989,12.989,0,0,1,21.791,8.482Z" stroke="none"/>
                                    <path d="M 23.48784065246582 9.958898544311523 C 22.21307754516602 5.35752010345459 17.9284782409668 1.999998807907104 12.92341899871826 1.999998807907104 C 10.12105846405029 1.999998807907104 7.454988956451416 3.044058799743652 5.416318893432617 4.939848899841309 C 3.931335926055908 6.32074499130249 2.881961584091187 8.055333137512207 2.356542348861694 9.958898544311523 L 23.48784065246582 9.958898544311523 M 25.84527969360352 11.95889854431152 L 25.84342956542969 11.95889854431152 L -1.106872559830663e-06 11.95889854431152 C 0.2154488861560822 8.717808723449707 1.65592885017395 5.705558776855469 4.05436897277832 3.475238800048828 C 6.464308738708496 1.234188795089722 9.614078521728516 -1.204681439048727e-06 12.92341899871826 -1.204681439048727e-06 C 19.7228889465332 -1.204681439048727e-06 25.39878845214844 5.25217866897583 25.84515953063965 11.95706844329834 L 25.84527969360352 11.95889854431152 Z" stroke="none" fill="#000"/>
                                    </g>
                                    <path id="Tracé_14" data-name="Tracé 14" d="M88.982,147.276a4.366,4.366,0,0,0-3.806,2.227,4.366,4.366,0,0,0-3.806-2.227A4.62,4.62,0,0,0,77,151.928c0,6.061,8.176,10.29,8.176,10.29s8.176-4.229,8.176-10.29a4.62,4.62,0,0,0-4.37-4.652Zm0,0" transform="translate(1674.896 -37.547)" fill="#fa4825"/>
                                </g>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

        </div>
        <!-- Modal -->
        <div class="modal fade" id="menuModal" tabindex="-1" aria-labelledby="menuModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="nav-links lang_fr">
                            <a href="https://encre-atelier.com/fr/clothing/?swoof=1&product_cat=new-in">Clothing.</a>
                            <a href="https://encre-atelier.com/fr/home">Home.</a>
                            <a href="https://encre-atelier.com/fr/lab">Lab.</a>
                            <a href="https://encre-atelier.com/fr/about">About.</a>
                        </div>
                        <div class="nav-links lang_en">
                            <a href="https://encre-atelier.com/en/clothing/?swoof=1&product_cat=new-in">Clothing.</a>
                            <a href="https://encre-atelier.com/en/home">Home.</a>
                            <a href="https://encre-atelier.com/en/lab">Lab.</a>
                            <a href="https://encre-atelier.com/en/about">About.</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	</header><!-- #masthead -->
    <?php if(is_front_page() && !get_theme_mod( 'header_banner_visibility' )): ?>
        <div id="page-sub-header" <?php if(has_header_image()) { ?>style="background-image: url('<?php header_image(); ?>');" <?php } ?>>
            <div class="container">
                <h1>
                    <?php
                    if(get_theme_mod( 'header_banner_title_setting' )){
                        echo esc_attr( get_theme_mod( 'header_banner_title_setting' ) );
                    }else{
                        echo 'WordPress + Bootstrap';
                    }
                    ?>
                </h1>
                <p>
                    <?php
                    if(get_theme_mod( 'header_banner_tagline_setting' )){
                        echo esc_attr( get_theme_mod( 'header_banner_tagline_setting' ) );
                }else{
                        echo esc_html__('To customize the contents of this header banner and other elements of your site, go to Dashboard > Appearance > Customize','wp-bootstrap-starter');
                    }
                    ?>
                </p>
                <a href="#content" class="page-scroller"><i class="fa fa-fw fa-angle-down"></i></a>
            </div>
        </div>
    <?php endif; ?>
	<div id="content" class="site-content">
		<div class="container-fluid">
			<div class="row">
                <?php endif; ?>
