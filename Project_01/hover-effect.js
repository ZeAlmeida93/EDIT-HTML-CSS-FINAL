document.querySelectorAll(".product-image").forEach(function (image, index) {
  image.addEventListener("mouseover", function () {
    this.src = `assets-cristian/products/${index + 1}/product-hover.webp`;
  });

  image.addEventListener("mouseout", function () {
    this.src = `assets-cristian/products/${index + 1}/product.webp`;
  });
});
