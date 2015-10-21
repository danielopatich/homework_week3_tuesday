var sum = function(total, item){
  return total + item.price;
  // *or current*
  //     ^ 0      ^ 2 = 2
  //     ^ 2     ^ 3 = 5
  //     ^ 5     ^ 10 = 15
};

// var items = [
//   {price: 2}, // <-- total: 0 + 2
//   {price: 3}, // <--- total: 2 + 3
//   {price: 10} // <-- total: 5 + 10
// ]

// reducing to one value, plugging in regular math to define average
var average = items.reduce(sum, 0) / items.length;
  console.log(average);




// defining priceRange by going through all items
// then filtering passed test items, then mapping them
// to a new array of provided function
var priceRange = items.filter(function(item) {
  return(item.price > 14.00 && item.price < 18.00)
}).map(function(item){
  return item.title;
});
  console.log(priceRange);


// third...

var currency = items.filter(function(item) {
  return(item.currency_code === 'GBP')
})
  currency.forEach(function(item) {
  console.log(item.title + ' costs ' + '£' + item.price)
})


// fourth...

var wooden = items.filter(function(item) {
  return(item.materials.indexOf('wood') != -1)
})
  wooden.forEach(function(item) {
  console.log(item.title + ' is made of wood.')
})



//fifth
var fineItems = items.filter(function(item) {
  return (item.materials.length >= 8)
});
  fineItems.forEach(function(thing) {
  console.log(thing.title);
});



//sixth
var sellerItems = items.filter(function(item) {
  return (item.quantity.length)
})

  console.log(sellerItems  + ' were made by their sellers')
