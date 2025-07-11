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
        top: 0,
        behavior: 'smooth'
    })
})

// PROGRESS BAR

// let boxes = document.querySelectorAll(".box");

// window.onload = function () {
//     setTimeout(() => {
//        load_bars();
//     }, 1000);
// }

// function load_bars(){
//     boxes.forEach(box => {
//         let line = box.querySelector(".line");
//         let increasing_percentage = box.querySelector(".increasing-percentage");
//         let total_percentage = box.querySelector(".total-percentage");

//         let p = 0;
//         let my_interval = setInterval(() => {
//             p++;
//             line.style.width = p + "%";
//             increasing_percentage.innerHTML = p + "%";
//             if (increasingPercentage.innerHTML == total-percentage.innerHTML) {
//                 //clearInterval(my_interval)
//             }
//         }, 25);
//     });
// }