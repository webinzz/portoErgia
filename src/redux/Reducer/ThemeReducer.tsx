const getInitialTheme = () => {
    const storedTheme = localStorage.getItem("isDark");
    return storedTheme ? JSON.parse(storedTheme) : false;
};

const initialTheme = {
    isDark : getInitialTheme()
}

 const ThemeReducer = (state = initialTheme, action: {type: string}) => {
    switch (action.type) {
        case "TOGGLE_DARK" :
            { const newTheme = !state.isDark;
            localStorage.setItem("isDark", JSON.stringify(newTheme));
            return {...state, isDark : newTheme} } 
        default:
            return state;
    }
}
export default ThemeReducer;