let navicon = document.querySelector('.navicon')

navicon.addEventListener('click', function(){
    console.log('test')
    let line = document.querySelector('.line')
    line.classList.toggle('lhide')

    let linex1 = document.querySelector('.linex1')
    linex1.classList.toggle('linex1a')

    let linex2 = document.querySelector('.linex2')
    linex2.classList.toggle('linex2a')
})