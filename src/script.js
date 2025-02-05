const detailedImages = document.querySelector(".dImage");
const detailedTitle = document.querySelector(".detailed-title");
const boxesElements = document.querySelectorAll(".gallery--item");

function setDetails(boxElement) {
  const imageElement = boxElement.querySelector(".gallery--item_image");
  const titleElement = boxElement.querySelector(".gallery--item_title");

  if (imageElement) {
    detailedImages.src = imageElement.src;
    detailedImages.classList.remove("animation-image");

    setTimeout(function () {
      detailedImages.classList.add("animation-image"); 
    }, 10); 
  }

  if (titleElement) {
    detailedTitle.innerHTML = titleElement.dataset.detailedText;
  }

  detailedTitle.classList.remove("animation-text");

  setTimeout(function () {
    detailedTitle.classList.add("animation-text");
  }, 10);
}


for (let i = 0; i < boxesElements.length; i++) {
  boxesElements[i].addEventListener("click", function () {
    setDetails(boxesElements[i]);
  });
}