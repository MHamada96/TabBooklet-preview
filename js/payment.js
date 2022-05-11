let payments_data;
let payments_table = document.getElementsByClassName("payments_table")[0];

fetch('json/payments.json')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        let p_rows = ``;
        data.forEach(p => {
            p_rows +=
                `
                    <tr>
                        <td>${p.amount} جنية</td>
                        <td>${p.by}</td>
                        <td>${p.at}</td>
                    </tr>
                `
        });
        payments_data =
            `
                <table class="table table-bordered" id="payments_table" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <td>المبلغ</td>
                            <td>تم الدفع بواسطة</td>
                            <td>تاريخ العملية</td>
                        </tr>
                    </thead>
                    <tfoot>
                    <tr>
                        <td>المبلغ</td>
                        <td>تم الدفع بواسطة</td>
                        <td>تاريخ العملية</td>
                    </tr>
                    </tfoot>

                    <tbody>
                        ${p_rows}
                    </tbody>
                </table>
            `;
        payments_table.innerHTML = payments_data;
        // Call the dataTables jQuery plugin
        run_table('#payments_table');

    })
    .catch(e => {
        console.log("fetch error : ", e);

        payments_data =
            `
                <table class="table table-bordered" id="payments_table" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <td>المبلغ</td>
                            <td>تم الدفع بواسطة</td>
                            <td>تاريخ العملية</td>
                        </tr>
                    </thead>
                    <tfoot>
                    <tr>
                        <td>المبلغ</td>
                        <td>تم الدفع بواسطة</td>
                        <td>تاريخ العملية</td>
                    </tr>
                    </tfoot>

                    <tbody>
                    </tbody>
                </table>
            `;
        payments_table.innerHTML = payments_data;
        // Call the dataTables jQuery plugin
        run_table('#payments_table');
    });