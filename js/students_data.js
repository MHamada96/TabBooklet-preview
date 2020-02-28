let students_data =
  `
<table class="table table-bordered" id="studentsTable" width="100%" cellspacing="0">
  <thead>
    <tr>
      <th>اسم الطالب</th>
      <th>الصف الدراسى</th>
      <th>تعديل/حذف</th>
    </tr>
  </thead>
  <tfoot>
    <tr>
    <th>اسم الطالب</th>
    <th>الصف الدراسى</th>
    <th>تعديل/حذف</th>
    </tr>
  </tfoot>
  <tbody>
    <tr>
      <td>صلاح عادل</td>
      <td>الثانى الثانوى</td>
      <td>
        <button type="button" class="btn btn-sm btn-primary">تعديل</button>
        <button type="button" class="btn btn-sm btn-danger">حذف</button>
      </td>
    </tr>
    <tr>
      <td>فوزى عادل</td>
      <td>الاول الثانوى</td>
      <td>
        <button type="button" class="btn btn-sm btn-primary">تعديل</button>
        <button type="button" class="btn btn-sm btn-danger">حذف</button>
      </td>
    </tr>
    <tr>
      <td>ميار عادل</td>
      <td>الاول الثانوى</td>
      <td>
        <button type="button" class="btn btn-sm btn-primary">تعديل</button>
        <button type="button" class="btn btn-sm btn-danger">حذف</button>
      </td>
    </tr>
    <tr>
      <td>غيث عادل</td>
      <td>الاول الثانوى</td>
      <td>
        <button type="button" class="btn btn-sm btn-primary">تعديل</button>
        <button type="button" class="btn btn-sm btn-danger">حذف</button>
      </td>
    </tr>
    <tr>
      <td>صبرى عادل</td>
      <td>الاول الثانوى</td>
      <td>
        <button type="button" class="btn btn-sm btn-primary">تعديل</button>
        <button type="button" class="btn btn-sm btn-danger">حذف</button>
      </td>
    </tr>
    <tr>
      <td>راوى عادل</td>
      <td>الاول الثانوى</td>
      <td>
        <button type="button" class="btn btn-sm btn-primary">تعديل</button>
        <button type="button" class="btn btn-sm btn-danger">حذف</button>
      </td>
    </tr>
    <tr>
      <td>فايز عادل</td>
      <td>الاول الثانوى</td>
      <td>
        <button type="button" class="btn btn-sm btn-primary">تعديل</button>
        <button type="button" class="btn btn-sm btn-danger">حذف</button>
      </td>
    </tr>
    <tr>
      <td>كمال عادل</td>
      <td>الاول الثانوى</td>
      <td>
        <button type="button" class="btn btn-sm btn-primary">تعديل</button>
        <button type="button" class="btn btn-sm btn-danger">حذف</button>
      </td>
    </tr>
    <tr>
      <td>فرويز عادل</td>
      <td>الاول الثانوى</td>
      <td>
        <button type="button" class="btn btn-sm btn-primary">تعديل</button>
        <button type="button" class="btn btn-sm btn-danger">حذف</button>
      </td>
    </tr>
    <tr>
      <td>كمال عادل</td>
      <td>الاول الثانوى</td>
      <td>
        <button type="button" class="btn btn-sm btn-primary">تعديل</button>
        <button type="button" class="btn btn-sm btn-danger">حذف</button>
      </td>
    </tr>
    <tr>
      <td>مبروك عادل</td>
      <td>الاول الثانوى</td>
      <td>
        <button type="button" class="btn btn-sm btn-primary">تعديل</button>
        <button type="button" class="btn btn-sm btn-danger">حذف</button>
      </td>
    </tr>
    <tr>
      <td>فايز عادل</td>
      <td>الاول الثانوى</td>
      <td>
        <button type="button" class="btn btn-sm btn-primary">تعديل</button>
        <button type="button" class="btn btn-sm btn-danger">حذف</button>
      </td>
    </tr>
    <tr>
      <td>صابر عادل</td>
      <td>الاول الثانوى</td>
      <td>
        <button type="button" class="btn btn-sm btn-primary">تعديل</button>
        <button type="button" class="btn btn-sm btn-danger">حذف</button>
      </td>
    </tr>
    <tr>
      <td>اسامه عادل</td>
      <td>الاول الثانوى</td>
      <td>
        <button type="button" class="btn btn-sm btn-primary">تعديل</button>
        <button type="button" class="btn btn-sm btn-danger">حذف</button>
      </td>
    </tr>
    <tr>
      <td>على عادل</td>
      <td>الاول الثانوى</td>
      <td>
        <button type="button" class="btn btn-sm btn-primary">تعديل</button>
        <button type="button" class="btn btn-sm btn-danger">حذف</button>
      </td>
    </tr>
    <tr>
      <td>يوسف عادل</td>
      <td>الاول الثانوى</td>
      <td>
        <button type="button" class="btn btn-sm btn-primary">تعديل</button>
        <button type="button" class="btn btn-sm btn-danger">حذف</button>
      </td>
    </tr>
    <tr>
      <td>مياده عادل</td>
      <td>الاول الثانوى</td>
      <td>
        <button type="button" class="btn btn-sm btn-primary">تعديل</button>
        <button type="button" class="btn btn-sm btn-danger">حذف</button>
      </td>
    </tr>
    <tr>
      <td>نور عادل</td>
      <td>الاول الثانوى</td>
      <td>
        <button type="button" class="btn btn-sm btn-primary">تعديل</button>
        <button type="button" class="btn btn-sm btn-danger">حذف</button>
      </td>
    </tr>
    <tr>
      <td>اسماء عادل</td>
      <td>الاول الثانوى</td>
      <td>
        <button type="button" class="btn btn-sm btn-primary">تعديل</button>
        <button type="button" class="btn btn-sm btn-danger">حذف</button>
      </td>
    </tr>
    <tr>
      <td>كريم عادل</td>
      <td>الاول الثانوى</td>
      <td>
        <button type="button" class="btn btn-sm btn-primary">تعديل</button>
        <button type="button" class="btn btn-sm btn-danger">حذف</button>
      </td>
    </tr>
  </tbody>
</table>
`;