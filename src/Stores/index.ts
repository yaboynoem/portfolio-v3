import logger from "redux-logger"

import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import appReducer from "./App/Slices"

const rootReducer = combineReducers({
    app: appReducer.reducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(logger)
    },
    devTools: process.env.NODE_ENV === "production",
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
