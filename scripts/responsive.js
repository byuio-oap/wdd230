// const HamburgerMenuButton=document.querySelector("#menu");
// const NavOptions=document.querySelector("nav");

// HamburgerMenuButton.addEventListener("click",()=>{
//     NavOptions.classList.toggle("open");
//     HamburgerMenuButton.classList.toggle("open");
// })

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});
