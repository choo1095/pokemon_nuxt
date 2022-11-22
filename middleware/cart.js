export default function (context) {
    if (process.browser) {
        let cartItems = JSON.parse(localStorage.getItem('cartItems'))
        if (cartItems !== null) {
            context.store.dispatch('cart/setCartItems', cartItems)
        }
    }
}