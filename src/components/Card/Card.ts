import "./style.scss";

const defaultImageUrl = 'https://www.belanta.vet/vet-blog/wp-content/uploads/2019/09/1-6.jpg'

const Card = (title: string, description: string, price: string, imageUrl?: string): HTMLDivElement => {
  if (!imageUrl) {
    imageUrl = defaultImageUrl
  }

  const card = document.createElement('div')
  card.className = 'card'

  const imageBlock = document.createElement('img')
  imageBlock.className = 'card__image'

  const titleBlock = document.createElement('div')
  titleBlock.className = 'card__title'

  const descriptionBlock = document.createElement('div')
  descriptionBlock.className = 'card__description'

  const priceBlock = document.createElement('div')
  priceBlock.className = 'card__price'


  imageBlock.src = imageUrl

  titleBlock.innerText = title
  descriptionBlock.innerText = description
  priceBlock.innerText = price + ' руб.'

  card.append(imageBlock)
  card.append(titleBlock)
  card.append(descriptionBlock)
  card.append(priceBlock)

  return card
}

export default Card
