
$(document).ready(function () {
    "use strict";
    // открывает\сворачивает фильтр
    var catalogFilterTop = $('.catalog_filter_top');
    catalogFilterTop.on('click', function () {
        $(this).closest('.catalog_filter').toggleClass('catalog_filter--open');   
    });


    //смена количества столбцов 
    var catalogCulumnsList = $('.catalog_columns_list');
    var catalogGridContent = $('.catalog_grid_content');
    // var catalogGridContent = document.querySelector('.catalog_grid_content');
    catalogCulumnsList.on('click', function (e) {
        if (e.target.classList.contains('.catalog_columns_btn') || e.target.closest('.catalog_columns_item')) {

            // let gridColumns = document.dataset.querySelector();
            let $columnsBtn = document.querySelectorAll('.catalog_columns_btn');

            $columnsBtn.forEach(el => {
                el.classList.remove('catalog_columns_btn--current');
            });

            e.target.classList.add('catalog_columns_btn--current');
            let columns = e.target.dataset.columns;
            // catalogGridContent.dataset.gridColumns = columns;
            //хз почему но не  не робит)))))))
            console.log(catalogGridContent.dataset.gridColumns);
        }
    });


    var catalogFilterItems = $('.catalog_filter_items');
    var catalogChoice = $('.catalog_choice');
    
    var customCheckbox = document.querySelector('.custom_checkbox');
    let input = document.querySelector('input');
    input.addEventListener('change',  () => {
        
        console.log(document.querySelector('input'));
        let checked = document.querySelector('input').checked;
        if (checked) {
            customCheckbox.add('custom_checkbox--active');


        } else {
            customCheckbox.remove('custom_checkbox--active');
        }
        console.log(customCheckbox);

        let activeCheckbox = document.querySelectorAll('.custom_checkbox--active');

        if (activeCheckbox.length > 0) {
            document.getElementsByClassName('catalog_choice').style.display = 'block';
        } else {
            document.getElementsByClassName('catalog_choice').style.display = 'none';
        }
    });

});

var customSelect = $('.custom_select');

customSelect.on('click', function(e) {
    $(this).toggleClass('custom_select--open')

    if (e.target.classList.contains('.custom_select_item')){
        let text = e.target.textContent;
        console.log(text);
        e.currentTarget.querySelector('.custom_select_top').textContent = text;
    }
});





    // catalogFilterTop.on('click', function () {
    //     $(this).closest('.catalog_filter').toggleClass('catalog_filter--open');
// });

