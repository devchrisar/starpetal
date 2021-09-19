export const initialState = {
    basket: [],
    shippingData: {},
    paymentMessage: "",
}

export const actionTypes = {
    ADD_TO_BASKET: "ADD_TO_BASKET",
    REMOVE_ITEM: "REMOVE_ITEM",
    EMPTY_BASKET: "EMPTY_BASKET",
    CLEAR_CART: "CLEAR_CART",
    INCREMENT: "INCREMENT",
    DECREMENT: "DECREMENT",
    SET_SHIPPINGDATA: "SET_SHIPPINGDATA",
    SET_PAYMENT_MESSAGE: "SET_PAYMENT_MESSAGE",
}

export const getTotalBasket = (basket) => {
    return  basket?.reduce((amount,item) => item.price * item.quantity + amount, 0)
}
export const getTotalQty = (basket) => {
    return  basket?.reduce((amount,item) => item.quantity + amount, 0)
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
            };
        case "EMPTY_BASKET":
            return {
                ...state,
                basket: action.basket,
            };    
        case "CLEAR_CART":
            return {
                ...state,
                basket: [],
            };
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
        case "SET_SHIPPINGDATA":
            return { 
                ...state,
                shippingData: action.shippingData, 
            };
        case "SET_PAYMENT_MESSAGE":
            return { 
                ...state,
                paymentMessage: action.paymentMessage,  
            };


        default: return state;
    }    
}

export default reducer