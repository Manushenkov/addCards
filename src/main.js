import Card from './components/Card/Card'
import Menu from './components/Menu/Menu'
import './style.scss'

const root = document.querySelector('.root')

const container =  document.createElement('div')
container.className = 'container'

const cardsContainer = document.createElement('div')
cardsContainer.className = 'cards'

root.append(container)
container.append(Menu())
container.append(cardsContainer)

// пример функции
cardsContainer.append(Card('Наименование товара','Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк','10000'))

const titleInput = document.querySelector('#title')
const descriptionInput = document.querySelector('#description')
const imageUrlInput = document.querySelector('#imageUrl')
const priceInput = document.querySelector('#price')
const addButton = document.querySelector('.menu__button')

addButton.addEventListener('click', () => {
	const cardToAdd = Card(titleInput.value, descriptionInput.value, priceInput.value, imageUrlInput.value)

	cardsContainer.append(cardToAdd)
})
