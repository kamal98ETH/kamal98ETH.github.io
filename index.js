// // Disable scrolling on page load
// document.body.style.overflow = 'hidden';

// // Wait for 10 seconds before enabling scrolling
// setTimeout(function () {
//     document.body.style.overflow = 'auto';
// }, 8000);

// // Get the scroll box element
// const scrollBox = document.getElementById('projects');
// console.log(scrollBox)

// // Detect when the user scrolls
// window.addEventListener('scroll', function () {
//     // Get the current scroll position
//     const scrollPosition = window.scrollY;

//     // Get the height of the viewport
//     const viewportHeight = window.innerHeight;

//     // Get the height of the scroll box element
//     const scrollBoxHeight = scrollBox.offsetHeight;

//     // Calculate the position at which the scroll box should appear
//     const scrollBoxPosition = (scrollBoxHeight + scrollBox.offsetTop) - viewportHeight;

//     // Check if the user has scrolled to the position where the scroll box should appear
//     if (scrollPosition >= scrollBoxPosition) {
//         // Show the scroll box
//         scrollBox.style.opacity = 1;
//     }
// });