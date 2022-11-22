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
        state.cartItems.push(payload)
        localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    setCartItems(state, payload) {
        state.cartItems = payload
    }
}

export const actions = {
    addToCart({ commit }, payload) {
        commit('setLastCartItem', payload);
    },
    setCartItems({ commit }, payload) {
        commit('setCartItems', payload);
    }
}