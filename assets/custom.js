/*
* Broadcast Theme
*
* Use this file to add custom Javascript to Broadcast.  Keeping your custom
* Javascript in this fill will make it easier to update Broadcast. In order
* to use this file you will need to open layout/theme.liquid and uncomment
* the custom.js script import line near the bottom of the file.
*/


(function() {
  // Add custom code below this line
  var stopInterval = setInterval(function(){
    if($('#insta-feed').find('a').length > 0){
      clearInterval(stopInterval);
      $('#insta-feed a').wrapAll('<div class="insta_cover"></div>');
      $('.insta_cover').flickity({
        // options
        cellAlign: 'left',
        contain: true,
        wrapAround: true
      });
    }
  },10)
  $('.regime-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    infinite: false,
    dots: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
        }
      }
    ]
  });
  $('.main_slide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    infinite: true,
    dots: false,
    asNavFor: '.thumb_slide',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: true,
          infinite: false,
        }
      }
    ]
  });
  $('.thumb_slide').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: true,
    asNavFor: '.main_slide',
    dots: false,
    focusOnSelect: true,
    variableWidth: true
  });

  let videoSlide
  $('.main_slide .product__slide').each(function(){
    if($(this).attr("data-type") == "video") {
      videoSlide = parseInt($(this).index()) + 1;
    }
  })
  if(videoSlide) {
    $('.main_slide .slick-dots li:nth-child(' + videoSlide+ ')').addClass('video-pagination');
  }

  $('.drawer__menu .sliderule__wrapper:first-child .mobile__menu__dropdown').addClass('is-visible');
  $('.drawer__menu .sliderule__wrapper:first-child .sliderow__back').addClass('is-visible');
  $('.drawer__menu .sliderule__wrapper:first-child .sliderow').addClass('is-visible');
  

  $(document).on('click','.hide-notification',function(){
    $('.cart-view-notification').fadeOut();
  })

})();


//------------------Start Newsletter Validation ------------------------//
$('#subscribe').prop('disabled', true);
$('#subscribe').css("cursor", "not-allowed");
function ValidateEmail() {
  var email = document.getElementById("email_input_footer").value;
  var lblError = document.getElementById("lblError");
  lblError.innerHTML = "";
  var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  //console.log('email'+ email);
  if (email == '') {
    lblError.innerHTML = '<span class="subscription-error">This is required field.</span>';
   }
  else if (!expr.test(email)) {
   lblError.innerHTML = '<span class="subscription-error">Invalid email address.</span>';
  }
  else{
    $('#subscribe').prop('disabled', false);
    $('#subscribe').css("cursor", "pointer");
  }
  
};
//------------------End Newsletter Validation ------------------------//


//------------------Start Footer Accordion ------------------------//
$('.footer-accordion').click(function(){
if (window.matchMedia("(max-width: 768px)").matches){
    if($(this).hasClass('toggling-border')){
      $(this).toggleClass('border-removed');
    }
    $(this).find('.footer-acc-icon').toggleClass('opened');
  var activeBtn = $(this).find('.footer__quicklinks');
  activeBtn.toggleClass('closed').slideToggle('fast'); 
}});

//------------------Cart view notification ------------------------//
$('.notification-wrapper::after').click(function(){
  $('.cart-view-notification').addClass('hide');
});

$('#loginBtnLink').click(function(){
  $('.drawer-header .header__mobile__hamburger').trigger("click");
  $('#loginPopup').addClass("signUpPopup");
  $('#requestOTPPopup').addClass('d-block');
  $('#requestOTPPopup').removeClass('d-none');
  $('#enterOTPPopup').addClass('d-none');
});

$('.account-menu').removeClass('open-menu');
$('.drawer__inner').show();
$('.login-register-section').show();
$('.social-links').show();

$('.drawer-header .header__mobile__hamburger').click(function(){
  $('.account-menu').removeClass('open-menu');
  $('.drawer__inner').show();
  $('.login-register-section').show();
  $('.social-links').show();
});
$('.openAccountMenu').click(function(){
  $('.account-menu').addClass('open-menu');
  $('.drawer__inner').hide();
  $('.login-register-section').hide();
  $('.social-links').hide();
});

$('.back-account').click(function(){
  $('.account-menu').removeClass('open-menu');
  $('.drawer__inner').show();
  $('.login-register-section').show();
  $('.social-links').show();
});

$('#closePopupBtn').click(function(){
  $('#loginPopup').removeClass("signUpPopup");
});


$('#requestOTPBTN').click(function(){
  $('#requestOTPPopup').addClass('d-none');
  $('#requestOTPPopup').removeClass('d-block');
  $('#enterOTPPopup').removeClass('d-none');
  $('#enterOTPPopup').addClass('d-block');

  var mobile_no = document.getElementById("mobileNoField").value;
  var mobileNo= mobile_no.match(/.{1,5}/g);
  var mob = mobileNo.join(' ');
//console.log(joy.join(' '));
  //console.log(mobileNo);
  $(".phoneNumber").text('+91 '+ mob);
  //---------otp sent-----------//
    var formData = {
    mobile : $('#mobileNoField').val(),
    message :'Your OTP code is %code%'
    };
    $.ajax({
    type: 'POST',
    url: 'https://0fb9-122-161-50-117.in.ngrok.io/gupsup/sendotp.php',
    data: formData,
    success: function (data) { 
       console.log(data);
       console.log('1111');
     } 
    });
  //---------------------------//

});

$('#popupCloseBtn').click(function(){
  $('#loginPopup').removeClass("signUpPopup");
  $('#enterOTPPopup').addClass('d-none');
  $('#enterOTPPopup').removeClass('d-block');
  $('.inputs').val('');
 
});

$(".inputs").keyup(function () {
  if (this.value.length == this.maxLength) {
    $(this).next('.inputs').focus();
  }
});


 $('#mobileNoField').keyup(function (e) {
var mobileNo = document.getElementById("mobileNoField").value;
if(mobileNo.length == 10){
  $('#requestOTPBTN').removeClass('disbaled-btn');
  $('#requestOTPBTN').addClass('enabled-btn');
  $('#requestOTPBTN').prop("disabled", false);

}else{
  $('#requestOTPBTN').addClass('disbaled-btn');
  $('#requestOTPBTN').removeClass('enabled-btn');
  $('#requestOTPBTN').prop("disabled", true);
}
 });

function AllowOnlyNumbers(e) {
e = (e) ? e : window.event;
var clipboardData = e.clipboardData ? e.clipboardData : window.clipboardData;
var key = e.keyCode ? e.keyCode : e.which ? e.which : e.charCode;
var str = (e.type && e.type == "paste") ? clipboardData.getData('Text') : String.fromCharCode(key);

return (/^\d+$/.test(str));
}
//------------------Start FAQ section inner Accordion ------------------------//


$('.sub-accordion-title').click(function(){
 if($(this).find('.accordion__title').hasClass('opened')){
  $(this).find('.accordion__title').removeClass('opened');
  $(this).find('.sub-accordion-body').slideUp();
 }
  else{
  $('.sub-accordion-title').find('.sub-accordion-body').slideUp();
  $('.sub-accordion-title').find('.accordion__title').removeClass('opened');
  $(this).find('.accordion__title').addClass('opened');
  $(this).find('.sub-accordion-body').slideDown();
}});

// $('.accordion').click(function(){
//   if($(this).find('.section-faq__title').hasClass('is-open')){
//    $(this).find('.section-faq__title').removeClass('is-open');
//    $(this).find('.section__body').slideUp();
//   }
//    else{
//    $('.accordion').find('.section__body').slideUp();
//    $('.accordion').find('.section-faq__title').removeClass('is-open');
//    $(this).find('.section-faq__title').addClass('is-open');
//    $(this).find('.section__body').slideDown();
//  }
// });
$('.accordion').click(function(){
if($('.section-faq').find('.pdp-accordion-title').hasClass('is-open')){

}
else{
  $('')
}

});


$('#otp4').keyup(function (e) {
  var otp = document.getElementById("otp1").value+document.getElementById("otp2").value+document.getElementById("otp3").value+document.getElementById("otp4").value;
  if(otp.length == 4){
    $('#verifyotpbtn').removeClass('disbaled-btn');
    $('#verifyotpbtn').addClass('enabled-btn');
    $('#verifyotpbtn').prop("disabled", false);
  }else{
    $('#verifyotpbtn').addClass('disbaled-btn');
    $('#verifyotpbtn').removeClass('enabled-btn');
    $('#verifyotpbtn').prop("disabled", true);
  }
});

//--------------------------------verify otp-----------------------------------//

$('#verifyotpbtn').click(function(){
  $('#verifyotpbtn').addClass('disbaled-btn');
  $('#verifyotpbtn').removeClass('enabled-btn');
  $('#verifyotpbtn').prop("disabled", true);
  
  var mobile_no = $('#mobileNoField').val();
  var formData = {
   mobile : mobile_no,
   otp : $('#otp1').val() + $('#otp2').val() + $('#otp3').val() + $('#otp4').val()
   };
   $.ajax({
   type: 'POST',
   url: 'https://0fb9-122-161-50-117.in.ngrok.io/gupsup/verifyotp.php',
   data: formData,
   success: function (data) { 
       checkcustomer(mobile_no);
    } 
   });
 
});


function checkcustomer(mobile_no)
{
  var formData1 = {
        mobile : mobile_no
    };
  $.ajax({
    type: 'POST',
    url: 'https://0fb9-122-161-50-117.in.ngrok.io/gupsup/customer.php',
    data: formData1,
    success: function (data) { 
      console.log(data);
       var email = data;
      window.location.href = "https://0fb9-122-161-50-117.in.ngrok.io/gupsup/login.php?email="+email;
     }
    });
}

//--------------------------------------------------------------------------------//



// Delete address modal
$('.address-delete').click(function(){
$('.delete-address-wrapper').toggleClass('hide');
});
$('.close-popup').click(function(){
$(this).parents('.delete-address-wrapper').addClass('hide');
});
$('.cancel-btn').click(function(){
  $(this).parents('.delete-address-wrapper').addClass('hide');
  });