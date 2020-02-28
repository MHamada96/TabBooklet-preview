$(document).ready(function () {
    $('#studentsTable').DataTable({
        "language": {
            "url": "https://cdn.datatables.net/plug-ins/1.10.20/i18n/Arabic.json"
        }
    });
});


let students_table = document.getElementsByClassName("students_table")[0];
console.log(students_table);

students_table.innerHTML = students_data;