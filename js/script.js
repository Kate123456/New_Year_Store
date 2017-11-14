'use strict';
let p = JSON.parse(localStorage.product);
let c = JSON.parse(localStorage.category);


//TODO: Create cart exemplar
document.addEventListener("DOMContentLoaded", function() {

    // получение блока для категорий
    let aside = document.getElementById('categories');

    //формирование списка категорий
    let list = document.createElement("ul");

    //like this make cart
    for (var i = 0; i < c.length; i++) {
        //создание li
        let li = document.createElement("li");
        // создание ссылки
        let a = document.createElement("a");
        a.href = "#";
        // добавление id категории к ссылке
        a.cat_id = c[i].id;
        // привязка события нажатия на ссылку
        a.addEventListener("click", function(e) {
            //вызов функции формирования списка товаров
            fillProductSection(this.cat_id);
            e.stopPropagation();
        });
        a.innerHTML = c[i].name;

        li.appendChild(a);
        list.appendChild(li);

    }

    // добавление списка в блок
    aside.appendChild(list);

});





document.addEventListener("DOMContentLoaded", function() {

    // получение блока для категорий
    let aside = document.getElementById('products');

    //формирование списка категорий
    let list = document.createElement("ul");

    //like this make cart
    for (var i = 0; i < c.length; i++) {
        //создание li
        let li = document.createElement("li");
        // создание ссылки
        let a = document.createElement("a");
        a.href = "#";
        // добавление id категории к ссылке
        a.prod_id = p[i].id;
        // привязка события нажатия на ссылку
        a.addEventListener("click", function(e) {
            //вызов функции формирования списка товаров
            fillProductSection(this.prod_id);
            e.stopPropagation();
        });
        a.innerHTML = c[i].name;

        li.appendChild(a);
        list.appendChild(li);

    }

    // добавление списка в блок
    aside.appendChild(list);

});

/**
    catId - id категории отображаемых товаров
            при значении -1 отображаем все товары
            */

function fillProductSection(catId = -1) {
    let Products = $("<div/>", {
        "id": 'Products',



    })
    for (var i = 0; i < p.length; i++) {

        if (p[i].catId == catId || catId == -1) {
            console.dir(p[i]);
            console.dir(p[i].src);


            //and like this make cart
            let cProduct = $("<div/>", {
                    "class": 'product',
                    "id": p[i].id
                })
                .appendTo(Products);


            $("<div/>", {
                    "class": 'name_product',
                    text: p[i].name,
                    /*======*/
                })
                .appendTo(cProduct);

            $("<img/>", {
                    "src": p[i].src,
                    /**/
                    "alt": "error"
                })
                .appendTo(cProduct);

            $("<div/>", {
                    "class": "price",
                    text: p[i].price /**/
                })
                .appendTo(cProduct);

        

    if ($("#Products").length)
        $(Products).replaceAll("#Products"); //replaceAll-заменить все вхождения в строке на что-либо
    else
        $(Products).appendTo("#main");
                var adder = function(product) {
                    // TODO make HTML for catr product

                }
}

}
console.log('==============');
console.log($("#Products"));
console.log($("#Products").length);

if ($("#Products").length)
    $(Products).replaceAll("#Products");
else
    $(Products).appendTo("#main");


}

var adder = function(product) {
    // TODO make HTML for catr product

}

fillProductSection();





$('<div>', {
    'id': 'Products',
    'class': 'product',
    'class': 'name_product',
}).appendTo('#main');


$('<div>', { text: p[i].name }).appendTo('.header');

$('<img>', {
    'src': p[i].src,
    'alt': 'asdf'
}).appendTo('.header');
$('<button>', {
    text: "buy"
}).appendTo('.header');




// ===================================================================================
