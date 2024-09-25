
$('.delete').on('click', function (e) {
    e.preventDefault();
    var url_delete = $(this).attr('href');
    var tr = $(this).closest('tr');
    $.confirm({
        title: 'Hapus Data!',
        content: 'Anda Yakin ?',
        icon: 'glyphicon glyphicon-question-sign',
        theme: 'modern',
        closeIcon: true,
        animation: 'scale',
        type: 'orange',
        buttons: {
            close: function () {

            },
            delete: {
                text: 'Ok',
                btnClass: 'btn-red',
                action: function(){
                    $.ajax({
                        type:'GET',
                        url:url_delete,
                        dataType:'json',
                        success:function(data){
                            console.log(data);
                            if(data.success == true){
                                tr.remove();
                                $.alert('Data Berhasil di hapus');
                            }
                        }
                    });
                }
            }
        }
    });
});
