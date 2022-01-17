
					$(document).ready(function(){
						$("#myModal1").on("show.bs.modal", function(event){
							// Place the returned HTML into the selected element
							$(this).find(".modal-body").load("mth.html");
						});
					});
					
					
					$(document).ready(function(){
						$("#myModal2").on("show.bs.modal", function(event){
							// Place the returned HTML into the selected element
							$(this).find(".modal-body").load("mth.html");
						});
					});
					
					
					$(document).ready(function(){
						$("#myModal3").on("show.bs.modal", function(event){
							// Place the returned HTML into the selected element
							$(this).find(".modal-body").load("mth.html");
						});
					});
					
					
					$(document).ready(function(){
						$("#myModal4").on("show.bs.modal", function(event){
							// Place the returned HTML into the selected element
							$(this).find(".modal-body").load("mth.html");
						});
					});
					
					
					$(document).ready(function(){
						$("#myModal5").on("show.bs.modal", function(event){
							// Place the returned HTML into the selected element
							$(this).find(".modal-body").load("mth.html");
						});
					});
					
					
					$(document).ready(function(){
						$("#myModal6").on("show.bs.modal", function(event){
							// Place the returned HTML into the selected element
							$(this).find(".modal-body").load("mth.html");
						});
					});
					
					
						
					$(document).ready(function(){
						$("#myModal7").on("show.bs.modal", function(event){
							// Place the returned HTML into the selected element
							$(this).find(".modal-body").load("mth.html");
						});
					});
					



let box = document.querySelector(".box");
let leftButton = document.getElementById("left");
let rightButton = document.getElementById("right");
let sliderInterval = setInterval(right, 60000);

leftButton.onclick = function() {
  clearInterval(sliderInterval);
  sliderInterval = undefined;
  left();
  setTimeout(function() {
    if (typeof sliderInterval === "undefined") {
      sliderInterval = setInterval(right, 60000);
    }
  }, 60000);
};
rightButton.onclick = function() {
  clearInterval(sliderInterval);
  sliderInterval = undefined;
  right();
  setTimeout(function() {
    if (typeof sliderInterval === "undefined") {
      sliderInterval = setInterval(right, 60000);
    }
  }, 60000);
};

function left() {
  box.classList.add("left");
}

function right() {
  box.classList.add("right");
}

function handleAnimationend() {
  if (this.classList.contains("left")) {
    this.appendChild(this.firstElementChild);
    this.style.transform = `translateX(-25%)`;
    this.classList.remove("left");
  } else if (this.classList.contains("right")) {
    this.insertBefore(this.lastElementChild, this.firstElementChild);
    this.style.transform = `translateX(-25%)`;
    this.classList.remove("right");
  }
}
box.addEventListener("animationend", handleAnimationend, false);
    