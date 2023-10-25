let p = document.getElementById("pricing");
let popin = false;
function view() {
  if (popin) {
    p.style.display = "none";
  } else {
    p.style.display = "block";
  }
  popin = !popin;
}
unview = () => {
  p.style.display = "none";
};
