const getInitialLang = () => {
    const savedLang = localStorage.getItem("lang");
    return savedLang ? savedLang : "eng";
};

const getInitialDarkMode = () => {
    const savedDarkMode = localStorage.getItem("darkMode");
    return savedDarkMode === "true";
};

const initialState = {
    lang: getInitialLang(),
    darkMode: getInitialDarkMode(),
};

export default function settingsReducer(state = initialState, action) {
    switch (action.type) {
        case "SET_LANG":
            localStorage.setItem("lang", action.payload);
            return {
                ...state,
                lang: action.payload
            };

        case "SET_DARKMODE":
            localStorage.setItem("darkMode", action.payload);
            return {
                ...state,
                darkMode: action.payload
            };

        default:
            return state;
    }
}