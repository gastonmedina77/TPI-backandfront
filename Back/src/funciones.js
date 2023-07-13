const id = document.querySelector('#id')
const nombre = document.querySelector('#nombre')
const stock = document.querySelector('#stock')
const precio = document.querySelector('#precio')
const btnAgregar = document.querySelector('#btn_agregar')

btnAgregar.addEventListener('click', ()=>{
    window.location.href = `agregar/${id.value}/${nombre.value}/${stock.value}/${precio.value}`
})