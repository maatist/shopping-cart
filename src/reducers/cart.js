
export const cartInitialState = JSON.parse(localStorage.getItem('cart')) || []

export const CART_ACTION_TYPES = {
    ADD_TO_CART: 'ADD_TO_CART',
    REMOVE_FROM_CART: 'REMOVE_FROM_CART',
    CLEAR_CART: 'CLEAR_CART'
}

export const updateLocalStorage = (state) => {
    window.localStorage.setItem('cart', JSON.stringify(state))
    
}
export const cartReducer = (state, action) => {
    const {type: actionType, payload: actionPayload} = action
    

    switch (actionType) {
        case CART_ACTION_TYPES.ADD_TO_CART:
            const productCartIndex = state.findIndex(item => item.id === actionPayload.id)
            if (productCartIndex >= 0) {
                const newCart = structuredClone(state)
                newCart[productCartIndex].quantity++
                updateLocalStorage(newCart)
                return newCart
            }
            const newState = [
                ...state,
                {
                    ...actionPayload,
                    quantity: 1
                }
            ]
            updateLocalStorage(newState)
            return newState
        case CART_ACTION_TYPES.REMOVE_FROM_CART:     
            const removeState = state.filter(item => item.id !== actionPayload.id)
            updateLocalStorage(removeState)
        case CART_ACTION_TYPES.CLEAR_CART:
            updateLocalStorage(cartInitialState)
            return initialState
        default:
            updateLocalStorage(state)
            return state
    }
}