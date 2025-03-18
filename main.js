window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

//Scroll button
const scrollTopBtn=document.querySelector(".scroll-btn");
window.addEventListener("scroll",function(){
    scrollTopBtn.classList.toggle("active",this.window.scrollY > 500)
});
scrollTopBtn.addEventListener("click", () => {
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
})

//Navigation menu items active on page scroll (highlight on the header in which you are in)
// window.addEventListener("scroll",() =>{
//     const sections=document.querySelectorAll("section"); //section means <section> tag
//     const scrollY=-window.pageYOffset;
//     sections.forEach(current => {
//         let sectionHeight = current.offsetHeight;
//         let sectionTop = current.offsetTop - 50;
//         let id = current.getAttribute("id");
        
//         if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//           document.querySelector(".nav-items a[href*=" + id + "]").classList.add("active");
//         } 
//         else{
//           document.querySelector(".nav-items a[href*=" + id + " ]").classList.remove("active");
//         }
//     });
// });

//Responsive navigation menu toggle
const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const navItem = document.querySelectorAll(".nav-items a");

menuBtn.addEventListener("click", () => {
    navigation.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    navigation.classList.remove("active");
});

navItem.forEach((navItem) => {
    navItem.addEventListener("click",() => {
        navigation.classList.remove("active");
    })
})


//Scroll reveal animation:
ScrollReveal({
    reset: true,        
    distance: '60px', 
    duration: 2500,    
    delay: 100   
  });
  
  // Target elements and specify reveal options
  ScrollReveal().reveal('.home .info h2, .section-title', {origin: 'top', delay: 500});
  ScrollReveal().reveal('.home .info h3, .home .info p, .about-info .btn', {origin: 'left', delay: 500});
  ScrollReveal().reveal('.home .info .btn, .contact .content-right', {origin: 'right', delay: 500});
  ScrollReveal().reveal('.media-icons i, .contact .content-left, .contact-form .btn', {origin: 'left', delay: 300, interval: 200});
  ScrollReveal().reveal('.home-img', {origin: 'right', delay: 500});
  ScrollReveal().reveal('.home .scroll-down', {origin: 'bottom', delay: 500});
  ScrollReveal().reveal('.about .description, .skills .skills-description', {origin: 'left', delay: 300});  
//   ScrollReveal().reveal('.skills .skills-grid img', {origin: 'top',delay: 500});
// Reveal the skills logos with a smooth animation when they come into view
// Reveal the skills logos with animation when they come into view
// ScrollReveal().reveal('.skills .skills-grid img', {
//     origin: function (el, index) {
//         // Alternate between left and right based on index
//         return index % 2 === 0 ? 'left' : 'right'; // Even index from left, odd index from right
//     },
//     delay: 200, // Short delay before the animation starts
//     interval: 100, // Stagger the animation for each logo
//     opacity: 0, // Start with no visibility
//     distance: '50px', // Move the logos slightly from the starting position
//     scale: 0.8, // Start with a slightly smaller scale
//     easing: 'ease-in-out', // Smooth animation curve
//     duration: 800 // Duration of the animation
// });
