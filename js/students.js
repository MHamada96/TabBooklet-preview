// select the html element 
let students_table = document.getElementsByClassName("students_table")[0];


// call the API, currently the data is local data
fetch('json/students.json')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        let s_rows_ = ``;
        data.forEach(student => {
            s_rows_ +=
                `
                    <tr>
                        <td>${student.arabic_name}</td>
                        <td>${student.grade}</td>
                        <td>
                            <button type="button" class="btn btn-sm btn-primary">تعديل</button>
                            <button type="button" class="btn btn-sm btn-danger">حذف</button>
                        </td>
                    </tr>
                `
        });
        students_data =
            `
                <table class="table table-bordered" id="studentsTable" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <th>اسم الطالب</th>
                            <th>الصف</th>
                            <th>تعديل/حذف</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th>اسم الطالب</th>
                            <th>الصف</th>
                            <th>تعديل/حذف</th>
                        </tr>
                    </tfoot>
                    <tbody>
                        ${s_rows_}
                    </tbody>
                </table>
            `;

        students_table.innerHTML = students_data;
        run_table("#studentsTable");
    })
    .catch(e => {
        console.log("fetch error : ", e);

        students_data =
            `
                <table class="table table-bordered" id="studentsTable" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <th>اسم الطالب</th>
                            <th>الصف</th>
                            <th>تعديل/حذف</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th>اسم الطالب</th>
                            <th>الصف</th>
                            <th>تعديل/حذف</th>
                        </tr>
                    </tfoot>
                    <tbody>
                    </tbody>
                </table>
            `;
        students_table.innerHTML = students_data;
        run_table("#studentsTable");
    });