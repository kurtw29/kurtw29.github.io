// Navbar
$(".nav-item").on('click', function(){
    var x = window.matchMedia("(max-width: 991px)");
    if(x.matches){
        $('.navbar-toggler').click();
    }
})


// Project
$("#project-1").hover(
    function(){
        $("#project-1-pic").attr("src", "resources/media/project-1/unitConv.gif");
    },
    function(){
        $("#project-1-pic").attr("src", "resources/media/project-1/unitConvCover.png");
    }
)
$("#project-2").hover(
    function(){
        $("#project-2-pic").attr("src", "resources/media/project-2/demoQuestionsApp.gif");
    },
    function(){
        $("#project-2-pic").attr("src", "resources/media/project-2/QuestionsAppPic.png");
    }
)


//// skill chart with "chartjs"
// var ctx = document.getElementById("skills-chart").getContext('2d');
// var skillChart = new Chart(ctx, {
//     type: 'horizontalBar',
//     data: {
//         labels: ["Angular6","Java","Python","JavaScript", "HTML/CSS"],
//         datasets: [{
//             label: "Technologies",
//             backgroundColor: ['rgb(255,99,132)'],
//             borderColor: ['rgb(255,99,132)'],
//             data: [10,20,30,40,50],
//         }]
//     },
//     options: {}
// });