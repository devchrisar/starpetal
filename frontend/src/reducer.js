export const initialState = {
    basket: []
}

export const actionTypes = {
    ADD_TO_BASKET: "ADD_TO_BASKET",
    REMOVE_ITEM: "REMOVE_ITEM",
    CLEAR_CART: "CLEAR_CART",
    INCREMENT: "INCREMENT",
    DECREMENT: "DECREMENT"
}

export const getTotalBasket = (basket) => {
   return  basket?.reduce((amount,item) => item.price + amount, 0)
}

const reducer = (state,action) => {
    switch(action.type) {
        case "ADD_TO_BASKET":
        return {
            ...state, 
            basket: [...state.basket, action.item]
        }
        case "REMOVE_ITEM":
            const index = state.basket.findIndex((basketItem => basketItem.id === action.id))
            let newBasket = [...state.basket]
            if (index >= 0) {
                newBasket.splice(index,1)
            } else {
                console.log("Cant remove product")
            }
            return {
                ...state,
                basket: newBasket,
            }
        case "CLEAR_CART":
            return {
                ...state,
                basket: [],
            }
        case "INCREMENT":
            const updateCart = state.basket.map((item)  => {
                if (item.id === action.payload) {
                    return {...item, quantity: item.quantity + 1};
                }
                return item;
            })
            return { ...state, basket: updateCart}
        case "DECREMENT":
            const outdateCart = state.basket.map((item)  => {
                if (item.id === action.payload) {
                    return {...item, quantity: item.quantity - 1};
                }
                return item;
            }).filter((item) => item.quantity !== 0)
            return { ...state, basket: outdateCart}
        
        
        default: return state
    }    
}

export default reducer