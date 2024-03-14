document.addEventListener("DOMContentLoaded", function() {
    var lastScrollTime = Date.now();

    function handleWheel(event) {
        var currentTime = Date.now();
        var timeDiff = currentTime - lastScrollTime;
        lastScrollTime = currentTime;

        if (timeDiff > 200) {
            return; // Ignore rapid scrolling events to avoid misinterpretation
        }

        var deltaX = event.deltaX;
        var deltaY = event.deltaY;

        if (window.innerWidth > 1024 && Math.abs(deltaX) > Math.abs(deltaY)) {
            // Apply horizontal scrolling for screens above 1024px wide
            window.scrollBy(deltaX * 2, 0);
            event.preventDefault();
        }
    }

    // Check if the screen width is above 1024 pixels
    if (window.innerWidth > 1024) {
        // Apply wheel event listener only for screens above 1024px wide
        document.addEventListener('wheel', handleWheel);
    }

    // Refresh the event handler on window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 1024) {
            // Reapply wheel event listener for screens above 1024px wide
            document.removeEventListener('wheel', handleWheel);
            document.addEventListener('wheel', handleWheel);
        } else {
            // Remove wheel event listener for screens below 1025px wide
            document.removeEventListener('wheel', handleWheel);
        }
    });
});
