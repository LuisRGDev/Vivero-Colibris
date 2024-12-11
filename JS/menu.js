let listShow = document.querySelector('.list_show');

// Obtener el frame 3
let frame3 = window.parent.frames['cuerpo'];

// Función para ajustar la posición del menú desplegable
function adjustMenuPosition() {
    // Obtener la posición y el tamaño del frame 3
    let frameRect = frame3.document.body.getBoundingClientRect();
    
    // Ajustar la posición del menú desplegable
    listShow.style.top = frameRect.top + 'px';
    listShow.style.left = frameRect.left + 'px';
    listShow.style.width = frameRect.width + 'px';
}

// Ajustar la posición del menú desplegable cuando se cargue la página y en cada cambio de tamaño de ventana
window.addEventListener('load', adjustMenuPosition);
window.addEventListener('resize', adjustMenuPosition);