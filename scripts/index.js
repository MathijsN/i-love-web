const sections = document.querySelectorAll('section');
sections.forEach(section => {
    const div = section.querySelector('div');
    section.addEventListener('click', () => {
        div.classList.toggle('display');
    });
});