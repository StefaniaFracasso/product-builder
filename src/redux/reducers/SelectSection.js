const initialState = {
    selectedSection: "models",
}

const SelectSection = (state = initialState, action) => {
    switch (action.type) {
        case 'SELECT_SECTION':
            return {
                ...state,
                selectedSection: action.payload
            }
            default: return state
}
}

export default SelectSection