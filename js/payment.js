// Call the dataTables jQuery plugin
$(document).ready(function () {
    $('#payments_table').DataTable({
        "language": {
            "url": "https://cdn.datatables.net/plug-ins/1.10.20/i18n/Arabic.json"
        }
    });
});
let payments_table = document.getElementsByClassName("payments_table")[0];
payments_table.innerHTML = payments_data;