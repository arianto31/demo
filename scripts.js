document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav ul li a');

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetPage = link.getAttribute('href');
            window.location.href = targetPage;
        });
    });
});