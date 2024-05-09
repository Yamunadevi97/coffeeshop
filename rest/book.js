function validateform(){
    var name = document.form.name.value;
    var gender = document.form.gender.value;
    var phnumber = document.form.phnumber.value;
    var Email = document.form.email.value;
    var aadhar = document.form.aadhar.value;
    var  room = document.form. room.value;
    var food = document.form.food.value;
    var people = document.form.name.value;

            }
    
   var acdoubleQty = document.getElementById('acdouble');
  var acsingleQty = document.getElementById('acsingle');
  var nonacdoubleQty = document.getElementById('nonacdouble');
  var nonacsingleQty=document.getElementById('nonacsingle')
  var submitBtn = document.getElementById('submitButton');
  var outputPara = document.getElementById('totalPrice');
  
  // generic function that takes in quantity and multiplies with appropriate price
  function calcPrice(qty, price){
    return qty * price;
  }

  // generic function that outputs final price and amout it tickets purchased
  function getMessage(qty, total){
    return outputPara.innerHTML = 'You booked'+' ' + qty + ' room(s) and your total price is Rs'+" " + total + '<br><br>' + '<button>Proceed To Checkout</button>';
  }

  submitBtn.addEventListener('click', function() { 

   if(acdoubleQty.value === '0' && acsingleQty.value === '0'  && nonacdoubleQty.value === '0' && nonacsingleQty.value === '0'){
     alert('Please book at least 1 room');
   } else {
     var totalacdouble = calcPrice(acdoubleQty.value, 4000);
     var totalacsingle = calcPrice(acsingleQty.value, 2000);
     var totalnonacdouble = calcPrice(nonacdoubleQty.value, 1500);
      var totalnonacsingle = calcPrice(nonacsingleQty.value,1000)

     var totalPrice = totalacdouble + totalacsingle + totalnonacdouble+totalnonacsingle;
     var totalroom = parseInt(acdoubleQty.value) + parseInt(acsingleQty.value) + parseInt(nonacdoubleQty.value)+parseInt(nonacsingleQty.value);

     getMessage(totalroom, totalPrice);
   }

  });