document.getElementById('toggleButton').addEventListener('click', function() {
    var sidebar = document.getElementById('mySidebar');
    var vanishBtn = document.getElementById('toggleButton');
    if (sidebar.style.display === 'block') {
        sidebar.style.display = 'none'; // Show the sidebar
    } else {
        sidebar.style.display = 'block'; // Hide the sidebar
    }

    if (vanishBtn.style.display === 'none') {
        vanishBtn.style.display = 'block'; // Show the sidebar
    } else {
        document.getElementsByClassName("sidebar-test")[0].classList.remove('hidden');
        vanishBtn.style.display = 'none'; // Hide the sidebar
    }
});

document.getElementsByClassName('close-button')[0].addEventListener('click', function() {
    var sidebar = document.getElementById('mySidebar');
    var vanishBtn = document.getElementById('toggleButton');
    if (sidebar.style.display === 'none') {
        sidebar.style.display = 'block'; // Show the sidebar
    } else {
        sidebar.style.display = 'none'; // Hide the sidebar
    }

    if (vanishBtn.style.display === 'none') {
        vanishBtn.style.display = 'block'; // Show the sidebar
        document.getElementsByClassName("sidebar-test")[0].classList.add('hidden');
    } else {
        vanishBtn.style.display = 'none'; // Hide the sidebar
    }
});


document.getElementById('brand').childNodes[1].childNodes[5].addEventListener('click',function(){

    var showArrow = document.getElementById('brand').childNodes;
    showArrow[3].classList.remove('hidden');
    showArrow[1].childNodes[5].classList.add('hidden');
    showArrow[1].childNodes[7].classList.remove('hidden');
       

});

document.getElementById('price').childNodes[1].childNodes[5].addEventListener('click',function(){

    var showArrow = document.getElementById('price').childNodes;
    showArrow[3].classList.remove('hidden');
    showArrow[1].childNodes[5].classList.add('hidden');
    showArrow[1].childNodes[7].classList.remove('hidden');

});

document.getElementById('brand').childNodes[1].childNodes[7].addEventListener('click',function(){

    var showArrow = document.getElementById('brand').childNodes;
    showArrow[3].classList.add('hidden');
    showArrow[1].childNodes[5].classList.remove('hidden');
    showArrow[1].childNodes[7].classList.add('hidden');
       

});

document.getElementById('price').childNodes[1].childNodes[7].addEventListener('click',function(){

    var showArrow = document.getElementById('price').childNodes;
    showArrow[3].classList.add('hidden');
    showArrow[1].childNodes[5].classList.remove('hidden');
    showArrow[1].childNodes[7].classList.add('hidden');

});
