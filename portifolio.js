document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById("modal-certificados");
    const btnAbrir = document.getElementById("ver-mais-certificados");
    const btnFechar = document.querySelector(".fechar");
    
    if (btnAbrir) {
        btnAbrir.addEventListener('click', function(e) {
            e.preventDefault();
            modal.style.display = "block";
        });
    }
    
    if (btnFechar) {
        btnFechar.addEventListener('click', function() {
            modal.style.display = "none";
        });
    }
    
    // Fechar modal ao clicar fora
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
}); 