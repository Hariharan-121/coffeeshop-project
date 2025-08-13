// const menuOpenButton = document.querySelector("#menu-open-button");
//   const menuCloseButton = document.querySelector("#menu-close-button");

//   menuOpenButton.addEventListener("click", () => {
//     document.body.classList.add("show-mobile-menu");
//   });

//   menuCloseButton.addEventListener("click", () => {
//     document.body.classList.remove("show-mobile-menu");
//   });


// document.getElementById("menu-open-button").addEventListener("click", function() {
//     document.body.classList.add("show-mobile-menu");
// });


const menuOpenButton = document.getElementById("menu-open-button");

menuOpenButton.addEventListener("click", () => {
  document.body.classList.toggle("show-mobile-menu");
});
