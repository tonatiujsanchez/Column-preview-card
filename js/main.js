const columns = document.querySelectorAll('.column');
let idxColumnActive = 1;

columns.forEach( (column, index) =>{
    column.addEventListener('click', ()=>{
        toggleClassActive(index);
    })
});

function toggleClassActive( index ) {
    columns[idxColumnActive].classList.remove('active');
    columns[index].classList.add('active');
    idxColumnActive = index;
}
