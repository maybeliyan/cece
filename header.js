//show menu button when shrinked
const menuBtn = document.querySelector(".menu-button");
const navigation = document.querySelector(".navigation");

    menuBtn.addEventListener("click", () => {
        menuBtn.classList.toggle("active");
        navigation.classList.toggle("active");
    });

//show shadow in header when scrolled
const scrollHeader = () => {
    const header = document.getElementById("header")

    if(window.scrollY > 0){
        header.classList.add("scroll-header");
    } else{
        header.classList.remove("scroll-header")
    }
}
window.addEventListener("scroll", scrollHeader)
