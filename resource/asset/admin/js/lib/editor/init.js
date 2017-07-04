$(() => {
    $('.editor').each(function () {
        const height = $(this).data('height') || 200;
        $(this).summernote({
            height: height
        })
    })

    $('input').iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue',
        increaseArea: '20%' // optional
    });
});
