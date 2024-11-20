const buttonUx = document.getElementById("ux");
console.log(buttonUx);

const buttonWeb = document.getElementById("web");

const sectionPage2 = document.getElementById("page2");

const sectionPage1 = document.getElementById("page1");
console.log(page1, page2, buttonUx, buttonWeb);

buttonUx.addEventListener("click", (event) => {
  buttonUx.setAttribute("class", "btn-selected");
  buttonWeb.setAttribute("class", "btn-default");
  sectionPage2.setAttribute("class", "hidden");
  sectionPage1.setAttribute("class", "");
});

buttonWeb.addEventListener("click", (event) => {
  buttonWeb.setAttribute("class", "btn-selected");
  buttonUx.setAttribute("class", "btn-default");
  sectionPage1.setAttribute("class", "hidden");
  sectionPage2.setAttribute("class", "");
});

console.log("Salveee");
