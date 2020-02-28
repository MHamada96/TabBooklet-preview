// Call the dataTables jQuery plugin
$(document).ready(function () {
  $('#exams_table').DataTable({
    "language": {
      "url": "https://cdn.datatables.net/plug-ins/1.10.20/i18n/Arabic.json"
    }
  });
});
let names = [
  "احمد",
  "على",
  "حسام",
  "عادل",
  "محمد",
  "ماهر",
  "فوزى",
  "كمال",
  "عمر",
  "فادى",
  "محسن",
  "ماجد",
  "اسلام",
  "طه",
  "يوسف",
  "طه",
  "كرم",
  "باسم",
  "محمود",
  "ايهاب",
  "رمضان",
];

let ex_tbl =
  `
<table class="table table-bordered" id="exams_table" width="100%" cellspacing="0">
                    <thead class="bg-gray-200 text-gray-700">
                      <tr>
                        <th>اسم المادة</th>
                        <th>المرحله</th>
                        <th>الباب</th>
                        <th>الفصل</th>
                        <th>عام / فائقين</th>
                        <th>عرض الامتحان</th>
                      </tr>
                    </thead>
                    <tfoot class="bg-gray-200 text-gray-500">
                      <tr>
                      <th>اسم المادة</th>
                        <th>المرحله</th>
                        <th>الباب</th>
                        <th>الفصل</th>
                        <th>عام / فائقين</th>
                        <th>عرض الامتحان</th>
                      </tr>
                    </tfoot>
                  

`;
let ex_trs = "";
for (let i = 0; i < 100; i += 1) {
  let n1 = "n";
  let n2 = "n";
  while (n1 == n2) {
    n1 = names[Math.floor(Math.random() * names.length)];
    n2 = names[Math.floor(Math.random() * names.length)];
  }
  ex_trs +=
    `
    <tr>
                        <td>فيزياء</td>
                        <td>الثانى الثانوى</td>
                        
                        <td>الباب الاول</td>
                        <td>الفصل الثانى</td>
                        <td>عام</td>
                        <td class=" text-center">
                          <button type="button" class="btn btn-sm btn-info text-center col-12">
                            <a href="show_exam.html" class="text-white">عرض الامتحان</a>
                          </button>
                        </td>
                      </tr>
    `
}
ex_tbl += ex_trs;
ex_tbl +=
  `
<tbody>
</tbody>
</table>
`
let exams_table = document.getElementsByClassName("exams_table")[0];
exams_table.innerHTML = ex_tbl;