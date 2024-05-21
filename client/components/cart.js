document.addEventListener("DOMContentLoaded", function () {
    let itemsPerPage = 6;
    let totalItems = 50; // Total number of items
    let totalPages = Math.ceil(totalItems / itemsPerPage);
    let currentPage = 1;
  
    function renderItems(page) {
      const productGrid = document.getElementById("productGrid");
      productGrid.innerHTML = ""; // Clear previous items
      const start = (page - 1) * itemsPerPage;
      const end = start + itemsPerPage;
  
          totalItems = 50;  
          totalPages = Math.ceil(totalItems / itemsPerPage);
          for (let i = start; i < end && i < totalItems; i++) {
            const cardHTML = ` <div class="cart-items-container" id="${i}">
            <div class="item-img-container">
                <img class="item-img"  src="https://via.placeholder.com/150" class="card-img-top" alt="..."/>
            </div>
            <div class="item-description-container">
                <div class="item-name">
                    <h1 class="item-head">Keychron V1 QMK Custom Mechanical Keyboard（US ANSI Layout）</h1>
                </div>
                <div class="item-price">
                    <h1 class="item-price-head">$94</h1>
                </div>
            </div>
            <div class="item-quantity-container">
                <div class="counter">
                    <div class="minus" id="minus">-</div>
                    <div class="number" id="number">1</div>
                    <div class="plus">+</div>
                </div>
            </div>
     </div>
    </div>
    `;
            productGrid.innerHTML += cardHTML;
          }
    }
  
    console.log(totalPages)
  
    function renderPagination(page) {
      const pagination = document.querySelector(".pagination");
      pagination.innerHTML = ""; // Clear previous controls
      // getProductData().then((data) => {totalItems = data.length;});
      for (let i = 1; i <= totalPages; i++) {
        const pageItem = document.createElement("li");
        //pageItem.className = `page-item ${page === i ? 'active' : ''}`;
  
        if (page === i) {
          pageItem.className = "page-item active";
        } else {
          pageItem.className = "page-item";
        }
  
        const pageLink = document.createElement("a");
        pageLink.className = "page-link";
        pageLink.href = "#";
        pageLink.textContent = i;
        pageLink.addEventListener("click", function (e) {
          e.preventDefault();
          currentPage = i;
          renderItems(currentPage);
          renderPagination(currentPage);
        });
        pageItem.appendChild(pageLink);
        pagination.appendChild(pageItem);
      }
    }
  
    renderItems(currentPage);
    setTimeout(renderPagination, 200);
    renderPagination(currentPage);
    //plusMinus();
  });


   

 

  
  


  
