function myFunction(imgs) {
    // Get the expanded image
    var expandImg = document.getElementById ("expandImg");
    // Get the image text
    var imgText = document.getElementById ("imgText");
    // Use the same src in the expanded image as the image being clicked on from the grid
    expandImg.src = imgs.src;
    // Use the value of the alt attribute of the clickable image as text inside the expanded image
    imgText.innerHTML= imgs.alt;
    // Show the container element 
    expandingImg.parentElement.style.display="block";

}
