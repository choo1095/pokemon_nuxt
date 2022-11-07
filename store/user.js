export const state = () => ({
    currentUser: (process.browser)
        ? localStorage.getItem('user') !== null
            ? JSON.parse(localStorage.getItem('user'))
            : null
        : null,
})

export const getters = {
    getCurrentUser(state) {
        return state.currentUser;
    }
}

export const mutations = {
    setCurrentUser(state, payload) {
        state.currentUser = {
            name: payload.name,
            gender: payload.gender,
            nationality: payload.nationality,
            hobbies: payload.hobbies,
        }
    },
    removeCurrentUser(state) {
        state.currentUser = null;
    }
}

export const actions = {
    async login({ commit }, payload) {
        commit('setCurrentUser', payload);
        localStorage.setItem('user', JSON.stringify(payload));
    },
    async logout({ commit }) {
        commit('removeCurrentUser');
        localStorage.removeItem('user')
    }
}