import styles from './CatalogCardList.module.scss'

export const resetFilters = () => {
  const resetBtn = document.getElementById('resetBtn') as HTMLButtonElement
  const globalSortBtn = document.getElementById('globalSortBtn') as HTMLElement
  const allButtonsElement = document.querySelectorAll('.btnFilter')
  const minPrice = document.getElementById('startPrice') as HTMLInputElement
  const maxPrice = document.getElementById('endPrice') as HTMLInputElement
  const minStock = document.getElementById('minStock') as HTMLInputElement
  const maxStock = document.getElementById('maxStock') as HTMLInputElement
  const minStockValue = document.getElementById('minStockValue') as HTMLElement
  const maxStockValue = document.getElementById('maxStockValue') as HTMLElement
  const inputEl = document.getElementById('search') as HTMLInputElement

  const minPriceNumber = document.getElementById(
    'minPriceNumber',
  ) as HTMLElement
  const maxPriceNumber = document.getElementById(
    'maxPriceNumber',
  ) as HTMLElement

  const cards = document.getElementById('cardsContainer') as HTMLElement

  resetBtn.addEventListener('click', async () => {
    allButtonsElement.forEach((btn: Element) => {
      (btn as HTMLInputElement).checked = false
    })

    const cardElement = [...cards.children]

    cardElement.forEach((product) => {
      product.classList.remove('hidden')
    })

    cards?.classList.remove(styles.newOrder)
    cards?.classList.add(styles.content)

    cardElement.forEach((card: Element) => {
      card.classList.remove(styles.newViewCard)
    })

    cardElement
      .sort(() => Math.random() - 0.5)
      .forEach((node) => cards.append(node))

    inputEl.value = ''

    minPrice.value = '0'
    maxPrice.value = '1500'
    minStock.value = '0'
    maxStock.value = '100'

    minPriceNumber.innerHTML = '0$'
    maxPriceNumber.innerHTML = '1500$'
    minStockValue.innerHTML = `0`
    maxStockValue.innerHTML = `100`

    globalSortBtn.innerHTML = ''
    globalSortBtn.innerHTML = 'Order options'

    window.localStorage.removeItem('selectedCategory')
    window.localStorage.removeItem('selectedBrands')
    window.localStorage.removeItem('storageMinPrice')
    window.localStorage.removeItem('storageMaxPrice')
    window.localStorage.removeItem('minStock')
    window.localStorage.removeItem('maxStock')
    window.localStorage.removeItem('searchValue')
    window.localStorage.removeItem('grid')
    window.localStorage.removeItem('sortBy')
    window.localStorage.removeItem('sortOrder')
  })
}
