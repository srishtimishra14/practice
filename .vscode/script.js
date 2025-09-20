function filterProducts(category) {
  let products = document.querySelectorAll(".product");
  products.forEach(product => {
    if (category === "all" || product.dataset.category === category) {
      product.style.display = "block";
      product.style.animation = "fadeIn 0.5s"; // animation
    } else {
      product.style.display = "none";
    }
  });
}
