window.onload = start;

/**
 * The position of the bird relative to the left side on the page. 
 */
let left = 0; 

/** Starts the r program on page load. */
function start() {
    fly();

}
/** Sets an interval to make the bild "fly". */
function fly() {
    setInterval(moveBirdToTheRight, 5)
    
}

/** Moves the bird a small step to the right */
function moveBirdToTheRight() {
    // Fetch bird from html
    const bird = document.querySelector('img');

    // Update position
    left += 0.2;

    // Render position
    bird.style.left = left + '%';
}


