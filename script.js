var menuOpen = false;
const toggleMenu = () => {
  if (menuOpen === false) {
    document.getElementById("menuOptions").style.display = "flex";
    menuOpen = true;
  } else {
    document.getElementById("menuOptions").style.display = "none";
    menuOpen = false;
  }
};
