const type = new Typed('.sub-search-box',{
    strings:['Search for products','Search for items'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
    attr: 'placeholder',
});

document.getElementById('menu-button').addEventListener('click',function(){

    document.getElementById('menu-button').classList.add('hidden');
    document.getElementById('sub-sidebar').classList.remove('hidden');
    document.getElementsByClassName('products-and-searchbar')[0].style.opacity = "0.5";
    document.getElementsByClassName('main-container')[0].style.backgroundImage = "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('../assests/login-background.jpg')";

});

document.getElementById('close-button').addEventListener('click',function(){

    document.getElementById('menu-button').classList.remove('hidden');
    document.getElementById('sub-sidebar').classList.add('hidden');
    document.getElementsByClassName('products-and-searchbar')[0].style.opacity = "1";
    document.getElementsByClassName('main-container')[0].style.backgroundImage = "url('../assests/login-background.jpg')";

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


function menuOpenClose(filterId,optionsID){

    if(document.getElementById(filterId).childNodes[0].classList.contains('bi-arrow-down')){
        document.getElementById(filterId).innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="arrow bi bi-arrow-up" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"/> </svg>';
       document.getElementById(optionsID).querySelector('span').classList.remove('hidden');
    }
   else if(document.getElementById(filterId).childNodes[0].classList.contains('bi-arrow-up')){
        document.getElementById(filterId).innerHTML = '<svg xmlns="http://www.w3.org/2000/svg"  width="16" height="16" fill="currentColor" class="arrow bi bi-arrow-down" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"/> </svg>';
        document.getElementById(optionsID).querySelector('span').classList.add('hidden');
    }
}

document.getElementById('price-button').addEventListener('click',function(){
    menuOpenClose('price-button','price')
});

document.getElementById('brand-button').addEventListener('click',function(){
    menuOpenClose('brand-button','brand')
});

document.getElementById('stock-button').addEventListener('click',function(){
    menuOpenClose('stock-button','stock')
});