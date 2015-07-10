$('#slider').cycle({
    fx: 'scrollRight',
    next: '#slider'

});

$(document).ready(
    function(){
        $("#pikame").PikaChoose({
            carousel: true,
            text: {previous:"" , next: ""},
            carouselOptions:{
                wrap:'circular'
            }
        });
    });