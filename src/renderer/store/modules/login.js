const state = {
    steps: true,
    login: true,
};

const actions = {
    toggleSteps: function ({state, commit}) {
        // state.steps = true;
        state.steps = !state.steps;
    },

    toggleLogin({state, commit}){
        state.login = !state.login;
    }
};

export default ({
    state,
    actions
});
