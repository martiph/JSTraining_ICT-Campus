var tbody = document.getElementsByTagName('body')[0];
var slidecontainer = document.createElement('div');
createslideshowUI(slidecontainer);
tbody.appendChild(slidecontainer);

function Picture(caption,name){
    this.caption = caption;
    this.name = name;
}

function createslideshowUI(container) {
    var allpictures = [
        new Picture('Hallo','img1'),
        new Picture('Hallo','img2'),
        new Picture('Hallo','img3'),
        new Picture('Hallo','img4'),
        new Picture('Hallo','img5'),
    ];

    var slcontainer = document.createElement('div');
    slcontainer.className = 'slcontainer';

    allpictures.forEach((e,i)=>{
        var slide = document.createElement('div');
        slide.classList.add('slides','fade');

        var ntext = document.createElement('div');
        ntext.className = "numbertext";
        ntext.innerText = i+1 + " / " + allpictures.length;

        var image = document.createElement('img');
        image.src = "Images/" + e.name + ".jpg";
        image.style.width = "100%";

        var caption = document.createElement('div');
        caption.className = "text";
        caption.innerText = e.caption;

        slide.appendChild(ntext);
        slide.appendChild(image);
        slide.appendChild(caption);

        slcontainer.appendChild(slide);
    });

    var plusslideprev = document.createElement('a');
    var plusslidenext = document.createElement('a');
    plusslideprev.className = "prev";
    plusslidenext.className = "next";
    
    plusslideprev.onclick = function(){plusSlides(-1);}
    plusslidenext.onclick = function(){plusSlides(1);}
    plusslideprev.innerText = "❮";
    plusslidenext.innerText = "❯";

    slcontainer.appendChild(plusslidenext);
    slcontainer.appendChild(plusslideprev);

    container.appendChild(slcontainer);

    var brr = document.createElement('br');
    
    var dots = document.createElement('div');
    dots.style.textAlign = "center";

    allpictures.forEach((e,i)=>{
        var dot = document.createElement('span');
        dot.className = "dot";
        dot.onclick = function(){currentSlide((i+1))};
        dots.appendChild(dot);
    })


    container.appendChild(brr);
    container.appendChild(dots);
    
}


var slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

