export const change = (btn1, btn2, tab1, tab2) => {

  btn1.addEventListener("click", () => {
    btn1.setAttribute("disabled", true);
    btn2.removeAttribute("disabled");
    tab1.style.display = "block";
    tab2.style.display = "none";
  });

  btn2.addEventListener("click", () => {
    btn2.setAttribute("disabled", true);
    btn1.removeAttribute("disabled");
    tab2.style.display = "block";
    tab1.style.display = "none";
  });

}