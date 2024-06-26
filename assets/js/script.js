/* Author: */
// Sample data 
const products = [
  { name: "Product A", image: "https://placehold.co/200x200/EEE/31343C", price: 111 },
  { name: "Product B", image: "https://placehold.co/200x200/EEE/31343C", price: 222 },
  { name: "Product C", image: "https://placehold.co/200x200/EEE/31343C", price: 333 },
  { name: "Product D", image: "https://placehold.co/200x200/EEE/31343C", price: 444 },
  { name: "Product E", image: "https://placehold.co/200x200/EEE/31343C", price: 555 },
];

// Function to filter and display data based on slider value
function filterData() {
  var maxPrice = document.getElementById("priceRange").value;
  console.log(maxPrice);
  // Filter products based on price range
  var filteredProducts = products.filter((product) => {
    return product.price <= maxPrice;
  });

  displayData(filteredProducts);
}

// Function to display data
function displayData(data) {
  var container = document.getElementById("filteredData");
  container.innerHTML = "";

  if (data.length === 0) {
    container.innerHTML = "<p>No products found.</p>";
    return;
  }

  var ul = document.createElement("ul");
  data.forEach((product) => {
    var li = document.createElement("li");
    li.innerHTML = `<figure><img src="${product.image}"</figure>
    <p>${product.name} - $${product.price}</p>`;
    ul.appendChild(li);
  });
  container.appendChild(ul);
}

document.getElementById("priceRange").addEventListener("input", filterData);
displayData(products);
