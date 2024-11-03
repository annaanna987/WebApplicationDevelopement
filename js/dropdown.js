window.onload = function() {

 // Funktsioon, mis toggleb (vahetab) rippmenüü nähtavust
 function toggleDropdown(event) {
    event.preventDefault(); // Takista linki vaikimisi toimingut
    const dropdownMenu = document.getElementById('dropdownMenu');

    // Lisa või eemalda 'show' klass, et kuvada või peita rippmenüü
    dropdownMenu.classList.toggle('show');
}

// Lisa klikkimise sündmus kasutaja logo külge
document.getElementById('userLogo').addEventListener('click', toggleDropdown);

// Sulge rippmenüü, kui klikitakse väljaspool 
window.addEventListener('click', function(event) {
    const dropdownMenu = document.getElementById('dropdownMenu');
    const userLogo = document.getElementById('userLogo');

    // Kontrolli, kas klikk oli kasutaja logo või rippmenüü väliselt!!!
    if (!userLogo.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.classList.remove('show'); // Eemalda 'show' klass, et rippmenüü sulgeda
    }
});
}