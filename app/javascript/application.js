// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

// Import Stimulus and other dependencies here, if needed.
import { Application } from "@hotwired/stimulus";

const application = Application.start();

application.debug = false;
window.Stimulus = application;

// document.addEventListener("DOMContentLoaded", () => {
//   const priceRange = document.getElementById('price-range');
//   const priceLabel = document.getElementById('price-label');
//   const productsContainer = document.getElementById('products-container');

//   if (priceRange) {
//     priceRange.addEventListener('input', () => {
//       // Update the price label as the user slides
//       priceLabel.textContent = priceRange.value;

//       // Send AJAX request to filter products by the selected price range
//       fetch(`/categories/${categoryId}?price=${priceRange.value}`, {
//         headers: {
//           "X-Requested-With": "XMLHttpRequest"
//         }
//       })
//         .then(response => response.text())
//         .then(html => {
//           productsContainer.innerHTML = html;
//         })
//         .catch(error => console.error("Error:", error));
//     });
//   }
// });
