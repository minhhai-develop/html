$(() => {
    $('.j-editor').each(function () {
        const height = $(this).data('height') || 200;
        $(this).summernote({
            height: height
        })
    })

    // $('.j-checkbox_multiple, j-checkbox_single, .j-radio').iCheck({
    //     checkboxClass: 'icheckbox_square-blue',
    //     radioClass: 'iradio_square-blue',
    //     increaseArea: '20%' // optional
    // });

    $('.j-select_single, .j-select_multiple').select2();
});
