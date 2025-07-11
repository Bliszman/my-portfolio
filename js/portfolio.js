// navlist hamburger functionality
function togglebar() {
    const navList = document.querySelector('.navlinks');
    if (navList.style.display === 'flex') {
        navList.style.display = 'none'
    } else {
        navList.style.display = 'flex';
    }
}
console.log(togglebar);
// function navlist () {
//     const listColor = document.querySelector('.list');
//     listColor.style.color = 'goldenrod'
// }

// window.addEventListener('scroll', function scrolling () {
//     const navLink = document.getElementById('navLinks');
//     const scrollY = window.scrollY;
//     const vh2000 = window.innerHeight * 7;
//     if (scrollY > vh2000) {
//         navLinks.classList.add('hidden');
//     } else {
//         navLinks.classList.remove('hidden');
//     }
//     console.log(scrolling);
    
// });

// for copyright year
const currentYear = new Date().getFullYear();

document.getElementById("currentYear").textContent = currentYear;

//for backToTop button
window.addEventListener('scroll', function top () {
    const btn = document.getElementById('backToTop');
    if (window.scrollY > 300) {
        btn.style.display = 'block';
    } else {
        btn.style.display = 'none';
    }
    console.log(top);
    
});

// scroll to top smoothly
document.getElementById('backtop').addEventListener('click', function () {
    window.scrollTo({
        top: 20,
        behavior: 'smooth'
    })
})