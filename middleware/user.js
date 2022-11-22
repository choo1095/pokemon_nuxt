export default function (context) {
    if (process.browser) {
        let user = JSON.parse(localStorage.getItem('user'))
        if (user !== null) {
            context.store.dispatch('user/login', user)
        }
    }
}