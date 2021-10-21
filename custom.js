// scriptList

// const direction = require("direction");

// const scriptList = document.querySelectorAll("script[type='text/javascript']")
// const convertedNodeList = Array.from(scriptList)
// console.log(convertedNodeList)
// const testScript = convertedNodeList.find(script => script.id === "jquery-core-js")
// console.log(testScript)
// testScript.parentNode.removeChild(testScript)

// BLOCK UGLY ROTATION

// if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
//   console.log("mobile");
//   document.querySelector('#consoleResult').innerHTML = navigator.userAgent;
// }else{
//   console.log("not mobile");
//   document.querySelector('#consoleResult').innerHTML = navigator.userAgent;
// }

// if(window.innerWidth <= 425 && window.innerWidth < window.innerHeight) {
//   console.log('mobile portrait')
//   document.querySelector('#rotateScreen').classList.remove('active')
// } else if (window.innerWidth > 425 && window.innerHeight <= 425 && window.innerWidth > window.innerHeight ) {
//   console.log('mobile paysage')
//   console.log('ROTATE YOUR FUCKIN\' DEVICE !')
//   document.querySelector('#rotateScreen').classList.add('active')
// } else if (window.innerWidth > 425 && window.innerWidth <= 1200 && window.innerWidth > window.innerHeight ) {
//   console.log('tablette paysage')
//   document.querySelector('#rotateScreen').classList.remove('active')
// } else if (window.innerWidth > 425 && window.innerWidth <= 1200 && window.innerWidth < window.innerHeight ) {
//   console.log('tablette portrait')
//   document.querySelector('#rotateScreen').classList.add('active')
// } else if (window.innerWidth > 1200 && window.innerWidth > window.innerHeight ) {
//   console.log('ordi')
//   document.querySelector('#rotateScreen').classList.remove('active')
// }

// window.onorientationchange = function(event) {
//   console.log("the orientation of the device is now " + event.target.screen.orientation.angle);

//   if(event.target.screen.orientation.angle === 0 && window.innerWidth <= 425 && window.innerWidth < window.innerHeight) {
//     console.log('mobile portrait')
//     document.querySelector('#rotateScreen').classList.remove('active')
//   } else if (event.target.screen.orientation.angle === 90 && window.innerWidth > 425 && window.innerHeight <= 425 && window.innerWidth > window.innerHeight ) {
//     console.log('mobile paysage')
//     console.log('ROTATE YOUR FUCKIN\' DEVICE !')
//     document.querySelector('#rotateScreen').classList.add('active')
//   } else if (event.target.screen.orientation.angle === 90 && window.innerWidth > 425 && window.innerWidth <= 1200 && window.innerWidth > window.innerHeight ) {
//     console.log('tablette paysage')
//     document.querySelector('#rotateScreen').classList.remove('active')
//   } else if (event.target.screen.orientation.angle === 0 && window.innerWidth > 425 && window.innerWidth <= 1200 && window.innerWidth < window.innerHeight ) {
//     console.log('tablette portrait')
//     document.querySelector('#rotateScreen').classList.add('active')
//   } else if (window.innerWidth > 1200 && window.innerWidth > window.innerHeight ) {
//     console.log('ordi')
//     document.querySelector('#rotateScreen').classList.remove('active')
//   }
// };

window.addEventListener("orientationchange", function(event) {
  console.log("the orientation of the device is now " + event.target.screen.orientation.angle);
  if (event.target.screen.orientation.angle === 0) {
    console.log('portrait')
    if (window.innerWidth <= 425) {
      document.querySelector('#rotateScreen').classList.remove('active')
    }
  } else {
    console.log('paysage')
    if (window.innerWidth > 425) {
      document.querySelector('#rotateScreen').classList.add('active')
    }
  }
});

// CUSTOM CAROUSEL IMAGES PRODUCT PAGE

const singleProductPage = document.querySelector('.single.single-product')

if (singleProductPage) {

  if(document.querySelector('.product.type-product').classList.contains('outofstock')) {
    console.log('outofstock !')
    if (document.querySelector('.single_add_to_cart_button') != null) {
      document.querySelector('.single_add_to_cart_button').innerText = 'SORRY, IT\'S OUT OF STOCK'
      document.querySelector('.single_add_to_cart_button').classList.add('pointer-none')
    }

  }

  // if(document.querySelector('.product.type-product').classList.contains('product_cat-clothing')) {
  //   document.querySelector('#menu-menu-principal > li:first-of-type a').style.color = '#F00'
  // }

  const gallery = document.querySelector('.woocommerce-product-gallery__wrapper').children

  console.log('gallery length', gallery.length)

  const owlWrapper = document.createElement('div')
  owlWrapper.classList.add('owl-carousel', 'owl-theme')

  const owlModal = document.createElement('div')
  owlModal.classList.add('owl-carousel', 'owl-theme')

  for ( i=0; i<gallery.length; i++ ) {
    let imgLink = gallery[i].querySelector('a').getAttribute('href')
    console.log(i, ' - ', imgLink)
    const owlSlide = document.createElement('div')
    const owlImg = document.createElement('img')
    // owlSlide.style.backgroundImage = "url('" + imgLink + "')";
    owlImg.setAttribute('src', imgLink)
    owlSlide.classList.add('item')
    owlSlide.append(owlImg)
    // owlSlide.setAttribute('onClick', console.log('click img item'))
    let zoomBtn = document.createElement('button')
    zoomBtn.className = 'btn btn-warning zoom-btn'
    zoomBtn.setAttribute('data-toggle', 'modal')
    zoomBtn.setAttribute('data-target', '#zoomProductModal')
    zoomBtn.setAttribute('slideNumber', i)
    let searchIcon = document.createElement('i')
    searchIcon.className = 'fas fa-search'
    zoomBtn.append(searchIcon)
    owlSlide.append(zoomBtn)
    owlWrapper.append(owlSlide)
    // owlModal.append(owlSlide)

    const owlSlideModal = document.createElement('div')
    owlSlideModal.classList.add('item')
    let img = document.createElement('img')
    img.classList.add('zoomImg')
    img.setAttribute('src', imgLink)
    owlSlideModal.append(img)
    owlModal.append(owlSlideModal)
  }

  const cible = document.getElementById('owlSlider')
  cible.append(owlWrapper)

  const cibleModal = document.getElementById('zoomProductCarousel')
  cibleModal.append(owlModal)

}




// DOCUMENT.READY FUNCTION

function ready(callbackFunc) {
  if (document.readyState !== 'loading') {
    // Document is already ready, call the callback directly
    callbackFunc();
  } else if (document.addEventListener) {
    // All modern browsers to register DOMContentLoaded
    document.addEventListener('DOMContentLoaded', callbackFunc);
  } else {
    // Old IE browsers
    document.attachEvent('onreadystatechange', function() {
      if (document.readyState === 'complete') {
        callbackFunc();
      }
    });
  }
}

ready(function() {
  // your code here

  // Cart onLoad

  let regexNbrs = /[a-z]/g
  let oldCart = document.querySelector('.cart-contents').innerText
  let nbItems = oldCart.replace(regexNbrs, '')
  console.log('nbItems : ', nbItems)
  document.getElementById('badgeCart').innerHTML = parseInt(nbItems)

  // document.getElementById('krimo').addEventListener('click', () => {
  //   window.history.go(-2)
  // })

  // window.history

  window.onhashchange = function() {
    console.log('back btn clicked !')
  }

  console.log(window.history.back)

  // HOMEPAGE

  const homePage = document.querySelector('body.home')

  // if (homePage) {

  //   function eventFire(el, etype){
  //     if (el.fireEvent) {
  //       el.fireEvent('on' + etype);
  //     } else {
  //       var evObj = document.createEvent('Events');
  //       evObj.initEvent(etype, true, false);
  //       el.dispatchEvent(evObj);
  //     }
  //   }

  //   console.log('homepage js')
  //   setTimeout(() => {
  //     console.log('homepage js after set timeout')
  //     eventFire(document.querySelector('.jp-play'), 'click');
  //   }, 1000)
  // }
  
    if (homePage) {
        console.log('homepage js')
        
        const tablepress = document.querySelector('#tablepress-homepageTable')
        
        if (tablepress) {
            let imgDesktop = tablepress.querySelector('.row-1 .column-2').innerText
            let imgMobile = tablepress.querySelector('.row-1 .column-3').innerText
            
            console.log(imgDesktop, imgMobile)
            
            if (window.innerWidth < 426) {
                homePage.style.backgroundImage = 'url(' + imgMobile + ')'
            } else {
                homePage.style.backgroundImage = 'url(' + imgDesktop + ')'
            }
        }
    }

  // SEARCH MODAL

  const searchModal = document.querySelector('#searchModal')
  const searchBtn = document.querySelector('.search-link > button.btn')

  searchBtn.addEventListener('click', () => {
    console.log('search btn clicked !')
    if (document.querySelector('#searchModal.show') == null) {
      document.querySelector('img.search-svg').setAttribute('src', 'https://encre-atelier.com/wp-content/uploads/2021/03/eye-open.svg')
    }
  })

  document.querySelector('#searchModal .close').addEventListener('click', () => {
    console.log('search modal clicked to leave !')
    if (document.querySelector('#searchModal.show') != null) {
      document.querySelector('img.search-svg').setAttribute('src', 'https://encre-atelier.com/wp-content/uploads/2021/03/eye-close.svg')
    }
  })


  function imageMiror() {
    let productList = document.querySelector('.products')
    let product = document.querySelector('.product')
    const cible = document.getElementById('miror')

    document.querySelectorAll('.product').forEach(item => {
        item.addEventListener('mouseenter', event => {
            // item.style.border = '1px solid pink'
            let imgSrc = item.querySelector('img:last-of-type').getAttribute('src')
            let newImg = document.createElement('img')
            newImg.setAttribute('src', imgSrc)
            cible.innerHTML = ''
            cible.append(newImg)
        })
    })
  }

  if (document.querySelector('.page-id-49')) {
    imageMiror()
  }

    //PAGE CATEGORIE CLOTHING 

    // function addAllTag() {
    //   const woofList = document.querySelector('.woof_list')
    //   let allLink = document.createElement('li')
    //   allLink.classList.add('all')
    //   allLink.innerHTML = '<a href="/clothing"><span class="lang_fr">Tout</span><span class="lang_en">All</span></a>'

    //   let reset = document.querySelector('.woof_submit_search_form_container')
    //   if (reset.innerHTML.trim() == '') {
    //     allLink.classList.add('red-txt')
    //   }
    //   woofList.append(allLink)
    // }

    // function addAllTagHome() {
    //   const woofList = document.querySelector('.woof_list')
    //   let allLink = document.createElement('li')
    //   allLink.classList.add('all')
    //   allLink.innerHTML = '<a href="/home"><span class="lang_fr">Tout</span><span class="lang_en">All</span></a>'

    //   let reset = document.querySelector('.woof_submit_search_form_container')
    //   if (reset.innerHTML.trim() == '') {
    //     allLink.classList.add('red-txt')
    //   }
    //   woofList.append(allLink)
    // }

    // const isClothingPage = document.querySelector('.page-id-49')
    // const isHomeCatPage = document.querySelector('.page-id-196')
    // const isLabPage = document.querySelector('.page-id-302')
    // const isAboutPage = document.querySelector('.page-id-310')
    // if (isClothingPage) {
    //   addAllTag()
    //   if (window.innerWidth <= 425) {
    //     document.getElementById('clothingDot').style.fill = '#F00'
    //     document.getElementById('subheader-logo').innerHTML = 'Clothing.'
    //   }
    // }

    // if (isHomeCatPage) {
    //   addAllTagHome()
    //   if (window.innerWidth <= 425) {
    //     document.getElementById('homeDot').style.fill = '#F00'
    //     document.getElementById('subheader-logo').innerHTML = 'Home.'
    //   }
    // }

    // if (isLabPage && window.innerWidth <= 425) {
    //   document.getElementById('labDot').style.fill = '#F00'
    //   document.getElementById('subheader-logo').innerHTML = 'Lab.'
    // }

    // if (isAboutPage && window.innerWidth <= 425) {
    //   document.getElementById('aboutDot').style.fill = '#F00'
    //   document.getElementById('subheader-logo').innerHTML = 'About.'
    // }

   

    // PRODUCT PAGE 

    if (singleProductPage) {
      // productCat()
      customSelect()
      // flyToCart()



      // const zoomProductCarousel = document.getElementById('zoomProductCarousel')
      // const zoomProductBtn = document.querySelector('.zoom-btn')

      // zoomProductBtn.addEventListener('click', () => {
      //   zoomProductCarousel.classList.add('fadeIn-3s')
      // })
    }

    // MAIN CATEGORY OF PRODUCT

    // function productCat() {
    //   const meta = document.querySelector('.product_meta')
    //   const productTag = meta.querySelector('.posted_in a')
    //   const tagNameLower = productTag.innerHTML.toLowerCase()
    //   // console.log(tagNameLower)

    //   const nav = document.getElementById('menu-menu-principal').children
    //   // console.log(nav)

    //   for (child of nav) {
    //     // console.log(child)
    //     let childLower = child.innerText.toLowerCase()
    //     let childRegex = childLower.replace('.', '')
    //     // 
    //     // console.log(childRegex)

    //     if ( childRegex == tagNameLower ) {
    //       console.log(tagNameLower)
    //       console.log(child)
    //       child.querySelector('.nav-link').style.color = '#F00'
    //       document.getElementById(tagNameLower + 'Dot').style.fill = '#F00'
    //     }
    //   }
    // }
    // productCat()

    // CUSTOM SELECT PRODUCT PAGE

    function customSelect() {
      var x, i, j, l, ll, selElmnt, a, b, c;
      /* Look for any elements with the class "custom-select": */
      x = document.getElementsByClassName("value");
      l = x.length;
      for (i = 0; i < l; i++) {
        selElmnt = x[i].getElementsByTagName("select")[0];
        ll = selElmnt.length;
        console.log(selElmnt.options.length)
        /* For each element, create a new DIV that will act as the selected item: */
        a = document.createElement("button");
        a.setAttribute("class", "select-selected btn btn-secondary dropdown-toggle");
        a.setAttribute("id", "dropdownSelect");
        a.setAttribute("data-toggle", "dropdown");
        a.setAttribute("aria-haspopup", "true");
        a.setAttribute("aria-expanded", "false");
        // a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
        a.innerHTML = 'Size';
        x[i].appendChild(a);
        console.log(x[i])
        /* For each element, create a new DIV that will contain the option list: */
        b = document.createElement("DIV");
        b.setAttribute("class", "select-items select-hide dropdown-menu");
        b.setAttribute("aria-labelledby", "dropdownSelect");
        for (j = 1; j < ll; j++) {
          /* For each option in the original select element,
          create a new DIV that will act as an option item: */
          c = document.createElement("DIV");
          c.setAttribute("class", "dropdown-item");
          c.setAttribute("variation_id", selElmnt.options[j].variation_id);
          c.innerHTML = selElmnt.options[j].innerHTML;
          console.log('selElmnt : ')
          console.log(selElmnt.options[j])
          c.addEventListener("click", function(e) {
              /* When an item is clicked, update the original select box,
              and the selected item: */
              var y, i, k, s, h, sl, yl;
              s = this.parentNode.parentNode.getElementsByTagName("select")[0];
              console.log(s)
              sl = s.length;
              h = this.parentNode.previousSibling;
              for (i = 0; i < sl; i++) {
                if (s.options[i].innerHTML == this.innerHTML) {
                  s.selectedIndex = i;
                  h.innerHTML = 'Size : <b>' + this.innerHTML + '</b>';
                  y = this.parentNode.getElementsByClassName("same-as-selected");
                  yl = y.length;
                  this.classList.add("same-as-selected");
                  console.log(s.options[i])
                  let all_variations = JSON.parse(s.parentNode.parentNode.parentNode.parentNode.parentNode.getAttribute('data-product_variations'))
                  console.log(all_variations)
                  let id_variation = all_variations[i-1].variation_id
                  console.log('id_variation' + id_variation)
                  let valueCart = document.getElementsByClassName('variation_id')
                  console.log(valueCart[0].value)
                  valueCart[0].value = id_variation.toString()
                  document.getElementsByClassName('single_add_to_cart_button')[0].classList.remove('disabled')
                  break;
                }
              }
              h.click();
          });
          b.appendChild(c);
        }
        x[i].appendChild(b);
      }

      function hideOutOfStockSize() {
        const tableau1 = []
        const tableau2 = []
        const firstSelect = JSON.parse(document.querySelector('form.variations_form').getAttribute('data-product_variations'))
        
        console.log(firstSelect)
        for (option of firstSelect) {
          tableau1.push(option.attributes.attribute_size)
          console.log(tableau1)
        }

        const lastSelect = document.querySelector('.select-items')
        const lastOptions = lastSelect.querySelectorAll('.dropdown-item')
        console.log(lastOptions)
        for (option of lastOptions) {
          let bool = tableau1.includes(option.textContent)
          if (!bool) {
            console.log('taille manquante : ', option.textContent)
            option.classList.add('disabled')
          }
        }
      }
      hideOutOfStockSize()

      function closeAllSelect(elmnt) {
        /* A function that will close all select boxes in the document,
        except the current select box: */
        var x, y, i, xl, yl, arrNo = [];
        x = document.getElementsByClassName("select-items");
        y = document.getElementsByClassName("select-selected");
        xl = x.length;
        yl = y.length;
        for (i = 0; i < yl; i++) {
          if (elmnt == y[i]) {
            arrNo.push(i)
          } else {
            y[i].classList.remove("select-arrow-active");
          }
        }
        for (i = 0; i < xl; i++) {
          if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
          }
        }
      }

      /* If the user clicks anywhere outside the select box,
      then close all select boxes: */
      document.addEventListener("click", closeAllSelect);
    }
    // customSelect()flyToCart()
    

    // NOMBRE DE PRODUITS DANS LE PANIER HEADER

    const header = document.getElementById('masthead')

    // if (header) {
    //   const badge = document.getElementById('badgeCart')
    //   const oldBadge = document.querySelector('.xoo-wsc-items-count')
    //   let value = document.getElementsByClassName('xoo-wsc-items-count')[0].innerHTML
    //   badge.innerHTML = value
    //   oldBadge.addEventListener('change', (event) => console.log('+1', event))
    // }

    function offset(element) {
      var rect = element.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }

    function flyToCart() {

      const cta = document.querySelector('.single_add_to_cart_button')

      const variableProduct = document.getElementById('size')

      if (variableProduct == null) {
        console.log('no size product')
      }

      if (window.innerWidth <= 425) {
        console.log('mobile width')
      }

      let countATC = 0

      cta.addEventListener('click', () => {
        // document.querySelector('.kiss-cta').style.display = 'block'
        // setTimeout(() => {
        //   document.querySelector('.kiss-cta').style.display = 'none'
        //   cta.style.backgroundColor = '#000'
        //   cta.style.color = '#FFF'
        // }, 5000)

        const getLang = document.querySelector('html').getAttribute('lang')

        let cart = ''

        if (getLang == 'fr-FR' && window.innerWidth > 425) {
          cart = document.querySelector('.lang_fr .panier-svg');
        } else if (getLang == 'en-US' && window.innerWidth > 425) {
          cart = document.querySelector('.lang_en .panier-svg');
        } else if (getLang == 'en-US' && window.innerWidth <= 425) {
          cart = document.querySelector('#badgeCart');
        } else if (getLang == 'fr-FR' && window.innerWidth <= 425) {
          cart = document.querySelector('#badgeCart');
        }

        
        let cartOffset = offset(cart);
        const cartOffsetTop = cartOffset.top
        const cartOffsetLeft = cartOffset.left

        console.log('cartOffset : ', cartOffsetTop, cartOffsetLeft )

        let heartCta = document.querySelector('#heart')

        let ctaOffset = 0

        if (window.innerWidth <= 425) {
          ctaOffset = offset(heartCta);
        } else {
          ctaOffset = offset(cta);
        }

        
        const ctaOffsetTop = ctaOffset.top
        const ctaOffsetLeft = ctaOffset.left

        const h1 = document.querySelector('.product_title')

        console.log('offset cta :', offset(cta))
        console.log('offset h1 :', offset(h1))
        console.log('offset difference :', (offset(cta).top - offset(h1).top + 15))
  
        const diff = offset(cta).top - offset(h1).top + 15

        if (window.innerWidth <= 425 && variableProduct) {
          let bottom = (window.innerHeight - offset(cta).top + 15) + 'px'
          console.log('bottom : ' + bottom)
          // document.querySelector('.kiss-cta').style.bottom = (window.innerHeight - offset(cta).top + 15) + 'px'
          document.querySelector('.kiss-cta').style.bottom = '120px'
        } else if (window.innerWidth <= 425 && !variableProduct) {
          let bottom = (window.innerHeight - offset(cta).top + 15) + 'px'
          console.log('bottom : ' + bottom)
          // document.querySelector('.kiss-cta').style.bottom = (window.innerHeight - offset(cta).top + 15) + 'px'
          document.querySelector('.kiss-cta').style.bottom = '70px'
        } else {
          document.querySelector('.kiss-cta').style.top = diff + 'px'
        }
  
        
          
        const heart = document.getElementById('heart');

        const heartOffset = offset(heart);
        const heartOffsetTop = heartOffset.top
        const heartOffsetLeft = heartOffset.left

        console.log('heart : ', heartOffsetTop, heartOffsetLeft)
    
        console.log(cartOffsetTop, heartOffsetTop, cartOffsetLeft, heartOffsetLeft)

        let leftFace = document.getElementById('leftFace')

        console.log(leftFace)

        if (!cta.classList.contains('disabled') && window.innerWidth > 425) {
          let toX = - (ctaOffsetLeft - cartOffsetLeft)
          let toY = - (ctaOffsetTop - cartOffsetTop)
          console.log('toX et toY',toX, toY)
          let diff = ctaOffsetTop - heartOffsetTop
  
          let cartCount = document.querySelector('#badgeCart').innerHTML
          console.log('cart count : ', cartCount)
          let badge = document.getElementById('badgeCart')
          if (parseFloat(badge.innerHTML) === parseFloat(cartCount)) {
            setTimeout(() => {badge.innerHTML = parseFloat(cartCount) + 1}, 2500)
            console.log(parseFloat(cartCount) + 1)
          }



          let timeline = anime.timeline()

          timeline
          .add({
            targets: '.kiss-cta',
            opacity: 1,
            duration: 500
          })
          .add({
            targets: leftFace,
            translateX: 103,
            duration: 1000, 
            easing: 'easeOutQuart'
          }, '-=500')
          .add({
            targets: rightFace,
            translateX: -163, 
            easing: 'easeOutQuart'
          }, '-=1000')
          .add({
            targets:'.single_add_to_cart_button',
            duration: 1000,
            scaleX: 0,
            opacity: 0,
            easing: 'easeOutQuart'
          }, '-=1000')
          .add({
            targets: '#heart',
            opacity: { 
              value: [0, 1], 
              easing: 'easeOutQuart', 
              duration: 200
            }
          })
          .add({
            targets: '#heart',
            translateX: { 
              value: [75, toX - 26], 
              easing: 'easeOutQuart', 
              duration: 1500
            },
            translateY: { 
              value: [0, toY + 11],
              easing: 'easeOutBack', 
              duration: 1500
            },
            scale: .5
          })
          .add({
            targets: '#heart',
            opacity: { 
              value: [1, 0], 
              easing: 'linear', 
              duration: 50
            }
          }, '-=100')
          .add({
            targets: leftFace,
            translateX: 0,
            opacity: 0,
            duration: 750, 
            easing: 'easeOutQuart'
          })
          .add({
            targets: rightFace,
            translateX: 0,
            opacity: 0,
            easing: 'easeOutQuart'
          }, '-=750')
          .add({
            targets: '#heart',
            translateX: [0, toX - 26],
            translateY: [toY + 11, 0],
            scale: 1
          })
          .add({
            targets:'.single_add_to_cart_button',
            scaleX: {
              value: 1,
              duration: 100,
            }
          },'-=750')
          .add({
            targets:'.single_add_to_cart_button',
            opacity: 1,
            easing: 'easeOutQuart'
          },'-=750')
          .add({
            targets: leftFace,
            opacity: 1,
            duration: 100, 
            easing: 'linear'
          }, '+=5000')
          .add({
            targets: rightFace,
            opacity: 1,
            duration: 100, 
            easing: 'linear'
          }, '-=100')
          .add({
            targets: '.kiss-cta',
            opacity: 0,
            duration: 500
          })

        } else if (!cta.classList.contains('disabled') && variableProduct && window.innerWidth <= 425) {
          console.log('click btn mobile variable')

          console.log('ctaOffset', ctaOffset, 'ctaOffsetLeft', ctaOffsetLeft, '\ncartOffsetLeft', cartOffsetLeft)

          let toX = - (ctaOffsetLeft - cartOffsetLeft)
          let toY = - (ctaOffsetTop - cartOffsetTop)
          console.log('toX et toY',toX, toY)
          let diff = ctaOffsetTop - heartOffsetTop
  
          let cartCount = document.querySelector('#badgeCart').innerHTML
          console.log('cart count : ', cartCount)
          let badge = document.getElementById('badgeCart')
          if (parseFloat(badge.innerHTML) === parseFloat(cartCount)) {
            setTimeout(() => {badge.innerHTML = parseFloat(cartCount) + 1}, 3750)
            console.log(parseFloat(cartCount) + 1)
          }



          let timeline = anime.timeline()

          timeline
          .add({
            targets:'.single_add_to_cart_button',
            borderColor: ['#000', '#FFF'],
            duration: 500,
            easing: 'linear'
          })
          .add({
            targets:'.single_add_to_cart_button',
            // scaleX: 0,
            opacity: 0,
            duration: 800,
            easing: 'linear'
          }, '-=300')
          .add({
            targets: '.kiss-cta',
            opacity: [0, 1],
            duration: 1000,
            easing: 'easeOutQuart'
          }, '-=300')
          .add({
            targets: leftFace,
            translateX: 52,
            duration: 1000, 
            easing: 'easeOutQuart'
          }, '-=500')
          .add({
            targets: rightFace,
            translateX: -52, 
            duration: 1000, 
            easing: 'easeOutQuart'
          }, '-=1000')
          // .add({
          //   targets:'.single_add_to_cart_button',
          //   // scaleX: 0,
          //   opacity: 0,
          //   duration: 200,
          //   easing: 'easeOutQuart'
          // }, '-=1100')
          .add({
            targets: '#heart',
            opacity: { 
              value: [0, 1], 
              easing: 'linear', 
              duration: 200
            }
          })
          .add({
            targets: '#heart',
            translateX: { 
              value: [5, toX-2], 
              easing: 'easeOutQuart', 
              duration: 1500
            },
            translateY: { 
              value: [0, toY],
              easing: 'easeOutBack', 
              duration: 1500
            },
            scale: .5
          })
          .add({
            targets: '#heart',
            opacity: { 
              value: [1, 0], 
              easing: 'linear', 
              duration: 50
            }
          }, '-=100')
          .add({
            targets: leftFace,
            translateX: 0,
            duration: 750, 
            easing: 'easeOutQuart'
          })
          .add({
            targets: rightFace,
            translateX: 0,
            easing: 'easeOutQuart'
          }, '-=750')
          .add({
            targets: '#heart',
            translateX: [toX, 0],
            translateY: [toY, 0],
            scale: 1
          })
          .add({
            targets: '.kiss-cta',
            opacity: [1, 0],
            duration: 100, 
            easing: 'linear'
          })
          .add({
            targets:'.single_add_to_cart_button',
            scaleX: {
              value: 1,
              duration: 100,
            },
            borderColor: '#000',
            opacity: 1,
            easing: 'easeOutQuart'
          })
        } else if (!cta.classList.contains('disabled') && !variableProduct && window.innerWidth <= 425) {
          console.log('click btn mobile variable')

          console.log('ctaOffset', ctaOffset, 'ctaOffsetLeft', ctaOffsetLeft, '\ncartOffsetLeft', cartOffsetLeft)

          let toX = - (ctaOffsetLeft - cartOffsetLeft)
          let toY = - (ctaOffsetTop - cartOffsetTop)
          console.log('toX et toY',toX, toY)
          let diff = ctaOffsetTop - heartOffsetTop
  
          let cartCount = document.querySelector('#badgeCart').innerHTML
          console.log('cart count : ', cartCount)
          let badge = document.getElementById('badgeCart')
          if (parseFloat(badge.innerHTML) === parseFloat(cartCount)) {
            setTimeout(() => {badge.innerHTML = parseFloat(cartCount) + 1}, 2500)
            console.log(parseFloat(cartCount) + 1)
          }



          let timeline = anime.timeline()

          timeline
          .add({
            targets:'.single_add_to_cart_button',
            borderColor: ['#000', '#FFF'],
            duration: 500,
            easing: 'linear'
          })
          .add({
            targets:'.single_add_to_cart_button',
            // scaleX: 0,
            opacity: 0,
            duration: 800,
            easing: 'linear'
          }, '-=300')
          .add({
            targets: '.kiss-cta',
            opacity: [0, 1],
            duration: 1000,
            easing: 'easeOutQuart'
          }, '-=300')
          .add({
            targets: leftFace,
            translateX: 52,
            duration: 1000, 
            easing: 'easeOutQuart'
          })
          .add({
            targets: rightFace,
            translateX: -52, 
            easing: 'easeOutQuart'
          }, '-=1000')
          // .add({
          //   targets:'.single_add_to_cart_button',
          //   scaleX: 0,
          //   opacity: 0,
          //   easing: 'easeOutQuart'
          // }, '-=1000')
          .add({
            targets: '#heart',
            opacity: { 
              value: [0, 1], 
              easing: 'linear', 
              duration: 200
            }
          })
          .add({
            targets: '#heart',
            translateX: { 
              value: [5, toX], 
              easing: 'easeOutQuart', 
              duration: 1500
            },
            translateY: { 
              value: [0, toY - 50],
              easing: 'easeOutBack', 
              duration: 1500
            },
            scale: .5
          })
          .add({
            targets: '#heart',
            opacity: { 
              value: [1, 0], 
              easing: 'linear', 
              duration: 50
            }
          }, '-=100')
          .add({
            targets: leftFace,
            translateX: 0,
            opacity: 0,
            duration: 750, 
            easing: 'easeOutQuart'
          })
          .add({
            targets: rightFace,
            translateX: 0,
            opacity: 0,
            easing: 'easeOutQuart'
          }, '-=750')
          .add({
            targets: '#heart',
            translateX: [toX, 0],
            translateY: [toY, 0],
            scale: 1
          })
          // .add({
          //   targets:'.single_add_to_cart_button',
          //   scaleX: {
          //     value: 1,
          //     duration: 100,
          //   },
          //   opacity: 1,
          //   easing: 'easeOutQuart'
          // },'-=750')
          .add({
            targets: '.kiss-cta',
            opacity: [1, 0],
            duration: 100, 
            easing: 'linear'
          })
          .add({
            targets: leftFace,
            opacity: 1,
            duration: 100, 
            easing: 'linear'
          })
          .add({
            targets: rightFace,
            opacity: 1,
            duration: 100, 
            easing: 'linear'
          }, '-=100')
          .add({
            targets:'.single_add_to_cart_button',
            scaleX: {
              value: 1,
              duration: 100,
            },
            borderColor: '#000',
            opacity: 1,
            easing: 'easeOutQuart'
          })
        }

        countATC++

        if (countATC === 1) {
          setTimeout(function(){ 
            console.log('window.history.back')
            window.history.back()
          }, 2000);
        }
        
      })
    }
    // flyToCart()

    function zoomOnHover() {
      let targets = document.querySelectorAll('.zoomImg img')
      for (target of targets) {
        target.addEventListener('mouseenter', () => { 
          console.log('mouseenter')
          anime({
            targets: document.target,
            scale: [1,10]
          })
        }) 

        target.addEventListener('mouseleave', () => { 
          console.log('mouseleave')
          anime({
            targets: document.target,
            scale: [10,1]
          })
        }) 
      }
    }

    function kissSendTo() {
      const kissDiv = document.querySelector('.kiss-div')
      const SendToCta = document.querySelector('#loverModal .wpcf7-submit')

      SendToCta.addEventListener('click', () => {

        console.log('message envoyé !')
        let leftFace = document.getElementById('leftFace')
        let rightFace = document.getElementById('rightFace')

        let timeline = anime.timeline()
        timeline.add({
          targets: leftFace,
          translateX: 50
        })
      })
    }
    //kissSendTo()

    //zoomOnHover()

    // POLYFILL PREPREND METHODE

    // Source: https://github.com/jserz/js_piece/blob/master/DOM/ParentNode/prepend()/prepend().md
    // (function (arr) {
    //   arr.forEach(function (item) {
    //     if (item.hasOwnProperty('prepend')) {
    //       return;
    //     }
    //     Object.defineProperty(item, 'prepend', {
    //       configurable: true,
    //       enumerable: true,
    //       writable: true,
    //       value: function prepend() {
    //         var argArr = Array.prototype.slice.call(arguments),
    //           docFrag = document.createDocumentFragment();

    //         argArr.forEach(function (argItem) {
    //           var isNode = argItem instanceof Node;
    //           docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
    //         });

    //         this.insertBefore(docFrag, this.firstChild);
    //       }
    //     });
    //   });
    // })([Element.prototype, Document.prototype, DocumentFragment.prototype]);

    // PSEUDO CAROUSEL FOR SHOP TABLE CART PAGE

    function cartScroll() {


      const woocommerce = document.querySelector('.woocommerce')
      const cartForm = document.querySelector('.woocommerce .woocommerce-cart-form')
      const shop_table = document.querySelector('.woocommerce .shop_table')

      if (document.querySelector('.woocommerce .shop-scroll')) {
          const cartLength = document.querySelector('.woocommerce .shop-scroll').children.length
          console.log('cart length : ')
          console.log(cartLength)
          
          let clickCount = 0
  
          let arrowUp = document.createElement('button')
          let arrowDown = document.createElement('button')
          arrowUp.setAttribute('id', 'arrowUp')
          arrowDown.setAttribute('id', 'arrowDown')
          arrowDown.classList.add('btn')
          arrowUp.classList.add('btn')
          arrowUp.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="54.123" height="23.494" viewBox="0 0 54.123 23.494"><path id="Tracé_86" data-name="Tracé 86" d="M5720.62-17662.7c4.433,2.3,26.87,18.775,26.87,18.775l24.583-18.775" transform="translate(5773.59 -17641.428) rotate(180)" fill="none" stroke="#000" stroke-linejoin="round" stroke-width="5"/></svg>'
          arrowDown.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="54.123" height="23.494" viewBox="0 0 54.123 23.494"><path id="Tracé_83" data-name="Tracé 83" d="M5720.62-17662.7c4.433,2.3,26.87,18.775,26.87,18.775l24.583-18.775" transform="translate(-5719.468 17664.922)" fill="none" stroke="#000" stroke-linejoin="round" stroke-width="5"/></svg>'
      
          cartForm.after(arrowUp)
          cartForm.after(arrowDown)

          // if (cartLength == 1) {
          //   arrowUp.classList.add('d-none')
          // }
    
          function disableArrow(nbr) {

            if (clickCount === 0 && nbr > 1) {
              arrowUp.classList.add('d-none')
              arrowDown.classList.remove('d-none')
              console.log('if : a')
            } else if (clickCount === 0 && nbr === 1) {
              arrowDown.classList.add('d-none')
              arrowUp.classList.add('d-none')
              console.log('if : b')
            } else if (clickCount === nbr - 1 ) {
              arrowDown.classList.add('d-none')
              arrowUp.classList.remove('d-none')
              console.log('if : c')
            } else if (clickCount != 0 && clickCount != nbr - 1) {
              arrowUp.classList.remove('d-none')
              arrowDown.classList.remove('d-none')
              console.log('if : d')
            }

          }
          disableArrow(cartLength)

      
  
          arrowDown.addEventListener('click', () => {

            let cartLength = document.querySelector('.cart-container .woocommerce .shop-scroll').children.length

            if (clickCount < cartLength - 1 ) {

              anime({
                targets: '.cart-container .cart_item',
                easing: 'easeOutQuart',
                translateY: - 160 * (clickCount + 1)
              })

              clickCount += 1
              disableArrow(cartLength)
            }
            
          })

          arrowUp.addEventListener('click', () => {

            if (clickCount > 0 ) {
              anime({
                targets: '.cart-container .cart_item',
                easing: 'easeOutQuart',
                translateY: (- 160 * (clickCount)) + 160
              })

              clickCount += -1
              disableArrow(cartLength)
            }
          })
      }



    }
    //cartScroll()




    // END PSEUDO CAROUSEL FOR SHOP TABLE CART PAGE



    

    function kissToCheckout() {
      const leftFace = document.getElementById('leftFace') 
      const rightFace = document.getElementById('rightFace') 

      let lang = document.querySelector('html').getAttribute('lang')

      if (window.innerWidth <= 425) {
        let timeline = anime.timeline({
          duration: 1000,
          easing: 'easeOutQuart'
        })

        timeline
        .add({
          targets: '.woocommerce',
          opacity: 0, 
          duration: 500
        })
        .add({
          targets: 'h1.text-center',
          opacity: 0, 
          duration: 500
        }, '-=500')
        .add({
          targets: leftFace,
          translateX: 200,
          duration: 500
        }, '-=250')
        .add({
          targets: rightFace,
          translateX: -200,
          duration: 500
        }, '-=500')

        setTimeout(function() {
          if (lang == 'en-US') {
            window.location.href = '/en/checkout'
          } else {
            window.location.href = '/checkout'
          }
        }, 1000)
      } else {
        // let timeline = anime.timeline({
        //   duration: 1000,
        //   easing: 'easeOutQuart'
        // })

        // timeline
        // .add({
        //   targets: '.woocommerce',
        //   opacity: 0, 
        //   duration: 500
        // })
        // .add({
        //   targets: 'h1.text-center',
        //   opacity: 0, 
        //   duration: 500
        // }, '-=500')
        // .add({
        //   targets: leftFace,
        //   translateX: 225,
        //   duration: 500
        // }, '-=250')
        // .add({
        //   targets: rightFace,
        //   translateX: -225,
        //   duration: 500
        // }, '-=500')


        setTimeout(function() {
          document.querySelector('.cart-container').classList.add('d-none')
          document.querySelector('.checkout-container').classList.remove('d-none')
        }, 1000)
      }
      
    }

    function customShippingCart() {
      if(jQuery('.woocommerce-shipping-totals #shipping_method li input[checked=checked] + label .woocommerce-Price-amount').html() == undefined) {
        jQuery('.woocommerce-shipping-totals').hide()
      }
    }

    const cartPage = document.querySelector('.woocommerce-cart')

    if (cartPage) {
      cartScroll()
      customShippingCart()

      function emptyCart() {
        const cart = document.querySelector('.woocommerce .shop-scroll')
        if(cart == null) {
          console.log('panier vide :,(')
          document.querySelector('h1.text-center').classList.add('d-none')
          document.querySelector('.kiss-row').classList.add('d-none')
          document.querySelector('.cart-container').innerHTML = '<img src="https://encre-atelier.com/wp-content/uploads/2021/04/illu_Panier_vide.svg"><a href="/clothing" class="btn btn-primary">Continuer vos achats</a>'
        }
      }

      if (document.querySelector('.woocommerce p.cart-empty')) {
        emptyCart()
      } else {
        const goToCheckout = document.getElementById('goToCheckout')
        goToCheckout.addEventListener('click', () => {
          kissToCheckout()
        })

        const goToCheckoutEn = document.getElementById('goToCheckoutEn')
        goToCheckoutEn.addEventListener('click', () => {
          kissToCheckout()
        })
      }

      
      if (document.querySelector('.woocommerce .shop-scroll').children.length === 1) {
        document.querySelector('.woocommerce-cart-form .shop_table a.remove').setAttribute('href', '/cart/?empty-cart')
        document.querySelector('.woocommerce-cart-form .shop_table a.remove').addEventListener('click', () => {
          window.location.href = '/cart/?empty-cart'
        })
      }
      
    }

    // CUSTOM CHECKOUT PAGE

    // PLACEHOLDER FORM

    function getPlaceholder() {
      const checkoutForm = document.querySelector('.woocommerce .woocommerce-checkout')
      document.getElementById('billing_first_name').setAttribute('placeholder', 'Prénom')
      document.getElementById('billing_last_name').setAttribute('placeholder', 'Nom')
      document.getElementById('billing_company').setAttribute('placeholder', 'Entreprise')
      document.getElementById('billing_postcode').setAttribute('placeholder', 'Code Postal')
      document.getElementById('billing_city').setAttribute('placeholder', 'Ville')
      document.getElementById('billing_state').setAttribute('placeholder', 'Région')
      document.getElementById('billing_phone').setAttribute('placeholder', 'Téléphone')
      document.getElementById('billing_email').setAttribute('placeholder', 'Email')
      // document.getElementById('shipping_first_name').setAttribute('placeholder', 'Prénom')
      // document.getElementById('shipping_last_name').setAttribute('placeholder', 'Nom')
      // document.getElementById('shipping_company').setAttribute('placeholder', 'Entreprise')
      // document.getElementById('shipping_postcode').setAttribute('placeholder', 'Code Postal')
      // document.getElementById('shipping_city').setAttribute('placeholder', 'Ville')
    }
    // getPlaceholder()
    function getPlaceholderEnglish() {
      const checkoutForm = document.querySelector('.woocommerce .woocommerce-checkout')
      document.getElementById('billing_first_name').setAttribute('placeholder', 'First Name')
      document.getElementById('billing_last_name').setAttribute('placeholder', 'Last Name')
      document.getElementById('billing_company').setAttribute('placeholder', 'Company')
      document.getElementById('billing_postcode').setAttribute('placeholder', 'Zip Code')
      document.getElementById('billing_city').setAttribute('placeholder', 'City')
      document.getElementById('billing_state').setAttribute('placeholder', 'Area')
      document.getElementById('billing_phone').setAttribute('placeholder', 'Phone')
      document.getElementById('billing_email').setAttribute('placeholder', 'Email')
      // document.getElementById('shipping_first_name').setAttribute('placeholder', 'First Name')
      // document.getElementById('shipping_last_name').setAttribute('placeholder', 'Last Name')
      // document.getElementById('shipping_company').setAttribute('placeholder', 'Company')
      // document.getElementById('shipping_postcode').setAttribute('placeholder', 'Zip Code')
      // document.getElementById('shipping_city').setAttribute('placeholder', 'City')

      // document.querySelector('#stripe-payment-data > p').textContent = 'Pay bay card'
    }

    const checkoutPage = document.querySelector('.woocommerce-checkout')
    const pageLang = document.querySelector('html').lang

    if (pageLang == 'en-US') {
      document.querySelector('.aws-search-field').setAttribute('placeholder', 'SEARCH.')
    }

    if (checkoutPage && pageLang == 'fr-FR') {
      getPlaceholder()
    } else if (checkoutPage && pageLang == 'en-US') {
      getPlaceholderEnglish()
    }

    // STOCKIST PAGE

    // const stockistPage = document.getElementById('stockistPage')
    // let mapContainer = document.createElement('div')
    // mapContainer.classList.add('mapContainer')
    // mapContainer.innerHTML = ''

    // SHIPPING METHOD CUSTOM 

    function shippingCustom() {
      const freeShippingBtn = document.getElementById('free-shipping-element')
      const mondialRelayBtn = document.getElementById('mondial-relay-btn')

      mondialRelayBtn.onclick = function() {
        document.getElementById('modaal_link').click()
      }
    }
    

    if (checkoutPage) {
      cartScroll()

      const goToCheckout = document.getElementById('goToCheckout')
      goToCheckout.addEventListener('click', () => {
        kissToCheckout()
      })

      const goToCheckoutEn = document.getElementById('goToCheckoutEn')
      goToCheckoutEn.addEventListener('click', () => {
        kissToCheckout()
      })

      customShippingCart()
      shippingCustom()
    }


});// end ready function