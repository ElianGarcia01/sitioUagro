import { configureStore } from "@reduxjs/toolkit"
import {EduReducer} from "./reducers/EduReducer"
import { SportsReducer } from "./reducers/SportsReducer"

const store = configureStore({
    reducer: {
        school: EduReducer,
        sports: SportsReducer
    }
})

export default store