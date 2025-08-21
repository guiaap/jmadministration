document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".mobile-menu-button");
  const menuImg = menuButton.querySelector("img");
  const navList = document.querySelector(".nav-list");
  const navLinks = navList.querySelectorAll("a");

  const openIcon = "images/mobile_menu_close.png"; 
  const closedIcon = "images/mobile_menu_open.png"; 

  function closeMenu() {
    navList.classList.remove("open");
    menuImg.src = closedIcon;
    menuImg.alt = "Abrir menu";
  }

  menuButton.addEventListener("click", () => {
    navList.classList.toggle("open");

    if (navList.classList.contains("open")) {
      menuImg.src = openIcon;
      menuImg.alt = "Fechar menu";
    } else {
      closeMenu();
    }
  });

  navLinks.forEach(link => {
    link.addEventListener("click", closeMenu);
  });
  
});

document.querySelectorAll(".card .card-button").forEach(button => {
    button.addEventListener("click", () => {
        const card = button.closest(".card");
        const cardFull = card.querySelector(".card-full-content");
        const icon = button.querySelector("img");

        // alterna o display
        if (cardFull.style.display === "none" || cardFull.style.display === "") {
            cardFull.style.display = "flex";
            icon.src = "images/minus.png";
        } else {
            cardFull.style.display = "none";
            icon.src = "images/more.png";
        }
    });
});

