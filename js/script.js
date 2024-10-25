document.addEventListener('DOMContentLoaded', function () {
    // Get the current page from the data-page attribute of the body tag
    const currentPage = document.body.getAttribute('data-page');

    // Construct the id of the link that should be active
    const activeLinkId = currentPage + '-link';

    // Find the link element
    const activeLink = document.getElementById(activeLinkId);

    // Add the active class to the correct link
    if (activeLink) {
        activeLink.classList.add('active');
    }
});

