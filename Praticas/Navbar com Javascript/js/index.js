const navIcon = document.querySelector(".navicon");
const nav = document.querySelector("nav");
const navClasses = nav.classList;

navIcon.addEventListener('click', () => {
    navClasses.toggle('hide')
    
});

const topo = document.querySelector(".topo");
const resize = topo.classList;

navIcon.addEventListener('click', () => {
    resize.toggle('resizetopo')    
});

