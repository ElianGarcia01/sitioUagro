import { configureStore } from "@reduxjs/toolkit"
import {EduReducer} from "./reducers/EduReducer"

const store = configureStore({
    reducer: {
        school: EduReducer
    }
})

export default store