import { Product } from './products'

export type ProductInCart = Product & { quantity: number }?

export type Cart = {
  products: ProductInCart[]
  delivery?: number
  total?: number
}
