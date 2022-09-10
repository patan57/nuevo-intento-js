const promo = document.querySelector('#promo')
promo.addEventListener('click', () => {
    Swal.fire({
        title: '¡Cupón de descuento!',
        text: 'Con la palabra clave templanza tendras un 15% sobre el total de la cuenta.',
        imageUrl: './img/lucky.jpg',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
    })
})

const menues = [
    {
        id: 1,
        titulo: "panqueques con miel y frambuesas",
        categoria: "postres",
        precio: "1250.00",
        img: "./img/pancakes-2291908_1920.jpg",
        desc: 'plato que consiste de 4 panqueques bañados con miel y algunas frambuesas',
    },
    {
        id: 2,
        titulo: "yogurt con cereales y frambuesas",
        categoria: "postres",
        precio: "1350.00",
        img: "./img/strawberry-dessert-2191973_1920.jpg",
        desc: 'yogurt de frutilla en copa bañado de frutos secos, cereales y frambuesas',
    },
    {
        id: 3,
        titulo: "bizcochuelo con dulce de leche y frambuesas",
        categoria: "postres",
        precio: "1110.00",
        img: "./img/dessert-1786311_1920.jpg",
        desc: '4 porciones de bizcochuelo relleno con chocolate, bañado en dulce de leche y frambuesas',
    },
    {
        id: 4,
        titulo: "6 bochas de helado con frutillas y frambuesas",
        categoria: "postres",
        precio: "1600.00",
        img: "./img/ice-cream-3611698_1920.jpg",
        desc: 'seis bochas de helado a elección, cucuruchos y salsa de chocolate con frutillas y frambuesas',
    },
    {
        id: 5,
        titulo: "hamburguesa con papas fritas y ensalada",
        categoria: "plato principal",
        precio: "1900.00",
        img: "./img/",
        desc: '300 grs de carne vacuna picada con queso, panceta, porción de papas fritas y ensalada de hojas verdes con tomate',
    },
    {
        id: 6,
        titulo: "pizza de la casa",
        categoria: "plato principal",
        precio: "1600.00",
        img: "./img/cheese-1869708_1920.jpg",
        desc: 'pizza grande de ocho porciones de muzzarella, aceitunas negras, salsa de tomate y cebolla de verdeo picada',
    },
    {
        id: 7,
        titulo: "espaguetis con langostinos y salsa secreta",
        categoria: "plato principal",
        precio: "1800.00",
        img: "./img/ice-cream-3611698_1920.jpg",
        desc: '300 grs de espaguetis, 100 gr de langostinos con salsa secreta de la casa con queso rallado',
    },
    {
        id: 8,
        titulo: "wok de arroz con pollo y salsa teriyaki",
        categoria: "plato principal",
        precio: "1700.00",
        img: "./img/chicken-7249273_1920.jpg",
        desc: '350 grs de arroz y 3 patas de pollo acompañados de un salteado de verduras y salsa teriyaki',
    },
    {
        id: 9,
        titulo: "vino de la casa",
        categoria: "bebidas",
        precio: "1200.00",
        img: "./img/wines-1761613_1920.jpg",
        desc: 'litro de vino tinto o blanco bodega lopez',
    },
    {
        id: 10,
        titulo: "cerveza tirada",
        categoria: "bebidas",
        precio: "750.00",
        img: "./img/beer-2695358_1920.jpg",
        desc: 'pinta a eleccion entre ipa, golden y honey',
    },
    {
        id: 11,
        titulo: "gaseosa de litro",
        categoria: "bebidas",
        precio: "600.00",
        img: "./img/soft-drink-4280835_1920.jpg",
        desc: 'bebida de litro a eleccion linea pepsi',
    },
    {
        id: 12,
        titulo: "litro de agua importada",
        categoria: "bebidas",
        precio: "500.00",
        img: "./img/glass-4519112_1920.jpg",
        desc: 'litro de agua evian',
    },
];

const guardar = (clave, valor) => { localStorage.setItem(clave, valor); }
for (const menu of menues) {
    guardar(menu.id, JSON.stringify(menu))
}
localStorage.setItem("menues", JSON.stringify(menues));

let menus = localStorage.getItem("menues");
console.log(JSON.parse(menus));
console.log(menus);


const lista = document.getElementById("listado")
fetch("./data.json")
    .then(response => response.json())
    .then(menues => {
        menues.forEach(menu => {
            const li = document.createElement("li")
            li.innerHTML = `
            <article class="menu-item">
                <img src=${menu.img} alt=${menu.titulo} class="foto"></img>
                <div.getElementByClass("item-info")
                    <header>
                        <h4>${menu.titulo}</h4>
                        <h4.getElementByClass("precio")>${menu.precio}</h4.getElementByClass>
                    </header>
                    <p>${menu.desc}</p>
                </div>
            </article>    
            <hr/>
            `

            lista.append(li)
        })
    })

const pedirPlatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(menues)
        }, 3000)
    })
}

// const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };

// guardarLocal("listaMenu", JSON.stringify(menues));

// const sectionCenter = document.querySelector("section-center");
// const btnContainer = document.querySelector(".btn-container");

// window.addEventListener("DOMContentLoaded", function () {
//     displayMenuesItems(menues);
//     displayMenuesButtons();
// });


/*filter*/
const filtroEsPostre = menues.filter(menu => menu.categoria === "postres");
const filtroEsPlatoPrincipal = menues.filter(menu => menu.categoria === "plato principal");
const filtroEsBebida = menues.filter(menu => menu.categoria === "bebida");

filterSelection("all")
function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("filterDiv");
    if (c == "all") c = "";
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
}

// Show filtered elements
function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}
/*filterBtns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const categoria = e.currentTarget.dataset.id;
        const menuesCategoria = menu.filter(function(menuesItem){
            if (menuesItem.categoria === categoria) {
                return menuesItem;
            }
        });
        if(categoria === 'todos'){
            diplayMenuItems(menues)
        }
        else{
            diplayMenuItems(menuesCategoria)
        }
    });
});*/


