let questions_data;


let questions_table = document.getElementsByClassName("questions_table")[0];

fetch('json/questions.json')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        let q_rows = ``;
        data.forEach(question => {
            q_rows +=
                `
                    <tr>
                        <td>${question.subject_name}</td>
                        <td>${question.grade}</td>
                        <td>${question.chapter}</td>
                        <td>${question.sectionOfChapter}</td>
                        <td>${question.qType}</td>
                        <td>${question.sType}</td>
                        <td>${question.question}</td>
                        <td>
                            <button type="button" class="btn btn-sm btn-success col text-center">اضافة</button>
                        </td>
                    </tr>
                `
        });
        questions_data =
            `
                <table class="table table-bordered" id="questions_table" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <th>اسم المادة</th>
                            <th>الصف الدراسى</th>
                            <th>الباب</th>
                            <th>الفصل</th>
                            <th>نوع السؤال</th>
                            <th>فائقين \ عام</th>
                            <th>نص السؤال</th>
                            <th>اضافة</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th>اسم المادة</th>
                            <th>الصف الدراسى</th>
                            <th>الباب</th>
                            <th>الفصل</th>
                            <th>نوع السؤال</th>
                            <th>فائقين \ عام</th>
                            <th>نص السؤال</th>
                            <th>اضافة</th>
                        </tr>
                    </tfoot>

                    <tbody>
                        ${ q_rows}
                    </tbody>

                </table>
            `;
        questions_table.innerHTML = questions_data;
        // Call the dataTables jQuery plugin
        run_table('#questions_table');

    })
    .catch(e => {
        console.log("fetch error : ", e);

        questions_data =
            `
            <table class="table table-bordered" id="questions_table" width="100%" cellspacing="0">
                <thead>
                    <tr>
                        <th>اسم المادة</th>
                        <th>الصف الدراسى</th>
                        <th>الباب</th>
                        <th>الفصل</th>
                        <th>النوع</th>
                        <th>نص السؤال</th>
                        <th>اضافة الى الامتحان</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <th>اسم المادة</th>
                        <th>الصف الدراسى</th>
                        <th>الباب</th>
                        <th>الفصل</th>
                        <th>النوع</th>
                        <th>نص السؤال</th>
                        <th>اضافة الى الامتحان</th>
                    </tr>
                </tfoot>
              
                <tbody>
                </tbody>
            
            </table>
        `;
        questions_table.innerHTML = questions_data;
        // Call the dataTables jQuery plugin
        run_table('#questions_table');
    });