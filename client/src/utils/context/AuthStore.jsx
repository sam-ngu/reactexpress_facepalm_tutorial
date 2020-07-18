import React from "react";

const USER_ACTIONS = {
    SET_USER: "set-user",
};

const userReducer = (user, action) => {
    switch (action.type) {
        case USER_ACTIONS.SET_USER:
            return action.payload;
        default:
            break;
    }
};

export default {
    items: [
        {
            name: "user",
            state: {},
            reducer: userReducer,
        },
    ],
};
