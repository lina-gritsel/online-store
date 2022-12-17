import Home from '../pages/Home'
import CatalogPage from '../pages/CatalogPage'
import Product from '../pages/ProductPage'

export interface Component {
  render: () => Promise<string>
  afterRender: () => Promise<void>
}

export type Routres = Record<string, Component>

const ROUTES: Routres = {
  '/': Home,
  '/catalog': CatalogPage,
  '/product/:id': Product,
}

export default ROUTES