function sendToExcell() {
    var contact = document.getElementById("contactSelect");
    var username = document.getElementById("inputUsername");
    var name = document.getElementById("inputName");
    var artist = document.getElementById("artistSelect");
    var version = document.getElementById("versionSelect");
    var blocks = document.getElementById("blocksCheck");
    var items = document.getElementById("itemsCheck");
    var particles = document.getElementById("particlesCheck");
    var gui = document.getElementById("GUICheck");
    var animated = document.getElementById("animatedCheck");
    var colors = document.getElementById("colorSelect");
    var textures = document.getElementById("textureRange");
    var complete = document.getElementById("formComplete");
}

function calculateCost() {
    var artist = document.getElementById("artistSelect");
    var blocks = document.getElementById("blocksCheck");
    var items = document.getElementById("itemsCheck");
    var particles = document.getElementById("particlesCheck");
    var gui = document.getElementById("GUICheck");
    var animated = document.getElementById("animatedCheck");
    var colors = document.getElementById("colorSelect");
    var textures = document.getElementById("textureRange");
    var complete = document.getElementById("formComplete");

    var price = 0;

    if(artist.value == "sakuradev") {
        price = 5;
    }

    if(blocks.ariaChecked) {
        price += 1;
    }

    if(items.ariaChecked) {
        price += 0.5;
    }

    if(particles.ariaChecked) {
        price += 0.25;
    }

    if(gui.ariaChecked) {
        price += 0.25;
    }

    if(animated.ariaChecked) {
        price += 2;
    }

    if(colors.value == "One") {
        price += 0.1;
    }
    else if(colors.value == "Two") {
        price += 0.25;
    }

    if(textures.ariaValueText > 10 && textures.ariaValueText <= 25) {
        price += 0.25;
    }
    else if(textures.ariaValueText > 25 && textures.ariaValueText <= 50) {
        price += 2;
    }
    else if(textures.ariaValueText > 50 && textures.ariaValueText <= 75) {
        price += 5;
    }
    else if(textures.ariaValueText > 75) {
        price += 10;
    }

    complete.innerHTML = "Form Completed: $" + price;
}