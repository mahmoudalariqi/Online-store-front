$(function () {


    /* ===============================================================
         LIGHTBOX
      =============================================================== */
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true
    });


    /* ===============================================================
         PRODUCT SLIDER
      =============================================================== */
    $('.product-slider').owlCarousel({
        items: 1,
        thumbs: true,
        thumbImage: false,
        thumbsPrerendered: true,
        thumbContainerClass: 'owl-thumbs',
        thumbItemClass: 'owl-thumb-item'
    });


    /* ===============================================================
         PRODUCT QUNATITY
      =============================================================== */
      $('.dec-btn').click(function () {
          var siblings = $(this).siblings('input');
          if (parseInt(siblings.val(), 10) >= 1) {
              siblings.val(parseInt(siblings.val(), 10) - 1);
          }
      });

      $('.inc-btn').click(function () {
          var siblings = $(this).siblings('input');
          siblings.val(parseInt(siblings.val(), 10) + 1);
      });


      /* ===============================================================
           BOOTSTRAP SELECT
        =============================================================== */
      $('.selectpicker').on('change', function () {
          $(this).closest('.dropdown').find('.filter-option-inner-inner').addClass('selected');
      });


      /* ===============================================================
           TOGGLE ALTERNATIVE BILLING ADDRESS
        =============================================================== */
      $('#alternateAddressCheckbox').on('change', function () {
         var checkboxId = '#' + $(this).attr('id').replace('Checkbox', '');
         $(checkboxId).toggleClass('d-none');
      });


      /* ===============================================================
           DISABLE UNWORKED ANCHORS
        =============================================================== */
      $('a[href="#"]').on('click', function (e) {
         e.preventDefault();
      });

});


/* ===============================================================
     COUNTRY SELECT BOX FILLING
  =============================================================== */
$.getJSON('js/countries.json', function (data) {
    $.each(data, function (key, value) {
        var selectOption = "<option value='" + value.name + "' data-dial-code='" + value.dial_code + "'>" + value.name + "</option>";
        $("select.country").append(selectOption);
    });
})
//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 20; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}