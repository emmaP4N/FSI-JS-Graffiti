let header = document.querySelector('#page-header')
header.style.textAlign = "left"

let dogImages = document.querySelectorAll('.dog-image')
for(let i = 0; i < dogImages.length; i++){
    dogImages[i].style.borderRadius = '50px'
    dogImages[i].style.transform = 'rotate(180deg)'
}

let dogNames = document.querySelectorAll('.dog-name')
for(let n = 0; n < dogNames.length; n++){
    dogNames[n].style.textAlign = "left"
}

let footer = document.querySelector('.footer')
footer.style.color = "orange"

let dogDesc1 = document.querySelector('.dog-description1')
dogDesc1.style.color = "blue"

let dogDesc2 = document.querySelector('.dog-description2')
dogDesc2.style.color = "red"

let dogDesc3 = document.querySelector('.dog-description3')
dogDesc3.style.color = "green"
// Select some elements...