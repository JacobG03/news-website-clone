// Switch displayed content on 'search button' click
var icon = document.getElementsByClassName('fas fa-search')[0];

document.getElementById('search-icon').addEventListener('click', () => {
    let main = document.getElementsByClassName('header-bottom-content-default')[0];
    let search = document.getElementsByClassName('header-bottom-content-search')[0];
    if (main.style.display == '' || main.style.display == 'flex') {
        main.style.display = 'none';
        search.style.display = 'flex';
        icon.className = 'fas fa-times';
    } else {
        main.style.display = 'flex';
        search.style.display = 'none';
        icon.className = 'fas fa-search';
    }
})

