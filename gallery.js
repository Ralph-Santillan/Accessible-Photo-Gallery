function update(element) {
    let display = document.getElementById("image");
    display.innerHTML = `<img src="${element.src}" alt="${element.alt}" style="max-width:100%; height:auto;">`;
}

function undo() {
    let display = document.getElementById("image");
    display.innerHTML = "Hover over or focus on an image to display here.";
}

function initializeGallery() {
    console.log("Gallery initialized.");
    let images = document.querySelectorAll(".preview");
    images.forEach(image => {
        image.setAttribute("tabindex", "0");
    });
}
