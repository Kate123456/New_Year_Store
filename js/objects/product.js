function Product(name, price,src,id,catId) {
	this.name = name;
	this.price = price;
		this.src = src;
	this.id=id;
	this.catId=catId;
}

Product.compare=function(ProductA,ProductB) {
	
	return ProductA.name==ProductB.name;
}