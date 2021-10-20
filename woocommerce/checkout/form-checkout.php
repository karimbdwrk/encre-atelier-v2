<?php
/**
 * Checkout Form
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/checkout/form-checkout.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates
 * @version 3.5.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

do_action( 'woocommerce_before_checkout_form', $checkout );

// If checkout registration is disabled and not logged in, the user cannot checkout.
if ( ! $checkout->is_registration_enabled() && $checkout->is_registration_required() && ! is_user_logged_in() ) {
	echo esc_html( apply_filters( 'woocommerce_checkout_must_be_logged_in_message', __( 'You must be logged in to checkout.', 'woocommerce' ) ) );
	return;
}

?>

<div class="container fadeIn-1s">
	<div class="row">


		<form name="checkout" method="post" class="checkout woocommerce-checkout" action="<?php echo esc_url( wc_get_checkout_url() ); ?>" enctype="multipart/form-data">

			<?php if ( $checkout->get_checkout_fields() ) : ?>

				<?php do_action( 'woocommerce_checkout_before_customer_details' ); ?>

				<div class="col-12 col-md-6">

					<div class="col2-set" id="customer_details">
					<div class="accordion" id="accordionFacturation">
						<div class="card">
							<div class="card-header" id="headingOne">
								<h2 class="mb-0">
								<button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
									<i class="fas fa-chevron-down"></i><span class="lang_fr">DÉTAILS DE LIVRAISON.</span><span class="lang_en">BILLING INFORMATION.</span>
								</button>
								</h2>
							</div>
						
							<div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionFacturation">
								<div class="card-body">
									<?php do_action( 'woocommerce_checkout_billing' ); ?>
								</div>
							</div>
							</div>
							<div class="card">
							<div class="card-header" id="headingTwo">
								<h2 class="mb-0">
								<button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
									<i class="fas fa-chevron-down"></i><span class="lang_fr">FACTURER À UNE ADRESSE DIFFÉRENTE.</span><span class="lang_en">SEND TO A DIFFERENT ADDRESS.</span>
								</button>
								</h2>
							</div>
							<div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionFacturation">
								<div class="card-body">
									<?php do_action( 'woocommerce_checkout_shipping' ); ?>
								</div>
							</div>
							</div>
						</div>
					</div>

				<?php do_action( 'woocommerce_checkout_after_customer_details' ); ?>

				<?php endif; ?>

			</div>
			<div class="col-12 col-md-6">
				<div class="order-review-column">
					
					<?php do_action( 'woocommerce_checkout_before_order_review_heading' ); ?>
					
					<h3 id="order_review_heading"><span class="lang_fr">COMMANDE.</span><span class="lang_en">ORDER.</span></h3>
					
					<?php do_action( 'woocommerce_checkout_before_order_review' ); ?>

					<div id="order_review" class="woocommerce-checkout-review-order">
						<?php do_action( 'woocommerce_checkout_order_review' ); ?>
					</div>

					<?php do_action( 'woocommerce_checkout_after_order_review' ); ?>

				</div>
			</div>

		</form>

		<?php do_action( 'woocommerce_after_checkout_form', $checkout ); ?>

	</div>
</div>
