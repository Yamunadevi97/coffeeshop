  //snacks
     var samosa= document.getElementById('samosa');
      var pavbaji = document.getElementById('pavbaji');
      var coffee = document.getElementById('coffee');
      var tea = document.getElementById('tea');
      var submitBtn= document.getElementById('submit');
      var outputPara = document.getElementById('totalPrice');
      //desserts and fast foods
      var soft = document.getElementById('soft');
      var browny = document.getElementById('browny');
      var burger = document.getElementById('burger');
      var pizza =  document.getElementById('pizza');
    //combo combo1 = pizza combo2 = burger combo3 = grill combo4 = tandoori
    var combo1 = document.getElementById('combo1');
    var combo2 = document.getElementById('combo2');
    var combo3 =  document.getElementById('combo3');
    var combo4 = document.getElementById('combo4');
      // generic function that takes in quantity and multiplies with appropriate price
      function calcPrice(qty, price){
        return qty * price;
      }
   
      // generic function that outputs final price and amout it tickets purchased
      function getMessage(qty, total){
        return outputPara.innerHTML = 'You ordered'+' ' + qty + ' item(s) and your total price is Rs'+" " + total + '<br><br>' + 'Thanks For Placing your orders';
      }
   
      submitBtn.addEventListener('click', function() { 
          if(samosa.value === '0' && pavbaji.value === '0'   && coffee.value ==='0' && tea.value === '0' &&
             soft.value === '0' && browny.value === '0'  && burger.value ==='0' && pizza.value === '0'&&
             combo1.value === '0' && combo2.value === '0'  && combo3.value ==='0' && combo4.value === '0')
       {
         alert('Please order at least 1 item');
       } else {
         var totalsamosa = calcPrice(samosa.value,25);
         var totalpavbaji = calcPrice(pavbaji.value, 25);
         var totalcoffee  = calcPrice(coffee.value,25)
         var totaltea = calcPrice(tea.value,25)
         // desserts 
        var totalbrowny = calcPrice(browny.value, 75);
         var totalsoft = calcPrice(soft.value, 75);
         var totalburger  = calcPrice(burger.value,75)
         var totalpizza = calcPrice(pizza.value,75)
         //combo
         var totalcombo1 = calcPrice(combo1.value, 199);
         var totalcombo2= calcPrice(combo2.value, 199);
         var totalcombo3  = calcPrice(combo3.value,199);
         var totalcombo4 = calcPrice(combo4.value,199)
         // adding all items
         var totalstarters = totalsamosa + totalpavbaji + totalsoft + totalcoffee +totaltea;
         var totaldesserts = totalsoft + totalbrowny + totalpizza+ totalburger ;
         var totalcombo = totalcombo1 + totalcombo2 + totalcombo3+ totalcombo4;
         //total price
          var totalPrice = totalstarters + totaldesserts+totalcombo ;
          //parseInt
          var totalorder = parseInt(samosa.value) + parseInt(pavbaji.value) + parseInt(coffee.value)+ parseInt(tea.value) 
                          +parseInt(soft.value) + parseInt(browny.value) + parseInt(burger.value) + parseInt(pizza.value)
                          + parseInt(combo1.value) +  parseInt(combo2.value) + parseInt(combo3.value) + parseInt(combo4.value);
   
         getMessage(totalorder, totalPrice);
       }
   
      });
      