const response = await fetch('https://script.google.com/macros/s/AKfycbyC4woxbJSeSZnip08wLvlk3wPWPhVVZftCbDdfI7h1hI4Kv7ao33O0X1KYlDN1OApn/exec?action=read_products');
const productos = await response.json();

// Almacenar los productos en localStorage
localStorage.setItem('productos', JSON.stringify(productos.data));


const clienteInput = document.getElementById('cliente');
const productoInput = document.getElementById('cod_prod');
const inputFecha = document.getElementById('fecha');

clienteInput?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault(); // Previene el submit si está en un formulario

        const hoy = new Date();
        const yyyy = hoy.getFullYear();
        const mm = String(hoy.getMonth() + 1).padStart(2, '0'); // Mes comienza en 0
        const dd = String(hoy.getDate()).padStart(2, '0');

        inputFecha.value = `${yyyy}-${mm}-${dd}`;
        productoInput?.focus();
    }
});

