let nav = document.querySelector("nav");

window.onscroll = () => {
    nav.classList.remove('active');
}

document.querySelector("#menu-but").onclick = () => {
    nav.classList.toggle('active');
}