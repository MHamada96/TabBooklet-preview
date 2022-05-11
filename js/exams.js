let exams_table = document.getElementsByClassName("exams_table")[0];
let exams_data;


// call the API, currently the data is local data
fetch('json/exams.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let e_rows = ``;
    data.forEach(exam => {
      e_rows +=
        `
          <tr>
              <td>${exam.teacher_name}</td>
              <td>${exam.subject_name}</td>
              <td>${exam.grade}</td>
              <td>${exam.chapter}</td>
              <td>${exam.sectionOfChapter}</td>
              <td>${exam.sType}</td>
              <td>${exam.examPoints}</td>
              <td class=" text-center">
                <button type="button" class="btn btn-sm btn-info text-center col-12">
                <a href="show_exam.html" class="text-white">عرض الامتحان</a>
                </button>
              </td>
          </tr>
      `
    });
    exams_data =
      `
          <table class="table table-bordered" id="exams_table" width="100%" cellspacing="0">
              <thead>
                  <tr>
                    <th>اسم المعلم</th>
                    <th>الماده</th>
                    <th>الصف</th>
                    <th>الفصل</th>
                    <th>الباب</th>
                    <th>طلاب فائقين \ عام</th>
                    <th>الدرجة</th>
                    <th>عرض الامتحان</th>
                  </tr>
              </thead>
              <tfoot>
                  <tr>
                    <th>اسم المعلم</th>
                    <th>الماده</th>
                    <th>الصف</th>
                    <th>الفصل</th>
                    <th>الباب</th>
                    <th>طلاب فائقين \ عام</th>
                    <th>الدرجة</th>
                    <th>عرض الامتحان</th>
                  </tr>
              </tfoot>
              <tbody>
                  ${e_rows}
              </tbody>
          </table>
      `;
    exams_table.innerHTML = exams_data;
    // Call the dataTables jQuery plugin
    run_table("#exams_table");
  })
  .catch(e => {
    console.log("fetch error : ", e);
    exams_data =
      `
        <table class="table table-bordered" id="exams_table" width="100%" cellspacing="0">
            <thead>
                <tr>
                  <th>اسم المعلم</th>
                  <th>الماده</th>
                  <th>الصف</th>
                  <th>الفصل</th>
                  <th>الباب</th>
                  <th>طلاب فائقين \ عام</th>
                  <th>الدرجة</th>
                  <th>عرض الامتحان</th>
                </tr>
            </thead>
            <tfoot>
                <tr>
                  <th>اسم المعلم</th>
                  <th>الماده</th>
                  <th>الصف</th>
                  <th>الفصل</th>
                  <th>الباب</th>
                  <th>طلاب فائقين \ عام</th>
                  <th>الدرجة</th>
                  <th>عرض الامتحان</th>
                </tr>
            </tfoot>
            <tbody>
                ${e_rows}
            </tbody>
        </table>
    `;
    exams_table.innerHTML = exams_data;
    // Call the dataTables jQuery plugin
    run_table("#exams_table");
  });