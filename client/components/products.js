document.getElementById('menu-button').addEventListener('click',function(){

    document.getElementById('menu-button').classList.add('hidden');
    document.getElementById('sub-sidebar').classList.remove('hidden');
});

document.getElementById('close-button').addEventListener('click',function(){

    document.getElementById('menu-button').classList.remove('hidden');
    document.getElementById('sub-sidebar').classList.add('hidden');
});


document.addEventListener('DOMContentLoaded', function() {
    const itemsPerPage = 6;
    const totalItems = 50; // Total number of items
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    let currentPage = 1;

    function renderItems(page) {
        const productGrid = document.getElementById('productGrid');
        productGrid.innerHTML = ''; // Clear previous items
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        for (let i = start; i < end && i < totalItems; i++) {
            const cardHTML = `
                <div class="col-md-4 col-sml-3 mb-4">
                    <div class="card">
                        <img src="https://via.placeholder.com/150" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Product ${i + 1}</h5>
                            <p class="card-text">Description of product ${i + 1}</p>
                            <a href="#" class="btn btn-primary">Add to Cart</a>
                        </div>
                    </div>
                </div>`;
            productGrid.innerHTML += cardHTML;
        }
    }

    function renderPagination(page) {
        const pagination = document.querySelector('.pagination');
        pagination.innerHTML = ''; // Clear previous controls
        for (let i = 1; i <= totalPages; i++) {
            const pageItem = document.createElement('li');
            //pageItem.className = `page-item ${page === i ? 'active' : ''}`;
            
            if (page === i) {
                pageItem.className = 'page-item active';
            } else {
                pageItem.className = 'page-item';
            }
            
            const pageLink = document.createElement('a');
            pageLink.className = 'page-link';
            pageLink.href = '#';
            pageLink.textContent = i;
            pageLink.addEventListener('click', function(e) {
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
    renderPagination(currentPage);
});