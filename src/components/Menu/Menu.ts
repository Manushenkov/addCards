import "./style.scss";

const Menu = () => {
  const menu = document.createElement('div')
  menu.className = 'menu'

  menu.innerHTML = `
      <label class="menu__label" for="title">Наименование товара</label>
      <input class="menu__input" id="title" placeholder="Введите наименование товара">
      <label class="menu__label" for="description">Описание товара</label>
      <textarea class="menu__input" id="description" placeholder="Введите описание товара"></textarea>
      <label class="menu__label" for="imageUrl">Ссылка на изображение товара</label>
      <input class="menu__input" id="imageUrl" placeholder="Введите ссылку">
      <label class="menu__label" for="price">Цена товара</label>
      <input class="menu__input" id="price" placeholder="Введите цену">
      <button type="button" class="menu__button">Добавить товар</button>
  `

  return menu
}

export default Menu
