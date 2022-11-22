export const state = () => ({
    cartItems: (process.browser)
        ? localStorage.getItem('cartItems') !== null
            ? JSON.parse(localStorage.getItem('cartItems'))
            : []
        : [],
})

export const getters = {
    getCartItems: (state) => state.cartItems,
    getCartQuantity: (state) => state.cartItems.length,
}

export const mutations = {
    setLastCartItem(state, payload) {
        const newCartItem = {
            ...payload, 
            key: state.cartItems.length !== 0
                ? state.cartItems[state.cartItems.length - 1].key + 1
                : 0
        };
        state.cartItems.push(newCartItem)
        localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    removeFromCart(state, index) {
        state.cartItems.splice(index, 1);
        localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    setCartItems(state, payload) {
        state.cartItems = payload;
    },
    setCartItemQuantity(state, payload) {
        state.cartItems[payload.index].quantity = payload.quantity;
        localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    }
}

export const actions = {
    addToCart({ commit }, payload) {
        commit('setLastCartItem', payload);
    },
    setCartItems({ commit }, payload) {
        commit('setCartItems', payload);
    },
    removeFromCart({ commit }, payload) {
        commit('removeFromCart', payload)
    },
    setCartItemQuantity({ commit }, payload) {
        commit('setCartItemQuantity', payload);
    }
}