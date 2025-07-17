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

// for copyright year
const currentYear = new Date().getFullYear();

document.getElementById("currentYear").textContent = currentYear;


// for progress section
const spans = document.querySelectorAll('.progress-bar span');
spans.forEach((span) => {
    span.style.width = span.dataset.width;
    span.innerHTML = span.dataset.width
});