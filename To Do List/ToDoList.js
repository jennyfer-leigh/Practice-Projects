const background = document.querySelector('body')
const swatches = document.querySelectorAll('.colourSwap')

const addButton = document.getElementById('addButton')
const inputText = document.getElementById('addText')
const listContainer = document.getElementById('listContainer')



addButton.addEventListener('click', () => {
    createListItem()
    inputText.value = ''
 })

inputText.addEventListener('keyup', event =>{
    if(event.key === 'Enter') {
        createListItem()
        inputText.value = ''
    }
})

function createListItem (){
    const listItem = document.createElement('p')
    listItem.innerText = inputText.value
    listContainer.appendChild(listItem)

    listItem.addEventListener('click', ()=>
    listItem.remove())   
}

swatches[0].addEventListener('click', () =>background.style.backgroundColor = "var(--pink-background-colour)")
swatches[1].addEventListener('click', () =>background.style.backgroundColor = "var(--blue-background-colour)")
swatches[2].addEventListener('click', () =>background.style.backgroundColor = "var(--yellow-background-colour)")
swatches[3].addEventListener('click', () =>background.style.backgroundColor = "var(--purple-background-colour)")