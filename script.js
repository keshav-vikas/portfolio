    
// --------------FILL SKILL BARS----------------------------------

// var progressBars = document.querySelectorAll('.skills-progress > div');
// // console.log(progressBars);
// var skillsContainer = document.getElementById('skills-container');
// var animationDone=false;

// window.addEventListener('scroll', checkScroll);

// function initialiseBars(){
//   for(let bar of progressBars){
//     bar.style.width = 0 + '%';
//   }
// }
// initialiseBars();

// function fillBars(){
//   for(let bar of progressBars){
//     let targetWidth=bar.getAttribute('data-bar-width');
//     let currentWidth=0;
//     let interval = setInterval(function(){
//             if(currentWidth>targetWidth)
//             clearInterval;
//             else{
//               currentWidth++;
//               bar.style.width = currentWidth + '%';
//             }
//     },10)
//   }
// }

// function checkScroll(){
// //check wheather skills-container is visble or not 
// var coordinates = skillsContainer.getBoundingClientRect();
// if(!animationDone && coordinates.top < window.innerHeight){
   
//   animationDone=true;
//   // console.log('skills section visible');
//      fillBars();
// } else if( coordinates.top > window.innerHeight){
//   animationDone=false;
//   initialiseBars();
// }
// }

var progressBars = document.querySelectorAll(".skills-progress > div");


function initialiseBar(bar) {
    bar.setAttribute("data-visited", false);
    bar.style.width = 0 + '%';
}

for (var bar of progressBars) {
    initialiseBar(bar);
}



function fillBar(bar) {

    var currentWidth = 0;
    var targetWidth = bar.getAttribute("data-bar-width");
    var interval = setInterval(function () {
        if (currentWidth >= targetWidth) {
            clearInterval(interval);
            return;
        }
        currentWidth++;
        bar.style.width = currentWidth + '%';
    }, 10);

}



// This function uses a for loop for individual progress bars.
function checkScroll() {

    for (let bar of progressBars) {
        var barCoordinates = bar.getBoundingClientRect();
        if ((bar.getAttribute("data-visited") == "false") &&
            (barCoordinates.top < (window.innerHeight - barCoordinates.height))) {
            bar.setAttribute("data-visited", true);
            fillBar(bar);
        } else if (barCoordinates.top > window.innerHeight) {
            bar.setAttribute("data-visited", false);
            initialiseBar(bar);
        }

    }
}

window.addEventListener("scroll", checkScroll);

// This event fills the progress bars if they are displayed on the screen when the page is loaded.
//window.addEventListener("load", checkScroll);
 
