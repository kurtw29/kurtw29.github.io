// Navbar
$(".nav-item").on('click', function(){
    $('.navbar-toggler').click();
})


// Project
$(".project-container").hover(
    function(){
        // $(this).children(".project-name").css("display", "block");
        // $(this).children(".project-name").css("margin-top", "5%");
        // $(this).children(".project-tags").css("display", "flex");
    },
    function(){
        // $(this).children(".project-name").css("display", "none");
        // $(this).children(".project-name").css("margin-top", "25%");
        // $(this).children(".project-tags").css("display", "none");
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