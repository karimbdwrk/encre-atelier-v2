"use strict";

window.addEventListener("orientationchange", function (event) {
  console.log("the orientation of the device is now " + event.target.screen.orientation.angle);

  if (event.target.screen.orientation.angle === 0) {
    if (window.innerWidth <= 425) {
      document.querySelector('#rotateScreen').classList.remove('active');
    }
  } else {
    if (window.innerWidth > 425) {
      document.querySelector('#rotateScreen').classList.add('active');
    }
  }
}); // CUSTOM CAROUSEL IMAGES PRODUCT PAGE

var singleProductPage = document.querySelector('.single.single-product');

if (singleProductPage) {
  var cta = document.querySelector('.single_add_to_cart_button');

  if (document.querySelector('#main > .product').classList.contains('product_tag-precommande')) {
    cta.innerHTML = 'PRE-ORDER';
  }

  if (document.querySelector('.product.type-product').classList.contains('outofstock')) {
    if (document.querySelector('.single_add_to_cart_button') != null) {
      document.querySelector('.single_add_to_cart_button').innerText = 'SORRY, IT\'S OUT OF STOCK';
      document.querySelector('.single_add_to_cart_button').classList.add('pointer-none');
    }
  }

  var gallery = document.querySelector('.woocommerce-product-gallery__wrapper').children;
  var owlWrapper = document.createElement('div');
  owlWrapper.classList.add('owl-carousel', 'owl-theme');
  var owlModal = document.createElement('div');
  owlModal.classList.add('owl-carousel', 'owl-theme');

  for (i = 0; i < gallery.length; i++) {
    var imgLink = gallery[i].querySelector('a').getAttribute('href');
    var owlSlide = document.createElement('div');
    var owlImg = document.createElement('img');
    owlImg.setAttribute('src', imgLink);
    owlSlide.classList.add('item');
    owlSlide.append(owlImg);
    var zoomBtn = document.createElement('button');
    zoomBtn.className = 'btn btn-warning zoom-btn';
    zoomBtn.setAttribute('data-toggle', 'modal');
    zoomBtn.setAttribute('data-target', '#zoomProductModal');
    zoomBtn.setAttribute('slideNumber', i);
    var searchIcon = document.createElement('i');
    searchIcon.className = 'fas fa-search';
    zoomBtn.append(searchIcon);
    owlSlide.append(zoomBtn);
    owlWrapper.append(owlSlide);
    var owlSlideModal = document.createElement('div');
    owlSlideModal.classList.add('item');
    var img = document.createElement('img');
    img.classList.add('zoomImg');
    img.setAttribute('src', imgLink);
    owlSlideModal.append(img);
    owlModal.append(owlSlideModal);
  }

  var cible = document.getElementById('owlSlider');
  cible.append(owlWrapper);
  var cibleModal = document.getElementById('zoomProductCarousel');
  cibleModal.append(owlModal);
} // DOCUMENT.READY FUNCTION


function ready(callbackFunc) {
  if (document.readyState !== 'loading') {
    // Document is already ready, call the callback directly
    callbackFunc();
  } else if (document.addEventListener) {
    // All modern browsers to register DOMContentLoaded
    document.addEventListener('DOMContentLoaded', callbackFunc);
  } else {
    // Old IE browsers
    document.attachEvent('onreadystatechange', function () {
      if (document.readyState === 'complete') {
        callbackFunc();
      }
    });
  }
}

ready(function () {
  // Cart onLoad
  var regexNbrs = /[a-z]/g;
  var oldCart = document.querySelector('.cart-contents').innerText;
  var nbItems = oldCart.replace(regexNbrs, '');
  document.getElementById('badgeCart').innerHTML = parseInt(nbItems); // facesmile

  function faceSmile() {
    var faceHeader = document.getElementById('faceCart');

    if (document.getElementById('nbr').innerHTML != '0') {
      faceHeader.classList.remove('empty');
    }
  }

  faceSmile(); // HOMEPAGE

  var homePage = document.querySelector('body.home');

  if (homePage) {
    var tablepress = document.querySelector('#tablepress-homepageTable');

    if (tablepress) {
      var imgDesktop = tablepress.querySelector('.row-1 .column-2').innerText;
      var imgMobile = tablepress.querySelector('.row-1 .column-3').innerText;

      if (window.innerWidth < 426) {
        homePage.style.backgroundImage = 'url(' + imgMobile + ')';
      } else {
        homePage.style.backgroundImage = 'url(' + imgDesktop + ')';
      }
    }
  } // SEARCH MODAL


  var searchModal = document.querySelector('#searchModal');
  var searchBtn = document.querySelector('.btn-recherche');
  searchBtn.addEventListener('click', function () {
    if (document.querySelector('#searchModal.show') == null) {
      document.querySelector('img.search-svg').setAttribute('src', 'https://encre-atelier.com/wp-content/uploads/2021/03/eye-open.svg');
    }
  });
  document.querySelector('#searchModal .close').addEventListener('click', function () {
    if (document.querySelector('#searchModal.show') != null) {
      document.querySelector('img.search-svg').setAttribute('src', 'https://encre-atelier.com/wp-content/uploads/2021/03/eye-close.svg');
    }
  });

  function imageMiror() {
    var productList = document.querySelector('.products');
    var product = document.querySelector('.product');
    var cible = document.getElementById('miror');
    document.querySelectorAll('.product').forEach(function (item) {
      item.addEventListener('mouseenter', function (event) {
        var imgSrc = item.querySelector('img:last-of-type').getAttribute('src');
        var newImg = document.createElement('img');
        newImg.setAttribute('src', imgSrc);
        cible.innerHTML = '';
        cible.append(newImg);
      });
    });
  }

  if (document.querySelector('.page-id-49') || document.querySelector('.page-id-302') || document.querySelector('.page-id-196') || document.querySelector('.archive')) {
    imageMiror();
  } // PRODUCT PAGE 


  if (singleProductPage) {
    wishlistBtnProduct();

    if (document.querySelector('#size') == null) {
      return null;
    } else {
      customSelect();
    }
  } // WISHLIST BTN PAGE PRODUCT


  function wishlistBtnProduct() {
    var addBtn = document.getElementById('heartWishlist');
    var productId = '';

    if (document.querySelector('.variations')) {
      productId = document.querySelector('.variations_form').getAttribute('data-product_id');
    } else {
      productId = document.querySelector('.add_to_cart_button').getAttribute('value');
      document.querySelector('.add_to_cart_button').prepend('test');
    }

    var wishlistTable;
    var wishlistList;

    if (window.innerWidth > 425) {
      wishlistTable = document.querySelector('header#masthead #yith-wcwl-form .wishlist_table');
      wishlistList = wishlistTable.querySelectorAll('tbody tr');
    } else {
      wishlistTable = document.querySelector('header#masthead #yith-wcwl-form .wishlist_table');
      wishlistList = wishlistTable.querySelectorAll('li');
    } // const wishlistTable = document.querySelector('header#masthead #yith-wcwl-form .wishlist_table')
    // let wishlistList = wishlistTable.querySelectorAll('tbody tr')


    console.log('wishlist list');
    console.log(wishlistList);
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = wishlistList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        item = _step.value;
        var idProduit = item.dataset.rowId;

        if (idProduit == productId) {
          document.getElementById('heartWishlist').classList.add('oui');
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    addBtn.addEventListener('click', function () {
      var wishlistHeart = document.querySelector('.single_add_to_wishlist');
      wishlistHeart.click();
      addBtn.classList.add('oui');
      document.querySelector('.wishlist-svg').classList.add('oui');
    });
  } // CUSTOM SELECT PRODUCT PAGE


  function customSelect() {
    var x, i, j, l, ll, selElmnt, a, b, c;
    /* Look for any elements with the class "custom-select": */

    x = document.getElementsByClassName("value");
    l = x.length;

    for (i = 0; i < l; i++) {
      selElmnt = x[i].getElementsByTagName("select")[0];
      ll = selElmnt.length;
      /* For each element, create a new DIV that will act as the selected item: */

      a = document.createElement("button");
      a.setAttribute("class", "select-selected btn btn-secondary dropdown-toggle");
      a.setAttribute("id", "dropdownSelect");
      a.setAttribute("data-toggle", "dropdown");
      a.setAttribute("aria-haspopup", "true");
      a.setAttribute("aria-expanded", "false");
      a.innerHTML = 'Size';
      x[i].appendChild(a);
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
        c.addEventListener("click", function (e) {
          /* When an item is clicked, update the original select box,
          and the selected item: */
          var y, i, k, s, h, sl, yl;
          s = this.parentNode.parentNode.getElementsByTagName("select")[0];
          sl = s.length;
          h = this.parentNode.previousSibling;

          for (i = 0; i < sl; i++) {
            if (s.options[i].innerHTML == this.innerHTML) {
              s.selectedIndex = i;
              h.innerHTML = '<span>Size: </span><b>' + this.innerHTML + '</b>';
              y = this.parentNode.getElementsByClassName("same-as-selected");
              yl = y.length;
              this.classList.add("same-as-selected");
              var all_variations = JSON.parse(s.parentNode.parentNode.parentNode.parentNode.parentNode.getAttribute('data-product_variations'));
              var id_variation = all_variations[i - 1].variation_id;
              var valueCart = document.getElementsByClassName('variation_id');
              valueCart[0].value = id_variation.toString();
              document.getElementsByClassName('single_add_to_cart_button')[0].classList.remove('disabled');
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
      var tableau1 = [];
      var tableau2 = [];
      var firstSelect = JSON.parse(document.querySelector('form.variations_form').getAttribute('data-product_variations'));
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = firstSelect[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          option = _step2.value;

          if (option.is_in_stock) {
            tableau1.push(option.attributes.attribute_size);
            console.log(tableau1);
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      var lastSelect = document.querySelector('.select-items');
      var lastOptions = lastSelect.querySelectorAll('.dropdown-item');
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = lastOptions[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          option = _step3.value;
          console.log(option.textContent);
          var bool = tableau1.includes(option.textContent);

          if (!bool) {
            option.classList.add('disabled');
          }
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
            _iterator3["return"]();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
    }

    hideOutOfStockSize();

    function closeAllSelect(elmnt) {
      /* A function that will close all select boxes in the document,
      except the current select box: */
      var x,
          y,
          i,
          xl,
          yl,
          arrNo = [];
      x = document.getElementsByClassName("select-items");
      y = document.getElementsByClassName("select-selected");
      xl = x.length;
      yl = y.length;

      for (i = 0; i < yl; i++) {
        if (elmnt == y[i]) {
          arrNo.push(i);
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
  } // NOMBRE DE PRODUITS DANS LE PANIER HEADER


  var header = document.getElementById('masthead');

  function offset(element) {
    var rect = element.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {
      top: rect.top + scrollTop,
      left: rect.left + scrollLeft
    };
  }

  function flyToCart() {
    var cta = document.querySelector('.single_add_to_cart_button');
    var variableProduct = document.getElementById('size');
    var countATC = 0;
    cta.addEventListener('click', function () {
      var getLang = document.querySelector('html').getAttribute('lang');
      var cart = '';

      if (getLang == 'fr-FR' && window.innerWidth > 425) {
        cart = document.querySelector('.lang_fr .panier-svg');
      } else if (getLang == 'en-US' && window.innerWidth > 425) {
        cart = document.querySelector('.lang_en .panier-svg');
      } else if (getLang == 'en-US' && window.innerWidth <= 425) {
        cart = document.querySelector('#badgeCart');
      } else if (getLang == 'fr-FR' && window.innerWidth <= 425) {
        cart = document.querySelector('#badgeCart');
      }

      var cartOffset = offset(cart);
      var cartOffsetTop = cartOffset.top;
      var cartOffsetLeft = cartOffset.left;
      var heartCta = document.querySelector('#heart');
      var ctaOffset = 0;

      if (window.innerWidth <= 425) {
        ctaOffset = offset(heartCta);
      } else {
        ctaOffset = offset(cta);
      }

      var ctaOffsetTop = ctaOffset.top;
      var ctaOffsetLeft = ctaOffset.left;
      var h1 = document.querySelector('.product_title');
      var diff = offset(cta).top - offset(h1).top + 15;

      if (window.innerWidth <= 425 && variableProduct) {
        var bottom = window.innerHeight - offset(cta).top + 15 + 'px';
        document.querySelector('.kiss-cta').style.bottom = '120px';
      } else if (window.innerWidth <= 425 && !variableProduct) {
        var _bottom = window.innerHeight - offset(cta).top + 15 + 'px';

        document.querySelector('.kiss-cta').style.bottom = '70px';
      } else {
        document.querySelector('.kiss-cta').style.top = diff + 'px';
      }

      var heart = document.getElementById('heart');
      var heartOffset = offset(heart);
      var heartOffsetTop = heartOffset.top;
      var heartOffsetLeft = heartOffset.left;
      var leftFace = document.getElementById('leftFace');

      if (!cta.classList.contains('disabled') && window.innerWidth > 425) {
        var toX = -(ctaOffsetLeft - cartOffsetLeft);
        var toY = -(ctaOffsetTop - cartOffsetTop);
        console.log('toX et toY', toX, toY);

        var _diff = ctaOffsetTop - heartOffsetTop;

        var cartCount = document.querySelector('#badgeCart').innerHTML;
        var badge = document.getElementById('badgeCart');

        if (parseFloat(badge.innerHTML) === parseFloat(cartCount)) {
          setTimeout(function () {
            badge.innerHTML = parseFloat(cartCount) + 1;
          }, 2500);
        }

        var timeline = anime.timeline();
        timeline.add({
          targets: '.kiss-cta',
          opacity: 1,
          duration: 500
        }).add({
          targets: leftFace,
          translateX: 103,
          duration: 1000,
          easing: 'easeOutQuart'
        }, '-=500').add({
          targets: rightFace,
          translateX: -163,
          easing: 'easeOutQuart'
        }, '-=1000').add({
          targets: '.single_add_to_cart_button',
          duration: 1000,
          scaleX: 0,
          opacity: 0,
          easing: 'easeOutQuart'
        }, '-=1000').add({
          targets: '#heart',
          opacity: {
            value: [0, 1],
            easing: 'easeOutQuart',
            duration: 200
          }
        }).add({
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
        }).add({
          targets: '#heart',
          opacity: {
            value: [1, 0],
            easing: 'linear',
            duration: 50
          }
        }, '-=100').add({
          targets: leftFace,
          translateX: 0,
          opacity: 0,
          duration: 750,
          easing: 'easeOutQuart'
        }).add({
          targets: rightFace,
          translateX: 0,
          opacity: 0,
          easing: 'easeOutQuart'
        }, '-=750').add({
          targets: '#heart',
          translateX: [0, toX - 26],
          translateY: [toY + 11, 0],
          scale: 1
        }).add({
          targets: '.single_add_to_cart_button',
          scaleX: {
            value: 1,
            duration: 100
          }
        }, '-=750').add({
          targets: '.single_add_to_cart_button',
          opacity: 1,
          easing: 'easeOutQuart'
        }, '-=750').add({
          targets: leftFace,
          opacity: 1,
          duration: 100,
          easing: 'linear'
        }, '+=5000').add({
          targets: rightFace,
          opacity: 1,
          duration: 100,
          easing: 'linear'
        }, '-=100').add({
          targets: '.kiss-cta',
          opacity: 0,
          duration: 500
        });
      } else if (!cta.classList.contains('disabled') && variableProduct && window.innerWidth <= 425) {
        var _toX = -(ctaOffsetLeft - cartOffsetLeft);

        var _toY = -(ctaOffsetTop - cartOffsetTop);

        var _diff2 = ctaOffsetTop - heartOffsetTop;

        var _cartCount = document.querySelector('#badgeCart').innerHTML;

        var _badge = document.getElementById('badgeCart');

        if (parseFloat(_badge.innerHTML) === parseFloat(_cartCount)) {
          setTimeout(function () {
            _badge.innerHTML = parseFloat(_cartCount) + 1;
          }, 3750);
        }

        var _timeline = anime.timeline();

        _timeline.add({
          targets: '.single_add_to_cart_button',
          borderColor: ['#000', '#FFF'],
          duration: 500,
          easing: 'linear'
        }).add({
          targets: '.single_add_to_cart_button',
          // scaleX: 0,
          opacity: 0,
          duration: 800,
          easing: 'linear'
        }, '-=300').add({
          targets: '.kiss-cta',
          opacity: [0, 1],
          duration: 1000,
          easing: 'easeOutQuart'
        }, '-=300').add({
          targets: leftFace,
          translateX: 52,
          duration: 1000,
          easing: 'easeOutQuart'
        }, '-=500').add({
          targets: rightFace,
          translateX: -52,
          duration: 1000,
          easing: 'easeOutQuart'
        }, '-=1000').add({
          targets: '#heart',
          opacity: {
            value: [0, 1],
            easing: 'linear',
            duration: 200
          }
        }).add({
          targets: '#heart',
          translateX: {
            value: [5, _toX - 2],
            easing: 'easeOutQuart',
            duration: 1500
          },
          translateY: {
            value: [0, _toY],
            easing: 'easeOutBack',
            duration: 1500
          },
          scale: .5
        }).add({
          targets: '#heart',
          opacity: {
            value: [1, 0],
            easing: 'linear',
            duration: 50
          }
        }, '-=100').add({
          targets: leftFace,
          translateX: 0,
          duration: 750,
          easing: 'easeOutQuart'
        }).add({
          targets: rightFace,
          translateX: 0,
          easing: 'easeOutQuart'
        }, '-=750').add({
          targets: '#heart',
          translateX: [_toX, 0],
          translateY: [_toY, 0],
          scale: 1
        }).add({
          targets: '.kiss-cta',
          opacity: [1, 0],
          duration: 100,
          easing: 'linear'
        }).add({
          targets: '.single_add_to_cart_button',
          scaleX: {
            value: 1,
            duration: 100
          },
          borderColor: '#000',
          opacity: 1,
          easing: 'easeOutQuart'
        });
      } else if (!cta.classList.contains('disabled') && !variableProduct && window.innerWidth <= 425) {
        var _toX2 = -(ctaOffsetLeft - cartOffsetLeft);

        var _toY2 = -(ctaOffsetTop - cartOffsetTop);

        var _diff3 = ctaOffsetTop - heartOffsetTop;

        var _cartCount2 = document.querySelector('#badgeCart').innerHTML;

        var _badge2 = document.getElementById('badgeCart');

        if (parseFloat(_badge2.innerHTML) === parseFloat(_cartCount2)) {
          setTimeout(function () {
            _badge2.innerHTML = parseFloat(_cartCount2) + 1;
          }, 2500);
        }

        var _timeline2 = anime.timeline();

        _timeline2.add({
          targets: '.single_add_to_cart_button',
          borderColor: ['#000', '#FFF'],
          duration: 500,
          easing: 'linear'
        }).add({
          targets: '.single_add_to_cart_button',
          opacity: 0,
          duration: 800,
          easing: 'linear'
        }, '-=300').add({
          targets: '.kiss-cta',
          opacity: [0, 1],
          duration: 1000,
          easing: 'easeOutQuart'
        }, '-=300').add({
          targets: leftFace,
          translateX: 52,
          duration: 1000,
          easing: 'easeOutQuart'
        }).add({
          targets: rightFace,
          translateX: -52,
          easing: 'easeOutQuart'
        }, '-=1000').add({
          targets: '#heart',
          opacity: {
            value: [0, 1],
            easing: 'linear',
            duration: 200
          }
        }).add({
          targets: '#heart',
          translateX: {
            value: [5, _toX2],
            easing: 'easeOutQuart',
            duration: 1500
          },
          translateY: {
            value: [0, _toY2 - 50],
            easing: 'easeOutBack',
            duration: 1500
          },
          scale: .5
        }).add({
          targets: '#heart',
          opacity: {
            value: [1, 0],
            easing: 'linear',
            duration: 50
          }
        }, '-=100').add({
          targets: leftFace,
          translateX: 0,
          opacity: 0,
          duration: 750,
          easing: 'easeOutQuart'
        }).add({
          targets: rightFace,
          translateX: 0,
          opacity: 0,
          easing: 'easeOutQuart'
        }, '-=750').add({
          targets: '#heart',
          translateX: [_toX2, 0],
          translateY: [_toY2, 0],
          scale: 1
        }).add({
          targets: '.kiss-cta',
          opacity: [1, 0],
          duration: 100,
          easing: 'linear'
        }).add({
          targets: leftFace,
          opacity: 1,
          duration: 100,
          easing: 'linear'
        }).add({
          targets: rightFace,
          opacity: 1,
          duration: 100,
          easing: 'linear'
        }, '-=100').add({
          targets: '.single_add_to_cart_button',
          scaleX: {
            value: 1,
            duration: 100
          },
          borderColor: '#000',
          opacity: 1,
          easing: 'easeOutQuart'
        });
      }

      countATC++;

      if (countATC === 1) {
        setTimeout(function () {
          window.history.back();
        }, 2000);
      }
    });
  }

  function zoomOnHover() {
    var targets = document.querySelectorAll('.zoomImg img');
    var _iteratorNormalCompletion4 = true;
    var _didIteratorError4 = false;
    var _iteratorError4 = undefined;

    try {
      for (var _iterator4 = targets[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
        target = _step4.value;
        target.addEventListener('mouseenter', function () {
          anime({
            targets: document.target,
            scale: [1, 10]
          });
        });
        target.addEventListener('mouseleave', function () {
          anime({
            targets: document.target,
            scale: [10, 1]
          });
        });
      }
    } catch (err) {
      _didIteratorError4 = true;
      _iteratorError4 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
          _iterator4["return"]();
        }
      } finally {
        if (_didIteratorError4) {
          throw _iteratorError4;
        }
      }
    }
  }

  function kissSendTo() {
    var kissDiv = document.querySelector('.kiss-div');
    var SendToCta = document.querySelector('#loverModal .wpcf7-submit');
    SendToCta.addEventListener('click', function () {
      var leftFace = document.getElementById('leftFace');
      var rightFace = document.getElementById('rightFace');
      var timeline = anime.timeline();
      timeline.add({
        targets: leftFace,
        translateX: 50
      });
    });
  } // PSEUDO CAROUSEL FOR SHOP TABLE CART PAGE


  function cartScroll() {
    var woocommerce = document.querySelector('.woocommerce');
    var cartForm = document.querySelector('.woocommerce .woocommerce-cart-form');
    var shop_table = document.querySelector('.woocommerce .shop_table');

    if (document.querySelector('.woocommerce .shop-scroll')) {
      var disableArrow = function disableArrow(nbr) {
        if (clickCount === 0 && nbr > 1) {
          arrowUp.classList.add('d-none');
          arrowDown.classList.remove('d-none');
        } else if (clickCount === 0 && nbr === 1) {
          arrowDown.classList.add('d-none');
          arrowUp.classList.add('d-none');
        } else if (clickCount === nbr - 1) {
          arrowDown.classList.add('d-none');
          arrowUp.classList.remove('d-none');
        } else if (clickCount != 0 && clickCount != nbr - 1) {
          arrowUp.classList.remove('d-none');
          arrowDown.classList.remove('d-none');
        }
      };

      var cartLength = document.querySelector('.woocommerce .shop-scroll').children.length;
      var clickCount = 0;
      var arrowUp = document.createElement('button');
      var arrowDown = document.createElement('button');
      arrowUp.setAttribute('id', 'arrowUp');
      arrowDown.setAttribute('id', 'arrowDown');
      arrowDown.classList.add('btn');
      arrowUp.classList.add('btn');
      arrowUp.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="54.123" height="23.494" viewBox="0 0 54.123 23.494"><path id="Tracé_86" data-name="Tracé 86" d="M5720.62-17662.7c4.433,2.3,26.87,18.775,26.87,18.775l24.583-18.775" transform="translate(5773.59 -17641.428) rotate(180)" fill="none" stroke="#000" stroke-linejoin="round" stroke-width="5"/></svg>';
      arrowDown.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="54.123" height="23.494" viewBox="0 0 54.123 23.494"><path id="Tracé_83" data-name="Tracé 83" d="M5720.62-17662.7c4.433,2.3,26.87,18.775,26.87,18.775l24.583-18.775" transform="translate(-5719.468 17664.922)" fill="none" stroke="#000" stroke-linejoin="round" stroke-width="5"/></svg>';
      cartForm.after(arrowUp);
      cartForm.after(arrowDown);
      disableArrow(cartLength);
      arrowDown.addEventListener('click', function () {
        var cartLength = document.querySelector('.cart-container .woocommerce .shop-scroll').children.length;

        if (clickCount < cartLength - 1) {
          anime({
            targets: '.cart-container .cart_item',
            easing: 'easeOutQuart',
            translateY: -175 * (clickCount + 1)
          });
          clickCount += 1;
          disableArrow(cartLength);
        }
      });
      arrowUp.addEventListener('click', function () {
        if (clickCount > 0) {
          anime({
            targets: '.cart-container .cart_item',
            easing: 'easeOutQuart',
            translateY: -175 * clickCount + 175
          });
          clickCount += -1;
          disableArrow(cartLength);
        }
      });
    }
  } // END PSEUDO CAROUSEL FOR SHOP TABLE CART PAGE


  function kissToCheckout() {
    console.log('kiss to checkout');
    var tl = anime.timeline();
    tl.add({
      targets: '.cart-container .woocommerce',
      opacity: 0,
      duration: 500
    }).add({
      targets: '.faces-container svg .step',
      opacity: 1,
      loop: false,
      delay: function delay(el, i, l) {
        return i * 500;
      }
    }, '-=500');
    setTimeout(function () {
      window.location.href = 'https://encre-atelier.com/checkout';
    }, 3500);
  }

  if (document.querySelector('.woocommerce-checkout')) {
    document.getElementById('goToCheckout').addEventListener('click', function () {
      kissToCheckout();
    });
  }

  function customShippingCart() {
    if (jQuery('.woocommerce-shipping-totals #shipping_method li input[checked=checked] + label .woocommerce-Price-amount').html() == undefined) {
      jQuery('.woocommerce-shipping-totals').hide();
    }
  }

  var cartPage = document.querySelector('.woocommerce-cart');

  if (cartPage) {
    var emptyCart = function emptyCart() {
      var cart = document.querySelector('.woocommerce .shop-scroll');

      if (cart == null) {
        document.querySelector('h1.text-center').classList.add('d-none'); // document.querySelector('.kiss-row').classList.add('d-none')

        document.querySelector('.cart-container').innerHTML = '<img class="empty-cart-illu" src="https://encre-atelier.com/wp-content/uploads/2021/04/illu_Panier_vide.svg"><a href="/clothing" class="btn btn-primary">Continuer vos achats</a>';
      }
    };

    cartScroll();
    customShippingCart();

    if (document.querySelector('.woocommerce p.cart-empty')) {
      emptyCart();
    } else {
      var goToCheckout = document.getElementById('goToCheckout');
      goToCheckout.addEventListener('click', function () {
        kissToCheckout();
      });
      var goToCheckoutEn = document.getElementById('goToCheckoutEn');
      goToCheckoutEn.addEventListener('click', function () {
        kissToCheckout();
      });
    }

    if (document.querySelector('.woocommerce .shop-scroll').children.length === 1) {
      document.querySelector('.woocommerce-cart-form .shop_table a.remove').setAttribute('href', '/cart/?empty-cart');
      document.querySelector('.woocommerce-cart-form .shop_table a.remove').addEventListener('click', function () {
        window.location.href = '/cart/?empty-cart';
      });
    }
  } // PLACEHOLDER FORM


  function getPlaceholder() {
    var checkoutForm = document.querySelector('.woocommerce .woocommerce-checkout');
    document.getElementById('billing_first_name').setAttribute('placeholder', 'Prénom');
    document.getElementById('billing_last_name').setAttribute('placeholder', 'Nom');
    document.getElementById('billing_company').setAttribute('placeholder', 'Entreprise');
    document.getElementById('billing_postcode').setAttribute('placeholder', 'Code Postal');
    document.getElementById('billing_city').setAttribute('placeholder', 'Ville');
    document.getElementById('billing_state').setAttribute('placeholder', 'Région');
    document.getElementById('billing_phone').setAttribute('placeholder', 'Téléphone');
    document.getElementById('billing_email').setAttribute('placeholder', 'Email');
    document.getElementById('shipping_first_name').setAttribute('placeholder', 'Prénom');
    document.getElementById('shipping_last_name').setAttribute('placeholder', 'Nom');
    document.getElementById('shipping_company').setAttribute('placeholder', 'Entreprise');
    document.getElementById('shipping_postcode').setAttribute('placeholder', 'Code Postal');
    document.getElementById('shipping_city').setAttribute('placeholder', 'Ville');
  }

  function getPlaceholderEnglish() {
    var checkoutForm = document.querySelector('.woocommerce .woocommerce-checkout');
    document.getElementById('billing_first_name').setAttribute('placeholder', 'First Name');
    document.getElementById('billing_last_name').setAttribute('placeholder', 'Last Name');
    document.getElementById('billing_company').setAttribute('placeholder', 'Company');
    document.getElementById('billing_postcode').setAttribute('placeholder', 'Zip Code');
    document.getElementById('billing_city').setAttribute('placeholder', 'City');
    document.getElementById('billing_state').setAttribute('placeholder', 'Area');
    document.getElementById('billing_phone').setAttribute('placeholder', 'Phone');
    document.getElementById('billing_email').setAttribute('placeholder', 'Email');
    document.getElementById('shipping_first_name').setAttribute('placeholder', 'First Name');
    document.getElementById('shipping_last_name').setAttribute('placeholder', 'Last Name');
    document.getElementById('shipping_company').setAttribute('placeholder', 'Company');
    document.getElementById('shipping_postcode').setAttribute('placeholder', 'Zip Code');
    document.getElementById('shipping_city').setAttribute('placeholder', 'City');
    document.querySelector('#stripe-payment-data > p').textContent = 'Pay bay card';
  }

  function preorderDelay() {
    var tags = document.querySelectorAll('.shop_table .tags a');
    var labels = document.querySelectorAll('#shipping_method li label');
    console.log(tags);
    var _iteratorNormalCompletion5 = true;
    var _didIteratorError5 = false;
    var _iteratorError5 = undefined;

    try {
      for (var _iterator5 = tags[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
        tag = _step5.value;
        console.log(tag.innerText);

        if (tag.innerText == 'precommande') {
          console.log('is precommande');
          document.querySelector('body').classList.add('has-precommande'); // for (label of labels) {
          //   let title = label.innerText
          //   let newTitle = title.replace('(1 à 3 jours ouvrés)', '(7 à 12 jours ouvrés)')
          //   console.log(newTitle)
          //   label.innerText = newTitle
          // }
        } else {
          console.log('no precommande');
        }
      }
    } catch (err) {
      _didIteratorError5 = true;
      _iteratorError5 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion5 && _iterator5["return"] != null) {
          _iterator5["return"]();
        }
      } finally {
        if (_didIteratorError5) {
          throw _iteratorError5;
        }
      }
    }

    document.querySelector('form.checkout').addEventListener('change', function () {
      console.log('refresh');
    });
  }

  var checkoutPage = document.querySelector('.woocommerce-checkout');
  var pageLang = document.querySelector('html').lang;

  if (pageLang == 'en-US') {
    document.querySelector('.aws-search-field').setAttribute('placeholder', 'SEARCH.');
  }

  if (checkoutPage && pageLang == 'fr-FR') {
    getPlaceholder();
  } else if (checkoutPage && pageLang == 'en-US') {
    getPlaceholderEnglish();
  } // SHIPPING METHOD CUSTOM 


  function shippingCustom() {
    var freeShippingBtn = document.getElementById('free-shipping-element');
    var mondialRelayBtn = document.getElementById('mondial-relay-btn');

    mondialRelayBtn.onclick = function () {
      document.getElementById('modaal_link').click();
    };
  }

  if (checkoutPage) {
    preorderDelay();
    cartScroll();

    var _goToCheckout = document.getElementById('goToCheckout');

    _goToCheckout.addEventListener('click', function () {
      kissToCheckout();
    });

    var _goToCheckoutEn = document.getElementById('goToCheckoutEn');

    _goToCheckoutEn.addEventListener('click', function () {
      kissToCheckout();
    });

    customShippingCart();
    shippingCustom();
  } // WISHLIST


  function wishlistHeader() {
    var headerHeart = document.querySelector('header#masthead .btn-wishlist .wishlist-svg');
    var wishlistTable = document.querySelector('header#masthead #yith-wcwl-form .wishlist_table');

    if (window.innerWidth > 425) {
      var nbr = wishlistTable.querySelectorAll('tbody tr').length;

      if (nbr >= 1 && !document.querySelector('#yith-wcwl-form .wishlist_table .wishlist-items-wrapper tr td.wishlist-empty')) {
        headerHeart.classList.add('oui');
      }
    } else {
      var _nbr = wishlistTable.querySelectorAll('li').length;

      if (_nbr >= 1 && !document.querySelector('header#masthead #yith-wcwl-form .wishlist_table li p.wishlist-empty')) {
        headerHeart.classList.add('oui');
      }
    }
  }

  wishlistHeader();

  function wishlistPage() {
    var table = document.querySelector('.wishlist-container #yith-wcwl-form .wishlist_table');
    var productsDesktop = table.querySelectorAll('.wishlist-items-wrapper tr');
    var productsMobile = document.querySelectorAll('.wishlist-container #yith-wcwl-form .wishlist_table li');
    var cible = document.getElementById('favoris');

    if (window.innerWidth > 425) {
      var _iteratorNormalCompletion6 = true;
      var _didIteratorError6 = false;
      var _iteratorError6 = undefined;

      try {
        for (var _iterator6 = productsDesktop[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
          product = _step6.value;

          if (product.querySelector('td.wishlist-empty')) {
            cible.innerHTML = '<div class="empty-wishlist text-center"><h2>Votre liste de favoris est vide</h2><a href="/clothing" class="btn">GO TO SHOP</a></div>';
          } else {
            var productImg = product.querySelector('.product-thumbnail a img').getAttribute('data-src');
            var productLink = product.querySelector('.product-thumbnail a').getAttribute('href');
            var removeLink = product.querySelector('.product-remove a').getAttribute('href');
            var dataRowId = product.getAttribute('data-row-id');

            var _item = document.createElement('div');

            _item.className = 'item favori';
            var itemImg = document.createElement('img');
            itemImg.setAttribute('src', productImg);

            var _cta = document.createElement('a');

            _cta.setAttribute('href', productLink);

            _cta.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"60\" height=\"60\" viewBox=\"0 0 78 65\">\n                                <path class=\"heart-wishlist\" data-name=\"Trac\xE9 44\" d=\"M0,23.91C-.26,12.77,5.31,4.49,13.26,1.38A20.34,20.34,0,0,1,35.73,6.71c2.22,2.34,3,2,5-.11,6-6.32,13.58-8.09,22-5.28a20.9,20.9,0,0,1,13.74,19,32.9,32.9,0,0,1-5.93,18.64c-7.6,11.4-18.33,19.58-30.37,26.39a3.67,3.67,0,0,1-4.07,0C24.35,58.66,13.87,50.68,6.3,39.67,2.44,34.06.06,28,0,23.91\" fill=\"#d10000\"/>\n                              </svg><span>BUY</span>";
            var remove = document.createElement('a');
            remove.setAttribute('href', removeLink);
            remove.setAttribute('data-row-id', dataRowId);
            remove.classList.add('remove-cross');
            remove.innerHTML = '<i class="fas fa-times"></i>';

            _item.append(remove);

            _item.append(itemImg);

            _item.append(_cta);

            cible.append(_item);
          }
        }
      } catch (err) {
        _didIteratorError6 = true;
        _iteratorError6 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion6 && _iterator6["return"] != null) {
            _iterator6["return"]();
          }
        } finally {
          if (_didIteratorError6) {
            throw _iteratorError6;
          }
        }
      }
    } else {
      var _iteratorNormalCompletion7 = true;
      var _didIteratorError7 = false;
      var _iteratorError7 = undefined;

      try {
        for (var _iterator7 = productsMobile[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
          product = _step7.value;

          if (document.querySelector('.wishlist-container #yith-wcwl-form .wishlist_table p.wishlist-empty')) {
            cible.innerHTML = '<div class="empty-wishlist text-center"><h2>Votre liste de favoris est vide</h2><a href="/clothing" class="btn">GO TO SHOP</a></div>';
          } else {
            var _productImg = product.querySelector('.product-thumbnail a img').getAttribute('data-src');

            var _productLink = product.querySelector('.product-thumbnail a').getAttribute('href');

            var _removeLink = product.querySelector('.product-remove a').getAttribute('href');

            var _dataRowId = product.getAttribute('data-row-id');

            var _item2 = document.createElement('div');

            _item2.className = 'item favori';

            var _itemImg = document.createElement('img');

            _itemImg.setAttribute('src', _productImg);

            var _cta2 = document.createElement('a');

            _cta2.setAttribute('href', _productLink);

            _cta2.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"60\" height=\"60\" viewBox=\"0 0 78 65\">\n                                <path class=\"heart-wishlist\" data-name=\"Trac\xE9 44\" d=\"M0,23.91C-.26,12.77,5.31,4.49,13.26,1.38A20.34,20.34,0,0,1,35.73,6.71c2.22,2.34,3,2,5-.11,6-6.32,13.58-8.09,22-5.28a20.9,20.9,0,0,1,13.74,19,32.9,32.9,0,0,1-5.93,18.64c-7.6,11.4-18.33,19.58-30.37,26.39a3.67,3.67,0,0,1-4.07,0C24.35,58.66,13.87,50.68,6.3,39.67,2.44,34.06.06,28,0,23.91\" fill=\"#d10000\"/>\n                              </svg><span>BUY</span>";

            var _remove = document.createElement('a');

            _remove.setAttribute('href', _removeLink);

            _remove.setAttribute('data-row-id', _dataRowId);

            _remove.classList.add('remove-cross');

            _remove.innerHTML = '<i class="fas fa-times"></i>';

            _item2.append(_remove);

            _item2.append(_itemImg);

            _item2.append(_cta2);

            cible.append(_item2);
          }
        }
      } catch (err) {
        _didIteratorError7 = true;
        _iteratorError7 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion7 && _iterator7["return"] != null) {
            _iterator7["return"]();
          }
        } finally {
          if (_didIteratorError7) {
            throw _iteratorError7;
          }
        }
      }
    }
  }

  function offset(element) {
    var rect = element.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {
      top: rect.top + scrollTop,
      left: rect.left + scrollLeft
    };
  }

  function addToWishlistHeart() {
    document.getElementById('heartWishlist').addEventListener('click', function () {
      console.log('Wishlist click !');
      var heartHeader = document.querySelector('header#masthead .buttons .wishlist-svg');
      var heartPage = document.querySelector('#heartWishlist .wishlist-svg');
      var heartHeaderOffset = offset(heartHeader);
      var heartPageOffset = offset(heartPage);
      var toY = heartPageOffset.left - heartHeaderOffset.left;
      var toX = heartPageOffset.top - heartHeaderOffset.top;
      var timeline = anime.timeline(); // if (window.innerWidth <= 425) {
      //     timeline
      //     .add({
      //         targets: cta,
      //         borderRadius: '100px',
      //         easing: 'easeOutQuart',
      //         duration: 250
      //     })
      //     .add({
      //         targets: cta,
      //         borderRadius: '100px',
      //         width: '40px',
      //         height: '40px',
      //         easing: 'easeOutQuart',
      //         borderWidth: '2px',
      //         duration: 250
      //     }, '-=250')
      //     .add({
      //         targets: cta,
      //         easing: 'easeOutQuart',
      //         opacity: [1, 0],
      //         duration: 250
      //     }, '+=250')
      //     .add({
      //         targets: faceCta,
      //         easing: 'easeOutQuart',
      //         opacity: [0, 1],
      //         duration: 250
      //     }, '-=500')
      //     .add({
      //         targets: faceCta,
      //         easing: 'easeOutQuart',
      //         translateX: { 
      //             value: -toY, 
      //             easing: 'easeOutQuart', 
      //             duration: 1500
      //         },
      //         translateY: { 
      //             value: -toX,
      //             easing: 'easeOutBack', 
      //             duration: 1500
      //         },
      //         scale: .5
      //     })
      //     .add({
      //         targets: '#faceSmile g',
      //         easing: 'easeOutQuart',
      //         translateX: '-50%',
      //         translateY: '-50%',
      //         duration: 250
      //     }, '-=500')
      //     .add({
      //         targets: faceCta,
      //         easing: 'easeOutQuart',
      //         opacity: [1, 0],
      //         duration: 500
      //     }, '+=250')
      //     .add({
      //         targets: faceCta,
      //         translateX: { 
      //             value: 0, 
      //             easing: 'linear', 
      //             duration: 500
      //         },
      //         translateY: { 
      //             value: 0,
      //             easing: 'linear', 
      //             duration: 500
      //         },
      //         scale: 1
      //     })
      //     .add({
      //         targets: '#faceSmile g',
      //         easing: 'easeOutQuart',
      //         translateX: '0%',
      //         translateY: '0%',
      //         duration: 250
      //     }, '-=500')
      //     .add({
      //         targets: cta,
      //         borderRadius: '0',
      //         width: '50%',
      //         height: '40px',
      //         easing: 'easeOutQuart',
      //         borderWidth: '1px',
      //         duration: 250
      //     })
      //     .add({
      //         targets: cta,
      //         easing: 'easeOutQuart',
      //         opacity: [0, 1],
      //         duration: 250
      //     })
      // } else {

      timeline.add({
        targets: heartPage,
        easing: 'easeOutQuart',
        width: 30,
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
      }).add({
        targets: heartPage,
        easing: 'easeOutQuart',
        opacity: [1, 0],
        duration: 500
      }, '+=250').add({
        targets: heartPage,
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
      }).add({
        targets: heartPage,
        easing: 'easeOutQuart',
        opacity: [0, 1],
        duration: 250
      }); // }
    });
  }

  if (document.querySelector('body.single-product')) {
    addToWishlistHeart();
  }

  function removeWishlist() {
    var _this = this;

    document.querySelectorAll('.btn-remove').forEach(function (c) {
      return c.addEventListener('click', function () {
        console.log(_this);
      });
    }, false);
  }

  if (document.querySelector('.wishlist-container')) {
    console.log('wishlist page');
    wishlistPage();
    removeWishlist();
  }
}); // end ready function