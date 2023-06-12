import React, { useEffect, useContext, useReducer } from 'react'
import reducer from '../reducers/cart_reducer'
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from '../actions'

//from localstorage get initial cart
const getLocalStorage = () => {
  let cart = localStorage.getItem('cart')
  if (cart === undefined) {
    console.log('///');
    return JSON.parse(cart)
  } else {
    return []
  }
}
const initialState = {
  cart: getLocalStorage(),
  total_items: 0,
  total_amount: 0,
  shipping_fee: 233,
}

const CartContext = React.createContext()

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const addToCart = (id, color, amount, product) => {
    dispatch({ type: ADD_TO_CART, payload: { id, color, amount, product } })
  }
  //remove item from current Cart
  const removeItem = (id) => {

    dispatch({type:REMOVE_CART_ITEM,payload:id})
  }

  //toggle amount if items
  const toggleAmount = (id, value) => {

    dispatch({type:TOGGLE_CART_ITEM_AMOUNT,payload:{id,value}})
  }
  const clearCart = () => {
    dispatch({type:CLEAR_CART})
  }

  //everytime a change in the cart, localstorage cart would be changed

  useEffect(() => {
    dispatch({type:COUNT_CART_TOTALS})
    localStorage.setItem('cart', JSON.stringify(state.cart))
  }, [state.cart])
  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeItem, toggleAmount, clearCart }}
    >
      {children}
    </CartContext.Provider>
  )
}
// make sure use
export const useCartContext = () => {
  return useContext(CartContext)
}
