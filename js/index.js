// * Charts Scripts

let StudentCanvas = document.getElementById("student_chart");
let Studentlabeles = ["الصف الاول الثانوى", "الصف الثانى الثانوى", "الصف الثالث الثانوى"];

let s_chart = new Chart(StudentCanvas, {
    type: "doughnut",
    data: {
        labels: Studentlabeles,
        datasets: [{
            data: [57, 20, 88],
            backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc'],
            hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
            hoverBorderColor: "rgba(234, 236, 244, 1)",
        }]
    },
    options: {
        title: {
            text: "نسبة الطلاب لمراحل الثانوية العامة",
            display: true
        },
        tooltips: {
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            caretPadding: 10,
        }
    }
});

let mycanvas = document.getElementById("teachers_chart");
let labeles = ["الصف الاول الثانوى", "الصف الثانى الثانوى", "الصف الثالث الثانوى"];

let t_chart = new Chart(mycanvas, {
    type: "doughnut",
    data: {
        labels: labeles,
        datasets: [{
            data: [55, 30, 15],
            backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc'],
            hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
            hoverBorderColor: "rgba(234, 236, 244, 1)",
        }]
    },
    options: {
        title: {
            text: "نسبة المعلمين لمراحل الثانوية العامة",
            display: true
        },
        tooltips: {
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            caretPadding: 10,
        }
    }
});
// * End of  Charts Scripts