//  Get the navigation element by its ID 'main'
const nav = document.querySelector('#main');

// Store the original top position of the navigation bar
// This is where the nav starts before any scrolling
const topOfNav = nav.offsetTop;

// Function that handles the sticky navigation behavior
function fixNav() {
    // Check if user has scrolled past the navigation's original position
    if (window.scrollY >= topOfNav) {
        // User has scrolled past the nav - make it sticky
        
        // Add padding to the body equal to the nav height
        // This prevents the content from jumping when nav becomes fixed
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        
        // Add the 'fixed-nav' class to body
        // This triggers CSS styles that make the nav fixed and adds visual effects
        document.body.classList.add('fixed-nav');
    } else {
        // User has scrolled back up above the nav - remove sticky behavior
        
        // Remove the padding we added earlier
        document.body.style.paddingTop = 0;
        
        // Remove the 'fixed-nav' class from body
        // This reverts the nav back to its normal state
        document.body.classList.remove('fixed-nav');
    }
}

// Listen for scroll events on the window
// Every time the user scrolls, the fixNav function will run
window.addEventListener('scroll', fixNav);
