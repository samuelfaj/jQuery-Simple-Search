$.simple_search = function () {
    console.log('jQuery Simple Search: Loaded');

    $('.simple-search').each(function () {
        var input = $(this);

        $(input.data('loop')).each(function () {
            var element = $(this);
            if(element.is(':hidden') && input.is(':visible')){
                element.addClass('simple-search-hidden');
            }else{
                element.addClass('simple-search-visible');
            }
        })
    });

    $(document).off('keyup change','.simple-search');
    $(document).on('keyup change','.simple-search',function () {

        var
            input  = $(this),
            loop   = $(input.data('loop')),
            search = input.val();

        if(search.length > 1){
            loop.each(function () {
                var element = $(this);

                element.addClass('simple-search-item');

                if(element.html().toLowerCase().indexOf(search) > -1){
                    element.fadeIn('slow');
                }else{
                    element.fadeOut('fast');
                }
            });
        }else{
            $('.simple-search-item:not(.simple-search-hidden)').fadeIn('fast');
            $('.simple-search-visible').fadeIn('fast');
            $('.simple-search-hidden').fadeOut('slow');
        }
    });
};
$(function(){ $.simple_search(); });