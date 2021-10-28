(function ($) {
    function offset(element) {
        var rect = element.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }

    function flyToCart() {
        console.log('add to cart ok')
        let nbr = parseInt(document.querySelector('.btn-panier #nbr').innerHTML)

        const cta = document.querySelector('.single_add_to_cart_button')
        const faceCta = document.getElementById('faceSmile')
        const faceHeader = document.getElementById('faceCart')
        cta.innerHTML = ''
        let countATC = 0
        let faceCtaOffset = offset(faceCta)
        let faceHeaderOffset = offset(faceHeader)

        console.log('offset faces :')
        console.log(faceCtaOffset)
        console.log(faceHeaderOffset)

        let toY = faceCtaOffset.left - faceHeaderOffset.left
        let toX = faceCtaOffset.top - faceHeaderOffset.top

        console.log(toX, toY)


        let timeline = anime.timeline()

        timeline
        .add({
            targets: cta,
            borderRadius: '50%',
            width: '30px',
            height: '30px',
            easing: 'easeOutQuart',
            borderWidth: '2px',
            duration: 1000
        }, '+=1000')
        .add({
            targets: cta,
            easing: 'easeOutQuart',
            opacity: [1, 0],
            duration: 1000
        }, '+=1000')
        .add({
            targets: faceCta,
            easing: 'easeOutQuart',
            opacity: [0, 1],
            duration: 1000
        }, '-=1000')
        .add({
            targets: faceCta,
            easing: 'easeOutQuart',
            translateX: { 
                value: -toY, 
                easing: 'easeOutQuart', 
                duration: 1500
            },
            translateY: { 
                value: -toX,
                easing: 'easeOutBack', 
                duration: 1500
            }
        }, '+=1000')
        .add({
            targets: faceCta,
            easing: 'easeOutQuart',
            opacity: [1, 0],
            duration: 500
        }, '+=1000')
        .add({
            targets: faceCta,
            translateX: { 
                value: 0, 
                easing: 'linear', 
                duration: 500
            },
            translateY: { 
                value: 0,
                easing: 'linear', 
                duration: 500
            }
        }, '+=1000')
        .add({
            targets: cta,
            borderRadius: '0%',
            width: '50%',
            height: '40px',
            easing: 'easeOutQuart',
            borderWidth: '1px',
            duration: 500
        }, '+=1000')
        .add({
            targets: cta,
            easing: 'easeOutQuart',
            opacity: [0, 1],
            duration: 1000
        }, '+=1000')


        setTimeout(() => { 
            document.querySelector('.btn-panier #nbr').innerHTML = nbr+1
            faceHeader.classList.remove('empty')
            cta.innerHTML = 'BUY'
        }, 7000)

        setTimeout(() => { 
            cta.classList.remove('added')
            // faceCta.classList.add('d-none')
        }, 10000)
    }

    $(document).on('click', '.single_add_to_cart_button', function (e) {
        e.preventDefault();

        var $thisbutton = $(this),
                $form = $thisbutton.closest('form.cart'),
                id = $thisbutton.val(),
                product_qty = $form.find('input[name=quantity]').val() || 1,
                product_id = $form.find('input[name=product_id]').val() || id,
                variation_id = $form.find('input[name=variation_id]').val() || 0;

        var data = {
            action: 'woocommerce_ajax_add_to_cart',
            product_id: product_id,
            product_sku: '',
            quantity: product_qty,
            variation_id: variation_id,
        };

        $(document.body).trigger('adding_to_cart', [$thisbutton, data]);

        $.ajax({
            type: 'post',
            url: wc_add_to_cart_params.ajax_url,
            data: data,
            beforeSend: function (response) {
                $thisbutton.removeClass('added').addClass('loading');
            },
            complete: function (response) {
                $thisbutton.addClass('added').removeClass('loading');
            },
            success: function (response) {

                if (response.error && response.product_url) {
                    window.location = response.product_url;
                    return;
                } else {
                    $(document.body).trigger('added_to_cart', [response.fragments, response.cart_hash, $thisbutton]);
                    flyToCart()
                }
            },
        });

        return false;
    });
})(jQuery);