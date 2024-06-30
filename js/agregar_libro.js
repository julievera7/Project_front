document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formlibros');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const titulo = document.getElementById('titulo').value;
        const autor = document.getElementById('Autor').value;
        const year = document.getElementById('year').value;
        const editorial = document.getElementById('editorial').value;
        const imagen = document.getElementById('imagen').value;
    });

});