const luzPrecios = [
    { precio:" 20€", seleccionado: false },
    { precio:" 50€", seleccionado: false },
    { precio:" 80€", seleccionado: false }
];

const gasPrecios = [
    { precio:" 10€", seleccionado: false },
    { precio:" 20€", seleccionado: false },
    { precio:" 30€", seleccionado: false }
];

const luzGasPrecios = [
    { precio: "100€", seleccionado: false },
    { precio: "120€", seleccionado: false },
    { precio: "150€", seleccionado: false }
];

const luzBtn = document.getElementById('luz');
const gasBtn = document.getElementById('gas');
const luzGasBtn = document.getElementById('luz_gas');
const trfBox = document.getElementById('trf');
const boxPrecios = document.getElementsByClassName('box-prc');
const precioGR = document.getElementById('precio-seleccionado');

let precioSeleccionado = null;

function mostrarPrecios(precios) {
    for (let i = 0; i < precios.length; i++) {
        const boxPrecio = boxPrecios[i];
        const precio = precios[i];
        boxPrecio.textContent = `${precio.precio}`;
        if (precio.seleccionado) {
            boxPrecio.classList.add('selected');
            const precioSeleccionadoBox = document.getElementById('precio-seleccionado');
            precioSeleccionadoBox.textContent = `${precio.precio}`;
            precioSeleccionado = precio;
        } else {
            boxPrecio.classList.remove('selected');
        }
        boxPrecio.onclick = function () {
            if (precioSeleccionado !== null) {
                alert('Solo puedes seleccionar un precio');
                return;
            }
            for (let j = 0; j < precios.length; j++) {
                precios[j].seleccionado = false;
            }
            
            precio.seleccionado = true;
            precioSeleccionado = precio;
            mostrarPrecios(precios);
        };
    }
}

luzBtn.onclick = function () {
    trfBox.style.display = 'flex';
    precioSeleccionado = null;
    precioGR.textContent = '';
    mostrarPrecios(luzPrecios);
    luzBtn.style.backgroundColor = 'red';
    gasBtn.style.backgroundColor = 'white';
    luzGasBtn.style.backgroundColor = 'white';
};

gasBtn.onclick = function () {
    trfBox.style.display = 'flex';
    precioSeleccionado = null;
    precioGR.textContent = '';
    mostrarPrecios(gasPrecios);
    gasBtn.style.backgroundColor = 'red';
    luzBtn.style.backgroundColor = 'white';
    luzGasBtn.style.backgroundColor = 'white';
};

luzGasBtn.onclick = function () {
    trfBox.style.display = 'flex';
    precioSeleccionado = null;
    precioGR.textContent = '';
    mostrarPrecios(luzGasPrecios);
    luzGasBtn.style.backgroundColor = 'red';
    luzBtn.style.backgroundColor = 'white';
    gasBtn.style.backgroundColor = 'white';
};