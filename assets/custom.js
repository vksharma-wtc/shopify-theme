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
  //---------otp sent-----------//
   /* var formData = {
    mobile : '9999999999',
    shop : 'my-learning-site.myshopify.com'
    };
    $.post({
    type: 'POST',
    url: 'https://ebb0-122-161-48-98.in.ngrok.io/shopify-php-app-master/src/public/index.php/sendotp',
    data: formData,
    success: function (data) { 
       console.log(data);
       console.log('1111');
     } 
    });*/

    $.post("https://ebb0-122-161-48-98.in.ngrok.io/shopify-php-app-master/src/public/index.php/auth/shopify/sendotp",
  {
     mobile : '9999999999'
  },
  function(data, status){
    //alert("Data: " + data + "\nStatus: " + status);
    console.log(data);
  });

  
  //---------------------------//

})();


$('#requestOTPBTN').click(function(){
  
  var mobile_no = document.getElementById("mobileNoField").value;
  var mobileNo= mobile_no.match(/.{1,5}/g);
  var mob = mobileNo.join(' ');

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
