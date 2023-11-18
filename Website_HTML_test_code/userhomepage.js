const contentDiv = document.getElementById('content');
const infiniteTextParagraph = document.getElementById('infiniteText');

function generateMoreText() {
    const additionalText = " CycleSphere";

    // Generate additional text and append it to the paragraph
    infiniteTextParagraph.innerHTML += additionalText;
}

// Listen for the scroll event
window.addEventListener('scroll', function() {
    isScrolling = true;

    // Check if the user has scrolled to the bottom of the page
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight && isScrolling) {
        // Generate more text when the user reaches the bottom
        generateMoreText();
        isScrolling = false;
    }
});

// Initial text generation
generateMoreText();

// Listen for mouse wheel events
window.addEventListener('wheel', function(event) {
    // Check if the user is scrolling down
    if (event.deltaY > 0) {
        // Generate more text when scrolling down
        generateMoreText();
    }
});