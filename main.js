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
