const AUTH_ACTIONS = {
    SET_USER: "set-user",
};

const auth = {
    currentUser: {}
}

const authReducer = (auth, action) => {
    switch (action.type) {
        case AUTH_ACTIONS.SET_USER:
            return {
                ...auth, // unpacking other auth properties (in case we want to add something new in the future)
                currentUser: action.payload
            }
        default:
            break;
    }
};


export {
    authReducer,
    auth,
};
