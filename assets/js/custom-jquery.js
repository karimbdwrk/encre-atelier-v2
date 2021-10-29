if (jQuery( window ).width() <= 425) {
    jQuery('#rotateScreen').removeClass('active')
} else if (jQuery( window ).width() > 425 && jQuery( window ).height() <= 425 && jQuery( window ).height() < jQuery( window ).width()) {
    jQuery('#rotateScreen').addClass('active')
} else if (jQuery( window ).width() > 425 && jQuery( window ).height() < jQuery( window ).width()) {
    jQuery('#rotateScreen').removeClass('active')
} else if (jQuery( window ).width() > 425 && jQuery( window ).height() > jQuery( window ).width()) {
    jQuery('#rotateScreen').addClass('active')
}

jQuery( window ).on('resize', function() {
    if (jQuery( window ).width() <= 425) {
        jQuery('#rotateScreen').removeClass('active')
    } else if (jQuery( window ).width() > 425 && jQuery( window ).height() <= 425 && jQuery( window ).height() < jQuery( window ).width()) {
        jQuery('#rotateScreen').addClass('active')
    } else if (jQuery( window ).width() > 425 && jQuery( window ).height() < jQuery( window ).width()) {
        jQuery('#rotateScreen').removeClass('active')
    } else if (jQuery( window ).width() > 425 && jQuery( window ).height() > jQuery( window ).width()) {
        jQuery('#rotateScreen').addClass('active')
    }
});

if(jQuery('body.single-product').html()) {
    if(jQuery('body.single-product').html()) {
        jQuery('input#form_1_1-element-12').val(window.location.href)

        jQuery('#customNextBtn').on('click', function() {
            console.log('#customNextBtn')
            jQuery('#owlSlider .owl-carousel').trigger('next.owl.carousel');
        })
    }
    if(jQuery('#size').html() == undefined || jQuery('#size option').length == 2) { 
        jQuery('.size-guide').hide() 
    }
}

jQuery('p:empty').remove()

jQuery(document).ready(function() {
    jQuery(window).on("navigate", function (event, data) {
        var direction = data.state.direction;
        if (direction == 'back') {
            console.log('back button was pressed')
        }
    });

    function horizontalScrollTextBlue() {
        console.log('tweenmax ok')
        let $tickerWrapper = jQuery(".tickerwrapper");
        let $list = $tickerWrapper.find("ul.list");
        let $clonedList = $list.clone();
        let listWidth = 10;

        $list.find("li").each(function (i) {
                    listWidth += jQuery(this, i).outerWidth(true);
        });

        let endPos = $tickerWrapper.width() - listWidth;

        $list.add($clonedList).css({
            "width" : listWidth + "px"
        });

        $clonedList.addClass("cloned").appendTo($tickerWrapper);

        //TimelineMax
        let infinite = new TimelineMax({repeat: -1, paused: true});
        let time = 40;

        infinite
        .fromTo($list, time, {rotation:0.01,x:0}, {force3D:true, x: -listWidth, ease: Linear.easeNone}, 0)
        .fromTo($clonedList, time, {rotation:0.01, x:listWidth}, {force3D:true, x:0, ease: Linear.easeNone}, 0)
        .set($list, {force3D:true, rotation:0.01, x: listWidth})
        .to($clonedList, time, {force3D:true, rotation:0.01, x: -listWidth, ease: Linear.easeNone}, time)
        .to($list, time, {force3D:true, rotation:0.01, x: 0, ease: Linear.easeNone}, time)
        .progress(1).progress(0)
        .play();

        //Pause/Play		
        $tickerWrapper.on("mouseenter", function(){
            infinite.pause();
        }).on("mouseleave", function(){
            infinite.play();
        });
    }
    horizontalScrollTextBlue()

    function horizontalScrollTextBlack() {
        let $tickerWrapper = jQuery(".tickerwrapper-2");
        let $list = $tickerWrapper.find("ul.list");
        let $clonedList = $list.clone();
        let listWidth = 10;

        $list.find("li").each(function (i) {
                    listWidth += jQuery(this, i).outerWidth(true);
        });

        var endPos = $tickerWrapper.width() - listWidth;

        $list.add($clonedList).css({
            "width" : listWidth + "px"
        });

        $clonedList.addClass("cloned").appendTo($tickerWrapper);

        //TimelineMax
        let infinite = new TimelineMax({repeat: -1, paused: true});
        let time = 40;

        infinite
        .fromTo($list, time, {rotation:0.01,x:0}, {force3D:true, x: -listWidth, ease: Linear.easeNone}, 0)
        .fromTo($clonedList, time, {rotation:0.01, x:listWidth}, {force3D:true, x:0, ease: Linear.easeNone}, 0)
        .set($list, {force3D:true, rotation:0.01, x: listWidth})
        .to($clonedList, time, {force3D:true, rotation:0.01, x: -listWidth, ease: Linear.easeNone}, time)
        .to($list, time, {force3D:true, rotation:0.01, x: 0, ease: Linear.easeNone}, time)
        .progress(1).progress(0)
        .play();

        //Pause/Play		
        $tickerWrapper.on("mouseenter", function(){
            infinite.pause();
        }).on("mouseleave", function(){
            infinite.play();
        });
    }
    horizontalScrollTextBlack()

    jQuery('#lang_footer').on('click', function() {
        let lang = jQuery('html').attr('lang')
        let url = window.location.href
        console.table(url, lang)
        if (lang == 'fr-FR') {
            let regex = '/fr/'
            let newUrl = url.replace(regex, '/en/')
            console.log(newUrl)
            window.location = newUrl
        } else {
            let regex = '/en/'
            let newUrl = url.replace(regex, '/fr/')
            console.log(newUrl)
            window.location = newUrl
        }
    })

    jQuery('#homepage .owl-carousel').owlCarousel({
        loop:true,
        autoplay: true,
        margin:30,
        nav:false,
        dots: true,
        items: 1
    })

    jQuery('#owlRefs').owlCarousel({
        loop:true,
        autoplay: true,
        autoplayHoverPause: false,
        autoplayTimeout: 2000,
        smartSpeed: 2000,
        margin:30,
        nav:false,
        mouseDrag:false,
        touchDrag:false,
        dots:false,
        responsive:{
            0:{
                items:3
            },
            600:{
                items:4
            },
            1000:{
                items:6
            }
        }
    })

    jQuery('#stockistPage .owl-carousel').owlCarousel({
        loop:false,
        margin:30,
        nav:false,
        mouseDrag:false,
        dots:false,
        items: 1
    })

    jQuery('#owlAbout').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:7500,
        autoplayHoverPause:true,
        margin:30,
        nav:false,
        dots:true,
        items: 1, 
        responsive: {
            0:{
                mouseDrag:false,
                dotsEach:2
            },
            425:{
                mouseDrag:true,
                dotsEach:1
            }
        }
    })

    jQuery('#owlAboutMobile').owlCarousel({
        loop:true,
        margin:30,
        nav:false,
        mouseDrag:false,
        dots:true,
        dotsEach:2,
        items: 1
    })

    jQuery('.owlNav .btn').on('click', function() {
        jQuery('.owlNav .btn').removeClass('active')
        jQuery(this).addClass('active')
        let position = jQuery(this).attr('data-target')
        jQuery('#owlAbout').trigger('to.owl.carousel', [position, 500])
    })

    if (jQuery('body.page-id-49').html()) {
        let tag = jQuery('.woof_radio_label_selected').text()
        let table = jQuery('#tablepress-clothing_videos tbody')

        let categories = jQuery('#tablepress-clothing_videos tbody>tr')

        for (i=1; i<=categories.length; i++) {
            let videoTag = jQuery('#tablepress-clothing_videos tbody>tr:nth-of-type(' + i + ') td.column-1').text()
            let videoLink = jQuery('#tablepress-clothing_videos tbody>tr:nth-of-type(' + i + ') td.column-2').text()
            let gifLink = jQuery('#tablepress-clothing_videos tbody>tr:nth-of-type(' + i + ') td.column-3').text()
            if (videoTag === tag || tag == '') {
                jQuery('#myVideoClothing').attr('src', videoLink)
                jQuery('#gifContainer').css('background-image', 'url(' + gifLink + ')')
            } 
        }

        if (!jQuery('.woocommerce.columns-2 .products').html()) {
            jQuery('.woocommerce.columns-2').html('<div class="empty-collection"><img src="https://encre-atelier.com/wp-content/uploads/2021/03/empty-collection.png"><p>Il n\'y a rien ici</p></div>')
            jQuery('#myVideoClothing').hide()
            jQuery('#myVideoClothingMobile').hide()
        }
    }

    if (jQuery('body.page-id-302').html()) {
        let tag = jQuery('.woof_radio_label_selected').text()
        let table = jQuery('#tablepress-lab_videos tbody')
        let videoLink = jQuery('#tablepress-lab_videos tbody>tr:first-of-type td.column-1').text()
        let gifLink = jQuery('#tablepress-lab_videos tbody>tr:first-of-type td.column-2').text()

        jQuery('#myVideoLab').attr('src', videoLink)
        jQuery('#gifContainer').css('background-image', 'url(' + gifLink + ')')

        if (!jQuery('.woocommerce.columns-2 .products').html()) {
            jQuery('.woocommerce.columns-2').html('<div class="empty-collection"><img src="https://encre-atelier.com/wp-content/uploads/2021/03/empty-collection.png"><p>Il n\'y a rien ici</p></div>')
            jQuery('#myVideoClothing').hide()
            jQuery('#myVideoClothingMobile').hide()
        }
    }

    const contactPage = jQuery('.page-id-150').html()

    if (contactPage) {
        let mailAtelier = jQuery('#collapseOne a').text()
        jQuery('.formulaire #rm_reg_form_email_3_1').val(mailAtelier)

        let mailBusiness = jQuery('#collapseTwo a').text()
        jQuery('.formulaire #rm_reg_form_email_2_2').val(mailBusiness)

        let mailPress = jQuery('#collapseThree a').text()
        jQuery('.formulaire #rm_reg_form_email_4_3').val(mailPress)

        let mailSAV = jQuery('#collapseFour a').text()
        jQuery('.formulaire #rm_reg_form_email_5_4').val(mailSAV)

        // ALERT MESSAGE ENVOYÉ
        if (jQuery('#accordionContact .ok-message').html()) {
            jQuery('#content.site-content > .container').prepend('<div class="alert alert-success alert-dismissible fade show text-center" role="alert"><span class="lang_fr">Votre message à bien été envoyé</span><span class="lang_en">Your message has been sent</span><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>')
        }

        // COLLAPSE CONTACT ATELIER
        jQuery('#collapseOne .custom-contact .btn-secondary').on('click', function() {
            jQuery('#form_3_1-element-12').trigger('click')
        })

        jQuery('#form_3_1-element-12').on('change', function() {
            let val = jQuery(this).val().replace('C:\\fakepath\\', '')
            jQuery('#collapseOne .myFakepath').text(val)
        })

        jQuery('#collapseOne .custom-contact .btn-primary').on('click', function() {
            jQuery('#rm_next_form_page_button_3_1').trigger('click')
        })

        // COLLAPSE CONTACT BUSINESS
        jQuery('#collapseTwo .custom-contact .btn-secondary').on('click', function() {
            jQuery('#form_2_1-element-12').trigger('click')
        })

        jQuery('#form_2_1-element-12').on('change', function() {
            let val = jQuery(this).val().replace('C:\\fakepath\\', '')
            jQuery('#collapseTwo .myFakepath').text(val)
        })

        jQuery('#collapseTwo .custom-contact .btn-primary').on('click', function() {
            jQuery('#rm_next_form_page_button_2_1').trigger('click')
        })

        // COLLAPSE CONTACT PRESS
        jQuery('#collapseThree .custom-contact .btn-secondary').on('click', function() {
            jQuery('#form_4_1-element-12').trigger('click')
        })

        jQuery('#form_4_1-element-12').on('change', function() {
            let val = jQuery(this).val().replace('C:\\fakepath\\', '')
            jQuery('#collapseThree .myFakepath').text(val)
        })

        jQuery('#collapseThree .custom-contact .btn-primary').on('click', function() {
            jQuery('#rm_next_form_page_button_4_1').trigger('click')
        })

        // COLLAPSE CONTACT SAV
        jQuery('#collapseFour .custom-contact .btn-secondary').on('click', function() {
            jQuery('#form_5_1-element-12').trigger('click')
        })

        jQuery('#form_5_1-element-12').on('change', function() {
            let val = jQuery(this).val().replace('C:\\fakepath\\', '')
            jQuery('#collapseFour .myFakepath').text(val)
        })

        jQuery('#collapseFour .custom-contact .btn-primary').on('click', function() {
            jQuery('#rm_next_form_page_button_5_1').trigger('click')
        })
    }
    
    const homeCategPage = jQuery('.page-id-196').html()

    // SIZE GUIDE TRIGGER
    jQuery('.size-guide a').on('click', function() {
        jQuery('#chart-button').trigger('click')
    })

    jQuery('#owlSlider .owl-carousel').owlCarousel({
        loop:true,
        nav:false,
        dots:true,
        dotsEach: true,
        responsive:{
            0:{
                margin:15,
                items:1
            },
            600:{
                items:1,
                margin:60
            },
            1280:{
                items:2
            },
            2000:{
                items:3
            }
        }
    })

    jQuery('#owlSlider .item button.btn-warning').on('click', function() {
        let slideNbr = 0
        slideNbr = jQuery(this).attr('slidenumber')
        let slidesTotal = jQuery('#owlSlider .owl-dot').length

        let owlZer = jQuery('#zoomProductCarousel .owl-carousel')
        owlZer.trigger('to.owl.carousel', slideNbr);
    })


    jQuery('#zoomProductCarousel .owl-carousel').owlCarousel({
        loop:true,
        nav:true,
        navText:['<span class="fas fa-chevron-left fa-2x"></span>','<span class="fas fa-chevron-right fa-2x"></span>'],
        mouseDrag:false,
        dots:true,
        dotsEach: true,
        center: true,
        lazyLoad: true,
        responsive:{
            0:{
                items:1,
                margin:0
            },
            600:{
                items:1,
                margin:60
            },
            1000:{
                items:1,
                margin:60
            }
        }
    })


    if (window.innerWidth > 425) {
        zoomImage()
    }

    function zoomImage() {
        jQuery('#zoomImage').imageZoom()
        let imgs = jQuery('.zoomImg')
        for (img of imgs) {
            jQuery(img).imageZoom()
        }
    }

    var update_cart_totals_div = function( html_str ) {
        $( '.cart_totals' ).replaceWith( html_str );
        $( document.body ).trigger( 'updated_cart_totals' );
    };

    jQuery('body').on('updated_cart_totals',function() {
        jQuery( '.shop_table.cart' ).closest( 'form' ).find( 'input[name="update_cart"]' ).prop( 'disabled', false ); // this will enable the button.
        location.reload(); // uncomment this line to refresh the page.
    });

    /* always keep at least 1 open by preventing the current to close itself */
    jQuery('[data-toggle="collapse"]').on('click',function(e){
        if ( jQuery(this).parents('.accordion').find('.collapse.show') ){
            var idx = jQuery(this).index('[data-toggle="collapse"]');
            if (idx == jQuery('.collapse.show').index('.collapse')) {
                // prevent collapse
                e.stopPropagation();
            }
        }
    });

    let $contactForm = jQuery('#accordionContact')
    let $buttonLink = jQuery('#accordionContact .btn-link')

    $buttonLink.on('click', function() {
        jQuery(this).toggleClass('selected')
        jQuery('#accordionContact .btn-link').not(this).parent().parent().addClass('d-none')
    })

    /* STOCKIST PAGE  */
    jQuery('button.btn-link.btn-eu').on('click', function() {
        if (jQuery('#Tokyo').hasClass('show')) {
            const owl = jQuery('#stockistPage .owl-carousel')
            owl.trigger('prev.owl.carousel')
        }
        jQuery('path.st2').addClass('d-none')
        jQuery('path.st2').removeClass('animate_animated bounceInDown')
        let location = jQuery(this).attr('aria-controls')
        setTimeout(function() {
            jQuery('path[data-location=' + location + ']').toggleClass('d-none animate_animated bounceInDown')
        }, 300)
    })

    jQuery('button.btn-link.btn-jpn').on('click', function() {
        jQuery('path.st2').addClass('d-none')
        jQuery('path.st2').removeClass('animate_animated bounceInDown')
        const owl = jQuery('#stockistPage .owl-carousel')
        owl.trigger('next.owl.carousel')
        setTimeout(function() {
            jQuery('path[data-location=Tokyo]').toggleClass('d-none animate_animated bounceInDown')
        }, 300)
    })
});
