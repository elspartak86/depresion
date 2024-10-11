document.addEventListener('DOMContentLoaded', (event) => {
    const registroBtn = document.querySelector('.registro-btn');
    const registroForm = document.querySelector('.registro-form');
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    registroBtn.addEventListener('click', () => {
        registroForm.style.display = registroForm.style.display === 'none' ? 'block' : 'none';
    });

    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('show');
    });

    // Cerrar el menú si se hace clic fuera de él
    document.addEventListener('click', (event) => {
        const isClickInsideMenu = menu.contains(event.target);
        const isClickOnMenuToggle = menuToggle.contains(event.target);

        if (!isClickInsideMenu && !isClickOnMenuToggle && menu.classList.contains('show')) {
            menu.classList.remove('show');
        }
    });

    // Manejar submenús en dispositivos móviles
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const dropdownContent = dropdown.querySelector('.dropdown-content');
                dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
            }
        });
    });
});

    
   