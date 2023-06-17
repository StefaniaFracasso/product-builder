const initialState = {
    selectedAccessories: [],
}

const SelectAccessories = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ACCESSORY':
            return {
                ...state,
                selectedAccessories: [...state.selectedAccessories,action.payload]
            }
        case 'DELETE_ACCESSORY':
            return {
                ...state,
                selectedAccessories: state.selectedAccessories.filter((accessory) => accessory.id !== action.payload.id)
            }
            default: return state
}
}

export default SelectAccessories