///make header sticky and change background color when user scroll
let header=document.querySelector("header nav");
window.onscroll=function(){
    if(this.scrollY > 10){
        header.classList.add("sticky-nav")


    }
    else{
        header.classList.remove("sticky-nav")



    }

}

//handle click on scroll down button in bottom of main banner
let scrollDowm=document.querySelector("header .scroll-down");
let navBar=document.querySelector("header nav").offsetHeight;
console.log(navBar);
scrollDowm.addEventListener("click",function(){
  aboutusOffsetTop=document.querySelector(".about-us").offsetTop
  window.scrollBy({
    top: aboutusOffsetTop - navBar ,
    behavior : "smooth"
})
})

//open menu bar in mobile screens when click on hamburger btn
let hamburger=document.querySelector(".hamburger");
let menuBar=document.querySelector("header .navbar");

hamburger.addEventListener("click",function(){
    this.classList.toggle("active");
    menuBar.classList.toggle("show");
    menuBar.addEventListener("click",function(){
        console.log("sss")
        hamburger.classList.remove("active");
        this.classList.remove("show");
    })
    document.querySelectorAll("header .navbar ul li a").forEach(ele=>{
        ele.addEventListener("click",function(){
            hamburger.classList.remove("active");
            menuBar.classList.remove("show");



        })
    })
    
});

let aside=document.querySelector("header .navbar ul"); 
aside.addEventListener("click",function(e){
    e.stopPropagation();
})


let CloseAsideBtn=document.querySelector("header .navbar .close-aside");
console.log(CloseAsideBtn)
CloseAsideBtn.addEventListener("click",function(e){
  hamburger.classList.remove("active");
            menuBar.classList.remove("show");
})





// offices Details pop up
const popUpBtn=document.querySelectorAll(".pop-up-btn");

popUpBtn.forEach(btn=>{
  btn.addEventListener("click",function(){
    popUpContainer=document.querySelector(".pop-up#"+this.dataset.target);
    let popUpInner=document.querySelector(".pop-up#"+this.dataset.target+" .inner");
    let closePopupBtn=document.querySelector(".pop-up#"+this.dataset.target+" .inner .close-pop-up");
  
    //hide any pop up firts
    document.querySelector(".pop-up.show")?.classList.remove("show");
  
    popUpContainer.classList.add("show");
    document.body.style.overflow="hidden";
    popUpContainer.addEventListener("click",function(){
      this.classList.remove("show");
      document.body.style.overflowY="scroll";
  
    })
    popUpInner.addEventListener("click",function(e){
       e.stopPropagation();
    })
    closePopupBtn.addEventListener("click",function(){
      popUpContainer.classList.remove("show");
      document.body.style.overflowY="scroll";

  
    })
    //handle images slider on offices details pop up
    let selectedImage=document.querySelector(".pop-up#"+this.dataset.target+" .images .selected-image img")
    let selectImageToShow=document.querySelectorAll(".pop-up#"+this.dataset.target+" .images .select-image img");
    selectImageToShow.forEach(image=>{
      image.addEventListener("click",function(e){
        console.log(selectedImage.parentNode);
        console.log(e.target.parentNode);
        selectedImage.src=this.src;
        document.querySelector("#"+btn.dataset.target+" .images .select-image .selected").classList.remove("selected")
        image.parentNode.classList.add("selected")
      })
    })
  })
})










  
$('#ourServices').owlCarousel({
    loop: false,
    margin: 10,
    nav: true,
    rewindNav:false,
    autoplay: true,
    rtl:true,
  
    navText: [
      "<img src='assets/images/angle-left.webp'>",
      "<img src='assets/images/angle-right.webp'>"
    ],
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      500: {
        items: 2
      },
      1000: {
        items: 4
      },
      1600:{
        items:5
      }
    },
  
    
    
  })
  

  $('#ourWorks').owlCarousel({
    loop: false,
    margin: 10,
    nav: true,
    rewindNav:false,
    autoplay: true,
    rtl:true,
  
    navText: [
      "<img src='assets/images/angle-left.webp'>",
      "<img src='assets/images/angle-right.webp'>"
    ],
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      500: {
        items: 2
      },
      1000: {
        items: 4
      },
      1600:{
        items:5
      }
    },
  
    
    
  })
  
  $('#our-customers').owlCarousel({
    stagePadding: 0,
    rtl:true,
    loop:true,
    margin:10,
    nav: false,
    autoplay: true,
    slideTransition: 'linear',
    autoplayTimeout:2000,
    autoplaySpeed: 3000,
    
    autoplayHoverPause: false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});