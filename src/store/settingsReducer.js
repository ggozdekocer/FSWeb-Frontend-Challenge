const initialState = {
    lang: "eng",
    darkMode: false
};

export default function settingsReducer(state = initialState, action) {
    switch (action.type) {
        case "SET_LANG":
            return {
                ...state,
                lang: action.payload
            };

        case "SET_DARKMODE":
            return {
                ...state,
                darkMode: action.payload
            };

        default:
            return state;
    }
}