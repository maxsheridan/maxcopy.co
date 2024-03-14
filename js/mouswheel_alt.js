document.addEventListener("DOMContentLoaded", function() {
    function handleMouseWheel(event) {
        var delta = event.deltaY || event.detail || (-1 * event.wheelDelta);

        if (window.innerWidth > 1024) {
            // Apply horizontal scrolling for screens above 1024px wide
            window.scrollBy(delta * 2, 0);
            event.preventDefault();
        }
        // For screens below 1025px, allow default vertical scrolling behavior
    }

    // Check if the screen width is above 1024 pixels
    if (window.innerWidth > 1024) {
        // Apply mousewheel function only for screens above 1024px wide
        document.addEventListener('wheel', handleMouseWheel);
        document.addEventListener('mousewheel', handleMouseWheel);
        document.addEventListener('DOMMouseScroll', handleMouseWheel);
    }

    // Refresh the event handler on window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 1024) {
            // Reapply mousewheel function for screens above 1024px wide
            document.removeEventListener('wheel', handleMouseWheel);
            document.removeEventListener('mousewheel', handleMouseWheel);
            document.removeEventListener('DOMMouseScroll', handleMouseWheel);

            document.addEventListener('wheel', handleMouseWheel);
            document.addEventListener('mousewheel', handleMouseWheel);
            document.addEventListener('DOMMouseScroll', handleMouseWheel);
        } else {
            // Remove mousewheel function for screens below 1025px wide
            document.removeEventListener('wheel', handleMouseWheel);
            document.removeEventListener('mousewheel', handleMouseWheel);
            document.removeEventListener('DOMMouseScroll', handleMouseWheel);
        }
    });
});
