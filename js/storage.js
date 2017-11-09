function Category(id,name) {
	this.name = name;
	this.id=id;
}
var category=[];

category.push(new Category("1", "food"));
category.push(new Category("2", "shoes"));
category.push(new Category("3", "perfumes"));
category.push(new Category("4", "books"));
category.push(new Category("5", "clothes"));


var product=[];

product.push(new Product("apples ",25,"img/apples.jpg",12,1));
product.push(new Product("soya milk",95,"img/2.jpg",13,1));
product.push(new Product("eggs",27,"img/eggs.jpg",14,1));
product.push(new Product("oranges",45,"img/orange.jpg",15,1));
product.push(new Product("pineapples",100,"img/pineapple.jpg",16,1));
product.push(new Product("potatoes",5.80,"img/potato-1.jpg",17,1));
product.push(new Product("grapes",53,"img/vinograd-kyltyrnii.jpg",18,1));
product.push(new Product("carrots",12,"img/carrot.jpg",19,1));
product.push(new Product("mashrooms",25,"img/mashrooms.jpg",20,1));
product.push(new Product("water Evian",95,"img/evian.jpg",21,1));


product.push(new Product("Valenki",250,"img/валенки.png",11,2));
product.push(new Product("trainers",7250,"img/reebok.jpg",12,2));
product.push(new Product("loafers",4800,"img/loafers.jpg",8,2));
product.push(new Product("oxford shoes",5489,"img/oxf.jpg",18,2));
product.push(new Product("Pumps",1847,"img/pum.jpg",24,2 ));



product.push(new Product("Olympea",486,"img/parf1.jpg",120,3));
product.push(new Product("Deep Roses",825,"img/parf2.jpg",56,3));
product.push(new Product("La Nuit Tresor",1200,"img/parf3.jpg",35,3));
product.push(new Product("Chanel No. 5 ",5205,"img/parf4.jpg",8,3));
product.push(new Product("Bottega Veneta Knot",2584,"img/parf5.jpg",40,3));
product.push(new Product("Gucci Premiere",3200,"img/parf6.jpg",37,3));



product.push(new Product("A Game of Thrones",587,"img/a1.jpg",478,4));
product.push(new Product("Harry Potter and the Philosopher's Stone",210,"img/a2.jpeg",250,4));
product.push(new Product("The Girl With the Dragon Tattoo",589,"img/a3.jpg",437,4));
product.push(new Product("Sherlock Holmes",415,"img/a4.jpg",123,4));
product.push(new Product("Memoirs of a Geisha",214,"img/a5.jpg",58,4));
product.push(new Product("The Great Gatsby",150,"img/a6.jpeg",200,4));
product.push(new Product("Anna Karenina",194,"img/a7.jpg",85,4));
product.push(new Product("Angels and Demons",279,"img/a8.jpg",25,4));
product.push(new Product("The Lost Symbol",315,"img/a9.jpg",50,4));
product.push(new Product("Inferno",249,"img/a10.jpg",94,4));


product.push(new Product("Jeans",3000,"img/j1.jpg",18,5));
product.push(new Product("Coat",4500,"img/j2.jpg",34,5));
product.push(new Product("T-Shirt",350,"img/j3.jpg",245,5));
product.push(new Product("Blouse",643,"img/j4.jpg",28,5));
product.push(new Product("Sweater",857,"img/j5.jpg",38,5));
product.push(new Product("Trousers",816,"img/j6.jpg",47,5));
product.push(new Product("dress",1500,"img/j7.jpg",29,5));
product.push(new Product("overalls",2300,"img/j8.jpg",33,5));



// console.log(category);
// console.log(product);


console.log(JSON.stringify(product));
localStorage.setItem("product", JSON.stringify(product));
localStorage.setItem("category", JSON.stringify(category));
