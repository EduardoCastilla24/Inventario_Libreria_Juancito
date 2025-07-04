import { Notify } from "../notiflix/notify.js";

export function Delete(cod_prod){
    const scriptUrl = "https://script.google.com/macros/s/AKfycbyC4woxbJSeSZnip08wLvlk3wPWPhVVZftCbDdfI7h1hI4Kv7ao33O0X1KYlDN1OApn/exec";
    const params = new URLSearchParams({
        action: "delete_product",
        cod_prod: cod_prod
    });

    Notiflix.Confirm.init({
        titleFontSize: '18px',
        titleColor: '#202022',
        messageFontSize: '13px',
        okButtonBackground: '#202022',
        borderRadius: '16px',
        cancelButtonBackground: '#ffffff00',
        cancelButtonColor: '#202022',
        buttonsFontSize: '13px',
    }),

    Notiflix.Confirm.show(
        'Eliminar Producto',
        '¿Deseas eliminar el producto?.\n ¡No podras revertir esta acción!',
        'Si',
        'No',
        () => {
            fetch(`${scriptUrl}?${params}`, { method: "GET" })
            .then(response => response.json())
            .then(response => {
                if (response.success) {
                    Notify("success", "Producto eliminado correctamente.");
                    setTimeout(() => {
                        window.location.reload()
                    }, 1200);
                }
            })
        },
        () => {
        },
    );
}