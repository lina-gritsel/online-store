import styles from './Cart.module.scss'

export const clearAllValues = () => {
  const totalAmount = document.getElementById('amount') as HTMLParagraphElement
  const addPromoRS = document.getElementById('addPromoRS') as HTMLButtonElement
  const totalPrice = document.getElementById('total') as HTMLParagraphElement
  const codesContainer = document.getElementById('codes') as HTMLDivElement
  const pageNum = document.getElementById('page') as HTMLParagraphElement
  const appliedEPM = document.getElementById('dropEPM') as HTMLDivElement
  const appliedRS = document.getElementById('dropRS') as HTMLDivElement

  
  const cartContainer = document.getElementById(
    'cartContainer',
  ) as HTMLDivElement
  const addPromoEPM = document.getElementById(
    'addPromoEPM',
  ) as HTMLButtonElement
  const headerCart = document.getElementById(
    'cartLength',
  ) as HTMLParagraphElement
  const headerSum = document.getElementById(
    'cartSum',
  ) as HTMLParagraphElement
  const promoTotal = document.getElementById(
    'promoTotal',
  ) as HTMLParagraphElement

  cartContainer.innerHTML = ''
  cartContainer.insertAdjacentHTML('beforeend', `
  <p class=${styles.text}>Cart is empty</p>
  `)
  totalPrice.innerHTML = 'Total: 0$'
  totalPrice.style.textDecoration = 'none'
  totalAmount.innerHTML = 'Products: 0'
  headerCart.innerHTML = '0'
  headerSum.innerHTML = 'Cart total: 0$'
  codesContainer.style.display = 'none'
  promoTotal.style.display = 'none'
  appliedEPM.style.display = 'none'
  appliedRS.style.display = 'none'
  addPromoRS.style.display = 'none'
  addPromoEPM.style.display = 'none'
}
