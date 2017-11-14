function Cart() {

  //private
  var products = [];

  //public
  this.delProduct=function(product){
    for(var i = 0 ; i < products.length ; i++){
      if(Product.compare(products[i].product,product)){
          products.splice(i, 1);
          return 0;
        }
  }
}

  this.addProduct = function(product, quantity){
   quantity = quantity || 1;

  for(var i = 0 ; i < products.length ; i++){
      if(Product.compare(products[i].product,product)){
       products[i].quantity+=quantity;
       return 0;
     }
    }
   products.push({"product":product, "quantity":quantity});
  }

  this.getProducts = function(){
   return products;
  }

//TODO  Show all products in card (Write html)

  Object.defineProperty(this, "sum", {
    get: function() {
     var temp=[];
     var total=0;
     for(var i=0;i<products.length;i++){

      temp.push({"product":products[i].product,"sum":products[i].product.price*products[i].quantity});
      total+=temp[i].sum;
    }

     return {"total":total, "products":temp};
    }
  });
}

