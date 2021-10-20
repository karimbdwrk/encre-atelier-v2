console.log(jQuery( window ).width())
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
    console.log(jQuery( window ).width())
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

    if(jQuery('#size').html() == undefined) { 
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

    // jQuery('#apwp-audio-player-1').jPlayer('play')
    // jQuery('h1').click()
    // jQuery('h1').trigger('click')
    // jQuery('#apwp-audio-player-1').jPlayer('play')
    // Ici le DOM est prêt

    //jQuery('#myVideo').get(0).play()

    // jQuery('#myBtn').on('touchstart', function() {
    //    jQuery('#myVideo').get(0).play()
    //    jQuery('#myBtn').text('play !')
    //    jQuery('#myBtn').hide()
    // })

    // jQuery('.home').on('touchmove', function() {
    //     jQuery('#myVideo').get(0).play()
    // })

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

    jQuery('.blue-banner.owl-carousel').owlCarousel({
        loop:true,
        autoplay: true,
        autoplayHoverPause: false,
        autoplayTimeout: 5000,
        autoplaySpeed: 5000,
        smartSpeed: false,
        // fluidSpeed: 7500,
        margin:30,
        nav:false,
        mouseDrag:false,
        touchDrag:false,
        dots:false,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:4
            },
            1800:{
                items:5
            }
        }
    })

    jQuery('.black-banner.owl-carousel').owlCarousel({
        loop: true, 
        margin: 10,
        autoplay: true,
        autoWidth: true,
        nav:false,
        slideTransition: 'linear',
        // mouseDrag:false,
        // touchDrag:false,
        dots:false,
        autoplayHoverPause: false,
        autoplayTimeout: 15000,
        autoplaySpeed: 15000,
        smartSpeed: false
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
                items:2
            },
            600:{
                items:3
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
        console.log('goTo : ', position)
        jQuery('#owlAbout').trigger('to.owl.carousel', [position, 500])
    })

    if (jQuery('body.page-id-49').html()) {
        let tag = jQuery('.woof_radio_label_selected').text()
        let table = jQuery('#tablepress-clothing_videos tbody')
        console.log(table)

        let categories = jQuery('#tablepress-clothing_videos tbody>tr')
        console.log(categories, categories.length)

        for (i=1; i<=categories.length; i++) {
            let videoTag = jQuery('#tablepress-clothing_videos tbody>tr:nth-of-type(' + i + ') td.column-1').text()
            let videoLink = jQuery('#tablepress-clothing_videos tbody>tr:nth-of-type(' + i + ') td.column-2').text()
            let gifLink = jQuery('#tablepress-clothing_videos tbody>tr:nth-of-type(' + i + ') td.column-3').text()
            if (videoTag === tag || tag == '') {
                jQuery('#myVideoClothing').attr('src', videoLink)
                //jQuery('#myVideoClothingMobile').attr('src', videoLink)
                jQuery('#gifContainer').css('background-image', 'url(' + gifLink + ')')
                // setTimeout(function() {
                //     jQuery('#myVideoClothingMobile').get(0).play()
                // }, 1000)
            } 
            // else if (tag === ''){
            //     jQuery('#myVideoClothing').attr('src', videoLink)
            //     jQuery('#gifContainer').css('background-image', 'url(' + gifLink + ')')
            //     console.log('category TOUT')
            // }
        }

        if (!jQuery('.woocommerce.columns-2 .products').html()) {
            console.log('empty category !')

            jQuery('.woocommerce.columns-2').html('<div class="empty-collection"><img src="https://encre-atelier.com/wp-content/uploads/2021/03/empty-collection.png"><p>Il n\'y a rien ici</p></div>')
            jQuery('#myVideoClothing').hide()
            jQuery('#myVideoClothingMobile').hide()
        }

    }

    if (jQuery('body.page-id-302').html()) {
        let tag = jQuery('.woof_radio_label_selected').text()
        let table = jQuery('#tablepress-lab_videos tbody')
        console.log(table)

        let videoLink = jQuery('#tablepress-lab_videos tbody>tr:first-of-type td.column-1').text()
        let gifLink = jQuery('#tablepress-lab_videos tbody>tr:first-of-type td.column-2').text()

        jQuery('#myVideoLab').attr('src', videoLink)
        //jQuery('#myVideoClothingMobile').attr('src', videoLink)
        jQuery('#gifContainer').css('background-image', 'url(' + gifLink + ')')

        if (!jQuery('.woocommerce.columns-2 .products').html()) {
            console.log('empty category !')

            jQuery('.woocommerce.columns-2').html('<div class="empty-collection"><img src="https://encre-atelier.com/wp-content/uploads/2021/03/empty-collection.png"><p>Il n\'y a rien ici</p></div>')
            jQuery('#myVideoClothing').hide()
            jQuery('#myVideoClothingMobile').hide()
        }

    }

    // OwlCarousel

    // jQuery('.owl-carousel').owlCarousel({
    //     loop:true,
    //     margin:10,
    //     nav:true,
    //     responsive:{
    //         0:{
    //             items:1
    //         },
    //         600:{
    //             items:3
    //         },
    //         1000:{
    //             items:5
    //         }
    //     }
    // })

    // Modal send to a lover

    if(jQuery('body.single-product').html()) {
        jQuery('input#form_1_1-element-12').val(window.location.href)

        jQuery('#customNextBtn').on('click', function() {
            console.log('#customNextBtn')
            // jQuery('#owlRefs .owl-carousel').owlCarousel();
            jQuery('#owlSlider .owl-carousel').trigger('next.owl.carousel');
        })

        // if(jQuery('#size').html() == undefined) { 
        //     jQuery('.size-guide').hide() 
        // }
    }

    if (jQuery('#loverModal .modal-body > .rm-post-sub-msg').html()) {
        console.log('message deja envoyé')
        jQuery('#content.site-content > .container').prepend('<div class="alert alert-success alert-dismissible fade show text-center" role="alert">Votre message à bien été envoyé<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>')
    }

    jQuery('#submitCustom').on('click',function() {
        console.log('send to a lover submit')



        const timeline = anime.timeline({
            easing: 'easeOutQuart'
        })

        timeline
        .add({
            targets:'.kiss-div',
            opacity: '1',
            duration: '200'
        })
        .add({
            targets:'#submitCustom',
            scale: '0',
            opacity: '0',
            duration: '300'
        }, '-=200')
        .add({
            targets:'#leftFace',
            translateX: '52', 
            duration: '500'
        }, '-=200')
        .add({
            targets:'#rightFace',
            translateX: '-52', 
            duration: '500'
        }, '-=500')
        .add({
            targets:'#leftFace',
            translateX: '0', 
            duration: '500'
        }, '+=2000')
        .add({
            targets:'#rightFace',
            translateX: '0', 
            duration: '500'
        }, '-=500')
        .add({
            targets:'#submitCustom',
            scale: '1',
            opacity: '1',
            duration: '500'
        }, '-=500')
        .add({
            targets:'.kiss-div',
            opacity: '0',
            duration: '200'
        }, '-=500')

        setTimeout(() => {
            jQuery('#rm_next_form_page_button_1_1').trigger('click')
        }, 500)
    })

    const contactPage = jQuery('.page-id-150').html()

    if (contactPage) {
        // jQuery('#attached .add-attached').on('click', function() { 
        //     jQuery('.your-file input.wpcf7-file').trigger('click')
        //     console.log('click add attached')
        // })
    
        // jQuery('.your-file input.wpcf7-file').change(function() {
        //     console.log('fichier selectionné')
        // })

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
            console.log('click btn contact')
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

    if(homeCategPage) {
        setTimeout(() => {
            jQuery('#btnCountdown').trigger('click')
        }, 200);

        const daysEl = document.getElementById('days');
        const hoursEl = document.getElementById('hours');
        const minsEL = document.getElementById('mins');
        const secondsEL = document.getElementById('seconds');

        const newYears = '24 Oct 2021';

        function countdown() {
            const newYearsDate = new Date(newYears);
            const currentDate = new Date();

            const totalSeconds = (newYearsDate - currentDate) /1000;
            const minutes = Math.floor(totalSeconds/ 60) % 60;
            const hours = Math.floor(totalSeconds /3600) % 24;
            const days = Math.floor(totalSeconds /3600/ 24);
            const seconds = Math.floor(totalSeconds) % 60;

            const minutes2 = minutes.toLocaleString('en-US', {//this is the function that formats the numbers
                minimumIntegerDigits: 2, //change this to your minimum length
                useGrouping: false
            })

            const seconds2 = seconds.toLocaleString('en-US', {//this is the function that formats the numbers
                minimumIntegerDigits: 2, //change this to your minimum length
                useGrouping: false
            })
            
            daysEl.innerText = days;
            hoursEl.innerText = hours;
            minsEL.innerText = minutes2;
            secondsEL.innerText = seconds2;
        }
        setInterval(countdown, 1000);
    }



    // jQuery('#myform').on('submit',function(){

    //     // Add text 'loading...' right after clicking on the submit button. 
    //     jQuery('.output_message').text('Loading...'); 

    //     var form = jQuery(this);
    //     jQuery.ajax({
    //         url: "http://encre-atelier.com/wp-content/themes/wp-bootstrap-starter-child/email.php",
    //         method: form.attr('method'),
    //         data: form.serialize(),
    //         success: function(result){
    //                 if (result == 'success'){
    //                     jQuery('.output_message').text('Message Sent!');  
    //                 } else {
    //                     jQuery('.output_message').text('Error Sending email!');
    //                 }
    //             }
    //     })

    //     // Prevents default submission of the form after clicking on the submit button. 
    //     return false;   
    // });

    // function sendContact() {
    //     var valid;	
    //     valid = validateContact();
    //     if(valid) {
    //         jQuery.ajax({
    //             url: "contact_mail.php",
    //             data:'userName='+$("#userName").val()+'&userEmail='+
    //             jQuery("#userEmail").val()+'&subject='+
    //             jQuery("#subject").val()+'&content='+
    //             jQuery(content).val(),
    //             type: "POST",
    //             success:function(data){
    //                 jQuery("#mail-status").html(data);
    //             },
    //             error:function (){}
    //         });
    //     }
    // }
    // sendContact()

    // function validateContact() {
    //     var valid = true;	
    //     jQuery(".demoInputBox").css('background-color','');
    //     jQuery(".info").html('');
    //     if(!jQuery("#userName").val()) {
    //         jQuery("#userName-info").html("(required)");
    //         jQuery("#userName").css('background-color','#FFFFDF');
    //         valid = false;
    //     }
    //     if(!jQuery("#userEmail").val()) {
    //         jQuery("#userEmail-info").html("(required)");
    //         jQuery("#userEmail").css('background-color','#FFFFDF');
    //         valid = false;
    //     }
    //     if(!jQuery("#userEmail").val().match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)) {
    //         jQuery("#userEmail-info").html("(invalid)");
    //         jQuery("#userEmail").css('background-color','#FFFFDF');
    //         valid = false;
    //     }
    //     if(!jQuery("#subject").val()) {
    //         jQuery("#subject-info").html("(required)");
    //         jQuery("#subject").css('background-color','#FFFFDF');
    //         valid = false;
    //     }
    //     if(!jQuery("#content").val()) {
    //         jQuery("#content-info").html("(required)");
    //         jQuery("#content").css('background-color','#FFFFDF');
    //         valid = false;
    //     }
    //     return valid;
    // }

    // (function ($) {
    //     'use strict';
    //     var form = $('.contact__form'),
    //         message = $('.contact__msg'),
    //         form_data;
    //     // Success function
    //     function done_func(response) {
    //         message.fadeIn().removeClass('alert-danger').addClass('alert-success');
    //         message.text(response);
    //         setTimeout(function () {
    //             message.fadeOut();
    //         }, 2000);
    //         form.find('input:not([type="submit"]), textarea').val('');
    //     }
    //     // fail function
    //     function fail_func(data) {
    //         message.fadeIn().removeClass('alert-success').addClass('alert-success');
    //         message.text(data.responseText);
    //         setTimeout(function () {
    //             message.fadeOut();
    //         }, 2000);
    //     }
        
    //     form.submit(function (e) {
    //         e.preventDefault();
    //         form_data = $(this).serialize();
    //         $.ajax({
    //             type: 'POST',
    //             url: form.attr('action'),
    //             data: form_data
    //         })
    //         .done(done_func)
    //         .fail(fail_func);
    //     });
        
    // })(jQuery);

    // jQuery(function () {
    //     jQuery('#contact-form').submit(function (event) {
    //         // Annule l'action par défaut (on ne veut pas que la page se recharge)
    //         event.preventDefault();
    //         // Envoi de la requête XHR
    //         jQuery.post(jQuery(this).attr('action'), jQuery(this).serializeArray(), function (data) {
    //             let $aside = jQuery('#contact-form aside');
    //             // Notifications
    //             if (data.result) {
    //                 $aside.addClass('alert-success').text('Le message a bien été envoyé !').removeClass('d-none');
    //             } else {
    //                 $aside.addClass('alert-danger').text('Erreur lors de l\'envoi du message !').removeClass('d-none');
    //             }
    //         });
    //     });
    // });

    // SIZE GUIDE TRIGGER

    jQuery('.size-guide a').on('click', function() {
        jQuery('#chart-button').trigger('click')
    })

    jQuery('#owlSlider .owl-carousel').owlCarousel({
        loop:true,
        //autoplay: true,

        nav:false,
        dots:true,
        dotsEach: true,
        responsive:{
            0:{
                margin:15,
                autoWidth:true,
                center:true,
                items:1
            },
            600:{
                items:1,
                margin:60
            },
            1280:{
                items:2,
                center:false
            },
            1400:{
                margin:60,
                autoWidth:true,
                items:2
            }
        }
    })

    // let slideNbr = 0

    // jQuery('.owl-item .btn-warning').on('click', function() {
    //      slideNbr = jQuery(this).attr('slidenumber')
    //      console.log('slideNbr on click : ', slideNbr)

    //     // jQuery('#zoomProductCarousel .owl-carousel').owlCarousel({
    //     //     startPosition: slideNbr
    //     // })
    // })
    // console.log('slideNbr : ', slideNbr)

    jQuery('#owlSlider .item button.btn-warning').on('click', function() {
        console.log('clicked zoom product')
        let slideNbr = 0
        slideNbr = jQuery(this).attr('slidenumber')
        let slidesTotal = jQuery('#owlSlider .owl-dot').length
        console.log('slidesTotal : ' + slidesTotal)

        let owlZer = jQuery('#zoomProductCarousel .owl-carousel')
        owlZer.trigger('to.owl.carousel', slideNbr);

        // if (slideNbr != 0) {
        //     console.log('slide number different')
        //     jQuery('#zoomProductCarousel .owl-carousel .owl-dots:nth-child(3)').click()
        // }
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
    

    // jQuery('.zoomImg').each(function(index) { 
    //     // jQuery(this).imageZoom(); 
    //     console.log('ok', index)
    // }); 


    // cart page

    // jQuery(".shop_table.owl-carousel").owlCarousel({
    //     loop: true,
    //     autoplay: true,
    //     items: 1,
    //     nav: true,
    //     autoplayHoverPause: true,
    //     animateOut: 'slideOutUp',
    //     animateIn: 'slideInUp'
    // });

    // jQuery('.product-remove .remove').on('click', function() {
    //     console.log('reload ajax cart form')
    // })


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

    /* STOCKIST PAGE */

    // jQuery('button.btn-link').on('click', function() {
    //     jQuery('path.st2').addClass('d-none')
    //     jQuery('path.st2').removeClass('animate_animated bounceInDown')
    //     let location = jQuery(this).attr('aria-controls')
    //     console.log(location)
    //     jQuery('path[data-location=' + location + ']').toggleClass('d-none animate_animated bounceInDown')
    // })

    /* STOCKIST PAGE new */

    jQuery('button.btn-link.btn-eu').on('click', function() {
        if (jQuery('#Tokyo').hasClass('show')) {
            const owl = jQuery('#stockistPage .owl-carousel')
            owl.trigger('prev.owl.carousel')
        }
        jQuery('path.st2').addClass('d-none')
        jQuery('path.st2').removeClass('animate_animated bounceInDown')
        let location = jQuery(this).attr('aria-controls')
        console.log(location)
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