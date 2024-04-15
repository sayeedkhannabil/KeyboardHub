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
    } else {
        vanishBtn.style.display = 'none'; // Hide the sidebar
    }
});
