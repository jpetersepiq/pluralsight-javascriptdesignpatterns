//Observable
// methods-as-properties

var Book = function(name, price) {
  this.name = function(val){

  };
  this.price = function(val){

  };
  this.onPriceChanging = function(callback){

  };
  this.onPriceChanged = function(callback){

  };

};

var book = new Book('Javascript: The good parts', 23.99);

console.log('The name is: '+ book.name());
console.log('The price is: $' + book.price());
