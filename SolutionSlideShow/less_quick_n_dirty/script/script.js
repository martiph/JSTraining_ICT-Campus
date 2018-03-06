var body = document.getElementsByTagName("body")[0];
var container = document.createElement("div");
var counter = 0;

// general style
container.setAttribute("id", "container");
container.appendChild(document.createElement("div"));

document.body.style.backgroundColor = "#333333";
var containerStyle = container.style;
containerStyle.width = "80%";
containerStyle.textAlign = "center";
containerStyle.margin = "0 auto";


body.appendChild(container);
createSlides(container);

function createSlides(container) {
    var pictures = ["img1", "img2", "img3", "img4", "img5"];
    var allDiv = [];
    for (var i = 0; i < pictures.length; i++) {
        var div = document.createElement("div");
        var image = document.createElement("img");

        
        var buttonPrev = document.createElement("button");
        var buttonNext = document.createElement("button");
        buttonPrev.setAttribute("id", "prev");
        buttonPrev.innerHTML = "&#8656";
        buttonNext.setAttribute("id", "next");
        buttonNext.innerHTML = "&#8658";
        
        // style of the image
        image.setAttribute("src", "./img/" + pictures[i] + ".jpg");
        image.style.display = "block";
        image.style.width = "80%";
        image.style.margin = "0 auto";
        // style of the buttons
        buttonNext.style.backgroundColor = "#333333";
        buttonNext.style.color = "#cccccc";
        buttonNext.style.borderColor = "#333333";
        buttonNext.style.textAlign = "center";
        buttonNext.style.margin = "1em";
        buttonPrev.style.backgroundColor = "#333333";
        buttonPrev.style.color = "#cccccc";
        buttonPrev.style.borderColor = "#333333";
        buttonPrev.style.textAlign = "center";
        buttonPrev.style.margin = "1em";

        div.appendChild(image);
        div.appendChild(buttonPrev);
        div.appendChild(buttonNext);
        allDiv.push(div);
    }
    for (var i = 0; i < 5; i++) {
        container.replaceChild(allDiv[i], container.children[0]);
        // previous
        document.getElementById("prev").addEventListener("click", function () { displayImage(allDiv, "left") });
        // next
        document.getElementById("next").addEventListener("click", function () { displayImage(allDiv, "right") });
    }

    displayImage(allDiv, "same");
}

function displayImage(allDiv, direction) {
    if (direction == "right") {
        counter = (counter + 1) % 5;
    } else if (direction == "left") {
        if (counter == 0) { counter = 4 } else { counter--; }
    } else {
        counter = counter;
    }
    var container = document.getElementById("container");
    container.replaceChild(allDiv[counter], container.children[0]);
}