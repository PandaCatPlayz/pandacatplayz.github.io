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
    var textures = document.getElementById("textureAmount");
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
    var textures = document.getElementById("textureAmount");
    var complete = document.getElementById("formComplete");

    var price = 0;

    if(artist.value == "sakuradev") {
        price = 5;
    }

    if(blocks.value == "blocks") {
        price += 4;
    }

    if(items.value == "items") {
        price += 1;
    }

    if(particles.value == "particles") {
        price += 1;
    }

    if(gui.value == "gui") {
        price += 1;
    }

    if(animated.value == "animated") {
        price += 4;
    }

    if(colors.value == "One") {
        price += 0.5;
    }
    else if(colors.value == "Two") {
        price += 1;
    }

    if(textures.value > 10 && textures.value <= 25) {
        price += 1;
    }
    else if(textures.value > 25 && textures.value <= 50) {
        price += 5;
    }
    else if(textures.value > 50 && textures.value <= 75) {
        price += 10;
    }
    else if(textures.value > 75) {
        price += 25;
    }

    complete.innerHTML = "Form Completed: $" + price;
}