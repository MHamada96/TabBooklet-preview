//this variable will has the data back from the database or an empty table
let teachers_data;

// select the html element 
let teachers_table = document.getElementsByClassName("teachers_table")[0];


// call the API, currently the data is local data
fetch('json/teachers.json')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        let t_rows_ = ``;
        data.forEach(teacher => {
            t_rows_ +=
                `
                    <tr>
                        <td>${teacher.arabic_name}</td>
                        <td>${teacher.students}</td>
                        <td>${teacher.balance}</td>
                        <td>
                            <button type="button" class="btn btn-sm btn-primary">تعديل</button>
                            <button type="button" class="btn btn-sm btn-danger">حذف</button>
                        </td>
                    </tr>
                `
        });
        teachers_data =
            `
                <table class="table table-bordered" id="teachersTable" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                        <th>اسم المعلم</th>
                        <th>عدد الطلاب</th>
                        <th>الرصيد</th>
                        <th>تعديل/حذف</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                        <th>اسم المعلم</th>
                        <th>عدد الطلاب</th>
                        <th>الرصيد</th>
                        <th>تعديل/حذف</th>
                        </tr>
                    </tfoot>
                    <tbody>
                        ${t_rows_}
                    </tbody>
                </table>
            `;

        teachers_table.innerHTML = teachers_data;
        run_table("#teachersTable");
    })
    .catch(e => {
        console.log("fetch error : ", e);

        console.log(teachers_data);
        teachers_data =
            `
                <table class="table table-bordered" id="teachersTable" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <th>اسم المعلم</th>
                            <th>عدد الطلاب</th>
                            <th>الرصيد</th>
                            <th>تعديل/حذف</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th>اسم المعلم</th>
                            <th>عدد الطلاب</th>
                            <th>الرصيد</th>
                            <th>تعديل/حذف</th>
                        </tr>
                    </tfoot>
                    <tbody>
                    </tbody>
                </table>
            `;
        teachers_table.innerHTML = teachers_data;
        run_table("#teachersTable");
    });