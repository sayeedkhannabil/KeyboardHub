import getDetailsData from './detailsData.js';

document.addEventListener("DOMContentLoaded", function() {
    const productId = window.location.hash.substring(1); // Remove the `#`
    if (productId) {
        loadProductDetails(productId);
    }
});

async function loadProductDetails(productId) {
    try {
        const product = await getDetailsData(productId);
        if (product && Object.keys(product).length !== 0) {
            updateProductDetails(product);
        } else {
            console.log("No product details available");
        }
    } catch (error) {
        console.error('Error loading product details:', error);
    }
}

function updateProductDetails(product) {
    console.log(product.image)
    console.log(product.name)
    console.log(product.price)
    console.log(product.description)
    document.querySelector(".product-image").src = product.image;
    document.querySelector(".key-name").innerText = product.name;
    document.querySelectorAll(".key-name")[1].innerText = `$${product.price}`;
    document.querySelector(".keyboard-description p").innerHTML = product.description.split('<br />').join("<br>");
}
