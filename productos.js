const catalogoProductos = {
    "42MT": {
        nombre: "42MT Delco Remy",
        precio: 3800,
        marca: "DELCO REMY",
        enStock: true,
        fotos: ["img/IMGcatalogo/1 42MT.png", "img/IMGcatalogo/2 42MT.png", "img/IMGcatalogo/3 42MT.png", "img/IMGcatalogo/4 42MT.png", "img/IMGcatalogo/5 42MT.png"],
        specs: { "NÚMERO DE DIENTES": "12", "GIRO": "CW DERECHO - HORARIO", "VOLTS": "12V", "DATOS EXTRAS": "7.3 Kw", "SERIE": "42MT DD", "SISTEMA OEM": "DELCO", "LESTER": "6371" }
    },
    "39MT": {
        nombre: "39MT Delco Remy",
        precio: 3900,
        marca: "DELCO REMY",
        enStock: true,
        fotos: ["img/IMGcatalogo/3 39MT.png", "img/IMGcatalogo/2 39MT.png", "img/IMGcatalogo/1 39MT.png", "img/IMGcatalogo/4 39MT.png"],
        specs: { "NÚMERO DE DIENTES": "11", "GIRO": "CW DERECHO - HORARIO", "VOLTS": "12V", "DATOS EXTRAS": "CAMPANA ROTABLE", "SERIE": "39MT (PLGR)", "SISTEMA OEM": "DELCO", "LESTER": "6924" }
    },
    "35MT": {
        nombre: "35MT Delco Remy",
        precio: 3200,
        marca: "DELCO REMY",
        enStock: false,
        fotos: ["img/IMGcatalogo/1 35MT.png", "img/IMGcatalogo/2 35MT.png", "img/IMGcatalogo/3 35MT.png", "img/IMGcatalogo/4 35MT.png"],
        specs: { "NÚMERO DE DIENTES": "11", "GIRO": "CW DERECHO - HORARIO", "VOLTS": "12V", "DATOS EXTRAS": "CAMPANA FIJA", "SERIE": "35MT", "SISTEMA OEM": "DELCO", "LESTER": "---" }
    },
    "CHEVROLET_SUBURBAN": {
        nombre: "MARCHA PARA CHEVROLET SUBURBAN",
        precio: 1600,
        marca: "CHEVROLET",
        enStock: true,
        fotos: ["img/IMGcatalogo/3 SUBURBAN.png", "img/IMGcatalogo/2 SUBURBAN.png", "img/IMGcatalogo/1 SUBURBAN.png", "img/IMGcatalogo/4 SUBURBAN.png"],
        specs: { "NÚMERO DE DIENTES": "11", "GIRO": "CW DERECHO - HORARIO", "VOLTS": "12V", "DATOS EXTRAS": "1.1 Kw", "SERIE": "PG260G", "SISTEMA OEM": "DELCO", "LESTER": "---" }
    },
    "DODGE_RAM_3500": {
        nombre: "MARCHA PARA DODGE RAM 3500",
        precio: 1700,
        marca: "DODGE",
        enStock: true,
        fotos: ["img/IMGcatalogo/2 RAM.png", "img/IMGcatalogo/1 RAM.png", "img/IMGcatalogo/3 RAM.png", "img/IMGcatalogo/4 RAM.png"],
        specs: { "NÚMERO DE DIENTES": "10", "GIRO": "CW DERECHO - HORARIO", "VOLTS": "12V", "SERIE": "OSGR", "SISTEMA OEM": "Nippondenso", "LESTER": "---" }
    },
    "JETTA_4CL": {
        nombre: "MARCHA PARA VOLKSWAGEN JETTA 4CL",
        precio: 1400,
        marca: "VOLKSWAGEN",
        enStock: true,
        fotos: ["img/IMGcatalogo/1 JETTA ACL.png", "img/IMGcatalogo/2 JETTA ACL.png", "img/IMGcatalogo/3 JETTA ACL.png", "img/IMGcatalogo/4 JETTA ACL.png"],
        specs: { "NÚMERO DE DIENTES": "9", "GIRO": "CCW IZQUIERDO - ANTIHORARIO", "VOLTS": "12V", "DATOS EXTRAS": "TRANSMISION STANDAR", "SERIE": "PMGR", "SISTEMA OEM": "BOSCH", "LESTER": "---" }
    },
    "41MT": {
        nombre: "41MT Delco Remy",
        precio: 3700,
        marca: "DELCO REMY",
        enStock: false,
        fotos: ["img/IMGcatalogo/4 41MT.png", "img/IMGcatalogo/2 41MT.png", "img/IMGcatalogo/3 41MT.png", "img/IMGcatalogo/1 41MT.png", "img/IMGcatalogo/5 41MT.png"],
        specs: { "NÚMERO DE DIENTES": "11", "GIRO": "CW DERECHO - HORARIO", "VOLTS": "12V", "DATOS EXTRAS": "Reparto", "SERIE": "DIRECT DRIVE", "SISTEMA OEM": "DELCO", "LESTER": "---" }
    },
    "29MT_FORD": {
        nombre: "MARCHA PARA 29MT FORD",
        precio: 3200,
        marca: "FORD",
        enStock: true,
        fotos: ["img/IMGcatalogo/1 29MT.png"],
        specs: { "NÚMERO DE DIENTES": "10", "GIRO": "CW DERECHO - HORARIO", "VOLTS": "12V", "DATOS EXTRAS": "3.3 Kw", "SERIE": "29MT OSGR", "SISTEMA OEM": "DELCO", "LESTER": "---" }
    },
    "MITSUBISHI_MAZDA": {
        nombre: "MARCHA MITSUBISHI MAZDA",
        precio: 1300,
        marca: "MAZDA",
        enStock: true,
        fotos: ["img/IMGcatalogo/1 MAZDA.png", "img/IMGcatalogo/2 MAZDA.png", "img/IMGcatalogo/3 MAZDA.png", "img/IMGcatalogo/4 MAZDA.png", "img/IMGcatalogo/5 MAZDA.png"],
        specs: { "NÚMERO DE DIENTES": "8", "GIRO": "CW DERECHO - HORARIO", "VOLTS": "12V", "SERIE": "DD", "SISTEMA OEM": "Mitsubishi", "LESTER": "---" }
    },
    "PLYMOUTH_VOYAGER": {
        nombre: "MARCHA PARA PLYMOUTH VOYAGER 6CIL",
        precio: 1500,
        marca: "PLYMOUTH",
        enStock: true,
        fotos: ["img/IMGcatalogo/4 VOYAGUE.png", "img/IMGcatalogo/2 VOYAGUE.png", "img/IMGcatalogo/3 VOYAGUE.png", "img/IMGcatalogo/1 VOYAGUE.png"],
        specs: { "NÚMERO DE DIENTES": "10", "GIRO": "CW DERECHO - HORARIO", "VOLTS": "12V", "SERIE": "OSGR", "SISTEMA OEM": "NIPPONDENSO", "LESTER": "---" }
    },
    "37MT": {
        nombre: "37MT Delco Remy",
        precio: 3400,
        marca: "DELCO REMY",
        enStock: false,
        fotos: ["img/IMGcatalogo/5 37MT.png", "img/IMGcatalogo/2 37MT.png", "img/IMGcatalogo/3 37MT.png", "img/IMGcatalogo/1 37MT.png", "img/IMGcatalogo/4 37MT.png"],
        specs: { "NÚMERO DE DIENTES": "12", "GIRO": "CW DERECHO - HORARIO", "VOLTS": "12V", "DATOS EXTRAS": "BARRENO 1/2\"", "SERIE": "37MT ( DIRECT DRIVE )", "SISTEMA OEM": "DELCO", "LESTER": "---" }
    },
    "6808": {
        nombre: "MARCHA PARA STERLING SISTEMA DELCO 38MT",
        precio: 3200,
        marca: "DELCO",
        enStock: false,
        fotos: ["img/IMGcatalogo/1 28MT.png", "img/IMGcatalogo/2 28MT.png", "img/IMGcatalogo/3 28MT.png", "img/IMGcatalogo/4 28MT.png"],
        specs: { "NÚMERO DE DIENTES": "12", "GIRO": "CW DERECHO-HORARIO", "VOLTS": "12V", "DATOS EXTRAS": "4.6 KW", "SERIE": "38MT", "SISTEMA OEM": "DELCO", "LESTER": "6808" }
    },
    "19026": {
        nombre: "MARCHA PARA PACIFICA 6CIL",
        precio: 1300,
        marca: "MITSUBISHI",
        enStock: true,
        fotos: ["img/IMGcatalogo/1 PACIFICA.png", "img/IMGcatalogo/2 PACIFICA.png", "img/IMGcatalogo/3 PACIFICA.png", "img/IMGcatalogo/4 PACIFICA.png"],
        specs: { "NÚMERO DE DIENTES": "10", "GIRO": "CW DERECHO - HORARIO", "VOLTS": "12V", "SERIE": "PMGR", "SISTEMA OEM": "MITSUBISHI", "LESTER": "19026" }
    },
    "18067": {
        nombre: "MARCHA PARA THERMO KING SB200 YANMAR",
        precio: 2300,
        marca: "HITACHI",
        enStock: true,
        fotos: ["img/IMGcatalogo/1 Thermo King.png", "img/IMGcatalogo/2 Thermo King.png", "img/IMGcatalogo/3 Thermo King.png", "img/IMGcatalogo/4 Thermo King.png"],
        specs: { "NÚMERO DE DIENTES": "9", "GIRO": "CW DERECHO - HORARIO", "VOLTS": "12V", "DATOS EXTRAS": "2.0 KW", "SERIE": "OSGR", "SISTEMA OEM": "HITACHI", "LESTER": "18067" }
    },
};

function renderizarCatalogo(productos) {
    const contenedor = document.getElementById('render-catalogo') || document.getElementById('contenedor-productos');
    if(!contenedor) return; 
    
    contenedor.innerHTML = "";
    Object.keys(productos).forEach(id => {
        const p = productos[id];
        
        const textoEstado = p.enStock ? "Disponible" : "Agotado";
        const claseEstado = p.enStock ? "estado-disponible" : "estado-agotado";

        contenedor.innerHTML += `
            <div class="tarjeta-exhibicion">
                <div class="etiqueta-estado ${claseEstado}">${textoEstado}</div>
                <div class="imagen-recuadro">
                    <img src="${p.fotos[0]}" alt="${p.nombre}">
                </div>
                <div class="info-recuadro">
                    <span class="marca-tag">${p.marca}</span>
                    <h3>${p.nombre}</h3>
                    <p class="precio-tarjeta">$${p.precio.toLocaleString()}.00</p>
                    <div class="botones-tarjeta">
                        <a href="producto.html?id=${id}" class="btn-detalles">DETALLES</a>
                        <button class="btn-agregar-carro" onclick="agregarAlCarrito('${p.nombre}', ${p.precio}, '${p.fotos[0]}')">
                             <i class="fas fa-cart-plus"></i>
                        </button>
                    </div>
                </div>
            </div>`;
    });
}

function agregarAlCarrito(nombre, precio, imagen) {
    let carrito = JSON.parse(localStorage.getItem('carritoTienda')) || [];
    carrito.push({ nombre, precio, imagen });
    localStorage.setItem('carritoTienda', JSON.stringify(carrito));
    
    if (typeof actualizarContador === 'function') {
        actualizarContador();
    }
    alert(`${nombre} añadido al carrito`);
}

document.addEventListener('DOMContentLoaded', () => {
    const inputBusqueda = document.getElementById('input-busqueda');
    renderizarCatalogo(catalogoProductos);

    if(inputBusqueda) {
        inputBusqueda.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            const filtrados = {};
            Object.keys(catalogoProductos).forEach(id => {
                const p = catalogoProductos[id];
                if(p.nombre.toLowerCase().includes(term) || p.marca.toLowerCase().includes(term)) {
                    filtrados[id] = p;
                }
            });
            renderizarCatalogo(filtrados);
        });
    }
});
