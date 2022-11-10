export const state = () => ({
    currentUser: (process.browser)
        ? localStorage.getItem('user') !== null
            ? JSON.parse(localStorage.getItem('user'))
            : null
        : null,
})

export const getters = {
    getCurrentUser: (state) => state.currentUser,
    getIsAuthenticated: (state) => state.currentUser !== null,
}

export const mutations = {
    setCurrentUser(state, payload) {
        state.currentUser = {
            name: payload.name,
            gender: payload.gender,
            nationality: payload.nationality,
            hobbies: payload.hobbies,
            email: payload.email,
        }
        localStorage.setItem('user', JSON.stringify(payload));
        console.log(`MUTATION MESSAGE: User set - ${JSON.stringify(payload)}`);
    },
    removeCurrentUser(state) {
        state.currentUser = null;
        console.log(`MUTATION MESSAGE: User remove`);
        localStorage.removeItem('user')
    }
}

export const actions = {
    login({ commit }, payload) {
        commit('setCurrentUser', payload);
    },
    logout({ commit }) {
        commit('removeCurrentUser');
    }
}