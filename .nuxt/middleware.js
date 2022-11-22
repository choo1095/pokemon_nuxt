const middleware = {}

middleware['cart'] = require('../middleware/cart.js')
middleware['cart'] = middleware['cart'].default || middleware['cart']

middleware['user'] = require('../middleware/user.js')
middleware['user'] = middleware['user'].default || middleware['user']

export default middleware
