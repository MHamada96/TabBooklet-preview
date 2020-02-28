// Call the dataTables jQuery plugin
$(document).ready(function () {
    $('#teachersTable').DataTable({
        "language": {
            "url": "https://cdn.datatables.net/plug-ins/1.10.20/i18n/Arabic.json"
        }
    });
});


let teachers_table = document.getElementsByClassName("teachers_table")[0];
teachers_table.innerHTML = teachers_data;

let btnAddTeacher = document.querySelector(".btn-add-teacher");

btnAddTeacher.addEventListener("click", (e) => {
    console.log("click");
});