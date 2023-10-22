popup = document.getElementById("popup");
pop = false;

view = () => {
  if (pop) {
    popup.style.display = "none";
  } else {
    popup.style.display = "block";
  }
};
unview = () => {
  popup.style.display = "none";
};
