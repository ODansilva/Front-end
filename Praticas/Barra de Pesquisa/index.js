const botttonSearch = document.querySelector('.logo-search')
const search = document.querySelector('#search')

botttonSearch.addEventListener('click',() => {
    search.classList.toggle('expand')
})

const botttonclear = document.querySelector('.clear')
botttonclear.addEventListener('click',() => {
    document.getElementById('search').value = ''
})

