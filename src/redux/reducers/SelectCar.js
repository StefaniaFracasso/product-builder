const initialState = {
    selectedCar: null,
}

const SelectCar = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_SELECTION':
            return {
                ...state,
                selectedCar: action.payload
            }
            default: return state
}
}

export default SelectCar