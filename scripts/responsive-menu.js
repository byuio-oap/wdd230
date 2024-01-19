const HamButton = document.querySelector("#menu");
const navigation = document.querySelector("nav ul");

HamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    HamButton.classList.toggle("open");
})