// Call the dataTables jQuery plugin
$(document).ready(function () {
    $('#questions_table').DataTable({
        "language": {
            "url": "https://cdn.datatables.net/plug-ins/1.10.20/i18n/Arabic.json"
        }
    });
});


let questions_table = document.getElementsByClassName("questions_table")[0];
questions_table.innerHTML = questions_data;