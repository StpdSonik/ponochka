let sizeSelect = document.querySelector('.size_select');

sizeSelect.on("click", function(e){
    if (e.target.className.contains('size_select_btn')){

        document.querySelectorAll('.size_select_btn').forEach(el => className.remove('size_select_btn--active'));

        let size = e.target.dataset.size;

        e.currentTarget.querySelector('.size_select_selected span').textContent = size;

        e.target.className.add('size_select_btn--active');
    }
});