'use client'
import { useLocalStorage } from '@/hooks'
import { ProductInCart } from '@/types'
import { CART_KEY, toBRLcurrencyFormat } from '@/utils'
import { createContext, useContext, useMemo } from 'react'

type CartContextProviderProps = {
  children: React.ReactNode
}

type CartContextValue = {
  cart: ProductInCart[]
  addToCart: (product: ProductInCart) => void
  removeFromCart: (productId: string) => void
  clearCart: () => void
  updateProductQuantity: (productIndex: number, quantity: number) => void
  totalProductsValue?: string
  totalCart?: string
}

const initialCartContextValue: CartContextValue = {
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  updateProductQuantity: () => {},
  totalProductsValue: undefined,
  totalCart: undefined,
}

export const CartContext = createContext<CartContextValue>(
  initialCartContextValue
)

export const CartProvider: React.FC<CartContextProviderProps> = ({
  children,
}) => {
  const [cart, setCart] = useLocalStorage<ProductInCart[]>(CART_KEY, [])

  const addToCart = (product: ProductInCart) => {
    const productInCartIndex = cart.findIndex(
      (cartProduct) => cartProduct.id === product.id
    )

    if (productInCartIndex !== -1) {
      const newCart = [...cart]

      newCart[productInCartIndex].quantity += 1

      setCart(newCart)

      return
    }

    setCart((prevCart) => [...prevCart, product])
  }

  const totalProductsValue = useMemo(() => {
    if (cart.length > 0) {
      const value = cart.reduce(
        (prev, next) => prev + next.price_in_cents * next.quantity,
        0
      )
      return toBRLcurrencyFormat(value)
    }
  }, [cart])

  const totalCart = useMemo(() => {
    if (cart.length > 0) {
      let value = cart.reduce(
        (prev, next) => prev + next.price_in_cents * next.quantity,
        0
      )

      const deliveryInCents = 4000

      value += deliveryInCents

      return toBRLcurrencyFormat(value)
    }
  }, [cart])

  const removeFromCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId))
  }

  const clearCart = () => {
    setCart([])
  }

  const updateProductQuantity = (productIndex: number, quantity: number) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart]
      updatedCart[productIndex] = {
        ...updatedCart[productIndex],
        quantity: quantity,
      }

      return updatedCart
    })
  }

  const cartContextValue: CartContextValue = {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    updateProductQuantity,
    totalProductsValue,
    totalCart,
  }

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = (): CartContextValue => {
  const cartContext = useContext(CartContext)

  if (!cartContext) {
    throw new Error('useCartContext must be used within a CartProvider')
  }

  return cartContext
}
