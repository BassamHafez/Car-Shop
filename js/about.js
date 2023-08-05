var close = document.getElementById("close");
var next = document.getElementById("next");
var prev = document.getElementById("prev");
var imgs = [...document.querySelectorAll(".category")];
var full = document.getElementById("full");
var slider = document.getElementById("slider");
var currentIndex = 0;

function changeIndex(src){
  slider.style.backgroundImage = `url(${src})`;
}

for (var i = 0; i < imgs.length; i++) {
  imgs[i].addEventListener("click", function(e) {
    full.style.display = "flex";
    document.body.style.overflow='hidden';
    changeIndex(e.target.src);
    currentIndex = imgs.indexOf(e.target);
  });
}


function closeFull() {
  full.style.display = "none";
  document.body.style.overflow='auto';
}

close.addEventListener("click", closeFull);

full.addEventListener("click",function(e){
  if(e.target==this){
    closeFull();
  }
});

slider.addEventListener("click",function(){
  e.stopPropagation();
})



function getNextSlide() {
  currentIndex++;
  if (currentIndex == imgs.length) {
    currentIndex = 0;
  }
  changeIndex(imgs[currentIndex].src);
}

function getPrevSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = imgs.length - 1;
  }
  changeIndex(imgs[currentIndex].src);
}

next.addEventListener("click", getNextSlide);
prev.addEventListener("click", getPrevSlide);



document.addEventListener("keydown", function(e) {
  if (e.key == "Escape") {
    closeFull();
  } else if (e.key == "ArrowLeft"||e.key == "ArrowDown") {
    getPrevSlide();
  } else if (e.key == "ArrowRight"||e.key == "ArrowUp") {
    getNextSlide();
  }
});