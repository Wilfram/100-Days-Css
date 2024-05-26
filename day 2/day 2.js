const primero = document.getElementsByClassName("primero")[0];
const segundo = document.getElementsByClassName("segundo")[0];
const tercero = document.getElementsByClassName("tercero")[0];
const boton = document.getElementById("boton");
let clicleado = false;

function animation() {
  if (clicleado) {
    elemento(primero);
    elemento(segundo);
    elemento(tercero);
  } else {
    elemento(primero);
    elemento(segundo);
    elemento(tercero);
  }
}

function elemento(el) {
  if (clicleado) {
    el.classList.remove("activo");
    setTimeout(() => el.classList.add("noActivo"), 10);
  } else {
    el.classList.remove("noActivo");
    setTimeout(() => el.classList.add("activo"), 10);
  }

  if (el === tercero) {
    if (clicleado) {
      setTimeout(() => {
        primero.style = "";
        segundo.style = "";
        tercero.style = "";
      }, 10);

      clicleado = false;
    } else {
      setTimeout(() => {
        primero.style = "transform: translate(0px, 30px) rotate(-45deg);";
        segundo.style = "transform: scale(60%); opacity: 0;";
        tercero.style = "transform: translate(0px, -30px) rotate(45deg);";
      }, 80);

      clicleado = true;
    }
  }
}
