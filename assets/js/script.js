// ambil elemen
const navbarNav = document.querySelector(".navbar-nav");
const hm = document.querySelector("#hamburger-menu");

// toggle menu
hm.onclick = () => {
  navbarNav.classList.toggle("hidden");
};

// klik di luar menu untuk menutup
document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.add("hidden");
  }
});
