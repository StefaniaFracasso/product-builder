const initialState = {
    selectedColor: [],
}

const SelectColor = (state = initialState, action) => {
    switch (action.type) {
        case 'SELECT_COLOR':
            return {
                ...state,
                selectedColor: action.payload
            }
            default: return state
}
}

export default SelectColor