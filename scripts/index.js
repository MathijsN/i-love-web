const sections = document.querySelectorAll('main');
sections.forEach(section => {
    section.addEventListener('click', () => {
        const pElement = document.querySelector('article')
        pElement.classList.toggle('display');
    });
});