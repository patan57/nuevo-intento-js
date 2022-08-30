const promo = document.querySelector ('#promo')
promo.addEventListener ('click', () => {
Swal.fire({
    title: '¡Cupón de descuento!',
    text: 'Con la palabra clave templanza tendras un 15% sobre el total de la cuenta.',
    imageUrl: './img/lucky.jpg',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Custom image',
})
})

const menu = [
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

/*fetch*/

const lista = document.querySelector('#listado')
fetch('/data.json')
    .then((res) => res.json)
    .then((data) =>{

        data.forEach((menu) =>{
            const li = document.createElement('li')
            li.innerHTML = `
            <h4>${menu.titulo}</h4>
            <p>${menu.id}</p>
            <p>${menu.categoria}</p>
            <p>${menu.precio}</p>
            <p>${menu.img}</p>
            <p>${menu.desc}</p>
            <hr/>
            `

            lista.append(li)
        })
    })

const pedirPlatos = () => {
    return new Promise ((resolve, reject) =>{
        setTimeout (() =>{
            resolve(menu)
        },3000)
    })
}

const guardarLocal = (clave, valor) => {localStorage.setItem(clave, valor)};

guardarLocal("listaMenu", JSON.stringify(menu));

const sectionCenter = document.querySelector("section-center");
const btnContainer = document.querySelector(".btn-container");

window.addEventListener("DOMContentLoaded", function () {
    diplayMenuItems(menu);
    displayMenuButtons();
});

filterBtns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const categoria = e.currentTarget.dataset.id;
        const menuCategoria = menu.filter(function(menuItem){
            if (menuItem.categoria === categoria) {
                return menuItem;
            }
        });
        if(categoria === 'todos'){
            diplayMenuItems(menu)
        }
        else{
            diplayMenuItems(menuCategoria)
        }
    });
});

function diplayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {

        return `<article class="menu-item">
            <img src=${item.img} alt=${item.titulo} class="photo" />
            <div class="item-info">
              <header>
                <h4>${item.titulo}</h4>
                <h4 class="precio">$${item.precio}</h4>
              </header>
              <p class="item-text">
                ${item.desc}
              </p>
            </div>
          </article>`;
    });
    displayMenu = displayMenu.join("");

    sectionCenter.innerHTML = displayMenu;
}
function displayMenuButtons() {
    const categorias = menu.reduce(
        function (values, item) {
            if (!values.includes(item.categoria)) {
                values.push(item.categoria);
            }
            return values;
        },
        ["all"]
    );
    const categoriaBtns = categorias
        .map(function (categoria) {
            return `<button type="button" class="filter-btn" data-id=${categoria}>
            ${categoria}
          </button>`;
          
        })
        .join("");

    btnContainer.innerHTML = categoriaBtns;
    const filterBtns = btnContainer.querySelectorAll(".filter-btn");
    console.log(filterBtns);

    filterBtns.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
            const categoria = e.currentTarget.dataset.id;
            const menuCategoria = menu.filter(function (menuItem) {
                if (menuItem.categoria === categoria) {
                    return menuItem;
                }
            });
            if (categoria === "todos") {
                diplayMenuItems(menu);
            } else {
                diplayMenuItems(menuCategoria);
            }
        });
    });
}

