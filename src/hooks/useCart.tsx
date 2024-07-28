import { useContext } from 'react'

import { CartContext, CartContextType } from '../contexts/CartProvider'

export function useCart(): CartContextType  {
  return useContext(CartContext)
}
