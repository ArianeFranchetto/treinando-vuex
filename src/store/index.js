import { createStore } from 'vuex';


export default createStore ({
    state: {
        counter: 0
    },
    mutations: {
        decrement: state => state.counter--,
        increment: (state, num) => state.counter = num + 2
    },
    getters: {
        counter: state => state.counter
    },
    actions: {
        decrement: ({commit}) => commit('decrement'),
        increment: ({commit}) => {
            setTimeout(() => {
                commit('increment', 5)
            }, 2000)
        }
    }
})