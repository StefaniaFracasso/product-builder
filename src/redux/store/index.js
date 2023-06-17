import { combineReducers, configureStore } from "@reduxjs/toolkit";
import SelectCar from "../reducers/SelectCar";
import SelectSection from "../reducers/SelectSection";
import SelectColor from "../reducers/SelectColor";
import SelectAccessories from "../reducers/SelectAccessories";

const store = configureStore({
    reducer: combineReducers({
        car: SelectCar,
        section: SelectSection,
        color: SelectColor,
        accessory: SelectAccessories
    })
})

export default store;