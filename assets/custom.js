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
    var formData = {
    mobile : '9999999999',
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
