/**
 * @Script js for (Template/Project Name)
 *
 * @project     - Project Name
 * @author      - 
 * @created_by  - 
 * @created_at  - 
 * @modified_by -
 */


/**
 * ========================================================
 * this function execute when window properly loaded
 * ===========================================================
 */

$(window).on('load', function () {

    // code should be execute here

});

$(document).ready(function(){

    $(function(){
        if($('.accordian-control').length){
            $('.item-control').on('click','.accordian-title',function(e){
            e.preventDefault();
            $(this).closest('.item-control').siblings().removeClass('open').find('.drop-item').slideUp();
            $(this).closest('.item-control').siblings().find('.ni').addClass('ni-plus').removeClass('ni-minus');

            $(this).closest('.item-control').toggleClass('open').find('.drop-item').slideToggle();
            $(this).find('.ni').toggleClass('ni-plus ni-minus');
            })
        }
    })
    
})

/**
 * ========================================================
 * this function execute when DOM element ready 
 * ===========================================================
 */



